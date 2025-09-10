# Yonki Dev - Portfólio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
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
│   ├── icons/                   # Ícones SVG
│   └── logos/                   # Logos de tecnologias
├── next.config.ts               # Configuração Next.js
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração PostCSS
├── tailwind.config.js           # Configuração Tailwind CSS
└── tsconfig.json                # Configuração TypeScript
```

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

<div align="center">
  <p>Feito com ❤️ usando Next.js, React e TypeScript</p>
  <p>
    <a href="#-visão-geral">Voltar ao topo</a>
  </p>
</div>
