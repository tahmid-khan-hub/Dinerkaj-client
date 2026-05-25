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
        <div className="flex overflow-hidden ">
            <div className="flex">
                <Sidebar activePage={activePage} onNavigate={setActivePage} />
            </div>
            {/* mobile header */}
            <div className="none">
                <MobileHeader activePage={activePage} onNavigate={setActivePage} />
            </div>
            <main className="">
                {children}
            </main>
        </div>
    )
}
