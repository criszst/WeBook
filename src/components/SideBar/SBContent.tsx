'use client'

import { useEffect, useState } from "react"
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton
} from "@/components/ui/sidebar"
import { Home, Search, Book, Settings } from 'lucide-react'

const items = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Livros', url: '/books', icon: Book },
  { title: 'Procurar', url: '/search', icon: Search },
  { title: 'Configurações', url: '/settings', icon: Settings },
]

export function SidebarContentClient() {
    const [hydrated, setHydrated] = useState(false)
  
    useEffect(() => {
      setHydrated(true)
    }, [])
  
    return (
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>WeBook</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {hydrated ? (
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuSkeleton />
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    )
  }
  