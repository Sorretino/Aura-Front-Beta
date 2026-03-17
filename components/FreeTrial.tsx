"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    CheckCircle,
    ArrowRight,
    X,
    MessageCircle,
    Instagram,
    Facebook,
    Send,
    Eye,
    EyeOff,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

interface FreeTrialModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
    const [step, setStep] = useState<"form" | "company" | "success">("form");
    const [showPassword, setShowPassword] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        segment: "",
        taxId: "",
        phone: "",
        password: "",
    });

    // Ensure we only render portal on client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("company");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("success");
    };

    const modalContent = (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
                style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
            />

            {/* Modal — sempre centralizado */}
            <div
                className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
                style={{
                    maxHeight: "90vh",
                    overflowY: "auto",
                    animation: "modalFadeIn 0.3s ease-out",
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                    <X className="w-4 h-4 text-white" />
                </button>

                {step === "form" && (
                    <>
                        {/* Header gradient */}
                        <div
                            className="px-8 pt-8 pb-6"
                            style={{
                                background:
                                    "linear-gradient(135deg, #4F46E5 0%, #6366F1 40%, #8B5CF6 70%, #A78BFA 100%)",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-yellow-300" />
                                <span className="text-sm font-medium text-indigo-100">
                                    Passo 1 de 2 • Teste grátis
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Crie sua conta gratuita
                            </h2>
                            <p className="text-indigo-100 text-sm">
                                Acesso completo a todos os recursos. Sem cartão de crédito.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleNextStep} className="px-8 py-6 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Nome completo
                                </label>
                                <Input
                                    placeholder="Seu nome completo"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Email profissional
                                </label>
                                <Input
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Telefone
                                </label>
                                <Input
                                    placeholder="(11) 99999-9999"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Senha
                                </label>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Mínimo 8 caracteres"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                        className="h-11 pr-10 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                        minLength={8}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-4 h-4" />
                                        ) : (
                                            <Eye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 mt-2"
                            >
                                Próximo passo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                                    <span>15 dias grátis — acesso completo</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                                    <span>Sem cartão de crédito</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                                    <span>Cancele a qualquer momento</span>
                                </div>
                            </div>

                            <p className="text-xs text-center text-gray-400 pt-2">
                                Ao criar a conta, você concorda com os{""}
                                <Link href="#" className="text-indigo-500 hover:underline">
                                    Termos de Serviço
                                </Link>{""}
                                e a{""}
                                <Link href="#" className="text-indigo-500 hover:underline">
                                    Política de Privacidade
                                </Link>
                                .
                            </p>

                            <div className="flex items-center justify-center gap-2 pt-2">
                                <div className="w-2 h-2 rounded-full bg-indigo-600 border border-indigo-600"></div>
                                <div className="w-2 h-2 rounded-full border border-gray-300"></div>
                            </div>
                        </form>
                    </>
                )}

                {step === "company" && (
                    <>
                        {/* Header gradient */}
                        <div
                            className="px-8 pt-8 pb-6"
                            style={{
                                background:
                                    "linear-gradient(135deg, #4F46E5 0%, #6366F1 40%, #8B5CF6 70%, #A78BFA 100%)",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-yellow-300" />
                                <span className="text-sm font-medium text-indigo-100">
                                    Passo 2 de 2 • Sobre sua empresa
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Nos conte um pouco sobre o seu negócio
                            </h2>
                            <p className="text-indigo-100 text-sm">
                                Isso nos ajuda a personalizar sua experiência no painel.
                            </p>
                        </div>

                        {/* Form Step 2 */}
                        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Nome da empresa
                                </label>
                                <Input
                                    placeholder="Sua Empresa LTDA"
                                    value={formData.company}
                                    onChange={(e) =>
                                        setFormData({ ...formData, company: e.target.value })
                                    }
                                    className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Segmento
                                </label>
                                <Input
                                    placeholder="Ex: Varejo, Tecnologia, Saúde..."
                                    value={formData.segment}
                                    onChange={(e) =>
                                        setFormData({ ...formData, segment: e.target.value })
                                    }
                                    className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    CPF ou CNPJ
                                </label>
                                <Input
                                    placeholder="000.000.000-00 ou 00.000.000/0000-00"
                                    value={formData.taxId}
                                    onChange={(e) =>
                                        setFormData({ ...formData, taxId: e.target.value })
                                    }
                                    className="h-11 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setStep("form")}
                                    className="w-1/3 h-12 rounded-xl text-gray-600 border-gray-200"
                                >
                                    Voltar
                                </Button>
                                <Button
                                    type="submit"
                                    className="w-2/3 h-12 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30"
                                >
                                    Concluir conta
                                </Button>
                            </div>

                            <div className="flex items-center justify-center gap-2 pt-4">
                                <div className="w-2 h-2 rounded-full border border-gray-300"></div>
                                <div className="w-2 h-2 rounded-full bg-indigo-600 border border-indigo-600"></div>
                            </div>
                        </form>
                    </>
                )}

                {step === "success" && (
                    /* Success State */
                    <div className="px-8 py-12 text-center space-y-6">
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                            style={{
                                background:
                                    "linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)",
                            }}
                        >
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Conta criada com sucesso! 🎉
                            </h2>
                            <p className="text-gray-600">
                                Seu período de teste de{""}
                                <span className="font-semibold text-indigo-600">
                                    15 dias grátis
                                </span>{""}
                                já começou. Enviamos um email de confirmação para{""}
                                <span className="font-medium">{formData.email}</span>.
                            </p>
                        </div>

                        {/* Connected channels preview */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm font-medium text-gray-700 mb-3">
                                Conecte seus canais agora:
                            </p>
                            <div className="flex justify-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-xl flex items-center justify-center">
                                    <Instagram className="w-6 h-6 text-white" />
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                    <Facebook className="w-6 h-6 text-white" />
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                                    <Send className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>

                        <Button
                            className="w-full h-12 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
                            onClick={onClose}
                        >
                            Acessar Dashboard
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Animation keyframes */}
            <style jsx global>{`
 @keyframes modalFadeIn {
 from {
 opacity: 0;
 transform: scale(0.95) translateY(10px);
 }
 to {
 opacity: 1;
 transform: scale(1) translateY(0);
 }
 }
`}</style>
        </div>
    );

    // Use createPortal to render at document.body — ensures centering regardless of parent
    return createPortal(modalContent, document.body);
}

// =============================================
// FREE TRIAL BUTTON (reutilizável em qualquer página)
// =============================================
export function FreeTrialButton({
    variant = "primary",
    className = "",
    children,
}: {
    variant?: "primary" | "outline" | "white" | "custom";
    className?: string;
    children?: React.ReactNode;
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const baseClasses = {
        primary:
            "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30",
        outline:
            "border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50",
        white: "bg-white text-indigo-700 hover:bg-gray-100 shadow-lg",
        custom: "",
    };

    return (
        <>
            <Button
                variant={variant === "primary" ? "default" : variant === "white" ? "secondary" : "outline"}
                onClick={() => setIsModalOpen(true)}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${baseClasses[variant]} ${className}`}
            >
                {children || (
                    <>
                        Teste grátis — 15 dias
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
            <FreeTrialModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
