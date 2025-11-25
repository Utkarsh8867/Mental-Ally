export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    const lastMessage = messages[messages.length - 1];

    const systemPrompt = `You are a compassionate mental health support AI assistant. Your role is to:
- Provide brief, focused responses (2-4 sentences max)
- Show empathy and understanding
- Ask thoughtful follow-up questions
- Focus on mental wellness, emotional support, and coping strategies
- Be warm but concise
- Never diagnose or replace professional therapy
- If someone is in crisis, encourage them to contact emergency services

Keep responses short, supportive, and conversational.`;

    let aiResponse: string;

    // Try Groq first (free and fast)
    if (GROQ_API_KEY) {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: lastMessage.content }
          ],
          max_tokens: 150,
          temperature: 0.7,
        })
      });

      if (response.ok) {
        const data = await response.json();
        aiResponse = data.choices[0].message.content;
      } else {
        throw new Error('Groq API failed');
      }
    }
    // Try Gemini
    else if (GEMINI_API_KEY) {
      const fullPrompt = `${systemPrompt}\n\nUser: ${lastMessage.content}\n\nAssistant:`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: {
              maxOutputTokens: 150,
              temperature: 0.7,
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        aiResponse = data.candidates[0].content.parts[0].text;
      } else {
        const error = await response.json();
        throw new Error(`Gemini: ${error.error?.message || 'API failed'}`);
      }
    }
    // Try OpenAI
    else if (OPENAI_API_KEY) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: lastMessage.content }
          ],
          max_tokens: 150,
          temperature: 0.7,
        })
      });

      if (response.ok) {
        const data = await response.json();
        aiResponse = data.choices[0].message.content;
      } else {
        const error = await response.json();
        throw new Error(`OpenAI: ${error.error?.message || 'API failed'}`);
      }
    } else {
      throw new Error('No API key configured. Add GROQ_API_KEY, GEMINI_API_KEY, or OPENAI_API_KEY to .env.local');
    }

    // Stream the response
    const encoder = new TextEncoder();
    let charIndex = 0;

    const stream = new ReadableStream({
      start(controller) {
        const interval = setInterval(() => {
          if (charIndex < aiResponse.length) {
            controller.enqueue(encoder.encode(aiResponse[charIndex]));
            charIndex++;
          } else {
            clearInterval(interval);
            controller.close();
          }
        }, 30);
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/event-stream' },
    });
  } catch (error: any) {
    console.error('Chat error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to generate response' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
