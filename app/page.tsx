'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Engine } from '@tsparticles/engine';
import { initParticlesEngine } from '@tsparticles/react';
import AnimatedCursor from 'react-animated-cursor';
import Confetti from 'react-confetti';

export default function Home() {
  const [init, setInit] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push" as const,
        },
        onHover: {
          enable: true,
          mode: "repulse" as const,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#6b7280",
      },
      links: {
        color: "#6b7280",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-4 py-10 font-sans relative overflow-hidden">
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
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 1920}
          height={typeof window !== 'undefined' ? window.innerHeight : 1080}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Yonki Dev
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          <TypeAnimation
            sequence={[
              'Desenvolvedor Full Stack',
              2000,
              'Especialista em React & Next.js',
              2000,
              'Criador de Experiências Digitais',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Transformo ideias em código elegante e eficiente. Especializado em desenvolvimento web moderno
          com foco em performance, UX/UI e escalabilidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Vamos Conversar
          </motion.button>

          <Link href="/projetos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-white hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              Ver Projetos
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="mailto:contato@yonki.dev"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-8 h-8" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
