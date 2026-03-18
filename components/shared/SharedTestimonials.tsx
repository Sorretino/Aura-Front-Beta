"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    text: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        text: "A plataforma revolucionou nossa forma de atender clientes. Centralizamos WhatsApp e Instagram em um só lugar e a produtividade triplicou.",
        name: "Maria Rodriguez",
        role: "Diretora de Operações",
        company: "TechCorp Brasil",
        avatar: "MR",
        rating: 5,
    },
    {
        text: "Implementamos em 2 semanas e já estamos atendendo 50+ clientes em múltiplos canais. O suporte é excepcional e a curva de aprendizado foi zero.",
        name: "João Silva",
        role: "CEO & Fundador",
        company: "StartupXYZ",
        avatar: "JS",
        rating: 5,
    },
    {
        text: "A escalabilidade é impressionante. Crescemos de 10 para 200 agentes sem nenhum problema de performance. O Chatbot com IA reduziu 60% do volume.",
        name: "Ana Santos",
        role: "VP de Customer Success",
        company: "MegaCorp",
        avatar: "AS",
        rating: 5,
    },
    {
        text: "Com o Aura CRM conseguimos integrar a fila inteligente de leads com nosso time de 30 corretores. A distribuição automática aumentou os fechamentos em 45%.",
        name: "Carlos Mendes",
        role: "Gerente Comercial",
        company: "Imobiliária Premium",
        avatar: "CM",
        rating: 5,
    },
    {
        text: "Os relatórios em tempo real nos deram visibilidade total sobre a operação. Melhor investimento que fizemos esse ano, sem dúvida.",
        name: "Fernanda Lima",
        role: "Head de Atendimento",
        company: "E-commerce Plus",
        avatar: "FL",
        rating: 5,
    },
    {
        text: "Migrar do atendimento por telefone para omnichannel foi a melhor decisão. Com a Aura, nosso CSAT subiu de 72% para 94% em 3 meses.",
        name: "Ricardo Alves",
        role: "Diretor de CX",
        company: "Banco Digital",
        avatar: "RA",
        rating: 5,
    },
];

const avatarColors = [
    "from-indigo-500 to-violet-600",
    "from-emerald-500 to-teal-600",
    "from-pink-500 to-rose-600",
    "from-amber-500 to-orange-600",
    "from-sky-500 to-blue-600",
    "from-purple-500 to-fuchsia-600",
];

const themeMap: Record<string, {
    badgeBg: string;
    badgeText: string;
    badgeIcon: string;
    titleGradient: string;
    dotActive: string;
    cardHoverBorder: string;
    quoteColor: string;
    quoteHover: string;
    btnHoverBg: string;
    btnHoverBorder: string;
    btnHoverText: string;
}> = {
    indigo: {
        badgeBg: "bg-indigo-50",
        badgeText: "text-indigo-700",
        badgeIcon: "fill-indigo-500 text-indigo-500",
        titleGradient: "from-indigo-600 to-violet-600",
        dotActive: "bg-indigo-600",
        cardHoverBorder: "hover:border-indigo-200",
        quoteColor: "text-indigo-100",
        quoteHover: "group-hover:text-indigo-200",
        btnHoverBg: "hover:bg-indigo-50",
        btnHoverBorder: "hover:border-indigo-200",
        btnHoverText: "hover:text-indigo-600",
    },
    green: {
        badgeBg: "bg-emerald-50",
        badgeText: "text-emerald-700",
        badgeIcon: "fill-emerald-500 text-emerald-500",
        titleGradient: "from-emerald-600 to-green-600",
        dotActive: "bg-emerald-600",
        cardHoverBorder: "hover:border-emerald-200",
        quoteColor: "text-emerald-100",
        quoteHover: "group-hover:text-emerald-200",
        btnHoverBg: "hover:bg-emerald-50",
        btnHoverBorder: "hover:border-emerald-200",
        btnHoverText: "hover:text-emerald-600",
    },
    purple: {
        badgeBg: "bg-purple-50",
        badgeText: "text-purple-700",
        badgeIcon: "fill-purple-500 text-purple-500",
        titleGradient: "from-purple-600 to-fuchsia-600",
        dotActive: "bg-purple-600",
        cardHoverBorder: "hover:border-purple-200",
        quoteColor: "text-purple-100",
        quoteHover: "group-hover:text-purple-200",
        btnHoverBg: "hover:bg-purple-50",
        btnHoverBorder: "hover:border-purple-200",
        btnHoverText: "hover:text-purple-600",
    },
    blue: {
        badgeBg: "bg-blue-50",
        badgeText: "text-blue-700",
        badgeIcon: "fill-blue-500 text-blue-500",
        titleGradient: "from-blue-600 to-sky-600",
        dotActive: "bg-blue-600",
        cardHoverBorder: "hover:border-blue-200",
        quoteColor: "text-blue-100",
        quoteHover: "group-hover:text-blue-200",
        btnHoverBg: "hover:bg-blue-50",
        btnHoverBorder: "hover:border-blue-200",
        btnHoverText: "hover:text-blue-600",
    },
    pink: {
        badgeBg: "bg-pink-50",
        badgeText: "text-pink-700",
        badgeIcon: "fill-pink-500 text-pink-500",
        titleGradient: "from-pink-600 to-rose-600",
        dotActive: "bg-pink-600",
        cardHoverBorder: "hover:border-pink-200",
        quoteColor: "text-pink-100",
        quoteHover: "group-hover:text-pink-200",
        btnHoverBg: "hover:bg-pink-50",
        btnHoverBorder: "hover:border-pink-200",
        btnHoverText: "hover:text-pink-600",
    },
    sky: {
        badgeBg: "bg-sky-50",
        badgeText: "text-sky-700",
        badgeIcon: "fill-sky-500 text-sky-500",
        titleGradient: "from-sky-600 to-cyan-600",
        dotActive: "bg-sky-600",
        cardHoverBorder: "hover:border-sky-200",
        quoteColor: "text-sky-100",
        quoteHover: "group-hover:text-sky-200",
        btnHoverBg: "hover:bg-sky-50",
        btnHoverBorder: "hover:border-sky-200",
        btnHoverText: "hover:text-sky-600",
    },
};

interface TestimonialsSectionProps {
    theme?: string;
}

export default function TestimonialsSection({ theme = "indigo" }: TestimonialsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);

    const tc = themeMap[theme] || themeMap.indigo;

    const getVisibleCount = useCallback(() => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }, []);

    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const update = () => setVisibleCount(getVisibleCount());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [getVisibleCount]);

    const maxIndex = testimonials.length - visibleCount;

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(goNext, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, goNext]);

    const handleManual = (fn: () => void) => {
        fn();
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const translateX = -(currentIndex * (100 / visibleCount));

    return (
        <section id="testimonials-section" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    {/* Avatar Stack */}
                    <div className="flex items-center justify-center mb-5">
                        <div className="flex -space-x-2.5">
                            {testimonials.slice(0, 5).map((t, i) => (
                                <div
                                    key={i}
                                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center ring-2 ring-slate-50`}
                                >
                                    <span className="text-white font-bold text-[10px]">{t.avatar}</span>
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center ring-2 ring-slate-50">
                                <span className="text-white font-bold text-[9px]">+1k</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="ml-1.5 text-sm font-semibold text-slate-600">4.9/5</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Empresas que{" "}
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tc.titleGradient}`}>
                            confiam
                        </span>{" "}
                        na Aura
                    </h2>
                    <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
                        Mais de 1.000 empresas usam o Aura CRM para centralizar seus canais e escalar o atendimento.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(${translateX}%)` }}
                        >
                            {testimonials.map((testimonial, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 px-2.5"
                                    style={{ width: `${100 / visibleCount}%` }}
                                >
                                    <div className={`group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl ${tc.cardHoverBorder} hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}>
                                        {/* Quote + Stars */}
                                        <div className="flex items-center justify-between mb-4">
                                            <Quote className={`w-8 h-8 ${tc.quoteColor} ${tc.quoteHover} transition-colors`} />
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(testimonial.rating)].map((_, j) => (
                                                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                                            &ldquo;{testimonial.text}&rdquo;
                                        </p>

                                        {/* Divider */}
                                        <div className="h-px bg-slate-100 mb-4" />

                                        {/* Author */}
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                                <span className="text-white font-bold text-xs">{testimonial.avatar}</span>
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-semibold text-slate-900 text-sm truncate">{testimonial.name}</p>
                                                <p className="text-xs text-slate-400 truncate">{testimonial.role} · {testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots (center) + Arrows (right) */}
                <div className="relative flex items-center justify-end mt-8 px-2.5">
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setCurrentIndex(i); handleManual(() => { }); }}
                                className={`transition-all duration-300 rounded-full ${i === currentIndex
                                    ? `w-7 h-2 ${tc.dotActive}`
                                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                aria-label={`Página ${i + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleManual(goPrev)}
                            className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 ${tc.btnHoverBg} ${tc.btnHoverBorder} ${tc.btnHoverText} transition-all shadow-sm`}
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleManual(goNext)}
                            className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 ${tc.btnHoverBg} ${tc.btnHoverBorder} ${tc.btnHoverText} transition-all shadow-sm`}
                            aria-label="Próximo"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
