"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    Zap,
    Globe,
    CheckCircle,
    Star,
    ArrowRight,
    HeadphonesIcon,
    MessageCircle,
    Instagram,
    Facebook,
    Send,
    Bot,
    Layers,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { type Language, useTranslation } from "@/lib/i18n";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { FreeTrialButton } from "@/components/FreeTrial";
import PricingSection from "@/components/PricingSection";
import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";
import { SharedResources } from "@/components/shared/SharedResources";
import { SharedFaq } from "@/components/shared/SharedFaq";
import TestimonialsSection from "@/components/shared/SharedTestimonials";

// =============================================
// BRAND COLORS — ROXO / INDIGO (Identidade do Produto)
// Primary: #6366F1 (Indigo-500)
// Dark: #4F46E5 (Indigo-600)
// Light: #818CF8 (Indigo-400)
// Accent: #A78BFA (Violet-400)
// =============================================

export default function HomePage() {
    const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const t = useTranslation(currentLanguage);

    return (
        <div className="min-h-screen bg-background">
            {/* ============================================= */}
            {/* HERO SECTION — Identidade do Produto (Roxo) */}
            {/* ============================================= */}
            <section className="relative h-screen pt-20 pb-0 overflow-hidden">
                {/* Background gradient roxo sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50"></div>

                {/* Decorative blurred circles */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center justify-center min-h-[770px] text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-8">
                            <Zap className="w-4 h-4 mr-2" />
                            Plataforma de atendimento multi-canal
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 max-w-4xl">
                            <span className="text-foreground">
                                Centralize seus
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
                                canais de atendimento
                            </span>
                            <br />
                            <span className="text-foreground">
                                em uma única plataforma
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Gerencie conversas do WhatsApp, Instagram, Facebook Messenger e
                            Telegram em uma única interface poderosa. Multi-agentes, chatbots e
                            relatórios — tudo em um só lugar.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <FreeTrialButton
                                variant="primary"
                                className="h-14 px-10 text-lg"
                            >
                                Comece grátis — 15 dias
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </FreeTrialButton>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-14 px-10 text-lg rounded-full border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all duration-300"
                            >
                                Agendar Demo
                            </Button>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-12">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-indigo-500" />
                                <span>15 dias grátis</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-indigo-500" />
                                <span>Sem cartão de crédito</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-indigo-500" />
                                <span>Suporte 24/7</span>
                            </div>
                        </div>

                        {/* Channel Icons */}
                        <div className="flex items-center gap-6">
                            <Link
                                href="/whatsapp"
                                className="group flex flex-col items-center gap-2"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-all duration-300 group-hover:scale-110">
                                    <MessageCircle className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    WhatsApp
                                </span>
                            </Link>
                            <Link
                                href="/instagram"
                                className="group flex flex-col items-center gap-2"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300 group-hover:scale-110">
                                    <Instagram className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    Instagram
                                </span>
                            </Link>
                            <div className="group flex flex-col items-center gap-2 cursor-pointer">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                                    <Facebook className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    Messenger
                                </span>
                            </div>
                            <div className="group flex flex-col items-center gap-2 cursor-pointer">
                                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-sky-500/30 transition-all duration-300 group-hover:scale-110">
                                    <Send className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    Telegram
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* FEATURES SECTION — O que oferecemos */}
            {/* ============================================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Chat Feature */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="space-y-6">
                            <div className="max-w-3xl flex items-center justify-center">
                                <img
                                    src="https://www.callbell.eu/assets/uploads/2023/10/Group-4-4.png"
                                    alt="Interface de chat multi-canal"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full space-y-6">
                                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-right">
                                    Caixa de entrada {""}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                                        unificada
                                    </span>{" "}
                                    para todos os canais
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-right">
                                    Centralize todas as conversas de WhatsApp, Instagram Direct,
                                    Facebook Messenger e Telegram em um só lugar. Sua equipe pode
                                    responder clientes de forma organizada e eficiente.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Analytics */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="space-y-6 lg:order-2">
                            <div className="max-w-3xl flex items-center justify-center">
                                <img
                                    src="https://www.callbell.eu/assets/uploads/2023/10/Group-1000010623-4.svg"
                                    alt="Dashboard de análise"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 lg:order-1">
                            <div className="w-full space-y-6">
                                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                                        Métricas e relatórios
                                    </span>{""}
                                    em tempo real
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                                    Visualize KPIs, tempo de resposta, volume de mensagens e
                                    performance da equipe em dashboards personalizáveis. Tome
                                    decisões baseadas em dados.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Automation Section — Gradient Card */}
                    <div
                        className="rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
                        style={{
                            background:
                                "linear-gradient(135deg, #4F46E5 0%, #6366F1 40%, #8B5CF6 70%, #A78BFA 100%)",
                        }}
                    >
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
                            <div className="space-y-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                    Automatize com Chatbots e APIs
                                </h2>
                                <p className="text-lg text-indigo-100 leading-relaxed">
                                    Configure chatbots inteligentes para responder automaticamente
                                    perguntas frequentes, qualificar leads e transferir conversas
                                    para agentes humanos quando necessário. Integre via API ou
                                    Zapier.
                                </p>
                                <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                                    Criar uma conta gratuita
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="max-w-3xl flex items-center justify-center">
                                        <img
                                            src="https://www.callbell.eu/assets/uploads/2023/04/WhatsApp-6.svg"
                                            alt="Automação com chatbots"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-violet-300 rounded-full animate-pulse"></div>
                                    <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ============================================= */}
            {/* RESOURCES SECTION — Recursos Principais */}
            {/* ============================================= */}
            <SharedResources
                badgeText="Recursos Principais"
                titleHighlight="Tudo que você precisa"
                titleRest="para atender melhor"
                subtitle="Ferramentas poderosas para centralizar conversas, automatizar processos e escalar seu atendimento."
                badgeClass="bg-indigo-100 text-indigo-700 border-0"
                iconBgClass="bg-indigo-100 group-hover:bg-indigo-200"
                iconColorClass="text-indigo-600"
                themeGradientClass="bg-gradient-to-r from-indigo-600 to-violet-600"
                features={[
                    { icon: Layers, title: "Multi-Canal", desc: "WhatsApp, Instagram, Messenger e Telegram em uma única caixa de entrada." },
                    { icon: Users, title: "Multi-Agentes", desc: "Conecte vários agentes ao mesmo canal. Distribua conversas." },
                    { icon: Bot, title: "Chatbots Inteligentes", desc: "Automatize respostas, qualifique leads." },
                    { icon: TrendingUp, title: "Relatórios em Tempo Real", desc: "Dashboards com métricas de atendimento." },
                    { icon: Globe, title: "API & Integrações", desc: "Conecte com CRMs, ERPs e ferramentas via API." },
                    { icon: HeadphonesIcon, title: "Suporte 24/7", desc: "Equipe especializada disponível 24 horas." }
                ]}
            />



            {/* ============================================= */}
            {/* HOW IT WORKS */}
            {/* ============================================= */}
            <SharedHowItWorks
                badgeText="Como Funciona"
                badgeClass="bg-indigo-100 text-indigo-700 border-0"
                titleHighlight="Simples de configurar,"
                titleRest="poderoso de usar"
                subtitle="Em apenas alguns passos você terá sua plataforma de atendimento funcionando perfeitamente."
                themeGradientStyle={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                themeGradientClass="bg-gradient-to-r from-indigo-600 to-violet-600"
                steps={[
                    { num: "1", title: "Conecte seus canais", desc: "Vincule WhatsApp, Instagram, Messenger e Telegram." },
                    { num: "2", title: "Convide sua equipe", desc: "Adicione seus agentes e configure as rotas de atendimento." },
                    { num: "3", title: "Comece a Atender", desc: "Acesse o dashboard e gerencie todos os seus canais." }
                ]}
            />


            {/* ============================================= */}
            {/* PRICING SECTION — Modern Redesign */}
            {/* ============================================= */}
            <PricingSection currentLanguage={currentLanguage} />

            {/* ============================================= */}
            {/* TESTIMONIALS */}
            {/* ============================================= */}
            <TestimonialsSection theme="indigo" />

            {/* ============================================= */}
            {/*      FAQ SECTION — Gradient Roxo */}
            {/* ============================================= */}
            <SharedFaq
                titleHighlight="Perguntas"
                titleRest="Frequentes"
                subtitle="As respostas para as dúvidas mais comuns de quem está migrando para uma operação de atendimento Omnichannel Multi-agente."
                theme="indigo"
                variant="solid-cards"
                items={[
                    {
                        question: "O que é o Aura CRM e como ele ajuda nas vendas?",
                        answer: "Somos uma Central de Atendimento Omnichannel. Unificamos as caixas do WhatsApp, Instagram, Messenger e Telegram em um único dashboard para que toda a sua equipe humana consiga interagir usando as mesmas contas sem derrubar sessões."
                    },
                    {
                        question: "Posso usar meu próprio WhatsApp atual com múltiplos atendentes?",
                        answer: "Exatamente! O Aura CRM suporta dois formatos incríveis: você pode usar a API Oficial da Meta para estabilidade e escala máxima, ou simplesmente escaneando o QRCode na tela. Em ambos os casos, toda sua equipe responde clientes simultaneamente sem queda de sessão!"
                    },
                    {
                        question: "O sistema possui Chatbots Inteligentes?",
                        answer: "Sim! Disponibilizamos um construtor de Fluxos e um assistente IA formidável capaz de pré-qualificar interessados, recolher contatos, solucionar dúvidas repetitivas 24h por dia e enviar os 'Leads Quentes' direto para sua Fila de Corretores."
                    },
                    {
                        question: "Como as 'Filas Inteligentes' e 'Roletas' funcionam?",
                        answer: "É simples: clientes entram e são distribuídos automaticamente e de forma igualitária (Round Robin) apenas para os atendentes que estiverem com o status 'Online'. Isso evita esquecimentos e agiliza absurdamente o fechamento."
                    },
                    {
                        question: "Existe alguma automação ou integração (APIs / Webhooks)?",
                        answer: "Com certeza. Nós possuímos integrações robustas para que você conecte o Aura CRM com seu ERP, banco de dados ou fluxos de marketing, permitindo automações via APIs fáceis e envios de mensagens programadas."
                    }
                ]}
            />
            {/* ============================================= */}
            {/* CTA SECTION — Gradient Roxo */}
            {/* ============================================= */}
            <section
                className="py-20"
                style={{
                    background:
                        "linear-gradient(135deg, #4F46E5 0%, #6366F1 40%, #8B5CF6 70%, #A78BFA 100%)",
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Pronto para transformar seu atendimento?
                        </h2>
                        <p className="text-xl text-white/90">
                            Junte-se a mais de 1.000 empresas que já centralizam seus canais de
                            atendimento em uma única plataforma.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-indigo-700 hover:bg-gray-100 h-12 px-8 font-semibold transition-all duration-300 hover:scale-105"
                            >
                                Falar com nossa equipe
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white/10 h-12 px-8"
                            >
                                Agendar Demo
                            </Button>
                        </div>
                        <p className="text-sm text-white/80">
                            7 dias grátis • Sem cartão de crédito • Suporte 24/7
                        </p>
                    </div>
                </div>
            </section>

            {/* <WhatsAppWidget /> */}
        </div>
    );
}
