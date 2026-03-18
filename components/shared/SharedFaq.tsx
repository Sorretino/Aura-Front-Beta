"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export interface FaqItem {
    question: string;
    answer: string | React.ReactNode;
}

interface SharedFaqProps {
    titleHighlight?: string;
    titleRest?: string;
    subtitle?: string | React.ReactNode;
    items: FaqItem[];
    imageSrc?: string;
    theme?: "indigo" | "green" | "pink" | "sky" | "blue" | "purple";
    variant?: "split-image" | "solid-cards";
}

export function SharedFaq({
    titleHighlight,
    titleRest,
    subtitle,
    items,
    imageSrc,
    theme = "indigo",
    variant = "solid-cards",
}: SharedFaqProps) {
    const themeStyles: Record<string, any> = {
        indigo: {
            bg: "bg-indigo-50",
            textPrimary: "text-indigo-950",
            textAnswer: "text-indigo-800",
            grad: "from-indigo-600 to-violet-600",
            iconColor: "text-indigo-600",
        },
        green: {
            bg: "bg-emerald-50",
            textPrimary: "text-emerald-950",
            textAnswer: "text-emerald-800",
            grad: "from-green-600 to-emerald-600",
            iconColor: "text-emerald-600",
        },
        pink: {
            bg: "bg-pink-50",
            textPrimary: "text-pink-950",
            textAnswer: "text-pink-800",
            grad: "from-pink-600 to-rose-600",
            iconColor: "text-pink-600",
        },
        sky: {
            bg: "bg-sky-50",
            textPrimary: "text-sky-950",
            textAnswer: "text-sky-800",
            grad: "from-sky-500 to-cyan-500",
            iconColor: "text-sky-600",
        },
        blue: {
            bg: "bg-blue-50",
            textPrimary: "text-blue-950",
            textAnswer: "text-blue-800",
            grad: "from-blue-600 to-sky-600",
            iconColor: "text-blue-600",
        },
        purple: {
            bg: "bg-purple-50",
            textPrimary: "text-purple-950",
            textAnswer: "text-purple-800",
            grad: "from-purple-600 to-fuchsia-600",
            iconColor: "text-purple-600",
        },
    };

    const ts = themeStyles[theme] || themeStyles.indigo;

    return (
        <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {variant === "split-image" && (
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Imagem Lado Esquerdo */}
                        {imageSrc && (
                            <div className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                                <img
                                    src={imageSrc}
                                    alt="FAQ Illustration"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        )}

                        {/* Conteúdo Lado Direito */}
                        <div className="space-y-10 order-1 lg:order-2">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                                    {titleHighlight && (
                                        <span
                                            className={`text-transparent bg-clip-text bg-gradient-to-r ${ts.grad}`}
                                        >
                                            {titleHighlight}{" "}
                                        </span>
                                    )}
                                    {titleRest}
                                </h2>
                                {subtitle && (
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {subtitle}
                                    </p>
                                )}
                            </div>

                            <Accordion type="single" collapsible className="w-full">
                                {items.map((item, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`item-${idx}`}
                                        className="border-b border-gray-200 py-1"
                                    >
                                        <AccordionTrigger className="hover:no-underline text-left py-4 px-2 group">
                                            <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                                                {item.question}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-2 pb-4 text-base text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                )}

                {variant === "solid-cards" && (
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Título Lado Esquerdo (Ou Topo no Mobile) */}
                        <div className="lg:col-span-4 space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-foreground tracking-tight">
                                {titleHighlight && (
                                    <span
                                        className={`text-transparent bg-clip-text bg-gradient-to-r ${ts.grad} block`}
                                    >
                                        {titleHighlight}
                                    </span>
                                )}
                                <span className="block mt-2">{titleRest}</span>
                            </h2>
                            {subtitle && (
                                <div className="text-lg text-muted-foreground leading-relaxed">
                                    {subtitle}
                                </div>
                            )}
                        </div>

                        {/* Acordeão Lado Direito Customizado */}
                        <div className="lg:col-span-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-8 border-b-2 border-black pb-4">
                                Perguntas Frequentes
                            </h3>

                            <Accordion
                                type="single"
                                collapsible
                                className="w-full space-y-4"
                            >
                                {items.map((item, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`solid-item-${idx}`}
                                        className="border-b-2 border-black border-x-0 border-t-0 last:border-b-2 px-0 py-0 overflow-hidden group"
                                    >
                                        {/* Nós ocultamos o SVG padrão via CSS de forma sutil, ou então usamos uma classe para anular. 
                                            O shadcn adiciona um [&[data-state=open]>svg]:rotate-180 global, 
                                            Nós anulamos o ícone globalmente com [&>svg:last-child]:hidden e colocamos o nosso Plus icon. */}
                                        <AccordionTrigger
                                            className={`hover:no-underline [&>svg:last-child]:hidden py-5 px-6 rounded-t-xl data-[state=closed]:rounded-b-xl transition-all duration-300 ${ts.bg}`}
                                        >
                                            <span
                                                className={`text-left text-lg font-bold ${ts.textPrimary}`}
                                            >
                                                {item.question}
                                            </span>
                                            {/* Ícone customizado Animado tipo '+' que vira 'x' */}
                                            <div
                                                className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 ml-4 group-data-[state=open]:rotate-45 transition-transform duration-300"
                                            >
                                                <Plus className="w-5 h-5 text-white" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent
                                            className={`px-6 pb-6 text-base ${ts.textAnswer} ${ts.bg} rounded-b-xl leading-relaxed`}
                                        >
                                            <div className="pt-2">{item.answer}</div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
