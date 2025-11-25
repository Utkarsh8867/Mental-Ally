# Mental Ally 🧠💚

**Peace of mind, one conversation at a time.**

Mental Ally is an AI-powered mental health support chatbot that provides compassionate, evidence-based emotional support 24/7. Built with Next.js and powered by advanced AI models, it offers a safe, judgment-free space for anyone seeking mental wellness support.

![Mental Ally Banner](https://img.shields.io/badge/Mental%20Health-Support-green) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![AI Powered](https://img.shields.io/badge/AI-Powered-blue)

## 🌟 Inspiration

Mental health support should be accessible to everyone, regardless of time, location, or financial circumstances. However, traditional therapy often comes with barriers:
- **Long waiting lists** - Sometimes weeks or months to get an appointment
- **High costs** - Therapy sessions can be expensive
- **Limited availability** - Not available 24/7 when you need it most
- **Stigma** - Fear of judgment prevents many from seeking help

I was inspired to create Mental Ally after realizing that AI could bridge this gap by providing:
- Immediate support when someone needs to talk
- A judgment-free environment
- Evidence-based conversational techniques
- Accessibility for those who can't afford traditional therapy

The goal isn't to replace professional therapy, but to provide a supportive companion that's always there when you need someone to listen.

## 🎯 What It Does

Mental Ally provides:

- **24/7 Availability**: Get support whenever you need it, day or night
- **Empathetic Conversations**: AI trained to provide compassionate, understanding responses
- **Brief, Focused Support**: Concise responses (2-4 sentences) that are easy to digest
- **Evidence-Based Approach**: Grounded in therapeutic techniques and mental health research
- **Complete Privacy**: Your conversations are confidential and secure
- **Crisis Resources**: Immediate guidance to emergency services when needed

### Key Features

✨ **Intelligent Chat Interface** - Natural, flowing conversations with AI
🎨 **Beautiful UI** - Calming design with animated gradient backgrounds
🔒 **Privacy First** - No data storage, completely confidential
🚀 **Fast & Responsive** - Instant responses powered by Groq/OpenAI/Gemini
📱 **Mobile Friendly** - Works seamlessly on all devices
🌐 **Accessible** - Free for everyone, no login required

## 🛠️ How I Built It

### Tech Stack

**Frontend:**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible component primitives

**Backend:**
- **Next.js API Routes** - Serverless functions
- **Multiple AI Providers**:
  - Groq (Llama 3.1) - Primary, free and fast
  - Google Gemini - Fallback option
  - OpenAI GPT-3.5 - Alternative option

**Deployment:**
- **Netlify** - Serverless deployment with automatic CI/CD

### Architecture

```
┌─────────────────────────────────────────────┐
│           User Interface (Next.js)          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │  Home   │  │  Chat   │  │ Features│    │
│  └─────────┘  └─────────┘  └─────────┘    │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│         API Route (/api/chat)               │
│  ┌──────────────────────────────────────┐  │
│  │  System Prompt (Mental Health)       │  │
│  │  - Empathy guidelines                │  │
│  │  - Response length limits            │  │
│  │  - Crisis detection                  │  │
│  └──────────────────────────────────────┘  │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│          AI Provider Selection              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │  Groq   │→ │ Gemini  │→ │ OpenAI  │    │
│  │ (Free)  │  │ (Free)  │  │ (Paid)  │    │
│  └─────────┘  └─────────┘  └─────────┘    │
└─────────────────────────────────────────────┘
```

### Development Process

1. **Initial Setup** (Day 1)
   - Created Next.js project with TypeScript
   - Set up Tailwind CSS v4 with custom theme
   - Designed component architecture

2. **UI Development** (Day 2-3)
   - Built landing page with animated backgrounds
   - Created chat interface with streaming responses
   - Implemented navigation and routing
   - Added responsive design for mobile

3. **AI Integration** (Day 4-5)
   - Integrated multiple AI providers (Groq, Gemini, OpenAI)
   - Implemented fallback system for API failures
   - Created system prompt for mental health support
   - Added response streaming for better UX

4. **Polish & Deploy** (Day 6)
   - Fixed CSS compatibility issues (Tailwind v3 → v4)
   - Resolved API quota and model availability issues
   - Set up environment variables
   - Deployed to Netlify

## 💡 What I Learned

### Technical Learnings

1. **Tailwind CSS v4 Migration**
   - Learned about the new `@import "tailwindcss"` syntax
   - Understood CSS-based configuration with `@theme inline`
   - Migrated from `@apply` directives to native CSS

2. **AI API Integration**
   - Implemented fallback systems for multiple AI providers
   - Handled rate limiting and quota management
   - Learned about streaming responses for better UX
   - Understood token limits and cost optimization

3. **Next.js 14 App Router**
   - Mastered server components vs client components
   - Implemented API routes as serverless functions
   - Learned about environment variable handling

4. **Error Handling & Resilience**
   - Built robust error handling for API failures
   - Implemented graceful degradation
   - Added detailed logging for debugging

### Soft Skills

- **Problem Solving**: Overcame multiple API quota issues by implementing multi-provider fallback
- **User Empathy**: Designed with mental health users in mind - calming colors, simple interface
- **Persistence**: Debugged complex API integration issues across different providers
- **Documentation**: Learned to write clear, comprehensive documentation

## 🚧 Challenges I Faced

### 1. **API Model Availability** ⚠️

**Problem**: Different Gemini models (`gemini-pro`, `gemini-1.5-flash`, `gemini-2.0-flash-exp`) were not available in the v1beta API.

**Solution**: 
- Researched available models for each API version
- Implemented multi-provider fallback system
- Switched to Groq as primary provider (free and reliable)

```typescript
// Fallback chain: Groq → Gemini → OpenAI
if (GROQ_API_KEY) {
  // Try Groq first
} else if (GEMINI_API_KEY) {
  // Fallback to Gemini
} else if (OPENAI_API_KEY) {
  // Last resort: OpenAI
}
```

### 2. **Tailwind CSS v4 Migration** 🎨

**Problem**: The project used Tailwind v4 syntax but had v3 configuration, causing CSS not to load.

**Solution**:
- Removed `@tailwind base/components/utilities` directives
- Added `@import "tailwindcss"` for v4
- Simplified config to minimal v4 format
- Converted `@apply` to native CSS

### 3. **API Quota Exhaustion** 💸

**Problem**: Both Gemini and OpenAI APIs hit quota limits during testing.

**Solution**:
- Integrated Groq API (generous free tier)
- Implemented intelligent provider selection
- Added detailed error messages for quota issues
- Set up token limits to reduce costs

### 4. **WebGL Shader Errors** 🎭

**Problem**: The `@paper-design/shaders-react` library caused WebGL errors and React prop warnings.

**Solution**:
- Replaced WebGL shaders with pure CSS animations
- Used Framer Motion for smooth transitions
- Created custom gradient animations with CSS
- Improved performance and compatibility

### 5. **Response Length Control** 📏

**Problem**: AI responses were too long and overwhelming for mental health context.

**Solution**:
- Added system prompt with explicit length guidelines
- Set `maxOutputTokens: 150` to limit response size
- Instructed AI to provide 2-4 sentence responses
- Focused on empathy over information

## 🎓 Key Takeaways

1. **Always have a fallback plan** - Multiple AI providers saved the project when quotas ran out
2. **User experience matters** - Short, empathetic responses are better than long explanations
3. **Read the docs carefully** - Many issues came from using wrong API versions or model names
4. **Start simple, then enhance** - CSS animations work better than complex WebGL shaders
5. **Environment matters** - Proper environment variable management is crucial for deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- API key from one of:
  - [Groq](https://console.groq.com/) (Recommended - Free)
  - [Google AI Studio](https://makersuite.google.com/app/apikey) (Free with limits)
  - [OpenAI](https://platform.openai.com/) (Paid)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Utkarsh8867/Mental-Ally.git
cd Mental-Ally
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file:
```env
# Add at least one API key
GROQ_API_KEY=your_groq_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Add environment variables in Netlify dashboard
6. Deploy!

### Environment Variables for Production

Add these in your Netlify dashboard:
- `GROQ_API_KEY`
- `GEMINI_API_KEY` (optional)
- `OPENAI_API_KEY` (optional)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⚠️ Disclaimer

Mental Ally is a supportive tool and **NOT a replacement for professional mental health care**. If you're experiencing a mental health crisis, please contact:

- **Emergency Services**: 911
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Groq** for providing free, fast AI inference
- **Google** for Gemini API access
- **Vercel** for Next.js framework
- **Tailwind Labs** for Tailwind CSS
- **Mental health professionals** who inspired this project

---

**Built with ❤️ for mental wellness**

*Remember: It's okay to not be okay. You're not alone.*
