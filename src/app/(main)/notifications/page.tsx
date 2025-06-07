'use client'

import { motion } from 'framer-motion'
import { Bell, Mail, MessageSquare, Calendar, AlertCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const notifications = [
  {
    id: 1,
    type: 'system',
    title: 'Mise à jour disponible',
    message: 'La version 2.3.0 de NutriTrack est disponible',
    time: 'Il y a 2 heures',
    read: false,
    icon: Bell
  },
  {
    id: 2,
    type: 'message',
    title: 'Nouveau message',
    message: 'Vous avez reçu un message de Jean Dupont',
    time: 'Il y a 5 heures',
    read: false,
    icon: MessageSquare
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Rappel de consultation',
    message: 'Vous avez un rendez-vous demain à 14h30',
    time: 'Il y a 1 jour',
    read: true,
    icon: Calendar
  },
  {
    id: 4,
    type: 'alert',
    title: 'Attention à votre hydratation',
    message: 'Vous n\'avez bu que 1L d\'eau aujourd\'hui',
    time: 'Il y a 2 jours',
    read: true,
    icon: AlertCircle
  },
  {
    id: 5,
    type: 'success',
    title: 'Objectif atteint',
    message: 'Félicitations ! Vous avez atteint votre objectif de pas cette semaine',
    time: 'Il y a 3 jours',
    read: true,
    icon: CheckCircle
  },
]

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [notifs, setNotifs] = useState(notifications)

  const markAsRead = (id: number) => {
    setNotifs(notifs.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const markAllAsRead = () => {
    setNotifs(notifs.map(notif => ({ ...notif, read: true })))
  }

  const filteredNotifs = activeTab === 'all' 
    ? notifs 
    : notifs.filter(notif => notif.type === activeTab)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#A7001E] flex items-center gap-2">
            <Bell size={28} />
            <span>Notifications</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez vos alertes et vos messages
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex space-x-2">
            {['all', 'system', 'message', 'reminder', 'alert', 'success'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-sm rounded-full ${activeTab === tab ? 'bg-[#A7001E] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                {tab === 'all' && 'Toutes'}
                {tab === 'system' && 'Système'}
                {tab === 'message' && 'Messages'}
                {tab === 'reminder' && 'Rappels'}
                {tab === 'alert' && 'Alertes'}
                {tab === 'success' && 'Succès'}
              </button>
            ))}
          </div>
          <button 
            onClick={markAllAsRead}
            className="text-sm text-[#A7001E] hover:underline"
          >
            Tout marquer comme lu
          </button>
        </motion.div>

        {/* Notifications List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {filteredNotifs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">Aucune notification</p>
            </div>
          ) : (
            filteredNotifs.map((notification) => {
              const Icon = notification.icon
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4 rounded-xl border ${notification.read ? 'bg-white dark:bg-[#1a2236] border-gray-200 dark:border-gray-700' : 'bg-[#A7001E]/10 border-[#A7001E]/20 dark:bg-[#A7001E]/20 dark:border-[#A7001E]/30'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${notification.type === 'system' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : notification.type === 'message' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400' : notification.type === 'reminder' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400' : notification.type === 'alert' ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' : 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{notification.title}</h3>
                        {!notification.read && (
                          <button 
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-[#A7001E] hover:underline"
                          >
                            Marquer comme lu
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}