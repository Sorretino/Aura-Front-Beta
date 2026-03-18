"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    MessageCircle,
    Users,
    Bot,
    BarChart3,
    Globe,
    Zap,
    CheckCircle2,
} from "lucide-react";

interface TimelineEvent {
    id: string;
    icon: React.ElementType;
    tag: string;
    title: string;
    description: string;
}

const timelineData: TimelineEvent[] = [
    {
        id: "1",
        icon: MessageCircle,
        tag: "Etapa 1",
        title: "Conecte seu WhatsApp",
        description:
            "Integre seu número via API Oficial da Meta ou escaneie o QR Code. Em menos de 2 minutos sua equipe já pode começar a responder mensagens.",
    },
    {
        id: "2",
        icon: Users,
        tag: "Etapa 2",
        title: "Convide sua Equipe",
        description:
            "Adicione múltiplos atendentes ao mesmo número. Defina permissões, departamentos e filas de distribuição inteligente.",
    },
    {
        id: "3",
        icon: Bot,
        tag: "Etapa 3",
        title: "Ative o Chatbot com IA",
        description:
            "Configure chatbots inteligentes para qualificar leads, responder dúvidas e encaminhar clientes para o setor correto — 24h.",
    },
    {
        id: "4",
        icon: BarChart3,
        tag: "Etapa 4",
        title: "Monitore Seus Resultados",
        description:
            "Acompanhe métricas em tempo real: tempo de resposta, volume de atendimentos e taxa de conversão em dashboards visuais.",
    },
    {
        id: "5",
        icon: Globe,
        tag: "Etapa 5",
        title: "Escale para Omnichannel",
        description:
            "Conecte Instagram, Messenger e Telegram na mesma plataforma. Todos os canais em uma caixa de entrada unificada.",
    },
];

function AppTime() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [reachedSteps, setReachedSteps] = useState<Set<string>>(new Set());

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const timelineHeight = timelineRef.current.offsetHeight;

            const scrollTop = Math.max(0, windowHeight * 0.5 - rect.top);
            const maxScroll = timelineHeight;
            const progress = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
            setScrollProgress(progress);

            const newReached = new Set<string>();
            Object.entries(stepRefs.current).forEach(([id, el]) => {
                if (el && timelineRef.current) {
                    const stepRect = el.getBoundingClientRect();
                    const timelineRect = timelineRef.current.getBoundingClientRect();
                    const stepCenter = stepRect.top - timelineRect.top + stepRect.height / 2;
                    const progressPx = (progress / 100) * timelineHeight;
                    if (progressPx >= stepCenter) {
                        newReached.add(id);
                    }
                }
            });
            setReachedSteps(newReached);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const completedCount = reachedSteps.size;

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
                        <Zap className="w-3 h-3 mr-1.5" />
                        Jornada do Cliente
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Do primeiro contato ao{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                            fechamento
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
                        Veja como a Aura CRM transforma seu atendimento via WhatsApp em 5 etapas simples.
                    </p>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">

                    {/* Vertical Line - base */}
                    <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200" />

                    {/* Vertical Line - progress  */}
                    <div
                        className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-emerald-400 to-green-500 transition-[height] duration-200 ease-out"
                        style={{ height: `${scrollProgress}%` }}
                    />

                    {/* Steps */}
                    <div className="space-y-10">
                        {timelineData.map((event, index) => {
                            const isReached = reachedSteps.has(event.id);
                            const IconComponent = event.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={event.id}
                                    ref={(el) => { stepRefs.current[event.id] = el; }}
                                    className="relative flex items-start"
                                >
                                    {/* Circle - Mobile & Desktop */}
                                    <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                                        {/* Pulse ring when active */}
                                        {isReached && (
                                            <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" style={{ animationDuration: "2s" }} />
                                        )}
                                        <div
                                            className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ring-4 ${isReached
                                                ? "bg-gradient-to-br from-emerald-500 to-green-600 ring-emerald-100 shadow-lg shadow-emerald-500/25 scale-105"
                                                : "bg-white ring-slate-100 border-2 border-slate-200 scale-100"
                                                }`}
                                        >
                                            <IconComponent
                                                className={`w-5 h-5 transition-colors duration-500 ${isReached ? "text-white" : "text-slate-400"
                                                    }`}
                                            />
                                        </div>
                                    </div>



                                    {/* Card - Mobile (always right of the line) */}
                                    <div className="lg:hidden pl-16 w-full">
                                        <div
                                            className={`relative bg-white rounded-xl p-5 border-l-4 border transition-all duration-500 ${isReached
                                                ? "border-l-emerald-500 border-emerald-100 shadow-lg shadow-emerald-500/5"
                                                : "border-l-slate-200 border-slate-100 shadow-sm"
                                                }`}
                                        >
                                            <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isReached ? "text-emerald-600" : "text-slate-400"}`}>
                                                {event.tag}
                                            </span>
                                            <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1.5">
                                                {event.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card - Desktop (alternating sides) */}
                                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 w-full">
                                        {/* Left side */}
                                        <div className={`flex ${isLeft ? "justify-end" : ""}`}>
                                            {isLeft && (
                                                <div
                                                    className={`group max-w-md bg-white rounded-xl p-6 border transition-all duration-500 cursor-default hover:-translate-y-0.5 hover:shadow-xl ${isReached
                                                        ? "border-emerald-200 shadow-lg shadow-emerald-500/5"
                                                        : "border-slate-100 shadow-sm"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isReached ? "text-emerald-600" : "text-slate-400"}`}>
                                                            {event.tag}
                                                        </span>
                                                        {isReached && (
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 animate-in fade-in duration-500" />
                                                        )}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 leading-relaxed">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right side */}
                                        <div className={`flex ${!isLeft ? "justify-start" : ""}`}>
                                            {!isLeft && (
                                                <div
                                                    className={`group max-w-md bg-white rounded-xl p-6 border transition-all duration-500 cursor-default hover:-translate-y-0.5 hover:shadow-xl ${isReached
                                                        ? "border-emerald-200 shadow-lg shadow-emerald-500/5"
                                                        : "border-slate-100 shadow-sm"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isReached ? "text-emerald-600" : "text-slate-400"}`}>
                                                            {event.tag}
                                                        </span>
                                                        {isReached && (
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 animate-in fade-in duration-500" />
                                                        )}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 leading-relaxed">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Footer */}
                <div className="mt-14 flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1.5">
                        {timelineData.map((event) => (
                            <div
                                key={event.id}
                                className={`w-2 h-2 rounded-full transition-all duration-500 ${reachedSteps.has(event.id)
                                    ? "bg-emerald-500 scale-125"
                                    : "bg-slate-200"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className={`text-xs font-semibold transition-colors duration-300 ${completedCount === timelineData.length ? "text-emerald-600" : "text-slate-400"}`}>
                        {completedCount}/{timelineData.length} etapas
                    </span>
                </div>
            </div>
        </section>
    );
}

export default AppTime;
