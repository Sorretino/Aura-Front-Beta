import fs from 'fs';

const files = [
  { path: './app/instagram/page.tsx', 
    name: 'Instagram', 
    imports: `import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";\nimport { SharedResources } from "@/components/shared/SharedResources";`
  },
  { path: './app/whatsapp/page.tsx', 
    name: 'WhatsApp', 
    imports: `import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";`
  },
  { path: './app/page.tsx', 
    name: 'Home', 
    imports: `import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";\nimport { SharedResources } from "@/components/shared/SharedResources";`
  }
];

files.forEach(file => {
  if(!fs.existsSync(file.path)) return;
  let content = fs.readFileSync(file.path, 'utf8');
  
  if(!content.includes('SharedHowItWorks')) {
      const idx = content.lastIndexOf('import ');
      const eol = content.indexOf('\n', idx);
      content = content.slice(0, eol+1) + file.imports + '\n' + content.slice(eol+1);
  }

  if(file.name === 'Instagram') {
      const resourcesRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* RESOURCES SECTION[^\n]*\*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;
      const howItWorksRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* HOW IT WORKS SECTION \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

      content = content.replace(resourcesRegex, `
            {/* ============================================= */}
            {/* RESOURCES SECTION */}
            {/* ============================================= */}
            <SharedResources 
              badgeText="Recursos Principais"
              titleHighlight="Tudo que você precisa"
              titleRest="para o Instagram"
              subtitle="Ferramentas poderosas para gerenciar suas conversas e equipe no Instagram Direct com máxima eficiência."
              badgeClass="text-white border-0"
              themeGradientStyle={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}
              iconBgClass="bg-gradient-to-r from-[#f09433]/20 to-[#bc1888]/20 group-hover:from-[#f09433]/30 group-hover:to-[#bc1888]/30"
              iconColorClass="text-[#dc2743]"
              themeGradientClass="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]"
              features={[
                { icon: Database, title: "Caixa de Entrada Unificada", desc: "Todas as mensagens do Instagram Direct centralizadas em uma única interface." },
                { icon: Shield, title: "Multi Agentes", desc: "Conecte vários agentes ao mesmo perfil. Distribua conversas e gerencie." },
                { icon: Zap, title: "Chatbots Inteligentes", desc: "Automatize respostas otimizadas para Instagram." },
                { icon: Globe, title: "Integração com API", desc: "Conecte o Instagram com ferramentas favoritas." },
                { icon: Smartphone, title: "App Mobile", desc: "App mobile iOS e Android." },
                { icon: HeadphonesIcon, title: "Suporte 24/7", desc: "Equipe especializada disponivel." }
              ]}
            />
      `);

      content = content.replace(howItWorksRegex, `
            {/* ============================================= */}
            {/* HOW IT WORKS SECTION */}
            {/* ============================================= */}
            <SharedHowItWorks 
              badgeText="Como Funciona"
              badgeClass="text-white border-0"
              titleHighlight="Simples de configurar,"
              titleRest="poderoso de usar"
              subtitle="Em apenas alguns passos você terá o Instagram Direct integrado e funcionando perfeitamente."
              themeGradientStyle={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}
              themeGradientClass="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]"
              steps={[
                { num: "1", title: "Conecte sua conta", desc: "Vincule sua página do Instagram à plataforma em menos de 2 minutos." },
                { num: "2", title: "Convide sua equipe", desc: "Adicione seus agentes e configure as permissões." },
                { num: "3", title: "Comece a Atender", desc: "Gerencie todas as conversas do Instagram Direct." }
              ]}
            />
      `);
      fs.writeFileSync(file.path, content, 'utf8');
      console.log('Instagram refactored');
  }

  if(file.name === 'WhatsApp') {
      const howItWorksStartStr = ' {/* How it Works */}';
      const pricingSectionStr = ' {/* Pricing Section */}';
      
      let startIdx = content.indexOf(howItWorksStartStr);
      let endIdx = content.indexOf(pricingSectionStr);
      
      if (startIdx !== -1 && endIdx !== -1) {
          const sectionHtml = content.substring(startIdx, endIdx);
          const replacement = `
        {/* How it Works */}
        <SharedHowItWorks 
          badgeText="Como Funciona"
          titleHighlight="Simples de configurar,"
          titleRest="poderoso de usar"
          subtitle="Em apenas alguns passos você terá sua plataforma multitenant funcionando perfeitamente."
          badgeClass="bg-primary/10 text-primary border-0"
          themeGradientClass="text-CustonCabe"
          steps={[
            { num: "1", title: "Cadastre-se", desc: "Crie sua conta em menos de 2 minutos. Sem complicacões." },
            { num: "2", title: "Configure seus Tenants", desc: "Adicione seus clientes e configure as permissoes." },
            { num: "3", title: "Comece a Gerenciar", desc: "Acesse o dashboard e comece a gerenciar todos os seus negócios." }
          ]}
        />
`;
          content = content.replace(sectionHtml, replacement);
          fs.writeFileSync(file.path, content, 'utf8');
          console.log('WhatsApp refactored');
      } else {
        console.log('WhatsApp: sections not found');
      }
  }

  if (file.name === 'Home') {
      const resourcesRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* RESOURCES SECTION[^\n]*\*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;
      const howItWorksRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* HOW IT WORKS \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

      content = content.replace(resourcesRegex, `
            {/* ============================================= */}
            {/* RESOURCES SECTION — Recursos Principais */}
            {/* ============================================= */}
            <SharedResources 
              badgeText="Recursos Principais"
              titleHighlight="Tudo que você precisa"
              titleRest="para atender melhor"
              subtitle="Ferramentas poderosas para centralizar conversas, automatizar processos e escalar seu atendimento."
              badgeClass="bg-indigo-100 text-indigo-700 border-0"
              iconBgClass="bg-indigo-100 group-hover:bg-indigo-200"
              iconColorClass="text-indigo-600"
              themeGradientClass="bg-gradient-to-r from-indigo-600 to-violet-600"
              features={[
                { icon: Layers, title: "Multi-Canal", desc: "WhatsApp, Instagram, Messenger e Telegram em uma única caixa de entrada." },
                { icon: Users, title: "Multi-Agentes", desc: "Conecte vários agentes ao mesmo canal. Distribua conversas." },
                { icon: Bot, title: "Chatbots Inteligentes", desc: "Automatize respostas, qualifique leads." },
                { icon: TrendingUp, title: "Relatórios em Tempo Real", desc: "Dashboards com métricas de atendimento." },
                { icon: Globe, title: "API & Integrações", desc: "Conecte com CRMs, ERPs e ferramentas via API." },
                { icon: HeadphonesIcon, title: "Suporte 24/7", desc: "Equipe especializada disponível 24 horas." }
              ]}
            />
      `);

      content = content.replace(howItWorksRegex, `
            {/* ============================================= */}
            {/* HOW IT WORKS */}
            {/* ============================================= */}
            <SharedHowItWorks 
              badgeText="Como Funciona"
              badgeClass="bg-indigo-100 text-indigo-700 border-0"
              titleHighlight="Simples de configurar,"
              titleRest="poderoso de usar"
              subtitle="Em apenas alguns passos você terá sua plataforma de atendimento funcionando perfeitamente."
              themeGradientStyle={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
              themeGradientClass="bg-gradient-to-r from-indigo-600 to-violet-600"
              steps={[
                { num: "1", title: "Conecte seus canais", desc: "Vincule WhatsApp, Instagram, Messenger e Telegram." },
                { num: "2", title: "Convide sua equipe", desc: "Adicione seus agentes e configure as rotas de atendimento." },
                { num: "3", title: "Comece a Atender", desc: "Acesse o dashboard e gerencie todos os seus canais." }
              ]}
            />
      `);
      fs.writeFileSync(file.path, content, 'utf8');
      console.log('Home refactored');
  }
});
