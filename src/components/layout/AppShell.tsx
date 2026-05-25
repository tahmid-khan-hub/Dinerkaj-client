import { useState } from "react";
import type { Page } from "./SidebarNav";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

interface Props {
  children: React.ReactNode
}

export default function AppShell({ children } : Props) {
    const [activePage, setActivePage] = useState<Page>('tasks');

    return (
        <div className="flex overflow-hidden h-screen">
            <div className="hidden md:flex">
                <Sidebar activePage={activePage} onNavigate={setActivePage} />
            </div>
            {/* mobile header */}
            <div className="md:hidden">
                <MobileHeader activePage={activePage} onNavigate={setActivePage} />
            </div>
            <main className="flex-1 overflow-y-auto md:pt-0 pt-14">
                {children}
            </main>
        </div>
    )
}
