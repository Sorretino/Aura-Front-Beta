import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface ResourceFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface SharedResourcesProps {
  badgeText?: string;
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  features: ResourceFeature[];
  iconBgClass?: string; // e.g. "bg-blue-100"
  iconColorClass?: string; // e.g. "text-[#0084FF]"
  themeGradientClass?: string;
  themeGradientStyle?: React.CSSProperties;
  badgeClass?: string; // custom badge class
}

export function SharedResources({
  badgeText = "Recursos Principais",
  titleHighlight,
  titleRest,
  subtitle,
  features,
  iconBgClass = "bg-primary/10",
  iconColorClass = "text-primary",
  themeGradientClass,
  themeGradientStyle,
  badgeClass = "bg-primary/10 text-primary border-0"
}: SharedResourcesProps) {
  return (
    <section id="features-section" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className={badgeClass} style={badgeClass.includes('bg-') ? undefined : themeGradientStyle}>
            {badgeText}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span
              className={`text-transparent bg-clip-text ${themeGradientClass || ""}`}
              style={themeGradientClass ? undefined : themeGradientStyle}
            >
              {titleHighlight}
            </span>{" "}
            <span className="text-foreground">{titleRest}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={i}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${iconBgClass}`}
                  >
                    <Icon className={`h-6 w-6 ${iconColorClass}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
