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
    cta: "Iniciar Teste Grátis",
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
    annualPrice: 719,
    color: "purple",
    popular: false,
    cta: "Falar com Vendas",
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
}: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const t = useTranslation(currentLanguage);

  return (
    <section id="pricing-section" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-950 dark:to-black"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border-0 px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Planos e Preços
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-foreground">Escolha o plano </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
              ideal para você
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem 15 dias de teste grátis. Cancele quando quiser.
          </p>

          {/* Toggle Mensal / Anual */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <span
              className={`text-sm font-medium transition-colors ${
                !isAnnual
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual
                  ? "bg-indigo-600"
                  : "bg-gray-300 dark:bg-neutral-700"
              }`}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isAnnual ? "translate-x-7" : "translate-x-0.5"
                }`}
              ></div>
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                isAnnual
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Anual
            </span>
            {isAnnual && (
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-1 rounded-full animate-in fade-in">
                Economize 20%
              </span>
            )}
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
                className={`relative group rounded-2xl transition-all duration-500 ${
                  isPopular
                    ? "lg:-mt-4 lg:mb-0"
                    : ""
                }`}
              >
                {/* Popular glow effect */}
                {isPopular && (
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-2xl opacity-100 blur-[1px]"></div>
                )}

                <div
                  className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-500 ${
                    isPopular
                      ? "bg-white dark:bg-neutral-900 shadow-2xl shadow-indigo-500/10"
                      : "bg-white dark:bg-neutral-900/80 border border-gray-200 dark:border-neutral-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-lg hover:shadow-xl"
                  } group-hover:-translate-y-1`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/25 flex items-center gap-1.5">
                        <Crown className="w-3.5 h-3.5" />
                        MAIS POPULAR
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                        isPopular
                          ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                          : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                      } transition-all duration-300`}
                    >
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="text-5xl font-extrabold tracking-tight text-foreground">
                        {price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      por mês {isAnnual && "• cobrança anual"}
                    </p>
                    {isAnnual && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                        Economia de R$ {(plan.monthlyPrice - plan.annualPrice) * 12}/ano
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    {isPopular ? (
                      <FreeTrialButton
                        variant="primary"
                        className="w-full h-12 text-base"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </FreeTrialButton>
                    ) : plan.id === "enterprise" ? (
                      <Button
                        variant="outline"
                        className="w-full h-12 text-base rounded-full border-2 border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all duration-300"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <FreeTrialButton
                        variant="outline"
                        className="w-full h-12 text-base"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </FreeTrialButton>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 dark:border-neutral-800 mb-6"></div>

                  {/* Features */}
                  <div className="space-y-3.5 flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      O que está incluído
                    </p>
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground/50"
                        }`}
                      >
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                            <X className="w-3 h-3 text-gray-400 dark:text-neutral-600" />
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
            Todos os preços em Reais (BRL).{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              15 dias grátis
            </span>{" "}
            em todos os planos. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
