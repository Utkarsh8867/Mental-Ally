"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Link from "next/link"

export default function LoginPage() {
    return (
        <ShaderBackground>
            <Header />
            <main className="relative z-20 max-w-md mx-auto px-6 py-16">
                <h1 className="text-4xl font-light text-white mb-8 text-center">
                    <span className="font-medium italic instrument">Welcome</span> Back
                </h1>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-white/90 text-sm mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-white/90 text-sm mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link href="/signup" className="text-white/70 text-sm hover:text-white transition-colors">
                            Don't have an account? <span className="underline">Sign up</span>
                        </Link>
                    </div>

                    <div className="mt-4 text-center">
                        <Link href="/chat" className="text-white/50 text-xs hover:text-white/70 transition-colors">
                            Continue as guest
                        </Link>
                    </div>
                </div>
            </main>
        </ShaderBackground>
    )
}
