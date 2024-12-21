import { Sidebar } from "@/components/ui/sidebar"
import { SidebarContentClient } from "./SBContent"

export function AppSidebar() {
  return (
    <Sidebar 
      variant="floating" 
      className="z-50"
      collapsible="icon"
    >
      <SidebarContentClient />
    </Sidebar>
  )
}

