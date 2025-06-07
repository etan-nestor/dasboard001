'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Plus, Search, Filter, Star, Heart } from 'lucide-react'
import { useState } from 'react'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'books', label: 'Livres' },
    { id: 'supplements', label: 'Compléments' },
    { id: 'equipment', label: 'Équipement' },
    { id: 'programs', label: 'Programmes' }
  ]

  const products = [
    { 
      id: 1, 
      name: 'Guide Nutritionnel Complet', 
      category: 'books',
      price: 29.99,
      rating: 4.7,
      image: '/product1.jpg'
    },
    { 
      id: 2, 
      name: 'Pack de Protéines Végétales', 
      category: 'supplements',
      price: 24.90,
      rating: 4.5,
      image: '/product2.jpg'
    },
    { 
      id: 3, 
      name: 'Balance Nutritionnelle Connectée', 
      category: 'equipment',
      price: 59.99,
      rating: 4.9,
      image: '/product3.jpg'
    },
    { 
      id: 4, 
      name: 'Programme 12 Semaines', 
      category: 'programs',
      price: 99.99,
      rating: 4.8,
      image: '/product4.jpg'
    },
    { 
      id: 5, 
      name: 'Vitamines & Minéraux Essentiels', 
      category: 'supplements',
      price: 19.99,
      rating: 4.3,
      image: '/product5.jpg'
    },
    { 
      id: 6, 
      name: 'Carnet de Suivi Alimentaire', 
      category: 'books',
      price: 14.99,
      rating: 4.6,
      image: '/product6.jpg'
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
            <h1 className="text-3xl font-bold text-[#A7001E] mb-2">Boutique</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Produits et ressources pour vos clients
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
            <span>Ajouter un produit</span>
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
                placeholder="Rechercher un produit..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7001E] bg-transparent"
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

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products
            .filter(product => activeCategory === 'all' || product.category === activeCategory)
            .map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800"
              >
                <div className="h-48 bg-gradient-to-r from-[#A7001E] to-[#d32f2f] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                  <div className="relative z-10 text-white text-xl font-bold">Produit {product.id}</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{product.name}</h3>
                    <button className="p-1 text-gray-400 hover:text-[#A7001E]">
                      <Heart size={18} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    <Star size={14} className="fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-bold text-[#A7001E]">{product.price.toFixed(2)}€</span>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-[#A7001E] hover:bg-[#d32f2f] text-white rounded-lg text-sm">
                      <ShoppingCart size={14} />
                      <span>Ajouter</span>
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