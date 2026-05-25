import type { Page } from "@/components/layout/SidebarNav";

export interface SidebarProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
}