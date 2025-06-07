'use client'

import { motion } from 'framer-motion'
import { User, Edit, Lock, Mail, Calendar as CalendarIcon, Smartphone, Award } from 'lucide-react'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Dr. Sophie Martin',
    email: 'sophie.martin@nutritrack.com',
    specialty: 'Nutritionniste Diplômée',
    phone: '+33 6 12 34 56 78',
    bio: 'Spécialiste en nutrition sportive et perte de poids avec plus de 10 ans d\'expérience.',
    experience: '12 ans'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-[#A7001E]">Mon Profil</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gérez vos informations personnelles
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition-all ${
              isEditing ? 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white' : 'bg-[#A7001E] hover:bg-[#d32f2f] text-white'
            }`}
          >
            <Edit size={18} />
            <span>{isEditing ? 'Annuler' : 'Modifier'}</span>
          </motion.button>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md overflow-hidden"
        >
          <div className="md:flex">
            {/* Left Side - Avatar */}
            <div className="md:w-1/3 p-6 bg-gradient-to-b from-[#A7001E] to-[#d32f2f] flex flex-col items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative mb-4"
              >
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <User size={48} className="text-[#A7001E]" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
                    <Edit size={16} className="text-[#A7001E]" />
                  </button>
                )}
              </motion.div>
              
              <h2 className="text-xl font-bold text-white text-center">{formData.name}</h2>
              <p className="text-white/90 text-center mt-1">{formData.specialty}</p>
              
              <div className="mt-6 w-full">
                <div className="flex items-center gap-2 text-white/90 mb-2">
                  <Award size={16} />
                  <span>Expérience: {formData.experience}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-white text-[#A7001E] py-2 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <Lock size={16} />
                  <span>Changer le mot de passe</span>
                </motion.button>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="md:w-2/3 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#A7001E] focus:border-transparent bg-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 text-gray-900 dark:text-white">
                      <User size={18} className="text-[#A7001E]" />
                      <span>{formData.name}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#A7001E] focus:border-transparent bg-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 text-gray-900 dark:text-white">
                      <Mail size={18} className="text-[#A7001E]" />
                      <span>{formData.email}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Téléphone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#A7001E] focus:border-transparent bg-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 text-gray-900 dark:text-white">
                      <Smartphone size={18} className="text-[#A7001E]" />
                      <span>{formData.phone}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Biographie</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#A7001E] focus:border-transparent bg-transparent"
                    />
                  ) : (
                    <p className="p-2 text-gray-700 dark:text-gray-300">{formData.bio}</p>
                  )}
                </div>
              </div>
              
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end gap-3 mt-6"
                >
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-[#A7001E] hover:bg-[#d32f2f] text-white rounded-lg transition-colors"
                  >
                    Enregistrer
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}