import React from "react";
import { Badge } from "@/components/ui/badge";

export interface Step {
  num: string;
  title: string;
  desc: string;
}

interface SharedHowItWorksProps {
  badgeText?: string;
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  steps: Step[];
  themeGradientStyle?: React.CSSProperties; 
  themeGradientClass?: string;
  badgeClass?: string;
}

export function SharedHowItWorks({
  badgeText = "Como Funciona",
  titleHighlight,
  titleRest,
  subtitle,
  steps,
  themeGradientStyle,
  themeGradientClass,
  badgeClass = "bg-primary/10 text-primary border-0",
}: SharedHowItWorksProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className={badgeClass} style={badgeClass.includes('bg-') ? undefined : themeGradientStyle}>
            {badgeText}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            <span
              className={`text-transparent bg-clip-text ${themeGradientClass || ""}`}
              style={themeGradientClass ? undefined : themeGradientStyle}
            >
              {titleHighlight}
            </span>{" "}
            {titleRest}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg ${themeGradientClass || ""}`}
                style={themeGradientClass ? undefined : themeGradientStyle}
              >
                <span className="text-2xl font-bold text-white">{step.num}</span>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
