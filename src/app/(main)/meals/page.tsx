'use client'

import { motion } from 'framer-motion'
import { Utensils, Plus, Search, Filter } from 'lucide-react'

export default function MealsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <motion.h1 
              className="text-3xl font-bold text-[#A7001E] mb-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Gestion des Repas
            </motion.h1>
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Créez et gérez vos plans alimentaires
            </motion.p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 flex items-center bg-[#A7001E] hover:bg-[#d32f2f] text-white px-4 py-2 rounded-lg shadow-lg transition-all"
          >
            <Plus className="mr-2" size={18} />
            Ajouter un repas
          </motion.button>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-4 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un repas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7001E] bg-transparent"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Filter size={18} />
              <span>Filtrer</span>
            </button>
          </div>
        </motion.div>

        {/* Meal Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white dark:bg-[#1a2236] rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-r from-[#A7001E] to-[#d32f2f] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white text-[#A7001E] px-2 py-1 rounded-md text-xs font-bold">Déjeuner</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Repas {i+1}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Description du repas et ingrédients principaux...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">500 kcal</span>
                  <button className="text-[#A7001E] hover:text-[#d32f2f] text-sm font-medium transition-colors">
                    Voir détails
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Action Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-[#A7001E] text-white p-4 rounded-full shadow-lg flex items-center justify-center floating"
        >
          <Plus size={24} />
        </motion.button>
      </div>
    </motion.div>
  )
}