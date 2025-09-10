# 🚀 Yonki Dev - Portfólio Moderno

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS"/>
  <br/>
  <img src="https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge" alt="Versão"/>
  <img src="https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge" alt="Licença"/>
</div>

<br/>

<div align="center">
  <h3>🎨 Portfólio Interativo com Animações Avançadas</h3>
  <p>Experiência digital moderna com efeitos visuais impressionantes</p>
  <p>✨ <strong>Next.js 15</strong> • 🎭 <strong>Framer Motion</strong> • 📧 <strong>EmailJS</strong> • 🎯 <strong>TypeScript</strong></p>
</div>

## ✨ Visão Geral

Este é um portfólio moderno e interativo desenvolvido com as tecnologias mais recentes do ecossistema React/Next.js. O projeto apresenta uma experiência visual rica com animações fluidas, efeitos de partículas, cursor animado e design responsivo.

## 🎯 Demonstração

🌐 **[Acesse o Portfólio](http://localhost:3000)** (quando executando localmente)

## 🛠️ Stack Tecnológico

### **Core Framework**
- **[Next.js 15.5.2](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - JavaScript com tipagem estática

### **Styling & UI**
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion 12.23.12](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e consistentes

### **Efeitos Visuais & Interatividade**
- **[@tsparticles/react](https://particles.js.org/)** - Sistema de partículas interativas
- **[react-animated-cursor](https://www.npmjs.com/package/react-animated-cursor)** - Cursor personalizado animado
- **[react-confetti](https://www.npmjs.com/package/react-confetti)** - Efeitos de confetti
- **[react-type-animation](https://www.npmjs.com/package/react-type-animation)** - Animações de texto digitado
- **[react-scroll-parallax](https://www.npmjs.com/package/react-scroll-parallax)** - Efeitos de parallax no scroll
- **[@emailjs/browser](https://www.emailjs.com/)** - Sistema de envio de emails sem backend

### **Ferramentas de Desenvolvimento**
- **[Turbopack](https://turbo.build/pack)** - Bundler rápido do Next.js
- **[ESLint](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processador CSS

### **Fontes**
- **[Geist](https://vercel.com/font)** - Família de fontes moderna da Vercel
- **Geist Mono** - Fonte monoespaçada para código

## 📁 Estrutura do Projeto

```
yonkiblog/
├── app/                          # Next.js App Router
│   ├── components/               # Componentes reutilizáveis
│   │   └── Nav.tsx              # Componente de navegação
│   ├── sobre/                   # Página Sobre
│   │   └── page.tsx
│   ├── projetos/                # Página Projetos
│   │   └── page.tsx
│   ├── habilidades/             # Página Habilidades
│   │   └── page.tsx
│   ├── contato/                 # Página Contato
│   │   └── page.tsx
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout raiz
│   └── page.tsx                 # Página inicial
├── public/                      # Assets estáticos
│   ├── icons/                   # Ícones SVG (25 ícones)
│   │   ├── android.svg, briefcase.svg, code.svg
│   │   ├── database.svg, email.svg, express.svg
│   │   └── ... (react.svg, typescript.svg, etc.)
│   └── logos/                   # Logos de tecnologias (20 logos)
│       ├── android.svg, docker.svg, express.svg
│       ├── firebase.svg, git.svg, github.svg
│       └── ... (nextjs.svg, nodejs.svg, etc.)
├── lib/                         # Utilitários e configurações
│   └── emailjs-config.ts        # Configuração do EmailJS
├── next.config.ts               # Configuração Next.js
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração PostCSS
├── tailwind.config.js           # Configuração Tailwind CSS
├── tsconfig.json                # Configuração TypeScript
├── EMAILJS_SETUP.md             # Guia de configuração do EmailJS
└── README.md                    # Este arquivo
```

## 🎨 Assets Disponíveis

### **Ícones (25 ícones SVG)**
- **Tecnologias**: React, Next.js, TypeScript, Node.js, etc.
- **Ferramentas**: Git, Docker, Figma, VS Code
- **Plataformas**: Android, iOS, Web
- **Bancos**: PostgreSQL, MongoDB, Firebase
- **Comunicação**: Email, telefone, localização

### **Logos (20 logos SVG)**
- **Frameworks**: React, Next.js, Express, NestJS
- **Linguagens**: JavaScript, TypeScript, Java, Kotlin
- **Ferramentas**: Git, GitHub, Docker, Figma
- **Cloud**: Firebase, Vercel
- **Bancos**: PostgreSQL, MongoDB

## ⚙️ Arquivos de Configuração

### **EmailJS (`lib/emailjs-config.ts`)**
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
  TO_EMAIL: 'seu@email.com'
};
```

### **Next.js (`next.config.ts`)**
- Configuração do Turbopack
- Suporte a SVGs
- Otimizações de build

### **TypeScript (`tsconfig.json`)**
- Configuração completa para Next.js 15
- Paths absolutos configurados
- Strict mode habilitado

## 📜 Scripts Disponíveis

```json
{
  "dev": "next dev",           // Servidor de desenvolvimento
  "build": "next build",       // Build para produção
  "start": "next start"        // Servidor de produção
}
```

### **Como usar:**
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 💻 Requisitos do Sistema

### **Mínimos:**
- **Node.js**: 18.0.0 ou superior
- **npm**: 8.0.0 ou superior
- **Sistema Operacional**: Windows, macOS, Linux

### **Recomendados:**
- **Node.js**: 20.x LTS
- **npm**: 10.x
- **RAM**: 4GB ou mais
- **Espaço em disco**: 500MB livres

### **Navegadores Suportados:**
- ✅ **Chrome**: 90+
- ✅ **Firefox**: 88+
- ✅ **Safari**: 14+
- ✅ **Edge**: 90+

## 🚀 Funcionalidades

### **🎨 Design Moderno**
- **Tema Dark**: Interface elegante com gradientes sutis
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Tipografia Moderna**: Uso das fontes Geist e Geist Mono

### **✨ Animações Avançadas**
- **Framer Motion**: Animações de entrada, hover e transições suaves
- **Partículas Interativas**: Fundo animado que responde ao mouse
- **Cursor Animado**: Cursor personalizado com círculos concêntricos
- **Type Animation**: Texto digitado dinamicamente na página inicial
- **Scroll Effects**: Animações baseadas no scroll do usuário

### **🎯 Interatividade**
- **Confetti Effect**: Efeito de confetti ao clicar em botões específicos
- **Hover Effects**: Animações responsivas em todos os elementos interativos
- **Particle Interactions**: Partículas que reagem ao movimento do mouse
- **Smooth Transitions**: Transições fluidas entre estados

### **📧 Formulário de Contato**
- **EmailJS Integration**: Sistema de envio de emails sem backend
- **Validação Completa**: Campos obrigatórios e validação de email
- **Feedback Visual**: Estados de loading, sucesso e erro
- **Prevenção de Spam**: Validações client-side

### **📱 Navegação**
- **Navegação Fixa**: Menu superior sempre visível
- **Links Sociais**: Links diretos para GitHub, LinkedIn e email
- **Navegação Intuitiva**: Estrutura clara e organizada

## 🏗️ Arquitetura

### **Next.js App Router**
- **Server Components**: Para melhor performance
- **Client Components**: Para interatividade (marcados com `'use client'`)
- **File-based Routing**: Estrutura intuitiva de rotas

### **Componentização**
- **Componentes Reutilizáveis**: Nav, animações e efeitos
- **Separação de Responsabilidades**: Lógica, estilos e markup separados
- **TypeScript**: Tipagem completa para melhor DX

### **Performance**
- **Turbopack**: Build rápido durante desenvolvimento
- **Lazy Loading**: Componentes carregados sob demanda
- **Optimized Assets**: Imagens e SVGs otimizados

## 🎨 Paleta de Cores

```css
:root {
  --background: #1a1a1a;      /* Fundo principal */
  --foreground: #fefefe;      /* Texto principal */
  --primary-dark-gray: #374151; /* Cinza escuro */
  --primary-gray: #6b7280;    /* Cinza principal */
  --accent-cream: #f9fafb;    /* Creme para destaques */
}
```

## 📧 Configuração do Formulário de Contato (EmailJS)

### **Como Configurar o EmailJS:**

1. **Criar conta gratuita** em [emailjs.com](https://www.emailjs.com/)
2. **Adicionar serviço de email** (Gmail, Outlook, etc.)
3. **Criar template de email** com variáveis:
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{subject}}` - Assunto da mensagem
   - `{{message}}` - Conteúdo da mensagem
4. **Obter credenciais** (Service ID, Template ID, Public Key)
5. **Configurar no arquivo** `lib/emailjs-config.ts`

### **Arquivo de Configuração:**
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
  TO_EMAIL: 'seu@email.com'
};
```

### **Limites Gratuitos:**
- ✅ **200 emails/mês**
- ✅ **1 serviço de email**
- ✅ **2 templates**
- ✅ **Suporte HTML**

📖 **Guia completo**: Veja `EMAILJS_SETUP.md` para instruções detalhadas.

## 🎯 Páginas do Portfólio

### **🏠 Página Inicial**
- Hero section com animações dinâmicas
- Apresentação com TypeAnimation
- Botões de ação com efeitos hover
- Fundo com partículas interativas
- Efeito de confetti no botão "Vamos Conversar"

### **👤 Sobre**
- Biografia profissional detalhada
- Habilidades técnicas em destaque
- Experiência e trajetória profissional
- Valores e princípios pessoais

### **💼 Projetos**
- Showcase de projetos desenvolvidos
- Links diretos para repositórios GitHub
- Tecnologias utilizadas em cada projeto
- Descrições detalhadas e screenshots

### **🛠️ Habilidades**
- Tecnologias dominadas organizadas por categoria
- Níveis de proficiência visual
- Certificações e conquistas
- Áreas de especialização

### **📞 Contato**
- **Formulário funcional** com EmailJS
- Informações de contato diretas
- Links para redes sociais
- Horário de resposta e disponibilidade

## 🚀 Deploy e Hospedagem

### **Opções Gratuitas Recomendadas:**

#### **1. Vercel (Mais Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```
- ✅ **Gratuito** para projetos pessoais
- ✅ **Deploy automático** do GitHub
- ✅ **Otimização automática** para Next.js
- ✅ **SSL gratuito**
- ✅ **CDN global**

#### **2. Netlify**
```bash
# Build do projeto
npm run build

# Deploy via drag & drop ou Git
```
- ✅ **Gratuito** com recursos generosos
- ✅ **Deploy via Git** automático
- ✅ **Formulários integrados**
- ✅ **Funções serverless**

#### **3. GitHub Pages**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar scripts no package.json
"scripts": {
  "deploy": "gh-pages -d out",
  "export": "next export"
}
```
- ✅ **Completamente gratuito**
- ✅ **Hospedado no GitHub**
- ✅ **Ideal para projetos estáticos**

### **Configuração para Produção:**
1. Configure as credenciais do EmailJS
2. Teste o formulário de contato
3. Execute `npm run build` para otimização
4. Faça deploy na plataforma escolhida

## 🔧 Solução de Problemas

### **Formulário de Contato não Funciona:**
```bash
# Verifique se o EmailJS está configurado
cat lib/emailjs-config.ts

# Teste a conexão
npm run dev
# Acesse http://localhost:3000/contato
```

### **Erros de Build:**
```bash
# Limpe o cache
rm -rf .next
npm run build
```

### **Problemas com Dependências:**
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### **Erros de TypeScript:**
```bash
# Verifique tipos
npx tsc --noEmit
```

### **Performance Lenta:**
- Use `npm run build` para produção
- Configure variáveis de ambiente
- Otimize imagens e assets

## 🗺️ Roadmap

### **Próximas Implementações:**
- [ ] **Sistema de Blog** integrado
- [ ] **Modo Claro/Escuro** automático
- [ ] **Internacionalização** (i18n)
- [ ] **CMS Integrado** para conteúdo dinâmico
- [ ] **Analytics Avançado** com tracking
- [ ] **PWA** (Progressive Web App)
- [ ] **Sistema de Newsletter**
- [ ] **Dashboard Administrativo**
- [ ] **Integração com APIs** externas
- [ ] **Testes Automatizados** completos

### **Melhorias Planejadas:**
- [ ] **Otimização de Performance** (Core Web Vitals)
- [ ] **SEO Avançado** com meta tags dinâmicas
- [ ] **Acessibilidade** (WCAG 2.1)
- [ ] **Componentes Reutilizáveis** expandidos
- [ ] **Documentação Técnica** completa

## 🔄 Tecnologias Relacionadas

### **Alternativas para Email:**
- **Formspree** - Formulários simples
- **Netlify Forms** - Para sites no Netlify
- **SendGrid/Mailgun** - Serviços profissionais

### **Frameworks Alternativos:**
- **Gatsby** - SSG com GraphQL
- **Astro** - Framework orientado a conteúdo
- **Remix** - Full-stack com React

### **Bibliotecas de Animação:**
- **GSAP** - Animações de alto desempenho
- **React Spring** - Animações baseadas em física
- **Motion One** - Alternativa leve ao Framer Motion

## 📊 Estatísticas do Projeto

<div align="center">
  <img src="https://img.shields.io/github/repo-size/yonki/yonkiblog?style=for-the-badge" alt="Tamanho do repositório"/>
  <img src="https://img.shields.io/github/languages/count/yonki/yonkiblog?style=for-the-badge" alt="Linguagens"/>
  <img src="https://img.shields.io/github/languages/top/yonki/yonkiblog?style=for-the-badge" alt="Linguagem principal"/>
  <img src="https://img.shields.io/github/last-commit/yonki/yonkiblog?style=for-the-badge" alt="Último commit"/>
</div>

### **Métricas Técnicas:**
- **📦 Dependências**: 20+ pacotes otimizados
- **🎨 Componentes**: 5 páginas principais + navegação
- **⚡ Performance**: Build otimizado com Turbopack
- **📱 Responsivo**: Design mobile-first
- **♿ Acessibilidade**: Estrutura semântica HTML
- **🔒 Segurança**: Next.js com headers de segurança

### **Funcionalidades Implementadas:**
- ✅ **Formulário de Contato** funcional
- ✅ **Animações Avançadas** com Framer Motion
- ✅ **Partículas Interativas** no fundo
- ✅ **Cursor Animado** personalizado
- ✅ **Type Animation** dinâmica
- ✅ **Design Responsivo** completo
- ✅ **SEO Otimizado** com meta tags
- ✅ **Performance** otimizada

## 🤝 Como Contribuir

1. **Fork** o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### **Diretrizes:**
- Siga os padrões de código existentes
- Adicione testes quando aplicável
- Atualize a documentação
- Use commits descritivos

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte & Comunidade

### **Canais de Suporte:**
- 📧 **Email**: gabrielsilvestre1164@gmail.com
- 💼 **LinkedIn**: [Gabriel Silvestre](https://br.linkedin.com/in/gabriel-silvestre-78024a265)
- 🐙 **GitHub**: [gabsilvs](https://github.com/gabsilvs)

### **Documentação Técnica:**
- 📚 **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- 🎨 **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- 🎭 **Framer Motion**: [www.framer.com/motion](https://www.framer.com/motion)
- 📧 **EmailJS**: [www.emailjs.com/docs](https://www.emailjs.com/docs)

### **Comunidades:**
- 💬 **Discord Next.js**: [nextjs.org/discord](https://nextjs.org/discord)
- 💬 **Reddit r/nextjs**: [reddit.com/r/nextjs](https://reddit.com/r/nextjs)
- 💬 **Dev.to**: [dev.to/t/nextjs](https://dev.to/t/nextjs)

## 🙏 Agradecimentos & Créditos

### **Tecnologias & Bibliotecas:**
- **Vercel** - Por criar o Next.js e hospedar gratuitamente
- **Tailwind CSS** - Framework CSS incrível
- **Framer Motion** - Animações fluidas
- **EmailJS** - Sistema de email sem backend
- **Lucide** - Ícones modernos e consistentes

### **Comunidade Open Source:**
- Contribuidores do ecossistema React/Next.js
- Mantenedores das bibliotecas utilizadas
- Comunidade brasileira de desenvolvimento

### **Inspiração:**
- Portfólios modernos da comunidade dev
- Designs do Dribbble e Behance
- Tendências de UX/UI atuais

## 📝 Changelog

### **v1.0.0** - Lançamento Inicial
- ✅ **Portfólio completo** com 5 páginas
- ✅ **Animações avançadas** com Framer Motion
- ✅ **Partículas interativas** no fundo
- ✅ **Cursor animado** personalizado
- ✅ **Formulário de contato** com EmailJS
- ✅ **Design responsivo** e moderno
- ✅ **TypeScript** completo
- ✅ **SEO otimizado**

### **Funcionalidades Implementadas:**
- Sistema de navegação fixa
- Efeitos de confetti
- Type animation dinâmica
- Validação de formulários
- Feedback visual completo
- Assets organizados (ícones/logos)
- Configuração EmailJS
- Build otimizado

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>Feito com ❤️ usando Next.js, React e TypeScript</p>
  <p>
    <a href="#yonki-dev---portfólio">Voltar ao topo</a>
  </p>
</div>

### **Na## 📞 Suporte & Comunidade

### **Canais de Suporte:**
- 📧 **Email**: gabrielsilvestre1164@gmail.com
- 💼 **LinkedIn**: [Gabriel Silvestre](https://br.linkedin.com/in/gabriel-silvestre-78024a265)
- 🐙 **GitHub**: [gabsilvs](https://github.com/gabsilvs)

### **Documentação Técnica:**
- 📚 **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- 🎨 **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- 🎭 **Framer Motion**: [www.framer.com/motion](https://www.framer.com/motion)
- 📧 **EmailJS**: [www.emailjs.com/docs](https://www.emailjs.com/docs)

### **Comunidades:**
- 💬 **Discord Next.js**: [nextjs.org/discord](https://nextjs.org/discord)
- 💬 **Reddit r/nextjs**: [reddit.com/r/nextjs](https://reddit.com/r/nextjs)
- 💬 **Dev.to**: [dev.to/t/nextjs](https://dev.to/t/nextjs)

## 🙏 Agradecimentos & Créditos

### **Tecnologias & Bibliotecas:**
- **Vercel** - Por criar o Next.js e hospedar gratuitamente
- **Tailwind CSS** - Framework CSS incrível
- **Framer Motion** - Animações fluidas
- **EmailJS** - Sistema de email sem backend
- **Lucide** - Ícones modernos e consistentes

### **Comunidade Open Source:**
- Contribuidores do ecossistema React/Next.js
- Mantenedores das bibliotecas utilizadas
- Comunidade brasileira de desenvolvimento

### **Inspiração:**
- Portfólios modernos da comunidade dev
- Designs do Dribbble e Behance
- Tendências de UX/UI atuais

## 📝 Changelog

### **v1.0.0** - Lançamento Inicial
- ✅ **Portfólio completo** com 5 páginas
- ✅ **Animações avançadas** com Framer Motion
- ✅ **Partículas interativas** no fundo
- ✅ **Cursor animado** personalizado
- ✅ **Formulário de contato** com EmailJS
- ✅ **Design responsivo** e moderno
- ✅ **TypeScript** completo
- ✅ **SEO otimizado**

### **Funcionalidades Implementadas:**
- Sistema de navegação fixa
- Efeitos de confetti
- Type animation dinâmica
- Validação de formulários
- Feedback visual completo
- Assets organizados (ícones/logos)
- Configuração EmailJS
- Build otimizado

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>Feito com ❤️ usando Next.js, React e TypeScript</p>
  <p>
    <a href="#yonki-dev---portfólio">Voltar ao topo</a>
  </p>
</div> Suportados:**
- ✅ **Chrome**: 90+
- ✅ **Firefox**: 88+
- ✅ **Safari**: 14+
- ✅ **Edge**: 90+

## 🚀 Funcionalidades SVG (25 ícones)
│   │   ├── android.svg, briefcase.svg, code.svg
│   │   ├── database.svg, email.svg, express.svg
│   │   └── ... (react.svg, typescript.svg, etc.)
│   └── logos/                   # Logos de tecnologias (20 logos)
│       ├── android.svg, docker.svg, express.svg
│       ├── firebase.svg, git.svg, github.svg
│       └── ... (nextjs.svg, nodejs.svg, etc.)
├── lib/                         # Utilitários e configurações
│   └── emailjs-config.ts        # Configuração do EmailJS
├── next.config.ts               # Configuração Next.js
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração PostCSS
├── tailwind.config.js           # Configuração Tailwind CSS
├── tsconfig.json                # Configuração TypeScript
├── EMAILJS_SETUP.md             # Guia de configuração do EmailJS
└── README.md                    # Este arquivo
```

## 🎨 Assets Disponíveis

### **Ícones (25 ícones SVG)**
- **Tecnologias**: React, Next.js, TypeScript, Node.js, etc.
- **Ferramentas**: Git, Docker, Figma, VS Code
- **Plataformas**: Android, iOS, Web
- **Bancos**: PostgreSQL, MongoDB, Firebase
- **Comunicação**: Email, telefone, localização

### **Logos (20 logos SVG)**
- **Frameworks**: React, Next.js, Express, NestJS
- **Linguagens**: JavaScript, TypeScript, Java, Kotlin
- **Ferramentas**: Git, GitHub, Docker, Figma
- **Cloud**: Firebase, Vercel
- **Bancos**: PostgreSQL, MongoDB

## ⚙️ Arquivos de Configuraçãoimg.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS"/>
</div>

<br/>

## 🛠️ Stack Tecnológico

### **Core Framework**
- **[Next.js 15.5.2](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - JavaScript com tipagem estática

### **Styling & UI**
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion 12.23.12](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e consistentes

### **Efeitos Visuais & Interatividade**
- **[@tsparticles/react](https://particles.js.org/)** - Sistema de partículas interativas
- **[react-animated-cursor](https://www.npmjs.com/package/react-animated-cursor)** - Cursor personalizado animado
- **[react-confetti](https://www.npmjs.com/package/react-confetti)** - Efeitos de confetti
- **[react-type-animation](https://www.npmjs.com/package/react-type-animation)** - Animações de texto digitado
- **[react-scroll-parallax](https://www.npmjs.com/package/react-scroll-parallax)** - Efeitos de parallax no scroll
- **[@emailjs/browser](https://www.emailjs.com/)** - Sistema de envio de emails sem backend

### **Ferramentas de Desenvolvimento**
- **[Turbopack](https://turbo.build/pack)** - Bundler rápido do Next.js
- **[ESLint](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processador CSS

### **Fontes**
- **[Geist](https://vercel.com/font)** - Família de fontes moderna da Vercel
- **Geist Mono** - Fonte monoespaçada para código

### **Comunicação & Email**
- **[@emailjs/browser](https://www.emailjs.com/)** - Sistema de envio de emails sem backend

## 🔄 Tecnologias Relacionadas

### **Alternativas para Email:**
- **Formspree** - Formulários simples
- **Netlify Forms** - Para sites no Netlify
- **SendGrid/Mailgun** - Serviços profissionais

### **Frameworks Alternativos:**
- **Gatsby** - SSG com GraphQL
- **Astro** - Framework orientado a conteúdo
- **Remix** - Full-stack com React

### **Bibliotecas de Animação:**
- **GSAP** - Animações de alto desempenho
- **React Spring** - Animações baseadas em física
- **Motion One** - Alternativa leve ao Framer Motion

## � Estatísticas do Projeto

<div align="center">
  <img src="https://img.shields.io/github/repo-size/yonki/yonkiblog?style=for-the-badge" alt="Tamanho do repositório"/>
  <img src="https://img.shields.io/github/languages/count/yonki/yonkiblog?style=for-the-badge" alt="Linguagens"/>
  <img src="https://img.shields.io/github/languages/top/yonki/yonkiblog?style=for-the-badge" alt="Linguagem principal"/>
  <img src="https://img.shields.io/github/last-commit/yonki/yonkiblog?style=for-the-badge" alt="Último commit"/>
</div>

### **Métricas Técnicas:**
- **📦 Dependências**: 20+ pacotes otimizados
- **🎨 Componentes**: 5 páginas principais + navegação
- **⚡ Performance**: Build otimizado com Turbopack
- **📱 Responsivo**: Design mobile-first
- **♿ Acessibilidade**: Estrutura semântica HTML
- **🔒 Segurança**: Next.js com headers de segurança

### **Funcionalidades Implementadas:**
- ✅ **Formulário de Contato** funcional
- ✅ **Animações Avançadas** com Framer Motion
- ✅ **Partículas Interativas** no fundo
- ✅ **Cursor Animado** personalizado
- ✅ **Type Animation** dinâmica
- ✅ **Design Responsivo** completo
- ✅ **SEO Otimizado** com meta tags
- ✅ **Performance** otimizada

## �📁 Estrutura do Projeto

```
yonkiblog/
├── app/                          # Next.js App Router
│   ├── components/               # Componentes reutilizáveis
│   │   └── Nav.tsx              # Componente de navegação
│   ├── sobre/                   # Página Sobre
│   │   └── page.tsx
│   ├── projetos/                # Página Projetos
│   │   └── page.tsx
│   ├── habilidades/             # Página Habilidades
│   │   └── page.tsx
│   ├── contato/                 # Página Contato
│   │   └── page.tsx
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout raiz
│   └── page.tsx                 # Página inicial
├── public/                      # Assets estáticos
│   ├── icons/                   # Ícones SVG
│   └── logos/                   # Logos de tecnologias
├── next.config.ts               # Configuração Next.js
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração PostCSS
├── tailwind.config.js           # Configuração Tailwind CSS
├── tsconfig.json                # Configuração TypeScript
├── EMAILJS_SETUP.md             # Guia de configuração do EmailJS
└── README.md                    # Este arquivo
```

## ⚙️ Arquivos de Configuração

### **EmailJS (`lib/emailjs-config.ts`)**
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
  TO_EMAIL: 'seu@email.com'
};
```

### **Next.js (`next.config.ts`)**
- Configuração do Turbopack
- Suporte a SVGs
- Otimizações de build

### **TypeScript (`tsconfig.json`)**
- Configuração completa para Next.js 15
- Paths absolutos configurados
- Strict mode habilitado

## � Scripts Disponíveis

```json
{
  "dev": "next dev",           // Servidor de desenvolvimento
  "build": "next build",       // Build para produção
  "start": "next start"        // Servidor de produção
}
```

### **Como usar:**
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## �🚀 Funcionalidades

### **🎨 Design Moderno**
- **Tema Dark**: Interface elegante com gradientes sutis
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Tipografia Moderna**: Uso das fontes Geist e Geist Mono

### **✨ Animações Avançadas**
- **Framer Motion**: Animações de entrada, hover e transições suaves
- **Partículas Interativas**: Fundo animado que responde ao mouse
- **Cursor Animado**: Cursor personalizado com círculos concêntricos
- **Type Animation**: Texto digitado dinamicamente na página inicial
- **Scroll Effects**: Animações baseadas no scroll do usuário

### **🎯 Interatividade**
- **Confetti Effect**: Efeito de confetti ao clicar em botões específicos
- **Hover Effects**: Animações responsivas em todos os elementos interativos
- **Particle Interactions**: Partículas que reagem ao movimento do mouse
- **Smooth Transitions**: Transições fluidas entre estados

### **� Formulário de Contato**
- **EmailJS Integration**: Sistema de envio de emails sem backend
- **Validação Completa**: Campos obrigatórios e validação de email
- **Feedback Visual**: Estados de loading, sucesso e erro
- **Prevenção de Spam**: Validações client-side

## 🏗️ Arquitetura

### **Next.js App Router**
- **Server Components**: Para melhor performance
- **Client Components**: Para interatividade (marcados com `'use client'`)
- **File-based Routing**: Estrutura intuitiva de rotas

### **Componentização**
- **Componentes Reutilizáveis**: Nav, animações e efeitos
- **Separação de Responsabilidades**: Lógica, estilos e markup separados
- **TypeScript**: Tipagem completa para melhor DX

### **Performance**
- **Turbopack**: Build rápido durante desenvolvimento
- **Lazy Loading**: Componentes carregados sob demanda
- **Optimized Assets**: Imagens e SVGs otimizados

## 🎨 Paleta de Cores

```css
:root {
  --background: #1a1a1a;      /* Fundo principal */
  --foreground: #fefefe;      /* Texto principal */
  --primary-dark-gray: #374151; /* Cinza escuro */
  --primary-gray: #6b7280;    /* Cinza principal */
  --accent-cream: #f9fafb;    /* Creme para destaques */
}
```

## 📧 Configuração do Formulário de Contato (EmailJS)

### **Como Configurar o EmailJS:**

1. **Criar conta gratuita** em [emailjs.com](https://www.emailjs.com/)
2. **Adicionar serviço de email** (Gmail, Outlook, etc.)
3. **Criar template de email** com variáveis:
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{subject}}` - Assunto da mensagem
   - `{{message}}` - Conteúdo da mensagem
4. **Obter credenciais** (Service ID, Template ID, Public Key)
5. **Configurar no arquivo** `lib/emailjs-config.ts`

### **Arquivo de Configuração:**
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
  TO_EMAIL: 'seu@email.com'
};
```

### **Limites Gratuitos:**
- ✅ **200 emails/mês**
- ✅ **1 serviço de email**
- ✅ **2 templates**
- ✅ **Suporte HTML**

📖 **Guia completo**: Veja `EMAILJS_SETUP.md` para instruções detalhadas.

## 🎯 Páginas do Portfólio

### **🏠 Página Inicial**
- Hero section com animações dinâmicas
- Apresentação com TypeAnimation
- Botões de ação com efeitos hover
- Fundo com partículas interativas
- Efeito de confetti no botão "Vamos Conversar"

### **👤 Sobre**
- Biografia profissional detalhada
- Habilidades técnicas em destaque
- Experiência e trajetória profissional
- Valores e princípios pessoais

### **💼 Projetos**
- Showcase de projetos desenvolvidos
- Links diretos para repositórios GitHub
- Tecnologias utilizadas em cada projeto
- Descrições detalhadas e screenshots

### **🛠️ Habilidades**
- Tecnologias dominadas organizadas por categoria
- Níveis de proficiência visual
- Certificações e conquistas
- Áreas de especialização

### **📞 Contato**
- **Formulário funcional** com EmailJS
- Informações de contato diretas
- Links para redes sociais
- Horário de resposta e disponibilidade

## 🚀 Deploy e Hospedagem

### **Opções Gratuitas Recomendadas:**

#### **1. Vercel (Mais Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```
- ✅ **Gratuito** para projetos pessoais
- ✅ **Deploy automático** do GitHub
- ✅ **Otimização automática** para Next.js
- ✅ **SSL gratuito**
- ✅ **CDN global**

#### **2. Netlify**
```bash
# Build do projeto
npm run build

# Deploy via drag & drop ou Git
```
- ✅ **Gratuito** com recursos generosos
- ✅ **Deploy via Git** automático
- ✅ **Formulários integrados**
- ✅ **Funções serverless**

#### **3. GitHub Pages**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar scripts no package.json
"scripts": {
  "deploy": "gh-pages -d out",
  "export": "next export"
}
```
- ✅ **Completamente gratuito**
- ✅ **Hospedado no GitHub**
- ✅ **Ideal para projetos estáticos**

### **Configuração para Produção:**
1. Configure as credenciais do EmailJS
2. Teste o formulário de contato
3. Execute `npm run build` para otimização
4. Faça deploy na plataforma escolhida

## 🔧 Solução de Problemas

### **Formulário de Contato não Funciona:**
```bash
# Verifique se o EmailJS está configurado
cat lib/emailjs-config.ts

# Teste a conexão
npm run dev
# Acesse http://localhost:3000/contato
```

### **Erros de Build:**
```bash
# Limpe o cache
rm -rf .next
npm run build
```

### **Problemas com Dependências:**
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### **Erros de TypeScript:**
```bash
# Verifique tipos
npx tsc --noEmit
```

### **Performance Lenta:**
- Use `npm run build` para produção
- Configure variáveis de ambiente
- Otimize imagens e assets

## 🗺️ Roadmap

### **Próximas Implementações:**
- [ ] **Sistema de Blog** integrado
- [ ] **Modo Claro/Escuro** automático
- [ ] **Internacionalização** (i18n)
- [ ] **CMS Integrado** para conteúdo dinâmico
- [ ] **Analytics Avançado** com tracking
- [ ] **PWA** (Progressive Web App)
- [ ] **Sistema de Newsletter**
- [ ] **Dashboard Administrativo**
- [ ] **Integração com APIs** externas
- [ ] **Testes Automatizados** completos

### **Melhorias Planejadas:**
- [ ] **Otimização de Performance** (Core Web Vitals)
- [ ] **SEO Avançado** com meta tags dinâmicas
- [ ] **Acessibilidade** (WCAG 2.1)
- [ ] **Componentes Reutilizáveis** expandidos
- [ ] **Documentação Técnica** completa

## 🤝 Como Contribuir

1. **Fork** o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### **Diretrizes:**
- Siga os padrões de código existentes
- Adicione testes quando aplicável
- Atualize a documentação
- Use commits descritivos

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>Feito com ❤️ usando Next.js, React e TypeScript</p>
  <p>
    <a href="#yonki-dev---portfólio">Voltar ao topo</a>
  </p>
</div>
