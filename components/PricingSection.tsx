"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Check,
    X,
    Zap,
    Crown,
    Building2,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { type Language, useTranslation } from "@/lib/i18n";
import { FreeTrialButton } from "@/components/FreeTrial";

interface PricingSectionProps {
    currentLanguage: Language;
    theme?: string;
}

const plans = [
    {
        id: "essential",
        name: "Essencial",
        description: "Para pequenas equipes começando",
        icon: Zap,
        monthlyPrice: 99,
        annualPrice: 79,
        color: "indigo",
        popular: false,
        cta: "Começar Grátis",
        ctaVariant: "outline" as const,
        features: [
            { text: "Até 5 agentes", included: true },
            { text: "2 canais conectados", included: true },
            { text: "10GB de armazenamento", included: true },
            { text: "Suporte por email", included: true },
            { text: "Backup diário", included: true },
            { text: "Chatbot básico", included: true },
            { text: "Relatórios avançados", included: false },
            { text: "API & Integrações", included: false },
            { text: "Gerente dedicado", included: false },
        ],
    },
    {
        id: "professional",
        name: "Professional",
        description: "Para empresas em crescimento",
        icon: Crown,
        monthlyPrice: 299,
        annualPrice: 239,
        color: "violet",
        popular: true,
        cta: "Assine o Plano Profissional",
        ctaVariant: "primary" as const,
        features: [
            { text: "Até 25 agentes", included: true },
            { text: "Todos os canais", included: true },
            { text: "100GB de armazenamento", included: true },
            { text: "Suporte prioritário", included: true },
            { text: "Backup em tempo real", included: true },
            { text: "Chatbot avançado + IA", included: true },
            { text: "Relatórios avançados", included: true },
            { text: "API & Integrações", included: true },
            { text: "Gerente dedicado", included: false },
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "Para grandes organizações",
        icon: Building2,
        monthlyPrice: 899,
        annualPrice: 820,
        color: "purple",
        popular: false,
        cta: "Falar Diretamente com Vendas",
        ctaVariant: "outline" as const,
        features: [
            { text: "Agentes ilimitados", included: true },
            { text: "Todos os canais", included: true },
            { text: "1TB de armazenamento", included: true },
            { text: "Suporte 24/7 dedicado", included: true },
            { text: "SLA 99.9% garantido", included: true },
            { text: "Chatbot avançado + IA", included: true },
            { text: "Relatórios avançados", included: true },
            { text: "API & Integrações", included: true },
            { text: "Gerente dedicado", included: true },
        ],
    },
];

export default function PricingSection({
    currentLanguage,
    theme = "indigo",
}: PricingSectionProps) {
    const [isAnnual, setIsAnnual] = useState(false);
    const t = useTranslation(currentLanguage);

    const getThemeClasses = (color: string) => {
        const themeMap: Record<string, any> = {
            indigo: {
                bgBulb: "bg-indigo-400/5",
                badgeBg: "bg-indigo-100",
                badgeText: "text-indigo-700",
                gradientText: "from-indigo-600 via-violet-600 to-purple-600",
                toggleBgActive: "bg-indigo-600",
                glowPopular: "from-indigo-500 via-violet-500 to-purple-500",
                cardShadowPopular: "shadow-indigo-500/10",
                cardHoverBorder: "hover:border-indigo-300",
                badgeBgPopular: "from-indigo-600 via-violet-600 to-purple-600",
                badgeShadowPopular: "shadow-indigo-500/25",
                iconBgPopular: "from-indigo-500 to-violet-600",
                iconShadowPopular: "shadow-indigo-500/25",
                iconHoverBg: "group-hover:bg-indigo-100",
                iconHoverText: "group-hover:text-indigo-600",
                btnHoverBorder: "hover:border-indigo-300",
                btnHoverBg: "hover:bg-indigo-50",
                btnPrimaryBg: "from-indigo-600 to-violet-600",
                btnPrimaryHover: "hover:from-indigo-700 hover:to-violet-700",
                featureCheckBg: "bg-indigo-100",
                featureCheckText: "text-indigo-600",
                bottomText: "text-indigo-600",
            },
            green: {
                bgBulb: "bg-green-400/5",
                badgeBg: "bg-green-100",
                badgeText: "text-green-700",
                gradientText: "from-green-600 via-emerald-600 to-teal-600",
                toggleBgActive: "bg-green-600",
                glowPopular: "from-green-500 via-emerald-500 to-teal-500",
                cardShadowPopular: "shadow-green-500/10",
                cardHoverBorder: "hover:border-green-300",
                badgeBgPopular: "from-green-600 via-emerald-600 to-teal-600",
                badgeShadowPopular: "shadow-green-500/25",
                iconBgPopular: "from-green-500 to-emerald-600",
                iconShadowPopular: "shadow-green-500/25",
                iconHoverBg: "group-hover:bg-green-100",
                iconHoverText: "group-hover:text-green-600",
                btnHoverBorder: "hover:border-green-300",
                btnHoverBg: "hover:bg-green-50",
                btnPrimaryBg: "from-green-600 to-emerald-600",
                btnPrimaryHover: "hover:from-green-700 hover:to-emerald-700",
                featureCheckBg: "bg-green-100",
                featureCheckText: "text-green-600",
                bottomText: "text-green-600",
            },
            pink: {
                bgBulb: "bg-pink-400/5",
                badgeBg: "bg-pink-100",
                badgeText: "text-pink-700",
                gradientText: "from-pink-600 via-rose-600 to-red-600",
                toggleBgActive: "bg-pink-600",
                glowPopular: "from-pink-500 via-rose-500 to-red-500",
                cardShadowPopular: "shadow-pink-500/10",
                cardHoverBorder: "hover:border-pink-300",
                badgeBgPopular: "from-pink-600 via-rose-600 to-red-600",
                badgeShadowPopular: "shadow-pink-500/25",
                iconBgPopular: "from-pink-500 to-rose-600",
                iconShadowPopular: "shadow-pink-500/25",
                iconHoverBg: "group-hover:bg-pink-100",
                iconHoverText: "group-hover:text-pink-600",
                btnHoverBorder: "hover:border-pink-300",
                btnHoverBg: "hover:bg-pink-50",
                btnPrimaryBg: "from-pink-600 to-rose-600",
                btnPrimaryHover: "hover:from-pink-700 hover:to-rose-700",
                featureCheckBg: "bg-pink-100",
                featureCheckText: "text-pink-600",
                bottomText: "text-pink-600",
            },
            blue: {
                bgBulb: "bg-blue-400/5",
                badgeBg: "bg-blue-100",
                badgeText: "text-blue-700",
                gradientText: "from-blue-600 via-sky-600 to-cyan-600",
                toggleBgActive: "bg-blue-600",
                glowPopular: "from-blue-500 via-sky-500 to-cyan-500",
                cardShadowPopular: "shadow-blue-500/10",
                cardHoverBorder: "hover:border-blue-300",
                badgeBgPopular: "from-blue-600 via-sky-600 to-cyan-600",
                badgeShadowPopular: "shadow-blue-500/25",
                iconBgPopular: "from-blue-500 to-sky-600",
                iconShadowPopular: "shadow-blue-500/25",
                iconHoverBg: "group-hover:bg-blue-100",
                iconHoverText: "group-hover:text-blue-600",
                btnHoverBorder: "hover:border-blue-300",
                btnHoverBg: "hover:bg-blue-50",
                btnPrimaryBg: "from-blue-600 to-sky-600",
                btnPrimaryHover: "hover:from-blue-700 hover:to-sky-700",
                featureCheckBg: "bg-blue-100",
                featureCheckText: "text-blue-600",
                bottomText: "text-blue-600",
            },
            sky: {
                bgBulb: "bg-sky-400/5",
                badgeBg: "bg-sky-100",
                badgeText: "text-sky-700",
                gradientText: "from-sky-600 via-cyan-600 to-blue-600",
                toggleBgActive: "bg-sky-600",
                glowPopular: "from-sky-500 via-cyan-500 to-blue-500",
                cardShadowPopular: "shadow-sky-500/10",
                cardHoverBorder: "hover:border-sky-300",
                badgeBgPopular: "from-sky-600 via-cyan-600 to-blue-600",
                badgeShadowPopular: "shadow-sky-500/25",
                iconBgPopular: "from-sky-500 to-cyan-600",
                iconShadowPopular: "shadow-sky-500/25",
                iconHoverBg: "group-hover:bg-sky-100",
                iconHoverText: "group-hover:text-sky-600",
                btnHoverBorder: "hover:border-sky-300",
                btnHoverBg: "hover:bg-sky-50",
                btnPrimaryBg: "from-sky-500 to-cyan-500",
                btnPrimaryHover: "hover:from-sky-600 hover:to-cyan-600",
                featureCheckBg: "bg-sky-100",
                featureCheckText: "text-sky-600",
                bottomText: "text-sky-600",
            },
            purple: {
                bgBulb: "bg-purple-400/5",
                badgeBg: "bg-purple-100",
                badgeText: "text-purple-700",
                gradientText: "from-purple-600 via-fuchsia-600 to-pink-600",
                toggleBgActive: "bg-purple-600",
                glowPopular: "from-purple-500 via-fuchsia-500 to-pink-500",
                cardShadowPopular: "shadow-purple-500/10",
                cardHoverBorder: "hover:border-purple-300",
                badgeBgPopular: "from-purple-600 via-fuchsia-600 to-pink-600",
                badgeShadowPopular: "shadow-purple-500/25",
                iconBgPopular: "from-purple-500 to-fuchsia-600",
                iconShadowPopular: "shadow-purple-500/25",
                iconHoverBg: "group-hover:bg-purple-100",
                iconHoverText: "group-hover:text-purple-600",
                btnHoverBorder: "hover:border-purple-300",
                btnHoverBg: "hover:bg-purple-50",
                btnPrimaryBg: "from-purple-600 to-fuchsia-600",
                btnPrimaryHover: "hover:from-purple-700 hover:to-fuchsia-700",
                featureCheckBg: "bg-purple-100",
                featureCheckText: "text-purple-600",
                bottomText: "text-purple-600",
            }
        };
        return themeMap[color] || themeMap.indigo;
    };

    const tc = getThemeClasses(theme);

    return (
        <section id="pricing-section" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl ${tc.bgBulb}`}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <Badge className={`${tc.badgeBg} ${tc.badgeText} border-0 px-4 py-1.5`}>
                        <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                        Planos e Preços
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        <span className="text-foreground">Escolha o plano </span>
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tc.gradientText}`}>
                            ideal para você
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Todos os planos incluem 15 dias de teste grátis. Cancele quando quiser.
                    </p>

                    {/* Toggle Mensal / Anual */}
                    <div className="flex items-center justify-center pt-6">
                        <div className="bg-gray-100 p-1 rounded-full inline-flex items-center relative">
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`relative w-28 py-2 text-sm font-semibold rounded-full transition-all duration-300 z-10 ${!isAnnual
                                    ? "text-white"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                Mensal
                            </button>
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`relative w-28 py-2 text-sm font-semibold rounded-full transition-all duration-300 z-10 ${isAnnual
                                    ? "text-white"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                Anual
                            </button>
                            {/* Animated Background */}
                            <div
                                className={`absolute top-1 bottom-1 w-28 rounded-full transition-all duration-300 ${tc.toggleBgActive} ${isAnnual ? "translate-x-[108%]" : "translate-x-0"
                                    }`}
                            ></div>

                            {/* Economize Badge overlapping */}
                            <div className="absolute -top-3 -right-3 md:-right-6 rotate-12 z-20">
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full shadow-sm">
                                    -20%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan) => {
                        const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
                        const isPopular = plan.popular;

                        return (
                            <div
                                key={plan.id}
                                className={`relative group rounded-2xl transition-all duration-500 ${isPopular
                                    ? "lg:-mt-4 lg:mb-0"
                                    : ""
                                    }`}
                            >
                                {/* Popular glow effect */}
                                {isPopular && (
                                    <div className={`absolute -inset-[2px] bg-gradient-to-r ${tc.glowPopular} rounded-2xl opacity-100 blur-[1px]`}></div>
                                )}

                                <div
                                    className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-500 ${isPopular
                                        ? `bg-white shadow-2xl ${tc.cardShadowPopular}`
                                        : `bg-white border border-gray-200 ${tc.cardHoverBorder} shadow-lg hover:shadow-xl`
                                        } group-hover:-translate-y-1`}
                                >
                                    {/* Popular Badge */}
                                    {isPopular && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                            <div className={`bg-gradient-to-r ${tc.badgeBgPopular} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ${tc.badgeShadowPopular} flex items-center gap-1.5`}>
                                                <Crown className="w-3.5 h-3.5" />
                                                MAIS POPULAR
                                            </div>
                                        </div>
                                    )}

                                    {/* Plan Header */}
                                    <div className="text-start mb-4">
                                        {/* <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${isPopular
                                                ? `bg-gradient-to-br ${tc.iconBgPopular} text-white shadow-lg ${tc.iconShadowPopular}`
                                                : `bg-gray-100 text-gray-600 ${tc.iconHoverBg} ${tc.iconHoverText}`
                                                } transition-all duration-300`}
                                        >
                                            <plan.icon className="w-6 h-6" />
                                        </div> */}
                                        <h3 className="text-xl font-bold text-foreground mb-1">
                                            {plan.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-start flex flex-col items-start mb-8">
                                        {plan.id === "enterprise" ? (
                                            <div className="flex flex-col items-start justify-center h-[54px]">
                                                <span className="text-4xl font-extrabold tracking-tight text-foreground leading-none">
                                                    Customizado
                                                </span>
                                                <span className="text-sm font-semibold text-muted-foreground mt-1">
                                                    Consulte Condições
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-end gap-1">
                                                <span className="text-sm font-semibold text-muted-foreground mb-1">R$</span>
                                                <span className="text-5xl font-extrabold tracking-tight text-foreground leading-none">
                                                    {price}
                                                </span>
                                                <span className="text-sm font-medium text-muted-foreground mb-1">/mês</span>
                                            </div>
                                        )}

                                        {isAnnual && plan.id !== "enterprise" ? (
                                            <p className="text-xs text-emerald-600 font-medium mt-2 bg-emerald-50 px-2 py-1 rounded-md">
                                                Economia de R$ {((plan.monthlyPrice as number) - (plan.annualPrice as number)) * 12}/ano
                                            </p>
                                        ) : (
                                            <p className="text-xs text-transparent mt-2 bg-transparent px-2 py-1 h-[24px]" aria-hidden="true"></p>
                                        )}
                                    </div>
                                    {/* CTA Button */}
                                    <div className="mb-8">
                                        {isPopular ? (
                                            <FreeTrialButton
                                                variant="custom"
                                                className={`w-full h-12 text-base text-white shadow-lg shadow-black/5 bg-gradient-to-r ${tc.btnPrimaryBg} ${tc.btnPrimaryHover} transition-all duration-300 border-0`}
                                            >
                                                {plan.cta}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </FreeTrialButton>
                                        ) : plan.id === "enterprise" ? (
                                            <Button
                                                variant="outline"
                                                className={`w-full h-12 text-base rounded-full border-2 border-gray-200 bg-transparent text-foreground ${tc.btnHoverBorder} ${tc.btnHoverBg} transition-all duration-300`}
                                            >
                                                {plan.cta}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <FreeTrialButton
                                                variant="custom"
                                                className={`w-full h-12 text-base rounded-full border-2 border-gray-200 bg-transparent text-foreground ${tc.btnHoverBorder} ${tc.btnHoverBg} transition-all duration-300`}
                                            >
                                                {plan.cta}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </FreeTrialButton>
                                        )}
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-100 mb-6"></div>

                                    {/* Features */}
                                    <div className="space-y-3.5 flex-1">
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                            O que está incluído
                                        </p>
                                        {plan.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-3 text-sm ${feature.included
                                                    ? "text-foreground"
                                                    : "text-muted-foreground/50"
                                                    }`}
                                            >
                                                {feature.included ? (
                                                    <div className={`w-5 h-5 rounded-full ${tc.featureCheckBg} flex items-center justify-center flex-shrink-0`}>
                                                        <Check className={`w-3 h-3 ${tc.featureCheckText}`} />
                                                    </div>
                                                ) : (
                                                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                                        <X className="w-3 h-3 text-gray-400" />
                                                    </div>
                                                )}
                                                <span className={feature.included ? "" : "line-through"}>
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom text */}
                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground">
                        Todos os preços em Reais (BRL).{""}
                        <span className={`${tc.bottomText} font-medium`}>
                            15 dias grátis
                        </span>{""}
                        em todos os planos. Sem compromisso.
                    </p>
                </div>
            </div>
        </section>
    );
}
