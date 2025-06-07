'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, Home, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-[#121827] dark:to-[#0d111c] p-6">
      {/* Bulles décoratives animées */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#A7001E]/10 blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#A7001E]/5 blur-xl"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icône d'erreur animée */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 mb-6"
        >
          <AlertTriangle className="h-12 w-12 text-[#A7001E] dark:text-red-400" />
        </motion.div>

        {/* Contenu principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-[#A7001E] mb-4">
            Page introuvable
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Oups ! La page que vous recherchez semble avoir été déplacée, supprimée ou n'existe pas.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button  className="bg-[#A7001E] hover:bg-[#A7001E]/90">
              <Link href="/" className="flex items-center gap-2">
                <Home size={16} />
                Retour à l'accueil
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/contact" className="flex items-center gap-2">
                Nous contacter
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Informations de contact */}
          <div className="bg-white dark:bg-[#1a2236] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 max-w-md mx-auto">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              Besoin d'aide ?
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
                <Mail size={16} className="text-[#A7001E] dark:text-red-400" />
                <span>contact@opennumeric.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
                <Phone size={16} className="text-[#A7001E] dark:text-red-400" />
                <span>+226 65 03 37 42</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}