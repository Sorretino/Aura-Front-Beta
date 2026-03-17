import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

function FooterSection() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="w-full text-[#969696]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-4 text-sm font-light lg:justify-self-start">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#EBD68B]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></span>
            <span className="font-roboto text-[#969696]">(19) 99731-3515</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#EBD68B]"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg></span>
            <span className="font-roboto text-[#969696]">contato@aura.com.br</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#EBD68B]"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg></span>
            <span className="font-roboto text-[#969696]">Romanos 85, São Paulo / SP</span>
          </div>
        </div>

        {/* Center: Logo & Copyright */}
        <div className="flex flex-col items-center gap-4 justify-self-center">
          <img src="/assets/aura_crm.png" alt="Aura CRM Logotipo" className="w-40 md:w-64" />
          <p className="text-sm text-[#969696] font-roboto">© {currentYear} Aura CRM. Todos os direitos reservados.</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 items-center lg:justify-self-end">
          <Link href="https://wa.me/5517996844621"
            target="_blank" className="hover:text-white transition-colors"><MessageCircle className="w-6 h-6" /></Link>
          <Link href="#" target="_blank" className="hover:text-white transition-colors"><Instagram className="w-6 h-6" /></Link>
          <Link href="#" target="_blank" className="hover:text-white transition-colors"><Facebook className="w-6 h-6" /></Link>
          <Link href="#" target="_blank" className="hover:text-white transition-colors"><Youtube className="w-6 h-6" /></Link>
        </div>
      </div>

      <Separator className="bg-[#7a7a7a!important]" />

      <div className="text-center mt-8 pb-4">
        <p className="text-base text-white font-normal font-roboto">
          Com o Acelera IA sua empresa transforma potenciais clientes em lead
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
