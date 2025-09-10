# 🚀 Yonki Dev - Portfólio Moderno

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS"/>
</div>

<br/>

<div align="center">
  <h3>🎨 Portfólio Interativo com Animações Avançadas</h3>
  <p>Experiência digital moderna com efeitos visuais impressionantes</p>
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

## 📦 Instalação e Execução

### **Pré-requisitos**
- Node.js 18+
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone <repository-url>
cd yonkiblog

# Instale as dependências
npm install
```

### **Execução**
```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

### **Acesso**
Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🔧 Scripts Disponíveis

```json
{
  "dev": "next dev",           // Inicia servidor de desenvolvimento
  "build": "next build",       // Build para produção
  "start": "next start"        // Inicia servidor de produção
}
```

## 🎯 Páginas do Portfólio

### **🏠 Página Inicial**
- Hero section com animações
- Apresentação dinâmica com TypeAnimation
- Botões de ação com efeitos hover
- Fundo com partículas interativas
- Efeito de confetti no botão "Vamos Conversar"

### **👤 Sobre**
- Biografia profissional
- Habilidades técnicas em destaque
- Experiência e trajetória
- Valores e princípios

### **💼 Projetos**
- Showcase de projetos desenvolvidos
- Links para repositórios GitHub
- Tecnologias utilizadas
- Descrições detalhadas

### **🛠️ Habilidades**
- Tecnologias dominadas
- Níveis de proficiência
- Certificações e conquistas
- Áreas de especialização

### **📞 Contato**
- Formulário de contato
- Links para redes sociais
- Informações de contato direto
- Localização

## 🎨 Assets e Ícones

### **Ícones Disponíveis**
- **Tecnologias**: React, Next.js, TypeScript, Node.js, etc.
- **Ferramentas**: Git, Docker, Figma, VS Code
- **Plataformas**: Android, iOS, Web
- **Bancos**: PostgreSQL, MongoDB, Firebase

### **Logos**
- Logos oficiais das tecnologias
- Versões otimizadas em SVG
- Consistência visual

## 🔄 Próximas Implementações

- [ ] Sistema de blog integrado
- [ ] Modo claro/escuro
- [ ] Internacionalização (i18n)
- [ ] CMS para conteúdo dinâmico
- [ ] Analytics e tracking
- [ ] PWA (Progressive Web App)

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Yonki Dev**
- **Portfólio**: [yonki.dev](https://yonki.dev)
- **GitHub**: [@yonki](https://github.com/yonki)
- **LinkedIn**: [Yonki Dev](https://linkedin.com/in/yonki)
- **Email**: contato@yonki.dev

---

<div align="center">
  <p>Feito com ❤️ usando Next.js, React e TypeScript</p>
  <p>
    <a href="#-visão-geral">Voltar ao topo</a>
  </p>
</div>
