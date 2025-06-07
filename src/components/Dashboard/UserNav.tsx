'use client'

import { User, Settings, LogOut } from 'lucide-react'
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

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="relative p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Menu utilisateur"
        >
          <User className="h-5 w-5 text-orange-500 dark:text-orange-400" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        className="w-56 rounded-lg shadow-xl border-0 bg-gradient-to-b from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] mt-1.5 overflow-hidden"
        align="end"
        sideOffset={5}
      >
        {/* Header avec dégradé orangé */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-3 py-2">
          <DropdownMenuLabel className="font-normal text-white p-0">
            <div className="flex flex-col space-y-0.5">
              <p className="text-sm font-medium leading-none">Jean Dupont</p>
              <p className="text-xs leading-none text-orange-100">
                contact@opennumeric.com
              </p>
            </div>
          </DropdownMenuLabel>
        </div>
        
        <div className="p-1">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer focus:bg-orange-500/20 focus:text-orange-100 text-gray-100 px-3 py-2 rounded-md my-1 transition-colors">
              <User className="mr-2 h-4 w-4 text-orange-300" />
              <span>Profil</span>
              <DropdownMenuShortcut className="text-orange-300/80">⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="cursor-pointer focus:bg-orange-500/20 focus:text-orange-100 text-gray-100 px-3 py-2 rounded-md my-1 transition-colors">
              <Settings className="mr-2 h-4 w-4 text-orange-300" />
              <span>Paramètres</span>
              <DropdownMenuShortcut className="text-orange-300/80">⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          
          <DropdownMenuSeparator className="bg-orange-800/50 my-1" />
          
          <DropdownMenuItem className="cursor-pointer focus:bg-red-500/20 text-red-100 hover:text-white px-3 py-2 rounded-md transition-colors">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Déconnexion</span>
            <DropdownMenuShortcut className="text-red-300/80">⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}