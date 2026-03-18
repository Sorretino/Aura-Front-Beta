"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Building2,
    Users,
    Shield,
    Zap,
    BarChart3,
    Globe,
    CheckCircle,
    Star,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Database,
    Smartphone,
    HeadphonesIcon,
    Play,
    MessageCircle,
    Bot,
    Facebook,
    Send,
    Check,
} from "lucide-react";
import Link from "next/link";
import { type Language, useTranslation } from "@/lib/i18n";
import { LanguageSelector } from "@/components/language-selector";
import { TourGuide } from "@/components/tour-guide";
import { PlanComparator } from "@/components/plan-comparator";
import { TicketSystem } from "@/components/ticket-system";
import { ThemeToggle } from "@/components/theme-toggle";
import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";
import { SharedResources } from "@/components/shared/SharedResources";
import PricingSection from "@/components/PricingSection";
import { SharedFaq } from "@/components/shared/SharedFaq";

// =============================================
// Suporte com IA THEME COLORS
// =============================================
// Gradient: #9333ea → #a855f7 → #c026d3 → #d946ef → #e879f9
// Primary: #9333ea (Suporte com IA blue)
// Secondary: #c026d3 (Suporte com IA purple)
// Accent: #e879f9 (Suporte com IA orange)
// =============================================

export default function SuportePage() {
    const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");
    const [isTourOpen, setIsTourOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 550);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const t = useTranslation(currentLanguage);

    return (
        <div className="min-h-screen bg-background">
            {/* Tour Guide */}
            <TourGuide
                isOpen={isTourOpen}
                onClose={() => setIsTourOpen(false)}
                language={currentLanguage}
            />

            {/* ============================================= */}
            {/* HERO SECTION - Suporte com IA Gradient */}
            {/* ============================================= */}
            <section
                style={{
                    background:
                        "linear-gradient(45deg, #2e1065 0%, #7e22ce 50%, #d946ef 100%)",
                }}
                className="h-screen pt-20 pb-0 text-white overflow-hidden relative"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                <div className="absolute inset-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[770px]">
                        {/* Left Content */}
                        <div className="space-y-8 lg:pr-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                                    <Bot className="w-4 h-4 mr-2" />
                                    Plataforma #1 para Atendimento IA
                                </div>

                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                    <span className="block bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                                        CRM multi agente
                                    </span>
                                    <span className="block">para Suporte com IA</span>
                                    <span className="block text-purple-200">Direct</span>
                                </h1>

                                <p className="text-lg lg:text-xl text-purple-50 leading-relaxed max-w-lg font-medium">
                                    Conecte mais páginas do Suporte Inteligente e gerencie conversas com seus
                                    clientes em uma equipe a partir de
                                    <span className="text-white font-semibold">
                                        {""}
                                        uma única plataforma.
                                    </span>
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="px-8 py-2 bg-white text-fuchsia-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25">
                                        Fale com nossa equipe
                                    </button>
                                    <button className="px-8 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                                        <span>Agendar Demo</span>
                                    </button>
                                </div>

                                <div className="flex items-center space-x-3 text-purple-100">
                                    <Bot className="w-5 h-5" />
                                    <span className="text-sm font-medium">
                                        Ou{""}
                                        <a
                                            href="#"
                                            className="underline hover:no-underline font-semibold text-white hover:text-purple-200 transition-colors"
                                        >
                                            fale com nossa equipe no Suporte Inteligente
                                        </a>
                                    </span>
                                </div>

                                <div className="flex items-center space-x-6 text-sm text-purple-200">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                        <span>7 dias grátis</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                        <span>Suporte 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual - Suporte com IA Icon */}
                        <div className="relative flex justify-center items-center">
                            <div className="relative w-full h-full">
                                {/* Central Suporte com IA Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="/assets/vultimo.png"
                                            alt="Suporte Aura IA"
                                            className="w-full h-auto scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Floating Platform Icons */}
                                {/* <div className="absolute top-72 right-4 animate-float">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-shadow">
                                        <MessageCircle className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                <div
                                    className="absolute bottom-16 left-4 animate-float"
                                    style={{ animationDelay: "1s" }}
                                >
                                    <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-shadow">
                                        <Facebook className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                <div
                                    className="absolute top-16 left-8 animate-float"
                                    style={{ animationDelay: "2s" }}
                                >
                                    <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-400/25 transition-shadow">
                                        <Send className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div
                                    className="absolute bottom-72 right-20 animate-float"
                                    style={{ animationDelay: "0.5s" }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-shadow">
                                        <Bot className="w-5 h-5 text-white" />
                                    </div>
                                </div> */}

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                                </div>
                                <div className="absolute bottom-4 right-8">
                                    <div className="w-4 h-4 bg-purple-300 rounded-full animate-pulse"></div>
                                </div>
                                <div className="absolute top-1/3 -left-4">
                                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* FEATURES SECTION - Chat (Suporte com IA colors) */}
            {/* ============================================= */}
            <div className="bg-white">
                {/* Chat Feature Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <div className="max-w-3xl max-h-3x1 flex items-center justify-center">
                                    <img
                                        src="https://www.callbell.eu/assets/uploads/2023/10/Group-4-4.png"
                                        alt="Interface de chat Suporte com IA"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="w-full space-y-6">
                                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-right">
                                        Converse com seus clientes{""}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#e879f9]">
                                            pelo Atendimento IA
                                        </span>
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed text-right">
                                        Com a caixa de entrada unificada, gerencie conversas entre
                                        equipes, configure respostas rápidas, lembretes e notas
                                        internas. Todas as mensagens do Atendimento IA em um só
                                        lugar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Analytics Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6 lg:order-2">
                                <div className="max-w-3xl max-h-3x1 flex items-center justify-center">
                                    <img
                                        src="https://www.callbell.eu/assets/uploads/2023/10/Group-1000010623-4.svg"
                                        alt="Dashboard de análise Suporte com IA"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6 lg:order-1">
                                <div className="w-full space-y-6">
                                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-left">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#e879f9]">
                                            Analise estatísticas
                                        </span>{""}
                                        e métricas no Atendimento IA
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed text-left">
                                        Visualize KPIs e estatísticas do Suporte Inteligente em tempo real,
                                        volume de mensagens, os tempos de resposta de sua equipe, os
                                        chats que aguardam resposta e muito mais.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Automation Section - Suporte com IA Gradient */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div
                            className="rounded-3xl p-12 text-white"
                            style={{
                                background:
                                    "linear-gradient(135deg, #9333ea 0%, #a855f7 25%, #c026d3 50%, #d946ef 75%, #e879f9 100%)",
                            }}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                                        Automatize o Suporte Inteligente com Chatbots e APIs
                                    </h2>
                                    <p className="text-lg text-purple-100 leading-relaxed">
                                        Crie chatbots avançados otimizados para o Suporte Inteligente de forma
                                        fácil e intuitiva. Planeje automações complexas usando a API
                                        ou a integração oficial do Zapier.
                                    </p>
                                    <button className="px-8 py-3 bg-white text-fuchsia-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                                        Criar uma conta gratuita
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <div className="max-w-3xl max-h-3x1 flex items-center justify-center">
                                            <img
                                                src="https://www.callbell.eu/assets/uploads/2023/04/WhatsApp-6.svg"
                                                alt="Automação Suporte Inteligente"
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </div>
                                        {/* Floating dots */}
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                                        <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fila Direcionamento / Leads Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                        A Cereja do Bolo:{""}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#e879f9]">
                                            Fila Inteligente de Leads
                                        </span>
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Após o atendimento inicial e qualificação feitos pela nossa IA Avançada, distribua os leads quentes perfeitamente para seus corretores ou vendedores usando filas inteligentes e roleta de distribuição.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #9333ea, #c026d3, #e879f9)" }}
                                        >
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Qualificação por IA
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                O Bot interage e coleta todas as informações essenciais primeiro.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #9333ea, #c026d3, #e879f9)" }}
                                        >
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Fila de Distribuição
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Transferência automática para a fila da equipe de corretores via Roleta justa.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #9333ea, #c026d3, #e879f9)" }}
                                        >
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Fechamento Ágil
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                O corretor recebe todo o histórico do chat da IA e assume o atendimento.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="max-w-3xl max-h-3x1 flex items-center justify-center relative p-8 bg-gradient-to-tr from-fuchsia-100 to-purple-50 rounded-3xl overflow-hidden shadow-inner border border-purple-100">
                                    {/* Mockup simplificado representando a Fila */}
                                    <div className="w-full bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-100 relative z-10">
                                        <div className="bg-slate-50 border-b border-gray-100 p-4 flex items-center justify-between">
                                            <span className="font-semibold text-slate-700">Fila de Corretores</span>
                                            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0">3 Leads Aguardando</Badge>
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <div className="flex items-center p-3 bg-purple-50 rounded-xl border border-purple-100 gap-4">
                                                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center"><Bot className="w-5 h-5 text-purple-700" /></div>
                                                <div className="flex-1"><div className="w-24 h-4 bg-purple-200 rounded animate-pulse"></div><div className="w-40 h-3 bg-purple-100 rounded mt-2"></div></div>
                                                <ArrowRight className="text-purple-400" />
                                                <div className="w-10 h-10 bg-amber-100 rounded-full border-2 border-dashed border-amber-300 flex items-center justify-center"><Users className="w-5 h-5 text-amber-600" /></div>
                                            </div>
                                            <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 gap-4 opacity-70">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"><Bot className="w-5 h-5 text-gray-500" /></div>
                                                <div className="flex-1"><div className="w-32 h-4 bg-gray-200 rounded"></div></div>
                                                <ArrowRight className="text-gray-300" />
                                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"><Users className="w-5 h-5 text-gray-400" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Abstract shapes */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                                    <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* ============================================= */}
            {/* PRICING SECTION (Suporte com IA colors) */}
            {/* ============================================= */}
            <PricingSection currentLanguage={currentLanguage} theme="purple" />
            {/* ============================================= */}
            {/* RESOURCES SECTION */}
            {/* ============================================= */}
            <SharedResources
                badgeText="Recursos Principais"
                titleHighlight="Tudo que você precisa"
                titleRest="para o Suporte Inteligente"
                subtitle="Ferramentas poderosas para gerenciar suas conversas e equipe no Atendimento IA com máxima eficiência."
                badgeClass="text-white border-0"
                themeGradientStyle={{ background: "linear-gradient(135deg, #9333ea, #c026d3, #e879f9)" }}
                iconBgClass="bg-gradient-to-r from-[#9333ea]/20 to-[#e879f9]/20 group-hover:from-[#9333ea]/30 group-hover:to-[#e879f9]/30"
                iconColorClass="text-[#c026d3]"
                themeGradientClass="bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#e879f9]"
                features={[
                    { icon: Database, title: "Caixa de Entrada Unificada", desc: "Todas as mensagens do Atendimento IA centralizadas em uma única interface." },
                    { icon: Shield, title: "Multi Agentes", desc: "Conecte vários agentes ao mesmo perfil. Distribua conversas e gerencie." },
                    { icon: Zap, title: "Chatbots Inteligentes", desc: "Automatize respostas otimizadas para Suporte com IA." },
                    { icon: Globe, title: "Integração com API", desc: "Conecte o Suporte Inteligente com ferramentas favoritas." },
                    { icon: Smartphone, title: "App Mobile", desc: "App mobile iOS e Android." },
                    { icon: HeadphonesIcon, title: "Suporte 24/7", desc: "Equipe especializada disponivel." }
                ]}
            />



            {/* ============================================= */}
            {/* HOW IT WORKS SECTION */}
            {/* ============================================= */}
            <SharedHowItWorks
                badgeText="Como Funciona"
                badgeClass="text-white border-0"
                titleHighlight="Simples de configurar,"
                titleRest="poderoso de usar"
                subtitle="Em apenas alguns passos você terá o Atendimento IA integrado e funcionando perfeitamente."
                themeGradientStyle={{ background: "linear-gradient(135deg, #9333ea, #c026d3, #e879f9)" }}
                themeGradientClass="bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#e879f9]"
                steps={[
                    { num: "1", title: "Conecte sua conta", desc: "Vincule sua página do Suporte Inteligente à plataforma em menos de 2 minutos." },
                    { num: "2", title: "Convide sua equipe", desc: "Adicione seus agentes e configure as permissões." },
                    { num: "3", title: "Comece a Atender", desc: "Gerencie todas as conversas do Atendimento IA." }
                ]}
            />

            <SharedFaq
                titleHighlight="Esclareça"
                titleRest="suas dúvidas"
                subtitle="Nossa IA e Fila de Leads foram projetadas para serem simples e escaláveis. Confira o que as empresas mais perguntam."
                theme="purple"
                variant="solid-cards"
                items={[
                    {
                        question: "Como a IA consegue qualificar leads antes do corretor?",
                        answer: "O Bot identifica a intenção, envia perguntas de triagem e capta dados essenciais do lead, montando um relatório rápido no chat antes de passar diretamente para a Roleta de Atendimento."
                    },
                    {
                        question: "A Fila Inteligente distribui os leads de forma justa?",
                        answer: "Sim! Implementamos uma Roleta Inteligente (Round Robin) e também avaliamos quem da equipe está Online ou Ocioso para mandar o Lead quente instantaneamente."
                    },
                    {
                        question: "Posso intervir se o bot estiver falando com o cliente?",
                        answer: "Com certeza. Todo chat é monitorado em tempo real e qualquer corretor ou gerente habilitado pode 'Tirar da IA' e assumir o bate-papo a qualquer momento na nossa tela omnicanal."
                    },
                    {
                        question: "O corretor recebe o histórico completo da IA?",
                        answer: "Sim. A transição é suave e o corretor vê todo o histórico do chat em tempo real sem o usuário precisar repetir dados. Fica tudo no mesmo card."
                    }
                ]}
            />

            {/* ============================================= */}
            {/* CTA SECTION - Suporte com IA Gradient */}
            {/* ============================================= */}
            <section
                className="py-20"
                style={{
                    background:
                        "linear-gradient(45deg, #2e1065 0%, #7e22ce 50%, #d946ef 100%)",
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Pronto para transformar seu atendimento no Suporte Inteligente?
                        </h2>
                        <p className="text-xl text-white/90">
                            Junte-se a mais de 1.000 empresas que já confiam na nossa
                            plataforma para gerenciar o Atendimento IA.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-neutral-800 hover:bg-gray/10 h-12 px-8"
                            >
                                Falar com nossa equipe
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-transparent hover:text-purple-200 h-12 px-8"
                            >
                                Agendar Demo
                            </Button>
                        </div>
                        <p className="text-sm text-white">
                            7 dias grátis • Sem cartão de crédito • Suporte 24/7
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer rendered globally from layout */}
        </div>
    );
}
