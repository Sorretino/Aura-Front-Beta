"use client";

import { useEffect, useState } from "react";
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
  Shield,
  Zap,
  BarChart3,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Database,
  Smartphone,
  HeadphonesIcon,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  Check,
  Bot,
  Layers,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { type Language, useTranslation } from "@/lib/i18n";
import { PlanComparator } from "@/components/plan-comparator";
import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";
import { SharedResources } from "@/components/shared/SharedResources";
import { SharedCta } from "@/components/shared/SharedCta";
import { SharedHero } from "@/components/shared/SharedHero";

// =============================================
// MESSENGER THEME COLORS
// Primary: #0084FF (Messenger Blue)
// Gradient: #0084FF → #00C6FF
// =============================================

export default function MessengerPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");
  const t = useTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================= */}
      {/* HERO SECTION - Messenger Blue Gradient */}
      {/* ============================================= */}
      <SharedHero
        gradientStyle={{
          background: "linear-gradient(135deg, #0063CC 0%, #0084FF 40%, #00A3FF 70%, #00C6FF 100%)",
        }}
        badgeText="Plataforma #1 para Facebook Messenger"
        BadgeIcon={Facebook}
        titlePart1="CRM multi agente"
        titlePart2="para Facebook"
        titleHighlight="Messenger"
        titleHighlightColor="text-blue-200"
        description={
          <>
            Conecte sua página do Facebook e gerencie conversas do
            Messenger com sua equipe a partir de{" "}
            <span className="text-white font-semibold">
              uma única plataforma.
            </span>
          </>
        }
        primaryButtonText="Fale com nossa equipe"
        primaryButtonTextColor="text-blue-600"
        secondaryButtonText="Agendar Demo"
        contactLinkText="fale com nossa equipe no Messenger"
        ContactIcon={Facebook}
        imageSrc="https://www.callbell.eu/assets/uploads/2023/04/Messenger-4.svg"
        floatingIcons={[
          {
            Icon: MessageCircle,
            bgClass: "w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl hover:shadow-green-500/25",
            positionClass: "top-72 right-4",
          },
          {
            Icon: Instagram,
            bgClass: "w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl",
            positionClass: "bottom-16 left-4",
            animationDelay: "1s",
          },
          {
            Icon: Send,
            bgClass: "w-12 h-12 bg-sky-400 rounded-xl",
            positionClass: "top-16 left-8",
            animationDelay: "2s",
          },
        ]}
      />

      {/* ============================================= */}
      {/* FEATURES SECTION */}
      {/* ============================================= */}
      <div className="bg-white">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="max-w-3xl flex items-center justify-center">
                  <img
                    src="https://www.callbell.eu/assets/uploads/2023/10/Group-4-4.png"
                    alt="Interface de chat Messenger"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-full space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-right">
                    Converse com seus clientes{""}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0084FF] to-[#00C6FF]">
                      pelo Messenger
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed text-right">
                    Com a caixa de entrada unificada, gerencie conversas do
                    Facebook Messenger entre equipes, configure respostas
                    rápidas, lembretes e notas internas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 lg:order-2">
                <div className="max-w-3xl flex items-center justify-center">
                  <img
                    src="https://www.callbell.eu/assets/uploads/2023/10/Group-1000010623-4.svg"
                    alt="Dashboard de análise Messenger"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:order-1">
                <div className="w-full space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-left">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0084FF] to-[#00C6FF]">
                      Analise estatísticas
                    </span>{""}
                    e métricas do Messenger
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed text-left">
                    Visualize KPIs e estatísticas do Facebook Messenger em tempo
                    real, volume de mensagens, tempos de resposta e performance
                    da equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-12 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #0063CC 0%, #0084FF 40%, #00A3FF 70%, #00C6FF 100%)",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    Automatize o Messenger com Chatbots e APIs
                  </h2>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Crie chatbots avançados otimizados para o Facebook Messenger.
                    Planeje automações complexas usando a API ou a integração
                    oficial do Zapier.
                  </p>
                  <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                    Criar uma conta gratuita
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="max-w-3xl flex items-center justify-center">
                      <img
                        src="https://www.callbell.eu/assets/uploads/2023/04/WhatsApp-6.svg"
                        alt="Automação Messenger"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* ============================================= */}
      {/* RESOURCES */}
      {/* ============================================= */}
      <SharedResources
        badgeText="Recursos Principais"
        titleHighlight="Tudo que você precisa"
        titleRest="para o Messenger"
        subtitle="Ferramentas poderosas para gerenciar suas conversas e equipe no Facebook Messenger."
        badgeClass="bg-blue-100 text-blue-700 border-0"
        iconBgClass="bg-blue-100 group-hover:bg-blue-200"
        iconColorClass="text-[#0084FF]"
        themeGradientClass="bg-gradient-to-r from-[#0084FF] to-[#00C6FF]"
        features={[
          { icon: Database, title: "Caixa de Entrada Unificada", desc: "Todas as mensagens do Messenger centralizadas em uma única interface." },
          { icon: Shield, title: "Multi Agentes", desc: "Conecte vários agentes à mesma página. Distribua conversas automaticamente." },
          { icon: Zap, title: "Chatbots Inteligentes", desc: "Automatize respostas com chatbots otimizados para o Messenger." },
          { icon: Globe, title: "Integração com API", desc: "Conecte o Messenger com suas ferramentas via API ou Zapier." },
          { icon: Smartphone, title: "App Mobile", desc: "Responda mensagens do Messenger de qualquer lugar com nosso app." },
          { icon: HeadphonesIcon, title: "Suporte 24/7", desc: "Equipe disponível 24h por dia, 7 dias por semana." }
        ]}
      />



      {/* ============================================= */}
      {/* HOW IT WORKS */}
      {/* ============================================= */}
      <SharedHowItWorks
        badgeText="Como Funciona"
        titleHighlight="Simples de configurar,"
        titleRest="poderoso de usar"
        subtitle="Em apenas alguns passos você terá o Messenger integrado e funcionando perfeitamente."
        badgeClass="bg-blue-100 text-blue-700 border-0"
        themeGradientStyle={{ background: "linear-gradient(135deg, #0084FF, #00C6FF)" }}
        themeGradientClass="bg-gradient-to-r from-[#0084FF] to-[#00C6FF]"
        steps={[
          { num: "1", title: "Conecte sua página", desc: "Vincule sua página do Facebook em poucos cliques." },
          { num: "2", title: "Convide sua equipe", desc: "Adicione agentes e configure rotas de atendimento." },
          { num: "3", title: "Comece a Atender", desc: "Gerencie todas as conversas em uma única interface." }
        ]}
      />



      {/* ============================================= */}
      {/* CTA */}
      {/* ============================================= */}
      <SharedCta
        title="Pronto para transformar seu atendimento no Messenger?"
        subtitle="Junte-se a mais de 1.000 empresas que já centralizam o atendimento via Facebook Messenger."
        themeGradientStyle={{ background: "linear-gradient(135deg, #0063CC 0%, #0084FF 40%, #00A3FF 70%, #00C6FF 100%)" }}
        buttonTextBg="text-blue-700 hover:bg-gray-100"
      />

    </div>
  );
}
