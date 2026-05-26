import type { Page } from "./SidebarNav"
import SidebarNav from "./SidebarNav";

interface SidebarProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
}

export default function Sidebar({ activePage, onNavigate } : SidebarProps) {
    return (
        <aside className="w-44 min-w-56 flex flex-col gap-8 px-3 py-6 bg-(--bg-surface) border-r border-white/5">
            <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold ">Dinerkaj</span>
                <span className="text-[11px] mt-1.5">Your daily task & focus companion</span>
            </div>

            <SidebarNav activePage={activePage} onNavigate={onNavigate} />
        </aside>
    )
}
