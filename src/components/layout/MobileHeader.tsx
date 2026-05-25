import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, } from '@/components/ui/sheet'
import type { SidebarProps } from '@/types/Sidebar'
import { useState } from 'react'
import SidebarNav from './SidebarNav'

export default function MobileHeader({ activePage, onNavigate }: SidebarProps) {
    const [open, setOpen] = useState(false)

    return (
        <header className='flex items-center justify-between px-4 py-3 bg-(--bg-surface) border-b border-white/5 fixed top-0 left-0 right-0 z-40'>
            <span className="font-serif text-xl">Dinerkaj</span>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <button className='p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors' 
                    aria-label='Open menu'>
                        <Menu size={20} />
                    </button>
                </SheetTrigger>

                <SheetContent 
                side="left"
                className="w-52 flex flex-col gap-8 px-3 py-6 bg-(--bg-surface) border-r border-white/5">
                    <div className="flex flex-col">
                        <span className="font-serif text-2xl font-bold">Dinerkaj</span>
                        <span className="text-[11px] mt-1.5">Your daily task & focus companion</span>
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
