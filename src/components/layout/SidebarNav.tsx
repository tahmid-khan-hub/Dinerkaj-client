import { CheckSquare, Calendar, FileText } from 'lucide-react'

export type Page = 'tasks' | 'plans' | 'notes'

const navItems: { id: Page; label: string; icon: React.ElementType} [] = [
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'plans', label: 'Plans', icon: Calendar },
    { id: 'notes', label: 'Notes', icon: FileText },
]

interface SideBarNavProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
    onClose?: () => void;
}

export default function SidebarNav({ activePage, onNavigate, onClose }: SideBarNavProps) {
    return (
        <nav className='flex flex-col gap-2 flex-1'>
            {navItems.map(({id, label, icon: Icon}) => (
                <button
                key={id}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full text-left transition-colors duration-150 
                ${activePage === id ? '' : ''}`}
                onClick={() => {
                    onNavigate(id)
                    onClose?.()
                }}
                >
                    <Icon size={17} />
                    <span>{label}</span>
                </button>
            ))}
        </nav>
    )
}