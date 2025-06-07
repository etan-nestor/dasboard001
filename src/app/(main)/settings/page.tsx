'use client'

import { motion } from 'framer-motion'
import { Settings, Bell, Lock, Palette, Globe, Mail, CreditCard, Database, Shield } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [notifications, setNotifications] = useState({
    email: true,
    app: true,
    reminders: true,
    promotions: false
  })

  const toggleNotification = (type: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const tabs = [
    { id: 'general', icon: Settings, label: 'Général' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'security', icon: Lock, label: 'Sécurité' },
    { id: 'appearance', icon: Palette, label: 'Apparence' },
    { id: 'language', icon: Globe, label: 'Langue' },
    { id: 'billing', icon: CreditCard, label: 'Facturation' },
    { id: 'data', icon: Database, label: 'Données' },
    { id: 'privacy', icon: Shield, label: 'Confidentialité' }
  ]

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
          <h1 className="text-3xl font-bold text-[#A7001E]">Paramètres</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Personnalisez votre expérience NutriTrack
          </p>
        </motion.div>

        {/* Settings Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md overflow-hidden"
        >
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-64 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Préférences</h2>
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <motion.button
                        key={tab.id}
                        whileHover={{ x: 5 }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          activeTab === tab.id 
                            ? 'bg-[#A7001E] text-white' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <Icon size={18} />
                        <span>{tab.label}</span>
                      </motion.button>
                    )
                  })}
                </nav>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'general' && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Settings size={20} className="text-[#A7001E]" />
                    <span>Paramètres généraux</span>
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-medium">Mode Démo</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Activez pour tester les fonctionnalités sans affecter vos données réelles
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7001E]"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-medium">Synchronisation automatique</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Synchronisez vos données entre appareils
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7001E]"></div>
                      </label>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h3 className="font-medium mb-2">Fréquence de sauvegarde</h3>
                      <div className="flex gap-4">
                        {['Quotidienne', 'Hebdomadaire', 'Mensuelle'].map((option) => (
                          <motion.div
                            key={option}
                            whileHover={{ scale: 1.03 }}
                            className="flex-1"
                          >
                            <input 
                              type="radio" 
                              id={option.toLowerCase()} 
                              name="backup" 
                              className="hidden peer" 
                              defaultChecked={option === 'Hebdomadaire'}
                            />
                            <label 
                              htmlFor={option.toLowerCase()} 
                              className="block p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer peer-checked:border-[#A7001E] peer-checked:bg-[#A7001E]/10"
                            >
                              <div className="font-medium text-center">{option}</div>
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Bell size={20} className="text-[#A7001E]" />
                    <span>Paramètres de notification</span>
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-medium">Notifications par email</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Recevez des notifications importantes par email
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.email}
                          onChange={() => toggleNotification('email')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7001E]"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-medium">Notifications de l'application</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Recevez des notifications push sur cet appareil
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.app}
                          onChange={() => toggleNotification('app')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7001E]"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-medium">Rappels</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Recevez des rappels pour les rendez-vous et les tâches
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.reminders}
                          onChange={() => toggleNotification('reminders')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7001E]"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-medium">Offres promotionnelles</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Recevez des offres spéciales et des mises à jour
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.promotions}
                          onChange={() => toggleNotification('promotions')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7001E]"></div>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Other tabs would follow the same pattern */}
              {activeTab !== 'general' && activeTab !== 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                    {(() => {
                      switch(activeTab) {
                        case 'security': return <Lock size={32} className="text-[#A7001E]" />
                        case 'appearance': return <Palette size={32} className="text-[#A7001E]" />
                        case 'language': return <Globe size={32} className="text-[#A7001E]" />
                        case 'billing': return <CreditCard size={32} className="text-[#A7001E]" />
                        case 'data': return <Database size={32} className="text-[#A7001E]" />
                        case 'privacy': return <Shield size={32} className="text-[#A7001E]" />
                        default: return <Settings size={32} className="text-[#A7001E]" />
                      }
                    })()}
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
                    Cette section est en cours de développement. Elle sera disponible dans une prochaine mise à jour.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}