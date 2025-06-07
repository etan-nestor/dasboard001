'use client'

import { Menu, Bell, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useSidebar } from '@/hooks/use-sidebar'
import { UserNav } from './UserNav'

export function Navbar() {
  const { toggle } = useSidebar()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggle}
            className="p-2 rounded-lg md:hidden hover:bg-accent"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="pl-10 w-[300px] bg-accent border-none focus-visible:ring-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="p-2 rounded-lg hover:bg-accent relative"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary"></span>
          </button>
          
          {/* L'icône User est maintenant dans UserNav */}
          <UserNav />
        </div>
      </div>
    </header>
  )
}