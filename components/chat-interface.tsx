'use client';

import { useCustomChat } from '@/hooks/use-chat-hook';
import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Brain, Link, Folder, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiquidMetal, PulsingBorder } from '@paper-design/shaders-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useCustomChat('/api/chat');
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-6">
              {/* Shader Circle - Greeting State */}
              <motion.div
                className="relative flex items-center justify-center"
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <div className="z-10 absolute bg-white/5 h-20 w-20 rounded-full backdrop-blur-[3px] flex items-center justify-center">
                  <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-6 left-6 blur-[1px]" />
                  <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-5 left-10 blur-[0.8px]" />
                  <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-12 left-3 blur-[1px]" />
                  <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-8 left-12 blur-[0.8px]" />
                </div>
                <LiquidMetal
                  style={{ height: 100, width: 100, filter: 'blur(14px)', position: 'absolute' }}
                  colorBack="hsl(0, 0%, 0%, 0)"
                  colorTint="hsl(29, 77%, 49%)"
                  repetition={4}
                  softness={0.5}
                  shiftRed={0.3}
                  shiftBlue={0.3}
                  distortion={0.1}
                  contour={1}
                  shape="circle"
                  scale={0.58}
                  rotation={50}
                  speed={5}
                />
                <LiquidMetal
                  style={{ height: 100, width: 100 }}
                  colorBack="hsl(0, 0%, 0%, 0)"
                  colorTint="hsl(29, 77%, 49%)"
                  repetition={4}
                  softness={0.5}
                  shiftRed={0.3}
                  shiftBlue={0.3}
                  distortion={0.1}
                  contour={1}
                  shape="circle"
                  scale={0.58}
                  rotation={50}
                  speed={5}
                />
              </motion.div>
            </div>
            <h2 className="text-3xl font-light text-white/90 mb-2">Hey there!</h2>
            <p className="text-white/40 text-sm font-light max-w-md">
              I'm your compassionate AI therapist. Share what's on your mind, and let's explore your thoughts and feelings together.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${message.role === 'user'
                  ? 'bg-white/10 text-white rounded-br-none border border-white/20'
                  : 'bg-white/5 text-white/90 rounded-bl-none border border-white/10'
                  }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 rounded-lg rounded-bl-none px-4 py-3">
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 text-orange-400 animate-spin" />
                <span className="text-sm text-white/40">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto relative">
          <motion.div
            className="absolute w-full h-full z-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <PulsingBorder
              style={{ height: '146.5%', minWidth: '143%' }}
              colorBack="hsl(0, 0%, 0%)"
              roundness={0.18}
              thickness={0}
              softness={0}
              intensity={0.3}
              bloom={2}
              spots={2}
              spotSize={0.25}
              pulse={0}
              smoke={0.35}
              smokeSize={0.4}
              scale={0.7}
              rotation={0}
              speed={1}
              colors={[
                'hsl(29, 70%, 37%)',
                'hsl(32, 100%, 83%)',
                'hsl(4, 32%, 30%)',
                'hsl(25, 60%, 50%)',
                'hsl(0, 100%, 10%)',
              ]}
            />
          </motion.div>

          <motion.div
            className="relative bg-[#040404] rounded-2xl p-4 z-10"
            animate={{
              borderColor: isFocused ? '#BA9465' : '#3D3D3D',
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ borderWidth: '1px', borderStyle: 'solid' }}
          >
            {/* Message Input */}
            <div className="relative mb-6">
              <Textarea
                value={input || ''}
                onChange={(e) => handleInputChange(e as any)}
                placeholder="Share your thoughts here..."
                disabled={isLoading}
                className="min-h-[80px] resize-none bg-transparent border-none text-white text-base placeholder:text-zinc-500 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-white p-0"
                >
                  <Brain className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white p-0"
                >
                  <Link className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white p-0"
                >
                  <Folder className="h-5 w-5" />
                </Button>
                <form onSubmit={onSubmit} className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white p-0"
                  >
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading || !input?.trim()}
                    className="h-10 w-10 rounded-full bg-orange-200 hover:bg-orange-300 disabled:bg-zinc-700 disabled:cursor-not-allowed text-orange-800 p-0 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
