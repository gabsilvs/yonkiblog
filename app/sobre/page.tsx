'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Smartphone, Server, Zap, MapPin, Github, Linkedin, Mail, Code, Database, Globe, Cpu, Star, User } from 'lucide-react';
import AnimatedCursor from 'react-animated-cursor';

export default function Sobre() {
  const skills = [
    { name: 'React Native', icon: '/logos/react-native.svg', level: 90, color: '#61DAFB' },
    { name: 'TypeScript', icon: '/logos/typescript.svg', level: 85, color: '#3178C6' },
    { name: 'NestJS', icon: '/logos/nestjs.svg', level: 80, color: '#E0234E' },
    { name: 'Kotlin', icon: '/logos/kotlin.svg', level: 85, color: '#7F52FF' },
    { name: 'Node.js', icon: '/logos/nodejs.svg', level: 75, color: '#339933' },
    { name: 'Java', icon: '/logos/java.svg', level: 80, color: '#ED8B00' },
    { name: 'PostgreSQL', icon: '/logos/postgresql.svg', level: 70, color: '#336791' },
    { name: 'Git', icon: '/logos/git.svg', level: 90, color: '#F05032' }
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Apps Cross-Platform',
      description: 'Desenvolvimento de aplicações móveis usando React Native com módulos nativos Android e integração perfeita.',
      color: '#61DAFB'
    },
    {
      icon: Server,
      title: 'APIs Robustas',
      description: 'Criação de backends escaláveis com NestJS, Prisma e TypeScript para sistemas de alta performance.',
      color: '#E0234E'
    },
    {
      icon: Zap,
      title: 'Automação de Sistemas',
      description: 'Soluções de automação usando Kotlin e serviços de acessibilidade para otimização de processos.',
      color: '#7F52FF'
    },
    {
      icon: MapPin,
      title: 'Sistemas de Geolocalização',
      description: 'Monitoramento em tempo real com geolocalização avançada e integração com mapas interativos.',
      color: '#25D366'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-10 font-sans relative overflow-hidden">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#6b7280'
        }}
        outerStyle={{
          border: '3px solid #6b7280'
        }}
      />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(107,114,128,0.1),transparent_70%)]"></div>
      <div className="absolute top-10 right-20 w-24 h-24 bg-[#6b7280] rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#374151] rounded-full opacity-15 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-mono font-extrabold text-gray-500 mb-4 bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
            Sobre Mim
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Conheça mais sobre minha jornada e especialidades no desenvolvimento de software
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-mono font-bold text-[#9ca3af] mb-6 flex items-center gap-3">
            <User className="w-6 h-6" />
            Quem Sou
          </h2>
          <div className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-8 hover:border-[#9ca3af]/50 transition-colors">
            <p className="text-gray-300 leading-relaxed mb-4">
              Sou um desenvolvedor Full-Stack Mobile apaixonado por criar soluções inovadoras
              que combinam tecnologia de ponta com necessidades reais do mercado. Especializo-me em desenvolvimento de
              aplicações cross-platform, APIs robustas e automação de sistemas.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Minha experiência abrange desde o desenvolvimento de apps móveis nativos até sistemas de automação industrial,
              sempre buscando as melhores práticas e tecnologias emergentes para entregar produtos de alta qualidade.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-mono font-bold text-[#9ca3af] mb-8 flex items-center gap-3">
            <Code className="w-6 h-6" />
            O Que Construo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-6 hover:border-[#9ca3af]/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="font-mono text-lg font-bold text-[#9ca3af] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-mono font-bold text-[#9ca3af] mb-8 flex items-center gap-3">
            <Star className="w-6 h-6" />
            Tecnologias & Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-6 hover:border-[#9ca3af]/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon.startsWith('/') ? (
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <div className="w-8 h-8 bg-[#6b7280]/20 rounded flex items-center justify-center">
                      <Code className="w-4 h-4 text-[#9ca3af]" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-mono text-sm font-bold text-[#9ca3af] mb-1">{skill.name}</h3>
                    <div className="w-full bg-[#2d2d2d] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-2xl font-mono font-bold text-[#9ca3af] mb-4 flex items-center justify-center gap-3">
            <Mail className="w-6 h-6" />
            Vamos Conversar?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interessado em colaborar em um projeto ou tem alguma pergunta sobre minhas habilidades?
            Entre em contato! Estou sempre aberto a novas oportunidades e desafios interessantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:gabrielsilvestre1164@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#6b7280] text-white font-mono rounded-lg hover:bg-[#9ca3af] transition-all duration-300 shadow-lg hover:shadow-[#6b7280]/30"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </motion.a>
            <motion.a
              href="https://br.linkedin.com/in/gabriel-silvestre-78024a265"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#6b7280] text-[#6b7280] font-mono rounded-lg hover:bg-[#6b7280] hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/gabsilvs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#6b7280] text-[#6b7280] font-mono rounded-lg hover:bg-[#6b7280] hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#f9fafb] transition-colors font-mono group">
            <motion.div
              whileHover={{ x: -5 }}
              className="transition-transform"
            >
              ←
            </motion.div>
            Voltar ao Início
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
