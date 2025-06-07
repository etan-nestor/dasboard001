'use client'

import * as React from 'react'
import { LogOut, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { navItems } from './Sidebar'
import { clsx } from 'clsx'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './Sheet'


export function MobileSidebar() {
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
        </SheetTrigger>
        
        <SheetContent side="left" className="w-[280px] p-0 border-r dark:border-gray-800">
          <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 dark:from-[#121827] dark:to-[#0d111c]">
            {/* Header avec SheetTitle masqué visuellement mais présent pour l'accessibilité */}
            <SheetHeader className="px-4 py-3 border-b dark:border-gray-800">
              <SheetTitle className="sr-only">Menu de navigation NutriTrack</SheetTitle>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#A7001E] flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">NT</span>
                </div>
                <span className="text-xl font-bold text-[#A7001E]">
                  NutriTrack
                </span>
              </div>
            </SheetHeader>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                  const Icon = item.icon

                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={clsx(
                          "group flex items-center p-3 rounded-lg transition-all duration-300",
                          isActive 
                            ? "bg-gradient-to-r from-[#A7001E] to-[#d32f2f] text-white shadow-lg" 
                            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
                        )}
                      >
                        <div className="flex-shrink-0 relative mr-3">
                          <Icon 
                            size={20} 
                            className={clsx(
                              isActive ? "text-white" : "group-hover:text-[#A7001E] dark:group-hover:text-white"
                            )}
                          />
                          {isActive && (
                            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="whitespace-nowrap font-medium">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
            
            {/* Footer */}
            <div className="p-4 border-t dark:border-gray-800">
              <button className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 group">
                <LogOut 
                  size={20} 
                  className="group-hover:text-[#A7001E] dark:group-hover:text-white mr-3" 
                />
                <span className="font-medium">Déconnexion</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}