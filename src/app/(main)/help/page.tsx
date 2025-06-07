'use client'

import { motion } from 'framer-motion'
import { HelpCircle, Mail, MessageSquare, FileText, Video, Phone } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "Comment ajouter un nouveau repas ?",
    answer: "Allez dans la section 'Repas', cliquez sur le bouton 'Ajouter' et remplissez les informations nécessaires."
  },
  {
    question: "Puis-je partager mes plans nutritionnels ?",
    answer: "Oui, vous pouvez partager vos plans via email ou lien direct depuis la section 'Planification'."
  },
  {
    question: "Comment synchroniser mes données avec d'autres appareils ?",
    answer: "Activez la synchronisation dans les paramètres. Vos données seront disponibles sur tous vos appareils connectés."
  },
  {
    question: "Quelles méthodes de paiement acceptez-vous ?",
    answer: "Nous acceptons les cartes de crédit, PayPal et les virements bancaires."
  }
]

const contactMethods = [
  { name: "Email", description: "Réponse sous 24h", icon: Mail },
  { name: "Chat", description: "Disponible 9h-18h", icon: MessageSquare },
  { name: "Documentation", description: "Guides complets", icon: FileText },
  { name: "Tutoriels", description: "Vidéos explicatives", icon: Video },
  { name: "Téléphone", description: "01 23 45 67 89", icon: Phone }
]

export default function HelpPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#A7001E] flex items-center gap-2">
            <HelpCircle size={28} />
            <span>Centre d'aide</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Trouvez des réponses à vos questions ou contactez notre équipe
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Rechercher dans l'aide..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a2236] focus:outline-none focus:ring-2 focus:ring-[#A7001E] focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <HelpCircle size={20} className="text-[#A7001E]" />
            <span>Questions fréquentes</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="bg-white dark:bg-[#1a2236] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${activeFaq === index ? 'rotate-180 text-[#A7001E]' : 'text-gray-400'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeFaq === index ? 1 : 0,
                    height: activeFaq === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-4 text-gray-600 dark:text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Mail size={20} className="text-[#A7001E]" />
            <span>Contactez-nous</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-[#1a2236] p-5 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#A7001E]/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#A7001E]" />
                  </div>
                  <h3 className="font-medium mb-1">{method.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                  <button className="mt-3 text-sm text-[#A7001E] font-medium hover:underline">
                    Accéder
                  </button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}