import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SharedCtaProps {
  title: string;
  subtitle: string;
  themeGradientStyle?: React.CSSProperties;
  themeGradientClass?: string;
  buttonTextBg?: string; // e.g. "text-blue-700 hover:bg-gray-100"
}

export function SharedCta({
  title,
  subtitle,
  themeGradientStyle,
  themeGradientClass,
  buttonTextBg = "text-primary hover:bg-gray-100"
}: SharedCtaProps) {
  return (
    <section
      className={`py-20 ${themeGradientClass || ""}`}
      style={themeGradientClass ? undefined : themeGradientStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="text-xl text-white/90">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`bg-white h-12 px-8 font-semibold transition-all duration-300 hover:scale-105 ${buttonTextBg}`}
            >
              Falar com nossa equipe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 h-12 px-8 font-semibold"
            >
              Agendar Demo
            </Button>
          </div>
          <p className="text-sm text-white/80 font-medium">
            7 dias grátis • Sem cartão de crédito • Suporte 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
