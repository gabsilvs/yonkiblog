"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

export default function Nav() {
  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/sobre", label: "Sobre", icon: User },
    { href: "/habilidades", label: "Habilidades", icon: Code },
    { href: "/projetos", label: "Projetos", icon: Briefcase },
    { href: "/contato", label: "Contato", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-500/30 z-50 shadow-lg shadow-gray-500/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-gray-500 font-mono font-bold text-xl hover:text-gray-100 transition-all duration-300 flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-gray-500 rounded-full"
            />
            Yonki Dev
          </Link>
        </motion.div>
        <div className="flex gap-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-gray-500 hover:bg-gray-500/10 rounded-lg transition-all duration-300 font-mono group"
                >
                  <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
