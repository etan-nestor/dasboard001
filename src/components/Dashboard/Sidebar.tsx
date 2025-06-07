'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Utensils, 
  Calendar, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  User,
  PlusCircle,
  BarChart2,
  FileText,
  MessageSquare,
  ShoppingCart,
  HeartPulse,
  Bell,
  HelpCircle,
  Lock
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { clsx } from 'clsx'

const navItems = [
  { name: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Repas', href: '/meals', icon: Utensils },
  { name: 'Planification', href: '/planning', icon: Calendar },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'Statistiques', href: '/stats', icon: BarChart2 },
  { name: 'Recettes', href: '/recipes', icon: FileText },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Boutique', href: '/shop', icon: ShoppingCart },
  { name: 'Santé', href: '/health', icon: HeartPulse },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Profil', href: '/profile', icon: User },
  { name: 'Sécurité', href: '/security', icon: Lock },
  { name: 'Paramètres', href: '/settings', icon: Settings },
  { name: 'Aide', href: '/help', icon: HelpCircle },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
    if (isCollapsed) setActiveSubmenu(null)
  }

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return (
    <motion.div
      initial={{ width: 240 }}
      animate={{ width: isCollapsed ? 80 : 240 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={clsx(
        "hidden md:flex flex-col h-screen sticky top-0 border-r dark:border-r-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-[#121827] dark:to-[#0d111c]",
        isCollapsed ? "px-2" : "px-4"
      )}
    >
      <div className="flex items-center justify-between h-16">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 rounded-full bg-[#A7001E] flex items-center justify-center mr-2"
              >
                <span className="text-white font-bold text-sm">NT</span>
              </motion.div>
              <motion.h1 
                className="text-xl font-bold text-[#A7001E] bg-clip-text text-transparent bg-gradient-to-r from-[#A7001E] to-[#ff4d4d]"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                NutriTrack
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button 
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </motion.button>
      </div>

      <nav className="flex-1 mt-8 overflow-y-auto custom-scrollbar">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            const Icon = item.icon

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    "group flex items-center p-3 rounded-lg transition-all duration-300",
                    isActive 
                      ? "bg-gradient-to-r from-[#A7001E] to-[#d32f2f] text-white shadow-lg" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
                  )}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={clsx(
                      "flex-shrink-0 relative",
                      isCollapsed ? "mx-auto" : "mr-3"
                    )}
                  >
                    <Icon 
                      size={20} 
                      className={clsx(
                        isActive ? "text-white" : "group-hover:text-[#A7001E] dark:group-hover:text-white"
                      )}
                    />
                    {isActive && (
                      <motion.span 
                        className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap font-medium"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mb-6">
        <button className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className={clsx("flex-shrink-0", isCollapsed ? "mx-auto" : "mr-3")}
          >
            <LogOut 
              size={20} 
              className="group-hover:text-[#A7001E] dark:group-hover:text-white" 
            />
          </motion.div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-medium"
              >
                Déconnexion
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  )
}