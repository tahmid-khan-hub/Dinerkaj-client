import type { Page } from "./SidebarNav"
import SidebarNav from "./SidebarNav";

interface SidebarProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
}

export default function Sidebar({ activePage, onNavigate } : SidebarProps) {
    return (
        <aside className="">
            <div className="">
                <span className="">Dinerkaj</span>
                <span className="">দিনের কাজ</span>
            </div>

            <SidebarNav activePage={activePage} onNavigate={onNavigate} />
        </aside>
    )
}
