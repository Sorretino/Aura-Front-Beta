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

// =============================================
// BRAND COLORS — ROXO / INDIGO (Identidade do Produto)
// Primary: #6366F1 (Indigo-500)
// Dark:    #4F46E5 (Indigo-600)
// Light:   #818CF8 (Indigo-400)
// Accent:  #A78BFA (Violet-400)
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-[#0a0a1a] dark:via-black dark:to-[#0d0a1f]"></div>

        {/* Decorative blurred circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[770px] text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-500/10 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Plataforma de atendimento multi-canal
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 max-w-4xl">
              <span className="text-foreground">
                Centralize seus
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
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
                className="h-14 px-10 text-lg rounded-full border-2 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all duration-300"
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
      <section className="py-20 bg-white dark:bg-black">
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
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-right">
                  Caixa de entrada{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                    unificada
                  </span>{" "}
                  para todos os canais
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-right">
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
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                    Métricas e relatórios
                  </span>{" "}
                  em tempo real
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                  Visualize KPIs, tempo de resposta, volume de mensagens e
                  performance da equipe em dashboards personalizáveis. Tome
                  decisões baseadas em dados.
                </p>
              </div>
            </div>
          </div>

          {/* Automation Section — Gradient Card */}
          <div
            className="rounded-3xl p-12 text-white"
            style={{
              background:
                "linear-gradient(135deg, #4F46E5 0%, #6366F1 40%, #8B5CF6 70%, #A78BFA 100%)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
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
      <section id="features-section" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border-0">
              Recursos Principais
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Tudo que você precisa
              </span>{" "}
              <span className="text-foreground">para atender melhor</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ferramentas poderosas para centralizar conversas, automatizar
              processos e escalar seu atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Multi-Canal",
                desc: "WhatsApp, Instagram, Messenger e Telegram em uma única caixa de entrada.",
              },
              {
                icon: Users,
                title: "Multi-Agentes",
                desc: "Conecte vários agentes ao mesmo canal. Distribua conversas automaticamente.",
              },
              {
                icon: Bot,
                title: "Chatbots Inteligentes",
                desc: "Automatize respostas, qualifique leads e transfira para agentes humanos.",
              },
              {
                icon: TrendingUp,
                title: "Relatórios em Tempo Real",
                desc: "Dashboards com métricas de atendimento, tempo de resposta e satisfação.",
              },
              {
                icon: Globe,
                title: "API & Integrações",
                desc: "Conecte com CRMs, ERPs e ferramentas via API robusta ou Zapier.",
              },
              {
                icon: HeadphonesIcon,
                title: "Suporte 24/7",
                desc: "Equipe especializada disponível 24 horas por dia, 7 dias por semana.",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* HOW IT WORKS */}
      {/* ============================================= */}
      <section className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border-0">
              Como Funciona
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Simples de configurar,
              </span>{" "}
              poderoso de usar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Em apenas alguns passos você terá sua plataforma de atendimento
              funcionando perfeitamente.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/25">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold">Conecte seus canais</h3>
              <p className="text-muted-foreground">
                Vincule WhatsApp, Instagram, Messenger e Telegram em menos de 5
                minutos.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/25">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold">Convide sua equipe</h3>
              <p className="text-muted-foreground">
                Adicione seus agentes e configure as permissões e rotas de
                atendimento para cada um.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/25">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold">Comece a Atender</h3>
              <p className="text-muted-foreground">
                Acesse o dashboard e gerencie todos os seus canais em uma
                interface unificada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* PRICING SECTION — Modern Redesign */}
      {/* ============================================= */}
      <PricingSection currentLanguage={currentLanguage} />

      {/* ============================================= */}
      {/* TESTIMONIALS */}
      {/* ============================================= */}
      <section id="testimonials-section" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border-0">
              Depoimentos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de 1.000 empresas confiam em nossa plataforma para centralizar
              seus canais de atendimento.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                text: "A plataforma revolucionou nossa forma de atender clientes. Centralizamos WhatsApp e Instagram em um só lugar e a produtividade triplicou.",
                name: "Maria Rodriguez",
                role: "CTO, TechCorp",
                initials: "MR",
              },
              {
                text: "Implementamos em 2 semanas e já estamos atendendo 50+ clientes em múltiplos canais. O suporte é excepcional e a plataforma é muito intuitiva.",
                name: "João Silva",
                role: "CEO, StartupXYZ",
                initials: "JS",
              },
              {
                text: "A escalabilidade é impressionante. Crescemos de 10 para 200 agentes sem nenhum problema de performance. Recomendo fortemente!",
                name: "Ana Santos",
                role: "Diretora, MegaCorp",
                initials: "AS",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
