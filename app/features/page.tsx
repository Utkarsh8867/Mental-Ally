"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Link from "next/link"

export default function FeaturesPage() {
    return (
        <ShaderBackground>
            <Header />
            <main className="relative z-20 max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-light text-white mb-8">
                    <span className="font-medium italic instrument">Features</span>
                </h1>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl font-medium text-white mb-3">24/7 Availability</h3>
                        <p className="text-white/70 text-sm">Get support whenever you need it, day or night. No appointments, no waiting lists.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl font-medium text-white mb-3">Confidential & Private</h3>
                        <p className="text-white/70 text-sm">Your conversations are completely private and secure. We prioritize your privacy.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl font-medium text-white mb-3">Evidence-Based</h3>
                        <p className="text-white/70 text-sm">Powered by AI trained on proven therapeutic techniques and mental health research.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl font-medium text-white mb-3">No Judgment</h3>
                        <p className="text-white/70 text-sm">A safe space to express yourself freely without fear of judgment or stigma.</p>
                    </div>
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
