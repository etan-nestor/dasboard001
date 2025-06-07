'use client'

import { motion } from 'framer-motion'
import { FileText, Plus, Search, Filter, Clock, Flame, Star } from 'lucide-react'
import { useState } from 'react'

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'breakfast', label: 'Petit-déjeuner' },
    { id: 'lunch', label: 'Déjeuner' },
    { id: 'dinner', label: 'Dîner' },
    { id: 'snack', label: 'Collation' },
    { id: 'vegetarian', label: 'Végétarien' }
  ]

  const recipes = [
    { 
      id: 1, 
      name: 'Salade César légère', 
      category: 'lunch',
      prepTime: 15,
      calories: 320,
      rating: 4.5
    },
    { 
      id: 2, 
      name: 'Omelette aux légumes', 
      category: 'breakfast',
      prepTime: 10,
      calories: 280,
      rating: 4.2
    },
    { 
      id: 3, 
      name: 'Poulet rôti aux herbes', 
      category: 'dinner',
      prepTime: 45,
      calories: 450,
      rating: 4.8
    },
    { 
      id: 4, 
      name: 'Smoothie protéiné', 
      category: 'snack',
      prepTime: 5,
      calories: 220,
      rating: 4.0
    },
    { 
      id: 5, 
      name: 'Bowl quinoa végétarien', 
      category: 'vegetarian',
      prepTime: 25,
      calories: 380,
      rating: 4.7
    },
    { 
      id: 6, 
      name: 'Saumon teriyaki', 
      category: 'dinner',
      prepTime: 30,
      calories: 420,
      rating: 4.9
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-[#A7001E] mb-2">Recettes</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Votre bibliothèque de recettes nutritionnelles
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 bg-[#A7001E] hover:bg-[#d32f2f] text-white px-4 py-2 rounded-lg shadow-lg transition-all mt-4 md:mt-0"
          >
            <Plus size={18} />
            <span>Nouvelle recette</span>
          </motion.button>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-4 mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher une recette..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7001E] bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Filter size={18} />
              <span>Filtrer</span>
            </button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#A7001E] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Recipes Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {recipes
            .filter(recipe => activeCategory === 'all' || recipe.category === activeCategory)
            .map((recipe) => (
              <motion.div
                key={recipe.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800"
              >
                <div className="h-40 bg-gradient-to-r from-[#A7001E] to-[#d32f2f] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{recipe.name}</h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={16} className="fill-current" />
                      <span className="text-sm font-medium">{recipe.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{recipe.prepTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame size={14} />
                      <span>{recipe.calories} kcal</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {categories.find(c => c.id === recipe.category)?.label}
                    </span>
                    <button className="text-sm text-[#A7001E] hover:text-[#d32f2f] font-medium">
                      Voir détails
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  )
}