'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import AnimatedCursor from 'react-animated-cursor';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../lib/emailjs-config';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validação básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Por favor, preencha todos os campos.');
      setIsSubmitting(false);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Por favor, insira um email válido.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
      setErrorMessage('Erro ao enviar mensagem. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(107,114,128,0.1),transparent_70%)]"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#6b7280] rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#f9fafb] rounded-full opacity-15 blur-3xl animate-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-mono font-extrabold bg-gradient-to-r from-gray-500 via-gray-400 to-gray-100 bg-clip-text text-transparent mb-4"
          >
            Vamos Conversar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 font-mono"
          >
            Entre em contato para colaborações, projetos ou apenas para bater um papo
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-mono font-bold text-[#9ca3af] mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-4 bg-[#18181c] border border-[#6b7280]/30 rounded-xl hover:border-[#9ca3af]/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#6b7280]/20 group-hover:bg-[#6b7280]/30 transition-colors">
                    <img src="/icons/mail.svg" alt="Email" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-400">Email</p>
                    <a href="mailto:gabrielsilvestre1164@gmail.com" className="text-white hover:text-[#9ca3af] transition-colors font-mono">
                      gabrielsilvestre1164@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-4 bg-[#18181c] border border-[#6b7280]/30 rounded-xl hover:border-[#9ca3af]/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#6b7280]/20 group-hover:bg-[#6b7280]/30 transition-colors">
                    <img src="/icons/map-pin.svg" alt="Localização" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-400">Localização</p>
                    <p className="text-white group-hover:text-[#9ca3af] transition-colors font-mono">Brasil</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-4 bg-[#18181c] border border-[#6b7280]/30 rounded-xl hover:border-[#9ca3af]/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#6b7280]/20 group-hover:bg-[#6b7280]/30 transition-colors">
                    <img src="/logos/github.svg" alt="GitHub" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-400">GitHub</p>
                    <a href="https://github.com/gabsilvs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9ca3af] transition-colors font-mono">
                      github.com/gabsilvs
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-4 bg-[#18181c] border border-[#6b7280]/30 rounded-xl hover:border-[#9ca3af]/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#6b7280]/20 group-hover:bg-[#6b7280]/30 transition-colors">
                    <img src="/logos/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-400">LinkedIn</p>
                    <a href="https://br.linkedin.com/in/gabriel-silvestre-78024a265" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9ca3af] transition-colors font-mono">
                      linkedin.com/in/gabriel-silvestre
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-6 hover:border-[#9ca3af]/50 transition-colors"
            >
              <h3 className="text-lg font-mono font-bold text-[#9ca3af] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Horário de Resposta
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                Geralmente respondo em até 24 horas durante dias úteis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-6 hover:border-[#9ca3af]/50 transition-colors"
            >
              <h3 className="text-xl font-mono font-bold text-[#9ca3af] mb-4 flex items-center gap-2">
                <Github className="w-5 h-5" />
                Disponibilidade
              </h3>
              <p className="text-gray-300 leading-relaxed font-mono">
                Estou sempre aberto a novas oportunidades e colaborações interessantes.
                Seja para projetos freelance, consultorias ou posições em tempo integral,
                adoraria conversar sobre como podemos trabalhar juntos.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#18181c] border border-[#6b7280]/30 rounded-xl p-8 hover:border-[#9ca3af]/50 transition-colors"
          >
            <h2 className="text-2xl font-mono font-bold text-[#9ca3af] mb-6 flex items-center gap-3">
              <Send className="w-6 h-6" />
              Envie uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-mono text-gray-400 mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#6b7280]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#9ca3af]/20 transition-all duration-300"
                  placeholder="Seu nome completo"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#6b7280]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#9ca3af]/20 transition-all duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="block text-sm font-mono text-gray-400 mb-2">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#6b7280]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#9ca3af]/20 transition-all duration-300"
                  placeholder="Sobre o que você quer conversar?"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block text-sm font-mono text-gray-400 mb-2">Mensagem</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#6b7280]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#9ca3af]/20 transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                  required
                ></textarea>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(107, 114, 128, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-gray-500 to-gray-400 text-white font-mono rounded-lg hover:from-gray-400 hover:to-gray-100 hover:text-gray-900 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Mensagem Enviada!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 text-sm font-mono"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-400 text-sm font-mono"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#18181c] border border-[#6b7280]/30 rounded-lg text-[#6b7280] hover:text-[#f9fafb] hover:border-[#9ca3af]/50 transition-all duration-300 font-mono">
              ← Voltar ao Início
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
