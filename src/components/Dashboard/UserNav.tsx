'use client'

import { User, Settings, LogOut, ChevronRight, LifeBuoy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="ghost" 
            className={cn(
              "relative h-9 w-9 rounded-full p-0",
              "hover:bg-[#A7001E]/10 dark:hover:bg-[#A7001E]/20",
              "transition-all duration-200",
              "flex items-center justify-center"
            )}
            aria-label="Menu utilisateur"
          >
            <div className="h-8 w-8 rounded-full bg-[#A7001E] flex items-center justify-center text-white font-medium">
              NC
            </div>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        className={cn(
          "w-64 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800",
          "bg-white/95 dark:bg-[#121827]/95 backdrop-blur-lg",
          "mt-1.5 overflow-hidden p-2"
        )}
        align="end"
        sideOffset={8}
      >
        {/* Header du menu */}
        <DropdownMenuLabel className="px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#A7001E] flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">Nestor COMPAORE</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                contact@opennumeric.com
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800 my-1" />
        
        <DropdownMenuGroup>
          <DropdownMenuItem className={cn(
            "cursor-pointer px-3 py-2 rounded-lg my-1",
            "focus:bg-[#A7001E]/10 focus:text-[#A7001E] dark:focus:text-white",
            "text-gray-700 dark:text-gray-300",
            "transition-colors duration-200"
          )}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <User className="mr-3 h-4 w-4 text-[#A7001E] dark:text-[#ff4d4d]" />
                <span>Profil</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem className={cn(
            "cursor-pointer px-3 py-2 rounded-lg my-1",
            "focus:bg-[#A7001E]/10 focus:text-[#A7001E] dark:focus:text-white",
            "text-gray-700 dark:text-gray-300",
            "transition-colors duration-200"
          )}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Settings className="mr-3 h-4 w-4 text-[#A7001E] dark:text-[#ff4d4d]" />
                <span>Paramètres</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem className={cn(
            "cursor-pointer px-3 py-2 rounded-lg my-1",
            "focus:bg-[#A7001E]/10 focus:text-[#A7001E] dark:focus:text-white",
            "text-gray-700 dark:text-gray-300",
            "transition-colors duration-200"
          )}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <LifeBuoy className="mr-3 h-4 w-4 text-[#A7001E] dark:text-[#ff4d4d]" />
                <span>Aide & Support</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800 my-1" />
        
        <DropdownMenuItem className={cn(
          "cursor-pointer px-3 py-2 rounded-lg",
          "focus:bg-red-500/10 focus:text-red-600 dark:focus:text-red-400",
          "text-red-600 dark:text-red-400",
          "transition-colors duration-200"
        )}>
          <LogOut className="mr-3 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}