'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Search, Send, Paperclip, MoreVertical, ChevronLeft } from 'lucide-react'
import { useState } from 'react'

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<number | null>(null)
  const [message, setMessage] = useState('')

  const conversations = [
    { id: 1, name: 'Jean Dupont', lastMessage: 'Merci pour les conseils!', time: '10:30', unread: true },
    { id: 2, name: 'Marie Lambert', lastMessage: 'Quel est le repas pour demain?', time: 'Hier', unread: false },
    { id: 3, name: 'Pierre Durand', lastMessage: 'J\'ai une question sur mon plan', time: 'Lundi', unread: false },
    { id: 4, name: 'Sophie Martin', lastMessage: 'Les résultats sont excellents', time: '12/05', unread: true },
    { id: 5, name: 'Thomas Bernard', lastMessage: 'Pouvez-vous m\'envoyer la recette?', time: '10/05', unread: false }
  ]

  const messages = [
    { id: 1, sender: 'client', content: 'Bonjour, j\'ai une question concernant mon plan alimentaire', time: '10:00' },
    { id: 2, sender: 'me', content: 'Bonjour Jean, comment puis-je vous aider?', time: '10:05' },
    { id: 3, sender: 'client', content: 'Je ne suis pas sûr de comprendre les portions pour le déjeuner', time: '10:10' },
    { id: 4, sender: 'me', content: 'Je vous envoie une explication détaillée par email', time: '10:15' },
    { id: 5, sender: 'client', content: 'Merci beaucoup pour votre aide!', time: '10:20' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 h-screen flex flex-col"
    >
      <div className="max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex items-center gap-3">
            {activeConversation && (
              <button 
                onClick={() => setActiveConversation(null)}
                className="md:hidden p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <h1 className="text-2xl font-bold text-[#A7001E]">Messages</h1>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7001E] bg-transparent"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex bg-white dark:bg-[#1a2236] rounded-xl shadow-md overflow-hidden"
        >
          {/* Conversations List */}
          <div className={`w-full md:w-80 border-r border-gray-200 dark:border-gray-800 ${
            activeConversation ? 'hidden md:block' : 'block'
          }`}>
            <div className="p-3 border-b border-gray-200 dark:border-gray-800">
              <h2 className="font-semibold">Conversations</h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-800 overflow-y-auto h-[calc(100%-49px)]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setActiveConversation(conversation.id)}
                  className={`p-3 cursor-pointer transition-colors ${
                    activeConversation === conversation.id
                      ? 'bg-[#A7001E]/10'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-medium">{conversation.name}</div>
                    <div className="text-xs text-gray-500">{conversation.time}</div>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread && (
                      <span className="w-2 h-2 rounded-full bg-[#A7001E]"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Messages Panel */}
          {activeConversation ? (
            <div className="flex-1 flex flex-col">
              {/* Message Header */}
              <div className="p-3 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <div className="font-semibold">
                  {conversations.find(c => c.id === activeConversation)?.name}
                </div>
                <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, x: message.sender === 'me' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${
                        message.sender === 'me' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                        message.sender === 'me'
                          ? 'bg-[#A7001E] text-white rounded-br-none'
                          : 'bg-gray-100 dark:bg-gray-800 rounded-bl-none'
                      }`}>
                        <p>{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'me' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-3 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Paperclip size={18} />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Écrire un message..."
                    className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7001E] bg-transparent"
                  />
                  <button 
                    disabled={!message}
                    className={`p-2 rounded-full ${
                      message 
                        ? 'bg-[#A7001E] text-white hover:bg-[#d32f2f]' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                    }`}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 dark:bg-gray-900">
              <div className="text-center p-6">
                <MessageSquare size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-medium mb-2">Sélectionnez une conversation</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  Choisissez une conversation existante ou commencez à discuter avec un nouveau client
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}