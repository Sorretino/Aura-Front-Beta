"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FreeTrialButton } from "@/components/FreeTrial";
import { ArrowRight, Sparkles } from "lucide-react";

export function FloatingCta() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    // Show after scrolling a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    let themeColor = "indigo";
    if (pathname.includes("whatsapp")) themeColor = "green";
    else if (pathname.includes("telegram")) themeColor = "sky";
    else if (pathname.includes("messenger")) themeColor = "blue";
    else if (pathname.includes("instagram")) themeColor = "pink";

    const themeClasses: Record<string, any> = {
        indigo: { btnPrimaryBg: "from-indigo-600 to-violet-600", btnPrimaryHover: "hover:from-indigo-700 hover:to-violet-700", shadow: "shadow-indigo-500/50" },
        green: { btnPrimaryBg: "from-green-600 to-emerald-600", btnPrimaryHover: "hover:from-green-700 hover:to-emerald-700", shadow: "shadow-green-500/50" },
        pink: { btnPrimaryBg: "from-pink-600 to-rose-600", btnPrimaryHover: "hover:from-pink-700 hover:to-rose-700", shadow: "shadow-pink-500/50" },
        sky: { btnPrimaryBg: "from-sky-500 to-cyan-500", btnPrimaryHover: "hover:from-sky-600 hover:to-cyan-600", shadow: "shadow-sky-500/50" },
        blue: { btnPrimaryBg: "from-blue-600 to-sky-600", btnPrimaryHover: "hover:from-blue-700 hover:to-sky-700", shadow: "shadow-blue-500/50" },
    };

    const tc = themeClasses[themeColor] || themeClasses.indigo;

    return (
        <div
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
                }`}
        >
            <div className="relative group">
                {/* Efeito visual de brilho/pulso atrás do botão */}
                <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${tc.btnPrimaryBg} opacity-70 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse`}></div>

                <FreeTrialButton
                    variant="custom"
                    className={`relative flex items-center gap-2 px-8 py-4 h-auto text-lg md:text-xl font-bold !text-white hover:!text-white rounded-full bg-gradient-to-r ${tc.btnPrimaryBg} ${tc.btnPrimaryHover} shadow-2xl hover:shadow-3xl ${tc.shadow} border-0 transition-all duration-300 transform group-hover:scale-105`}
                >
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                    <span className="text-white text-sm">Experimente 15 Dias Grátis</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-1 transition-transform group-hover:translate-x-1" />
                </FreeTrialButton>
            </div>
        </div>
    );
}
