import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, } from '@/components/ui/sheet'
import type { SidebarProps } from '@/types/Sidebar'
import { useState } from 'react'
import SidebarNav from './SidebarNav'

export default function MobileHeader({ activePage, onNavigate }: SidebarProps) {
    const [open, setOpen] = useState(false)

    return (
        <header>
            <span className="">Dinerkaj</span>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <button className='' aria-label='Open menu'>
                        <Menu size={20} />
                    </button>
                </SheetTrigger>

                <SheetContent>
                    <div className="">
                        <span className="">Dinerkaj</span>
                        <span className="">দিনের কাজ</span>
                    </div>

                    <SidebarNav
                        activePage={activePage}
                        onNavigate={onNavigate}
                        onClose={() => setOpen(false)}
                    />
                </SheetContent>
            </Sheet>
        </header>
    )
}
