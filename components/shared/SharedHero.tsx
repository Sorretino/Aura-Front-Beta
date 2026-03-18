"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

export interface FloatingIconData {
  Icon: LucideIcon;
  bgClass: string;
  positionClass: string;
  animationDelay?: string;
}

interface SharedHeroProps {
  gradientStyle: React.CSSProperties;
  badgeText: string;
  BadgeIcon: LucideIcon;

  titlePart1: string;
  titlePart2: string;
  titleHighlight: string;
  titleHighlightColor?: string; // e.g. "text-blue-200"

  description: React.ReactNode;

  primaryButtonText?: string;
  primaryButtonTextColor?: string; // e.g. "text-blue-600"
  secondaryButtonText?: string;

  contactLinkText?: string;
  ContactIcon: LucideIcon;

  imageSrc: string;
  backgroundImageUrl?: string;
  floatingIcons?: FloatingIconData[];
}

export function SharedHero({
  gradientStyle,
  badgeText,
  BadgeIcon,
  titlePart1,
  titlePart2,
  titleHighlight,
  titleHighlightColor = "text-white",
  description,
  primaryButtonText = "Fale com nossa equipe",
  primaryButtonTextColor = "text-blue-600",
  secondaryButtonText = "Agendar Demo",
  contactLinkText,
  ContactIcon,
  imageSrc,
  backgroundImageUrl,
  floatingIcons = [],
}: SharedHeroProps) {
  return (
    <section
      style={gradientStyle}
      className="h-screen pt-20 pb-0 text-white overflow-hidden relative"
    >
      {/* Background Image Layer (Optional) */}
      {backgroundImageUrl && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImageUrl}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-1 mix-blend-overlay"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-0"></div>
      <div className="absolute inset-0 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[770px]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <BadgeIcon className="w-4 h-4 mr-2" />
                {badgeText}
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {titlePart1}
                </span>
                <span className="block">{titlePart2}</span>
                <span className={`block ${titleHighlightColor}`}>
                  {titleHighlight}
                </span>
              </h1>

              <div className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg font-medium">
                {description}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`px-8 py-2 bg-white ${primaryButtonTextColor} text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25`}
                >
                  {primaryButtonText}
                </button>
                <button className="px-8 py-2 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                  <span>{secondaryButtonText}</span>
                </button>
              </div>

              {contactLinkText && (
                <div className="flex items-center space-x-3 text-white/90">
                  <ContactIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Ou{" "}
                    <a
                      href="#"
                      className="underline hover:no-underline font-semibold text-white hover:text-white/80 transition-colors"
                    >
                      {contactLinkText}
                    </a>
                  </span>
                </div>
              )}

              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <span>7 dias grátis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center w-full">
            {/* Aspect Square garante que o Box terá Altura mesmo com elementos Absolutos dentro dele. max-w-[450px] */}
            <div className="relative w-full aspect-square mx-auto">

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full   flex items-center justify-center  transform hover:scale-105 transition-transform duration-300 overflow-visible">
                  <img
                    src={imageSrc}
                    alt="Hero Presentation"
                    className="w-full h-auto object-cover scale-150"
                  />
                </div>
              </div>

              {/* Dynamic Floating Icons */}
              {/* {floatingIcons.map((fi, idx) => (
                <div
                  key={idx}
                  className={`absolute animate-float ${fi.positionClass}`}
                  style={{ animationDelay: fi.animationDelay || "0s" }}
                >
                  <div
                    className={`flex items-center justify-center shadow-lg ${fi.bgClass}`}
                  >
                    <fi.Icon className="w-1/2 h-1/2 text-white" />
                  </div>
                </div>
              ))} */}

              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 right-8">
                <div className="w-4 h-4 bg-white/50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
