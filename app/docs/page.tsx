"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Link from "next/link"

export default function DocsPage() {
    return (
        <ShaderBackground>
            <Header />
            <main className="relative z-20 max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-light text-white mb-8">
                    <span className="font-medium italic instrument">Documentation</span>
                </h1>

                <div className="space-y-8">
                    <section className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h2 className="text-2xl font-medium text-white mb-4">Getting Started</h2>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            Welcome to our AI-powered mental health support platform. Here's how to get started:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-white/70 text-sm">
                            <li>Click "Start Chat" to begin a conversation</li>
                            <li>Share what's on your mind - there's no judgment here</li>
                            <li>Receive evidence-based support and guidance</li>
                            <li>Return anytime you need support</li>
                        </ol>
                    </section>

                    <section className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h2 className="text-2xl font-medium text-white mb-4">Privacy & Security</h2>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Your privacy is our top priority. All conversations are encrypted and confidential.
                            We do not share your data with third parties, and you can delete your conversation history at any time.
                        </p>
                    </section>

                    <section className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h2 className="text-2xl font-medium text-white mb-4">When to Seek Emergency Help</h2>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            If you're experiencing a mental health emergency, please contact:
                        </p>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li>• Emergency Services: 911</li>
                            <li>• National Suicide Prevention Lifeline: 988</li>
                            <li>• Crisis Text Line: Text HOME to 741741</li>
                        </ul>
                    </section>

                    <section className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h2 className="text-2xl font-medium text-white mb-4">FAQs</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-white font-medium mb-2">Is this a replacement for therapy?</h3>
                                <p className="text-white/70 text-sm">No, this is a supportive tool. For serious mental health concerns, please consult a licensed professional.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-2">How does the AI work?</h3>
                                <p className="text-white/70 text-sm">Our AI is trained on evidence-based therapeutic techniques and mental health research to provide supportive conversations.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-12">
                    <Link
                        href="/chat"
                        className="inline-block px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90"
                    >
                        Start Chat
                    </Link>
                </div>
            </main>
        </ShaderBackground>
    )
}
