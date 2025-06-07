'use client'

import { Bell, Search, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { UserNav } from './UserNav'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MobileSidebar } from './MobileSidebar' 

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-[#121827]/90 backdrop-blur-md"
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-3">
          
          <MobileSidebar />
          
          {/* Logo visible uniquement sur mobile */}
          <div className="md:hidden flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#A7001E] flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">NT</span>
            </div>
            <span className="font-bold text-[#A7001E]">NutriTrack</span>
          </div>
          
          {/* Barre de recherche */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative hidden md:block"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <Input
              type="search"
              placeholder="Rechercher un repas, un client..."
              className={cn(
                "pl-10 w-[280px] lg:w-[350px] bg-gray-50 dark:bg-gray-800 border-none",
                "focus-visible:ring-2 focus-visible:ring-[#A7001E] focus:shadow-md",
                "transition-all duration-200"
              )}
            />
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          {/* Bouton notifications */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
            aria-label="Notifications"
          >
            <Bell size={20} className="text-gray-700 dark:text-gray-300" />
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#A7001E] ring-2 ring-white dark:ring-[#121827]"
            />
          </motion.button>
          
          {/* Séparateur */}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden md:block" />
          
          {/* UserNav avec animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <UserNav />
          </motion.div>
          
          {/* Chevron down pour desktop */}
          <ChevronDown className="h-4 w-4 text-gray-400 hidden md:block ml-1" />
        </div>
      </div>
    </motion.header>
  )
}