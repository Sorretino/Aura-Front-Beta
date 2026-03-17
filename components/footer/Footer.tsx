import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const NavFooter: React.FC = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Logo & Sobre */}
                    <div className="space-y-6 lg:col-span-2 lg:pr-12">
                        <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                            <img src="/assets/Aura_logo.png" alt="Aura CRM Logotipo" className="w-40 md:w-40 object-contain -ml-2" />
                        </Link>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            A plataforma mais avançada para gerenciamento de múltiplos
                            negócios e canais. Centralize WhatsApp, Instagram, Telegram, Messenger
                            e impulsione suas vendas em uma única solução inteligente.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 hover:shadow-md transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 hover:shadow-md transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 hover:shadow-md transition-all duration-300">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 hover:shadow-md transition-all duration-300">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Produto */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Produto</h3>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    Recursos Multicanais
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    Planos e Preços
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    API & Desenvolvedores
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    Integrações Nativas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Empresa</h3>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    Sobre a Aura
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    Nosso Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    Carreiras
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-indigo-600 transition-colors">
                                    Fale Conosco
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Contato</h3>
                        <div className="space-y-4 text-sm text-slate-500">
                            <div className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                <span>+55 (11) 99999-9999</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                <span>contato@auracrm.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                <span>São Paulo, SP - Brasil</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                        <p>&copy; {new Date().getFullYear()} Aura CRM. Todos os direitos reservados.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-slate-900 transition-colors">
                                Privacidade
                            </Link>
                            <Link href="#" className="hover:text-slate-900 transition-colors">
                                Termos de Uso
                            </Link>
                            <Link href="#" className="hover:text-slate-900 transition-colors">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default NavFooter;
