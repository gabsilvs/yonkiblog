'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Database,
  Settings,
  MapPin,
  Factory,
  Award,
  Calendar,
  Star
} from 'lucide-react';
import AnimatedCursor from 'react-animated-cursor';

export default function Habilidades() {
  const skills = [
    {
      category: 'Mobile & Frontend',
      icon: '/logos/react-native.svg',
      color: '#61DAFB',
      technologies: [
        { name: 'React Native', level: 90, icon: '/logos/react-native.svg' },
        { name: 'TypeScript', level: 85, icon: '/logos/typescript.svg' },
        { name: 'JavaScript', level: 95, icon: '/logos/javascript.svg' },
        { name: 'Expo', level: 80, icon: '/icons/smartphone.svg' }
      ]
    },
    {
      category: 'Backend & Database',
      icon: '/logos/nestjs.svg',
      color: '#E0234E',
      technologies: [
        { name: 'NestJS', level: 85, icon: '/logos/nestjs.svg' },
        { name: 'Prisma', level: 80, icon: '/logos/prisma.svg' },
        { name: 'PostgreSQL', level: 75, icon: '/logos/postgresql.svg' },
        { name: 'MongoDB', level: 70, icon: '/logos/mongodb.svg' }
      ]
    },
    {
      category: 'Native & Systems',
      icon: '/logos/kotlin.svg',
      color: '#7F52FF',
      technologies: [
        { name: 'Kotlin', level: 80, icon: '/logos/kotlin.svg' },
        { name: 'Android SDK', level: 75, icon: '/logos/android.svg' },
        { name: 'Java', level: 85, icon: '/logos/java.svg' },
        { name: 'Accessibility Services', level: 70, icon: '/icons/code.svg' }
      ]
    },
    {
      category: 'Tools & Others',
      icon: '/logos/git.svg',
      color: '#F05032',
      technologies: [
        { name: 'Git', level: 90, icon: '/logos/git.svg' },
        { name: 'Node.js', level: 85, icon: '/logos/nodejs.svg' },
        { name: 'Express', level: 75, icon: '/logos/express.svg' },
        { name: 'REST APIs', level: 85, icon: '/icons/database.svg' }
      ]
    }
  ];

  const experiences = [
    {
      title: 'Desenvolvedor Full-Stack Mobile',
      company: 'Projetos Independentes',
      period: '2023 - Presente',
      description: 'Desenvolvimento de aplicações cross-platform usando React Native, APIs robustas com NestJS e automação de sistemas.',
      technologies: ['React Native', 'NestJS', 'Kotlin', 'TypeScript']
    },
    {
      title: 'Desenvolvedor Android',
      company: 'Projetos Pessoais',
      period: '2022 - 2023',
      description: 'Criação de aplicações Android nativas com foco em acessibilidade e automação de tarefas.',
      technologies: ['Kotlin', 'Android SDK', 'Java']
    }
  ];

  const certifications = [
    {
      title: 'Desenvolvimento Mobile com React Native',
      issuer: 'Udemy',
      year: '2024',
      description: 'Curso completo sobre desenvolvimento de apps móveis cross-platform.'
    },
    {
      title: 'NestJS - The Complete Developer\'s Guide',
      issuer: 'Udemy',
      year: '2024',
      description: 'Aprendizado avançado de desenvolvimento backend com NestJS.'
    },
    {
      title: 'Kotlin para Android',
      issuer: 'Google Developers',
      year: '2023',
      description: 'Fundamentos de desenvolvimento Android com Kotlin.'
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(107,114,128,0.1),transparent_70%)]"></div>
      <div className="absolute top-10 left-10 w-36 h-36 bg-[#6b7280] rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#f9fafb] rounded-full opacity-15 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-mono font-extrabold text-[#6b7280] mb-4">Minhas Habilidades</h1>
          <p className="text-lg text-gray-300">Tecnologias, experiências e conquistas ao longo da minha jornada</p>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-mono font-bold text-[#6b7280] mb-8 text-center">Tecnologias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-6 hover:scale-105 hover:border-[#9ca3af]/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: `${skill.color}20` }}>
                      <img src={skill.icon} alt={skill.category} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-mono font-bold text-[#9ca3af] group-hover:text-white transition-colors">{skill.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 + techIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {tech.icon.startsWith('/') ? (
                              <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                            ) : (
                              <div className="w-5 h-5 bg-[#6b7280]/20 rounded" />
                            )}
                            <span className="text-gray-300 font-mono text-sm">{tech.name}</span>
                          </div>
                          <span className="text-[#9ca3af] font-mono text-sm">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-[#2d2d2d] rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 + techIndex * 0.1, ease: "easeOut" }}
                            className="h-2 rounded-full relative"
                            style={{ backgroundColor: skill.color }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-mono font-bold text-[#6b7280] mb-8 text-center">Experiência</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-[#18181c] border border-[#6b7280] rounded-xl p-6 hover:border-[#f9fafb] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-mono font-bold text-[#6b7280]">{exp.title}</h3>
                    <p className="text-gray-400 font-mono">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="bg-[#6b7280]/20 text-[#6b7280] text-xs px-3 py-1 rounded-full font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-mono font-bold text-[#6b7280] mb-8 text-center">Certificações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#18181c] border border-[#6b7280] rounded-xl p-6 hover:border-[#f9fafb] transition-colors"
              >
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-[#6b7280] mr-2" />
                  <span className="text-[#6b7280] font-mono text-sm">{cert.year}</span>
                </div>
                <h3 className="text-lg font-mono font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-mono font-bold text-[#6b7280] mb-4">Interessado em Colaborar?</h2>
          <p className="text-gray-300 mb-6">Vamos discutir como minhas habilidades podem ajudar no seu próximo projeto</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="px-6 py-3 bg-[#6b7280] text-white font-mono rounded-lg hover:bg-[#f9fafb] hover:text-[#1a1a1a] transition-colors">
              Entrar em Contato
            </Link>
            <Link href="/projetos" className="px-6 py-3 border border-[#6b7280] text-[#6b7280] font-mono rounded-lg hover:bg-[#6b7280] hover:text-white transition-colors">
              Ver Projetos
            </Link>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/" className="text-[#6b7280] hover:text-[#f9fafb] transition-colors">← Voltar ao Início</Link>
        </div>
      </div>
    </div>
  );
}
