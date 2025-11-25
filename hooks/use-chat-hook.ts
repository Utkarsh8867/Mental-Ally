import { useState, useRef, useCallback } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function useCustomChat(apiEndpoint: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messageIdRef = useRef(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!input.trim() || isLoading) return;

      const userMessage: Message = {
        id: `msg-${messageIdRef.current++}`,
        role: 'user',
        content: input,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        console.log("[v0] Sending chat request to:", apiEndpoint);
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...messages, userMessage],
          }),
        });

        console.log("[v0] Response status:", response.status);
        if (!response.ok) {
          throw new Error(`Failed to get response: ${response.statusText}`);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error('No response body');

        const assistantMessage: Message = {
          id: `msg-${messageIdRef.current++}`,
          role: 'assistant',
          content: '',
        };

        setMessages((prev) => [...prev, assistantMessage]);

        const decoder = new TextDecoder();
        let buffer = '';
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          
          setMessages((prev) => {
            const updated = [...prev];
            if (updated[updated.length - 1].role === 'assistant') {
              updated[updated.length - 1].content = buffer;
            }
            return updated;
          });
        }
      } catch (error) {
        console.error('[v0] Chat error:', error);
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-${messageIdRef.current++}`,
            role: 'assistant',
            content: 'Sorry, I encountered an error. Please try again.',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages, apiEndpoint]
  );

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  };
}
