import fs from 'fs';
import path from 'path';

const files = [
  {
    path: './app/messenger/page.tsx',
    name: 'Messenger',
    imports: `import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";\nimport { SharedResources } from "@/components/shared/SharedResources";\nimport { SharedCta } from "@/components/shared/SharedCta";`,
    resourcesStart: '{/* RESOURCES */}',
    howItWorksStart: '{/* HOW IT WORKS */}',
    ctaStart: '{/* CTA */}',
    hasPricing: false
  },
  {
    path: './app/telegram/page.tsx',
    name: 'Telegram',
    imports: `import { SharedHowItWorks } from "@/components/shared/SharedHowItWorks";\nimport { SharedResources } from "@/components/shared/SharedResources";\nimport { SharedCta } from "@/components/shared/SharedCta";`,
    resourcesStart: '{/* RESOURCES */}',
    howItWorksStart: '{/* HOW IT WORKS */}',
    ctaStart: '{/* CTA */}',
    hasPricing: false
  }
];

files.forEach(file => {
  if (!fs.existsSync(file.path)) return;
  let content = fs.readFileSync(file.path, 'utf8');

  // add imports
  if (!content.includes('SharedHowItWorks')) {
    const idx = content.lastIndexOf('import ');
    const eol = content.indexOf('\n', idx);
    content = content.slice(0, eol + 1) + file.imports + '\n' + content.slice(eol + 1);
  }

  // Messenger Replacement
  if (file.name === 'Messenger') {
    const resourcesRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* RESOURCES \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

    const howItWorksRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* HOW IT WORKS \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

    const ctaRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* CTA \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

    content = content.replace(resourcesRegex, `
        {/* ============================================= */}
        {/* RESOURCES */}
        {/* ============================================= */}
        <SharedResources 
          badgeText="Recursos Principais"
          titleHighlight="Tudo que você precisa"
          titleRest="para o Messenger"
          subtitle="Ferramentas poderosas para gerenciar suas conversas e equipe no Facebook Messenger."
          badgeClass="bg-blue-100 text-blue-700 border-0"
          iconBgClass="bg-blue-100 group-hover:bg-blue-200"
          iconColorClass="text-[#0084FF]"
          themeGradientClass="bg-gradient-to-r from-[#0084FF] to-[#00C6FF]"
          features={[
            { icon: Database, title: "Caixa de Entrada Unificada", desc: "Todas as mensagens do Messenger centralizadas em uma única interface." },
            { icon: Shield, title: "Multi Agentes", desc: "Conecte vários agentes à mesma página. Distribua conversas automaticamente." },
            { icon: Zap, title: "Chatbots Inteligentes", desc: "Automatize respostas com chatbots otimizados para o Messenger." },
            { icon: Globe, title: "Integração com API", desc: "Conecte o Messenger com suas ferramentas via API ou Zapier." },
            { icon: Smartphone, title: "App Mobile", desc: "Responda mensagens do Messenger de qualquer lugar com nosso app." },
            { icon: HeadphonesIcon, title: "Suporte 24/7", desc: "Equipe disponível 24h por dia, 7 dias por semana." }
          ]}
        />
      `);

    content = content.replace(howItWorksRegex, `
        {/* ============================================= */}
        {/* HOW IT WORKS */}
        {/* ============================================= */}
        <SharedHowItWorks 
          badgeText="Como Funciona"
          titleHighlight="Simples de configurar,"
          titleRest="poderoso de usar"
          subtitle="Em apenas alguns passos você terá o Messenger integrado e funcionando perfeitamente."
          badgeClass="bg-blue-100 text-blue-700 border-0"
          themeGradientStyle={{ background: "linear-gradient(135deg, #0084FF, #00C6FF)" }}
          themeGradientClass="bg-gradient-to-r from-[#0084FF] to-[#00C6FF]"
          steps={[
            { num: "1", title: "Conecte sua página", desc: "Vincule sua página do Facebook em poucos cliques." },
            { num: "2", title: "Convide sua equipe", desc: "Adicione agentes e configure rotas de atendimento." },
            { num: "3", title: "Comece a Atender", desc: "Gerencie todas as conversas em uma única interface." }
          ]}
        />
      `);

    content = content.replace(ctaRegex, `
        {/* ============================================= */}
        {/* CTA */}
        {/* ============================================= */}
        <SharedCta 
            title="Pronto para transformar seu atendimento no Messenger?"
            subtitle="Junte-se a mais de 1.000 empresas que já centralizam o atendimento via Facebook Messenger."
            themeGradientStyle={{ background: "linear-gradient(135deg, #0063CC 0%, #0084FF 40%, #00A3FF 70%, #00C6FF 100%)" }}
            buttonTextBg="text-blue-700 hover:bg-gray-100"
        />
      `);
    fs.writeFileSync(file.path, content, 'utf8');
    console.log('Messenger refactored');
  }

  // Telegram Replacement
  if (file.name === 'Telegram') {
    const resourcesRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* RESOURCES \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

    const howItWorksRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* HOW IT WORKS \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

    const ctaRegex = /\{\/\* ============================================= \*\/\}\s*\{\/\* CTA \*\/\}\s*\{\/\* ============================================= \*\/\}\s*<section[\s\S]*?<\/section>/g;

    content = content.replace(resourcesRegex, `
        {/* ============================================= */}
        {/* RESOURCES */}
        {/* ============================================= */}
        <SharedResources 
          badgeText="Recursos Principais"
          titleHighlight="Tudo que você precisa"
          titleRest="para o Telegram"
          subtitle="Ferramentas poderosas para gerenciar suas conversas e equipe no Telegram Bot."
          badgeClass="bg-sky-100 text-sky-700 border-0"
          iconBgClass="bg-sky-100 group-hover:bg-sky-200"
          iconColorClass="text-[#0088CC]"
          themeGradientClass="bg-gradient-to-r from-[#0088CC] to-[#34C8E8]"
          features={[
            { icon: Database, title: "Caixa de Entrada Unificada", desc: "Todas as mensagens do Telegram Bot centralizadas." },
            { icon: Shield, title: "Multi Agentes", desc: "Vários agentes atendendo pelo mesmo bot simultaneamente." },
            { icon: Zap, title: "Bots Inteligentes", desc: "Automatize respostas e qualifique leads com bots." },
            { icon: Globe, title: "API & Integrações", desc: "Conecte com CRMs e ferramentas via API ou Zapier." },
            { icon: Smartphone, title: "App Mobile", desc: "Gerencie atendimentos do Telegram pelo celular." },
            { icon: HeadphonesIcon, title: "Suporte 24/7", desc: "Equipe disponível 24h por dia, 7 dias por semana." }
          ]}
        />
      `);

    content = content.replace(howItWorksRegex, `
        {/* ============================================= */}
        {/* HOW IT WORKS */}
        {/* ============================================= */}
        <SharedHowItWorks 
          badgeText="Como Funciona"
          titleHighlight="Simples de configurar,"
          titleRest="poderoso de usar"
          subtitle="Em apenas alguns passos você terá o Telegram Bot integrado e funcionando perfeitamente."
          badgeClass="bg-sky-100 text-sky-700 border-0"
          themeGradientStyle={{ background: "linear-gradient(135deg, #0088CC, #34C8E8)" }}
          themeGradientClass="bg-gradient-to-r from-[#0088CC] to-[#34C8E8]"
          steps={[
            { num: "1", title: "Conecte seu Bot", desc: "Vincule o token do seu Telegram Bot em menos de 2 minutos." },
            { num: "2", title: "Convide sua equipe", desc: "Adicione agentes e configure rotas de atendimento." },
            { num: "3", title: "Comece a Atender", desc: "Gerencie todas as conversas em uma única interface." }
          ]}
        />
      `);

    content = content.replace(ctaRegex, `
        {/* ============================================= */}
        {/* CTA */}
        {/* ============================================= */}
        <SharedCta 
            title="Pronto para transformar seu atendimento no Telegram?"
            subtitle="Junte-se a mais de 1.000 empresas que já centralizam o atendimento via Telegram Bot."
            themeGradientStyle={{ background: "linear-gradient(135deg, #006DAA 0%, #0088CC 30%, #2AABEE 60%, #34C8E8 100%)" }}
            buttonTextBg="text-sky-700 hover:bg-gray-100"
        />
      `);

    fs.writeFileSync(file.path, content, 'utf8');
    console.log('Telegram refactored');
  }

});
