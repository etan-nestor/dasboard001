'use client'

import { motion } from 'framer-motion'
import { Lock, Shield, Key, Eye, EyeOff, Smartphone, Mail } from 'lucide-react'
import { useState } from 'react'

const securityItems = [
  {
    title: "Mot de passe",
    description: "Dernière modification il y a 3 mois",
    status: "Actif",
    icon: Key,
    action: "Modifier"
  },
  {
    title: "Authentification à deux facteurs",
    description: "Protection supplémentaire pour votre compte",
    status: "Inactif",
    icon: Shield,
    action: "Activer"
  },
  {
    title: "Appareils connectés",
    description: "2 appareils actuellement connectés",
    icon: Smartphone,
    action: "Gérer"
  },
  {
    title: "Alertes de sécurité",
    description: "Recevez des notifications pour toute activité suspecte",
    icon: Mail,
    action: "Configurer"
  }
]

export default function SecurityPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#A7001E] flex items-center gap-2">
            <Lock size={28} />
            <span>Sécurité</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez les paramètres de sécurité de votre compte
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          {['overview', 'password', '2fa', 'sessions', 'advanced'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm relative ${activeTab === tab ? 'text-[#A7001E]' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              {tab === 'overview' && 'Aperçu'}
              {tab === 'password' && 'Mot de passe'}
              {tab === '2fa' && '2FA'}
              {tab === 'sessions' && 'Sessions'}
              {tab === 'advanced' && 'Avancé'}
              {activeTab === tab && (
                <motion.div
                  layoutId="securityTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A7001E]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-[#1a2236] p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Shield size={20} className="text-[#A7001E]" />
                <span>Niveau de sécurité</span>
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-gradient-to-r from-[#A7001E] to-[#ff4d4d] h-2.5 rounded-full" 
                  style={{ width: '70%' }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Votre niveau de sécurité est moyen. Activez l'authentification à deux facteurs pour améliorer la sécurité de votre compte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-[#1a2236] p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#A7001E]/10 text-[#A7001E]">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                        <div className="flex items-center justify-between mt-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Actif' ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400'}`}>
                            {item.status}
                          </span>
                          <button className="text-sm text-[#A7001E] font-medium hover:underline">
                            {item.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'password' && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-[#1a2236] p-5 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="font-medium mb-6 flex items-center gap-2">
              <Key size={20} className="text-[#A7001E]" />
              <span>Changer le mot de passe</span>
            </h3>
            
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium mb-1">Mot de passe actuel</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a2236] focus:outline-none focus:ring-2 focus:ring-[#A7001E] focus:border-transparent"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Nouveau mot de passe</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a2236] focus:outline-none focus:ring-2 focus:ring-[#A7001E] focus:border-transparent"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Minimum 8 caractères avec des chiffres et des symboles
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Confirmer le nouveau mot de passe</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a2236] focus:outline-none focus:ring-2 focus:ring-[#A7001E] focus:border-transparent"
                />
              </div>
              
              <div className="pt-2">
                <button className="px-4 py-2 bg-[#A7001E] text-white rounded-lg hover:bg-[#A7001E]/90 transition-colors">
                  Mettre à jour le mot de passe
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab !== 'overview' && activeTab !== 'password' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              {activeTab === '2fa' && <Shield size={32} className="text-[#A7001E]" />}
              {activeTab === 'sessions' && <Smartphone size={32} className="text-[#A7001E]" />}
              {activeTab === 'advanced' && <Lock size={32} className="text-[#A7001E]" />}
            </div>
            <h3 className="text-xl font-medium mb-2">
              {activeTab === '2fa' && 'Authentification à deux facteurs'}
              {activeTab === 'sessions' && 'Sessions actives'}
              {activeTab === 'advanced' && 'Paramètres avancés'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
              Cette section est en cours de développement. Elle sera disponible dans une prochaine mise à jour.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}