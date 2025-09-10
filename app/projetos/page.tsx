'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Calendar, Code } from 'lucide-react';
import AnimatedCursor from 'react-animated-cursor';

export default function Projetos() {
  const projects = [
    {
      id: 1045953020,
      name: 'Uber Driver App',
      full_name: 'gabsilvs/UberDriverClone',
      description: 'Aplicativo completo para motoristas com geolocalização em tempo real e interface moderna',
      language: 'JavaScript',
      html_url: 'https://github.com/gabsilvs/UberDriverClone',
      created_at: '2025-08-28T01:03:26Z',
      updated_at: '2025-08-28T10:27:34Z',
      stargazers_count: 1,
      topics: ['react-native', 'uber-clone', 'mobile-app', 'geolocation'],
      tech: ['React Native', 'JavaScript', 'Maps API']
    },
    {
      id: 1045252375,
      name: 'Android UI Components',
      full_name: 'gabsilvs/JetpackCompose-Training',
      description: 'Coleção de componentes de interface modernos desenvolvidos com Jetpack Compose',
      language: 'Kotlin',
      html_url: 'https://github.com/gabsilvs/JetpackCompose-Training',
      created_at: '2025-08-26T22:05:40Z',
      updated_at: '2025-08-26T22:06:05Z',
      stargazers_count: 0,
      topics: ['android', 'jetpack-compose', 'kotlin', 'mobile-development'],
      tech: ['Kotlin', 'Jetpack Compose', 'Android']
    },
    {
      id: 1028588901,
      name: 'Kotlin Development Course',
      full_name: 'gabsilvs/CSC_Kotlin_Course',
      description: 'Curso completo de desenvolvimento Kotlin com exercícios práticos e projetos reais',
      language: 'Kotlin',
      html_url: 'https://github.com/gabsilvs/CSC_Kotlin_Course',
      created_at: '2025-07-29T18:52:22Z',
      updated_at: '2025-07-29T18:54:49Z',
      stargazers_count: 0,
      topics: ['kotlin', 'course', 'programming', 'education'],
      tech: ['Kotlin', 'Android', 'Backend']
    },
    {
      id: 1032645782,
      name: 'Spring Boot API',
      full_name: 'gabsilvs/springboot-workshop-jpa',
      description: 'API REST completa com Spring Boot, JPA e PostgreSQL para aplicações empresariais',
      language: 'Java',
      html_url: 'https://github.com/gabsilvs/springboot-workshop-jpa',
      created_at: '2025-08-05T15:55:06Z',
      updated_at: '2025-08-05T17:35:39Z',
      stargazers_count: 0,
      topics: ['spring-boot', 'jpa', 'hibernate', 'postgresql'],
      tech: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL']
    },
    {
      id: 921878169,
      name: 'Energy Data Analytics',
      full_name: 'gabsilvs/Analise_Dados_GastoEnergetico',
      description: 'Dashboard analítico para visualização de dados energéticos com machine learning',
      language: 'Python',
      html_url: 'https://github.com/gabsilvs/Analise_Dados_GastoEnergetico',
      created_at: '2025-01-24T19:38:20Z',
      updated_at: '2025-04-23T18:25:03Z',
      stargazers_count: 0,
      topics: ['data-analysis', 'python', 'machine-learning', 'energy'],
      tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      id: 972934212,
      name: 'Real-time Chat App',
      full_name: 'gabsilvs/furia_webchat',
      description: 'Aplicativo de mensagens instantâneas com Flutter e Firebase para comunicação em tempo real',
      language: 'Dart',
      html_url: 'https://github.com/gabsilvs/furia_webchat',
      created_at: '2025-04-25T23:26:16Z',
      updated_at: '2025-05-04T16:15:12Z',
      stargazers_count: 0,
      topics: ['flutter', 'firebase', 'chat-app', 'real-time'],
      tech: ['Flutter', 'Dart', 'Firebase', 'WebSocket']
    },
    {
      id: 978313245,
      name: 'Modern Web Portfolio',
      full_name: 'gabsilvs/frontend_training',
      description: 'Portfólio responsivo desenvolvido com tecnologias web modernas e design system',
      language: 'HTML',
      html_url: 'https://github.com/gabsilvs/frontend_training',
      created_at: '2025-05-05T19:45:03Z',
      updated_at: '2025-05-05T23:43:13Z',
      stargazers_count: 0,
      topics: ['html', 'css', 'javascript', 'frontend'],
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      id: 1029254673,
      name: 'Algorithm Solutions',
      full_name: 'gabsilvs/leetcode',
      description: 'Coleção de soluções otimizadas para problemas de algoritmos e estruturas de dados',
      language: null,
      html_url: 'https://github.com/gabsilvs/leetcode',
      created_at: '2025-07-30T18:53:03Z',
      updated_at: '2025-07-30T18:53:03Z',
      stargazers_count: 0,
      topics: ['algorithms', 'data-structures', 'coding-problems'],
      tech: ['JavaScript', 'Python', 'Java', 'Algorithms']
    }
  ];

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Java': '#ED8B00',
      'Kotlin': '#7F52FF',
      'Dart': '#00B4AB',
      'HTML': '#e34c26',
      'CSS': '#1572B6'
    };
    return colors[language || ''] || '#6b7280';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short'
    });
  };

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(107,114,128,0.1),transparent_70%)]"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-[#6b7280] rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#374151] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-mono font-extrabold text-gray-500 mb-4 bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
            Meus Projetos
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Uma coleção dos meus trabalhos mais recentes no GitHub, desenvolvidos com as tecnologias mais modernas
          </p>
        </motion.header>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="overflow-x-auto pb-8"
        >
          <div className="flex gap-6 px-4 min-w-max">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-6 w-80 flex flex-col hover:border-[#9ca3af]/50 transition-all duration-300 shadow-lg hover:shadow-[#6b7280]/20 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#6b7280]" />
                    <h3 className="font-mono text-lg font-bold text-[#9ca3af] group-hover:text-white transition-colors">
                      {project.name.replace(/[_-]/g, ' ')}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">{project.stargazers_count}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                  {project.description || 'Projeto em desenvolvimento'}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {project.language && (
                    <>
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(project.language) }}
                      />
                      <span className="text-xs text-gray-400 font-mono">{project.language}</span>
                    </>
                  )}
                  <div className="flex items-center gap-1 ml-auto">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500">{formatDate(project.created_at)}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-[#6b7280]/20 text-[#9ca3af] text-xs px-2 py-1 rounded font-mono border border-[#6b7280]/30">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-auto">
                  <motion.a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#6b7280] text-white font-mono text-sm rounded-lg hover:bg-[#9ca3af] transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-[#6b7280] text-[#6b7280] font-mono text-sm rounded-lg hover:bg-[#6b7280] hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-12"
        >
          {[
            { label: 'Projetos', value: projects.length, icon: '📁' },
            { label: 'Linguagens', value: new Set(projects.map(p => p.language).filter(Boolean)).size, icon: '💻' },
            { label: 'Stars', value: projects.reduce((sum, p) => sum + p.stargazers_count, 0), icon: '⭐' },
            { label: 'Tecnologias', value: new Set(projects.flatMap(p => p.tech)).size, icon: '🚀' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-6 text-center hover:border-[#9ca3af]/50 transition-colors"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#9ca3af] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-2xl font-mono font-bold text-[#9ca3af] mb-4">Mais Projetos</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Estes são apenas alguns dos meus projetos mais recentes. Explore meu GitHub para ver todo o meu trabalho!
          </p>
          <motion.a
            href="https://github.com/gabsilvs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-400 text-white font-mono rounded-lg hover:from-gray-400 hover:to-gray-100 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-500/30"
          >
            <Github className="w-5 h-5" />
            Explorar GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-12"
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
