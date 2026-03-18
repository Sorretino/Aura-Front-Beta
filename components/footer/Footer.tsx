import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";

const NavFooter: React.FC = () => {
    return (
        <footer className="bg-slate-50 text-slate-600 relative overflow-hidden border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
                    {/* Logo & Sobre */}
                    <div className="space-y-6 lg:col-span-2 lg:pr-8">
                        <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                            <img src="/assets/Aura_logo.png" alt="Aura CRM" className="w-36 md:w-40 object-contain hover:opacity-90 transition-opacity -ml-2" />
                        </Link>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            A plataforma mais avançada para gerenciamento de múltiplos
                            canais. Centralize WhatsApp, Instagram, Telegram e Messenger,
                            escalando suas vendas e suporte em uma única interface inteligente.
                        </p>

                        {/* Newsletter Input */}
                        <div className="pt-2">
                            <form className="relative flex items-center">
                                <input
                                    type="email"
                                    placeholder="Assine nossa newsletter"
                                    className="w-full bg-white border border-slate-200 text-sm text-slate-900 rounded-full px-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm"
                                />
                                <button type="submit" className="absolute right-1.5 p-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Produto */}
                    <div className="lg:col-span-1">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Produto</h3>
                        <ul className="space-y-3 text-sm">
                            {["Recursos Multicanais", "Planos e Preços", "API & Developers", "Integrações Nativas", "Automação e IA"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="flex items-center hover:text-indigo-600 transition-all duration-300 hover:translate-x-1">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Soluções */}
                    <div className="lg:col-span-1">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Soluções</h3>
                        <ul className="space-y-3 text-sm">
                            {["Para Clínicas", "Para Imobiliárias", "Para E-commerce", "Para Delivery", "Casos de Sucesso"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="flex items-center hover:text-indigo-600 transition-all duration-300 hover:translate-x-1">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa & Contato */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Empresa & Contato</h3>
                        <div className="space-y-4 text-sm text-slate-500">
                            <ul className="grid grid-cols-2 gap-3 mb-6">
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors hover:translate-x-1 inline-block">Sobre Nós</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors hover:translate-x-1 inline-block">Carreiras</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors hover:translate-x-1 inline-block">Blog e Mídia</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors hover:translate-x-1 inline-block">Ajuda</Link></li>
                            </ul>

                            <hr className="border-slate-200 my-4" />

                            <div className="flex items-start space-x-3 group cursor-pointer hover:text-slate-900 transition-colors">
                                <Mail className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5 group-hover:text-indigo-600" />
                                <span>contato@auracrm.com</span>
                            </div>
                            <div className="flex items-start space-x-3 group cursor-pointer hover:text-slate-900 transition-colors">
                                <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5 group-hover:text-indigo-600" />
                                <span>Edifício Paulista Premium, SP - Brasil</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Aura CRM. Todos os direitos reservados.</p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-slate-900 transition-colors">Privacidade</Link>
                        <Link href="#" className="hover:text-slate-900 transition-colors">Termos do Portal</Link>
                        <Link href="#" className="hover:text-slate-900 transition-colors">Cookies</Link>
                    </div>

                    {/* Social Icons Redesign */}
                    <div className="flex space-x-2 mt-6 md:mt-0">
                        {[
                            { icon: Facebook, label: "Facebook" },
                            { icon: Instagram, label: "Instagram" },
                            { icon: Twitter, label: "Twitter" },
                            { icon: Linkedin, label: "LinkedIn" }
                        ].map((Social, idx) => (
                            <a
                                key={idx}
                                href="#"
                                aria-label={Social.label}
                                className="w-10 h-10 rounded-full bg-indigo-600 border border-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <Social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Glow Effect */}
            {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] pointer-events-none"></div> */}
        </footer>
    );
};

export default NavFooter;
