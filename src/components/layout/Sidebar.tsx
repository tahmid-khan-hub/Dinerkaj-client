import type { Page } from "./SidebarNav"
import SidebarNav from "./SidebarNav";

interface SidebarProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
}

export default function Sidebar({ activePage, onNavigate } : SidebarProps) {
    return (
        <aside className="w-44 min-w-44 flex flex-col gap-8 px-3 py-6 bg-(--bg-surface) border-r border-white/5">
            <div className="flex flex-col">
                <span className="font-serif text-xl font-bold ">Dinerkaj</span>
                <span className="text-[11px] ">দিনের কাজ</span>
            </div>

            <SidebarNav activePage={activePage} onNavigate={onNavigate} />
        </aside>
    )
}
