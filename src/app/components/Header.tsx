"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-black p-4 sticky  top-0 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-red-600 transition-colors duration-300">
            Rent A Car
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-red-200 text-white-600'
                    : 'text-white hover:bg-white/20 hover:text-red-600'
                } transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="secondary" 
              className="ml-4 bg-red-600 text-white hover:bg-red-300 w-20 hover:text-red-900 transition-colors duration-300"
            >
              Login
            </Button>
          </div>
          
          <button
            className="md:hidden text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="mt-4 md:hidden">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'bg-white text-purple-600'
                    : 'text-white hover:bg-white/20 hover:text-yellow-300'
                } transition-all duration-300 mb-2`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="secondary" 
              className="w-full bg-red-600 text-white hover:bg-red-600 hover:text-red-800 transition-colors duration-300"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}