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
  Instagram,
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

// =============================================
// INSTAGRAM THEME COLORS
// =============================================
// Gradient: #f09433 → #e6683c → #dc2743 → #cc2366 → #bc1888
// Primary: #E1306C (Instagram pink)
// Secondary: #833AB4 (Instagram purple)
// Accent: #F77737 (Instagram orange)
// =============================================

export default function InstagramPage() {
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
      {/* HERO SECTION - Instagram Gradient */}
      {/* ============================================= */}
      <section
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
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
                  <Instagram className="w-4 h-4 mr-2" />
                  Plataforma #1 para Instagram Direct
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                    CRM multi agente
                  </span>
                  <span className="block">para Instagram</span>
                  <span className="block text-pink-200">Direct</span>
                </h1>

                <p className="text-lg lg:text-xl text-pink-50 leading-relaxed max-w-lg font-medium">
                  Conecte mais páginas do Instagram e gerencie conversas com seus
                  clientes em uma equipe a partir de
                  <span className="text-white font-semibold">
                    {" "}
                    uma única plataforma.
                  </span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-2 bg-white text-pink-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25">
                    Fale com nossa equipe
                  </button>
                  <button className="px-8 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    <span>Agendar Demo</span>
                  </button>
                </div>

                <div className="flex items-center space-x-3 text-pink-100">
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Ou{" "}
                    <a
                      href="#"
                      className="underline hover:no-underline font-semibold text-white hover:text-pink-200 transition-colors"
                    >
                      fale com nossa equipe no Instagram
                    </a>
                  </span>
                </div>

                <div className="flex items-center space-x-6 text-sm text-pink-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                    <span>7 dias grátis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                    <span>Suporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual - Instagram Icon */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full h-full">
                {/* Central Instagram Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://www.callbell.eu/assets/uploads/2023/04/Instagram-4.svg"
                      alt="instagram"
                      className="w-full h-auto scale-150"
                    />
                  </div>
                </div>

                {/* Floating Platform Icons */}
                <div className="absolute top-72 right-4 animate-float">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-shadow">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div
                  className="absolute bottom-16 left-4 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-shadow">
                    <Facebook className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div
                  className="absolute top-16 left-8 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-400/25 transition-shadow">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div
                  className="absolute bottom-72 right-20 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-shadow">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-4 right-8">
                  <div className="w-4 h-4 bg-pink-300 rounded-full animate-pulse"></div>
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
      {/* FEATURES SECTION - Chat (Instagram colors) */}
      {/* ============================================= */}
      <div className="bg-white dark:bg-black">
        {/* Chat Feature Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="max-w-3xl max-h-3x1 flex items-center justify-center">
                  <img
                    src="https://www.callbell.eu/assets/uploads/2023/10/Group-4-4.png"
                    alt="Interface de chat Instagram"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-full space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-right">
                    Converse com seus clientes{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">
                      pelo Instagram Direct
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-right">
                    Com a caixa de entrada unificada, gerencie conversas entre
                    equipes, configure respostas rápidas, lembretes e notas
                    internas. Todas as mensagens do Instagram Direct em um só
                    lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="py-20 bg-gray-50 dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 lg:order-2">
                <div className="max-w-3xl max-h-3x1 flex items-center justify-center">
                  <img
                    src="https://www.callbell.eu/assets/uploads/2023/10/Group-1000010623-4.svg"
                    alt="Dashboard de análise Instagram"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:order-1">
                <div className="w-full space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-left">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">
                      Analise estatísticas
                    </span>{" "}
                    e métricas no Instagram Direct
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                    Visualize KPIs e estatísticas do Instagram em tempo real,
                    volume de mensagens, os tempos de resposta de sua equipe, os
                    chats que aguardam resposta e muito mais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section - Instagram Gradient */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-12 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    Automatize o Instagram com Chatbots e APIs
                  </h2>
                  <p className="text-lg text-pink-100 leading-relaxed">
                    Crie chatbots avançados otimizados para o Instagram de forma
                    fácil e intuitiva. Planeje automações complexas usando a API
                    ou a integração oficial do Zapier.
                  </p>
                  <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                    Criar uma conta gratuita
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="max-w-3xl max-h-3x1 flex items-center justify-center">
                      <img
                        src="https://www.callbell.eu/assets/uploads/2023/04/WhatsApp-6.svg"
                        alt="Automação Instagram"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    {/* Floating dots */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Section */}
        <section className="py-20 bg-gray-50 dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                    Envie{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">
                      campanhas de marketing
                    </span>{" "}
                    com o módulo de broadcast
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Crie e envie campanhas personalizadas para milhares de
                    contatos simultaneamente pelo Instagram. Acompanhe resultados
                    em tempo real e otimize suas estratégias de marketing.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Importar contatos
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Importe sua base de contatos de forma simples e segura
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Prepare seu texto
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Crie mensagens personalizadas com templates aprovados
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                      }}
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Analise os principais indicadores
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Acompanhe entrega, leitura e taxa de resposta em tempo
                        real
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="max-w-3xl max-h-3x1 flex items-center justify-center">
                  <img
                    src="https://www.callbell.eu/assets/uploads/2023/04/WhatsAppConvoPerspective-min.png"
                    alt="Campanha no celular"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================= */}
      {/* RESOURCES SECTION (Instagram colors) */}
      {/* ============================================= */}
      <section id="features-section" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="text-white border-0"
              style={{
                background:
                  "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
              }}
            >
              Recursos Principais
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">
                Tudo que você precisa
              </span>{" "}
              <span className="text-foreground">para o Instagram</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ferramentas poderosas para gerenciar suas conversas e equipe no
              Instagram Direct com máxima eficiência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#f09433]/20 to-[#bc1888]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#f09433]/30 group-hover:to-[#bc1888]/30 transition-all">
                  <Database className="h-6 w-6 text-[#dc2743]" />
                </div>
                <CardTitle>Caixa de Entrada Unificada</CardTitle>
                <CardDescription>
                  Todas as mensagens do Instagram Direct centralizadas em uma
                  única interface, com histórico completo de conversas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#f09433]/20 to-[#bc1888]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#f09433]/30 group-hover:to-[#bc1888]/30 transition-all">
                  <Shield className="h-6 w-6 text-[#dc2743]" />
                </div>
                <CardTitle>Multi Agentes</CardTitle>
                <CardDescription>
                  Conecte vários agentes ao mesmo perfil do Instagram. Distribua
                  conversas e gerencie atendimentos em equipe.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#f09433]/20 to-[#bc1888]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#f09433]/30 group-hover:to-[#bc1888]/30 transition-all">
                  <Zap className="h-6 w-6 text-[#dc2743]" />
                </div>
                <CardTitle>Chatbots Inteligentes</CardTitle>
                <CardDescription>
                  Automatize respostas com chatbots otimizados para Instagram.
                  Qualifique leads automaticamente.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#f09433]/20 to-[#bc1888]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#f09433]/30 group-hover:to-[#bc1888]/30 transition-all">
                  <Globe className="h-6 w-6 text-[#dc2743]" />
                </div>
                <CardTitle>Integração com API</CardTitle>
                <CardDescription>
                  Conecte o Instagram com suas ferramentas favoritas via API
                  robusta e integração com Zapier.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#f09433]/20 to-[#bc1888]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#f09433]/30 group-hover:to-[#bc1888]/30 transition-all">
                  <Smartphone className="h-6 w-6 text-[#dc2743]" />
                </div>
                <CardTitle>App Mobile</CardTitle>
                <CardDescription>
                  Responda mensagens do Instagram de qualquer lugar com nosso
                  aplicativo mobile para iOS e Android.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#f09433]/20 to-[#bc1888]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#f09433]/30 group-hover:to-[#bc1888]/30 transition-all">
                  <HeadphonesIcon className="h-6 w-6 text-[#dc2743]" />
                </div>
                <CardTitle>Suporte 24/7</CardTitle>
                <CardDescription>
                  Equipe especializada disponível 24 horas por dia, 7 dias por
                  semana para ajudar você.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* HOW IT WORKS SECTION */}
      {/* ============================================= */}
      <section className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="text-white border-0"
              style={{
                background:
                  "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
              }}
            >
              Como Funciona
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">
                Simples de configurar,
              </span>{" "}
              poderoso de usar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Em apenas alguns passos você terá o Instagram Direct integrado e
              funcionando perfeitamente.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                }}
              >
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold">Conecte sua conta</h3>
              <p className="text-muted-foreground">
                Vincule sua página do Instagram à plataforma em menos de 2
                minutos. Sem complicações.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                }}
              >
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold">Convide sua equipe</h3>
              <p className="text-muted-foreground">
                Adicione seus agentes e configure as permissões e rotas de
                atendimento para cada um.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                }}
              >
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold">Comece a Atender</h3>
              <p className="text-muted-foreground">
                Gerencie todas as conversas do Instagram Direct em uma única
                interface poderosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* PRICING SECTION (Instagram colors) */}
      {/* ============================================= */}
      <section id="pricing-section" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="text-white border-0"
              style={{
                background:
                  "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
              }}
            >
              Planos e Preços
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">
                {t.pricingTitle}
              </span>{" "}
              <span className="text-foreground">{t.pricingTitleSub}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.pricingDescription}
            </p>
            <div className="pt-4">
              <PlanComparator language={currentLanguage} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-border dark:border-white/10 hover:border-[#f09433]/50 transition-colors dark:bg-gradient-to-b from-neutral-900 to-neutral-950 h-full">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Essencial</CardTitle>
                <CardDescription>Perfeito para começar</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 99</span>
                  <span className="text-muted-foreground">{t.month}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <Check className="w-5 h-5 text-[#dc2743]" />
                    <span>Até 5 agentes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>10GB de armazenamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Suporte por email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>1 conta Instagram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Chatbot básico</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-[#f09433] hover:bg-[#e6683c] text-white">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative rounded-xl dark:bg-gradient-to-b from-neutral-900 to-neutral-950 h-full transition-colors border-2 border-[#dc2743] dark:border-[#dc2743]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge
                  className="text-white px-4 py-1 border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                  }}
                >
                  {t.popular}
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>Para empresas em crescimento</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 299</span>
                  <span className="text-muted-foreground">{t.month}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Até 25 agentes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>100GB de armazenamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Suporte prioritário</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>5 contas Instagram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Relatórios detalhados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Integrações ilimitadas</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-8 text-white border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                  }}
                >
                  Começar Teste
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-border dark:border-white/10 hover:border-[#bc1888]/50 transition-colors dark:bg-gradient-to-b from-neutral-900 to-neutral-950 h-full">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Para grandes organizações</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 899</span>
                  <span className="text-muted-foreground">{t.month}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Agentes ilimitados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>1TB de armazenamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Suporte 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>SLA 99.9%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Gerente dedicado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#dc2743]" />
                    <span>Contas ilimitadas</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-[#bc1888] hover:bg-[#bc1888]/90 text-white">
                  Falar com Vendas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================= */}
      <section id="testimonials-section" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              className="text-white border-0"
              style={{
                background:
                  "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
              }}
            >
              Depoimentos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de 1.000 empresas confiam em nossa plataforma para gerenciar
              o atendimento via Instagram Direct.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Gerenciar o Instagram Direct de vários perfis ficou muito mais
                  fácil. A equipe consegue atender 3x mais clientes agora com a
                  caixa unificada."
                </p>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                    }}
                  >
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">
                      CTO, TechCorp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Implementamos em 2 semanas e o atendimento via Instagram
                  melhorou drasticamente. O suporte é excepcional e a plataforma
                  é muito intuitiva."
                </p>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                    }}
                  >
                    <span className="text-white font-semibold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold">João Silva</p>
                    <p className="text-sm text-muted-foreground">
                      CEO, StartupXYZ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Os chatbots para Instagram reduziram nosso tempo de resposta
                  em 80%. Os relatórios em tempo real nos ajudam a tomar decisões
                  melhores."
                </p>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                    }}
                  >
                    <span className="text-white font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ana Santos</p>
                    <p className="text-sm text-muted-foreground">
                      Diretora, MegaCorp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* CTA SECTION - Instagram Gradient */}
      {/* ============================================= */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Pronto para transformar seu atendimento no Instagram?
            </h2>
            <p className="text-xl text-white/90">
              Junte-se a mais de 1.000 empresas que já confiam na nossa
              plataforma para gerenciar o Instagram Direct.
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
                className="bg-transparent border-white text-white hover:bg-transparent hover:text-pink-200 h-12 px-8"
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
