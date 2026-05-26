import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import { useLocation } from "react-router";

interface Props {
  children: React.ReactNode
}

export default function AppShell({ children } : Props) {
    const location = useLocation();
    const activePage = location.pathname.replace('/','') as 'tasks' | 'plans' | 'notes';

    return (
        <div className="flex overflow-hidden h-screen bg-(--bg)">
            <div className="hidden md:flex">
                <Sidebar activePage={activePage} onNavigate={() => {}} />
            </div>
            {/* mobile header */}
            <div className="md:hidden">
                <MobileHeader activePage={activePage} onNavigate={() => {}} />
            </div>
            <main className="flex-1 overflow-y-auto md:pt-0 pt-14">
                {children}
            </main>
        </div>
    )
}
