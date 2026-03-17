import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { type Language, useTranslation } from "@/lib/i18n";
import { LanguageSelector } from "@/components/language-selector";
import { TourGuide } from "@/components/tour-guide";
import { ThemeToggle } from "@/components/theme-toggle";
import { FreeTrialButton } from "@/components/FreeTrial";

const NavHeader: React.FC = () => {
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");
  const [isTourOpen, setIsTourOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 950);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  let themeColor = "indigo";
  if (pathname.includes("whatsapp")) themeColor = "green";
  else if (pathname.includes("telegram")) themeColor = "sky";
  else if (pathname.includes("messenger")) themeColor = "blue";
  else if (pathname.includes("instagram")) themeColor = "pink";

  const themeClasses: Record<string, any> = {
    indigo: { btnPrimaryBg: "from-indigo-600 to-violet-600", btnPrimaryHover: "hover:from-indigo-700 hover:to-violet-700" },
    green: { btnPrimaryBg: "from-green-600 to-emerald-600", btnPrimaryHover: "hover:from-green-700 hover:to-emerald-700" },
    pink: { btnPrimaryBg: "from-pink-600 to-rose-600", btnPrimaryHover: "hover:from-pink-700 hover:to-rose-700" },
    sky: { btnPrimaryBg: "from-sky-500 to-cyan-500", btnPrimaryHover: "hover:from-sky-600 hover:to-cyan-600" },
    blue: { btnPrimaryBg: "from-blue-600 to-sky-600", btnPrimaryHover: "hover:from-blue-700 hover:to-sky-700" },
  };

  const tc = themeClasses[themeColor] || themeClasses.indigo;

  // Dados de navegação
  const navigationItems = [
    {
      label: "Recurso",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Plano",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Depoimentos",
      href: "#",
      hasDropdown: true,
    },
    {
      label: "Canais",
      href: "#",
      hasDropdown: true,
      description: "Plataforma principal de mensagens",
      dropdownItems: [
        {
          label: "WhatsApp",
          href: "/whatsapp",
          description: "Plataforma principal de mensagens",
        },
        {
          label: "Instagram",
          href: "/instagram",
          description: "Direct Messages do Instagram",
        },
        {
          label: "Facebook Messenger",
          href: "/messenger",
          description: "Mensagens do Facebook Messenger",
        },
        {
          label: "Telegram",
          href: "/telegram",
          description: "Bot e mensagens do Telegram",
        },
      ],
    },
    {
      label: "Plataforma",
      href: "#",
      hasDropdown: true,
      description: "Configurações",
      dropdownItems: [],
    },
  ];

  // Função para renderizar item de navegação
  const renderNavigationItem = (item: any, index: any) => {
    // Se tem dropdown e dropdownItems, renderiza dropdown
    if (item.hasDropdown && item.dropdownItems) {
      return (
        <div key={index} className="relative group">
          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200">
            {item.label}
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </button>

          {/* Dropdown Content */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0 z-50">
            <div className="py-2">
              {/* Renderizar dropdownItems */}
              {item.dropdownItems.map(
                (dropdownItem: any, dropdownIndex: any) => (
                  <Link
                    key={dropdownIndex}
                    href={dropdownItem.href}
                    className="flex flex-col items-start px-4 py-3 hover:bg-gray-50 transition-colors duration-200 rounded-md mx-2"
                  >
                    <div className="font-medium text-foreground">
                      {dropdownItem.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {dropdownItem.description}
                    </div>
                  </Link>
                )
              )}

              {/* Se for"Plataforma", adicionar os botões especiais */}
              {item.label === "Plataforma" && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="px-4 py-2 space-y-2">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Configurações
                    </div>

                    {/* Botão Start Tour */}
                    {/* <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsTourOpen(true)}
                      className="w-full justify-start gap-2 h-8"
                    >
                      <Play className="h-4 w-4" />
                      {t.startTour}
                    </Button> */}

                    {/* Language Selector */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Idioma:</span>
                      <LanguageSelector
                        currentLang={currentLanguage}
                        onLanguageChange={setCurrentLanguage}
                      />
                    </div>

                    {/* Theme Toggle */}
                    {/* <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Tema:</span>
                      <ThemeToggle />
                    </div> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Se tem dropdown mas não tem dropdownItems, renderiza botão com âncora
    if (item.hasDropdown) {
      // Mapear os labels para as seções corretas
      const sectionMap: any = {
        Recurso: "features-section",
        Plano: "pricing-section",
        Depoimentos: "testimonials-section",
      };

      return (
        <button
          key={index}
          onClick={() =>
            scrollToSection(
              sectionMap[item.label] || `${item.label.toLowerCase()}-section`
            )
          }
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {item.label}
        </button>
      );
    }

    // Se não tem dropdown, renderiza link simples
    return (
      <Link
        key={index}
        href={item.href}
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <TourGuide
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        language={currentLanguage}
      />

      <header
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gray-100 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-[80%] shadow-2xl rounded-full"
          : "bg-[#ffffff] ] w-[100%] max-w-[100%] border border-white/10"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center py-4 transition-all duration-300 ${isScrolled ? "justify-center gap-8" : "justify-between"
              }`}
          >
            {/* Logo - sempre visível mas com transição suave */}
            <Link href="/">
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/Aura_logo.png"
                  alt="Aura CRM Logo"
                  className="h-10 w-32 object-contain"
                />

              </div>
            </Link>
            {/* Navegação dinâmica */}
            <nav className="hidden md:flex items-center space-x-8 max-w-[80%]">
              {/* Renderizar todos os itens de navegação dinamicamente */}
              {navigationItems.map((item, index) =>
                renderNavigationItem(item, index)
              )}

              {/* Botão CTA sempre visível */}
              <FreeTrialButton
                variant="custom"
                className={`text-white shadow-lg shadow-black/5 bg-gradient-to-r ${tc.btnPrimaryBg} ${tc.btnPrimaryHover} transition-all duration-300 border-0 ${isScrolled ? "px-4 py-2 text-sm" : "px-6 py-2"
                  }`}
              >
                {t.startFree}
              </FreeTrialButton>
            </nav>

            {/* Menu Mobile Toggle */}
            <div className="md:hidden flex items-center xl:hidden mt-2 ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Menu Mobile Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl shadow-black/10 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[80vh] py-4 border-t border-gray-100" : "max-h-0 py-0 overflow-hidden"
          } rounded-b-2xl`}
        >
          <div className="px-4 flex flex-col space-y-2 max-h-[70vh] overflow-y-auto">
            {navigationItems.map((item, index) => {
               if (item.hasDropdown) {
                   const sectionMap: Record<string, string> = {
                       Recurso: "features-section",
                       Plano: "pricing-section",
                       Depoimentos: "testimonials-section",
                   };
                   return (
                       <button
                           key={`mobile-${index}`}
                           onClick={() => {
                               setIsMenuOpen(false);
                               scrollToSection(sectionMap[item.label] || `${item.label.toLowerCase()}-section`);
                           }}
                           className="text-left w-full py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                       >
                           {item.label}
                       </button>
                   );
               }

               return (
                   <Link
                      key={`mobile-${index}`}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                   >
                     {item.label}
                   </Link>
               );
            })}
            
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-4 px-2 pb-4">
               {/* Language Selector in Mobile */}
               <div className="flex items-center justify-between px-2">
                 <span className="text-sm font-medium text-gray-700">Idioma:</span>
                 <LanguageSelector
                    currentLang={currentLanguage}
                    onLanguageChange={setCurrentLanguage}
                 />
               </div>

               <FreeTrialButton
                  variant="custom"
                  className={`w-full text-white bg-gradient-to-r ${tc.btnPrimaryBg} ${tc.btnPrimaryHover} py-3 shadow-md border-0 mt-4`}
               >
                 {t.startFree}
               </FreeTrialButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavHeader;

