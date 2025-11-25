"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"

export default function DonatePage() {
    return (
        <ShaderBackground>
            <Header />
            <main className="relative z-20 max-w-2xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-light text-white mb-8">
                    <span className="font-medium italic instrument">Support</span> Our Mission
                </h1>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                    <p className="text-white/90 text-base mb-6 leading-relaxed">
                        Your donation helps us provide free, accessible mental health support to everyone who needs it.
                    </p>

                    <p className="text-white/70 text-sm mb-8 leading-relaxed">
                        We believe mental health support should be available to all, regardless of financial circumstances.
                        Your contribution helps us maintain and improve our services, keeping them free and accessible.
                    </p>

                    <div className="space-y-4">
                        <button className="w-full px-8 py-4 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90">
                            Donate $10
                        </button>
                        <button className="w-full px-8 py-4 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90">
                            Donate $25
                        </button>
                        <button className="w-full px-8 py-4 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90">
                            Donate $50
                        </button>
                        <button className="w-full px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10">
                            Custom Amount
                        </button>
                    </div>
                </div>

                <p className="text-white/50 text-xs text-center">
                    All donations are secure and tax-deductible where applicable.
                </p>
            </main>
        </ShaderBackground>
    )
}
