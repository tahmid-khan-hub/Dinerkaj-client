import { Menu, X } from "lucide-react";
import type { SidebarProps } from "@/types/Sidebar";
import { useState } from "react";
import SidebarNav from "./SidebarNav";
import { AnimatePresence, motion } from "framer-motion";
import SidebarLoginButton from "./SidebarLoginButton";

export default function MobileHeader({ activePage, onNavigate }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-(--bg-surface) border-b border-white/5 fixed top-0 left-0 right-0 z-40">
        <span className="font-serif text-xl text-slate-100">Dinerkaj</span>
        <button
          onClick={() => setOpen(true)}
          className="p-1.5 rounded-md text-(--text-muted) hover:text-(--text-primary) hover:bg-white/5 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/50"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 left-0 z-50 h-full w-52 flex flex-col gap-8 px-3 py-6 bg-(--bg-surface) border-r border-white/5"
            >
              <div className="flex items-start justify-between px-2">
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-lg text-(--text-primary)">
                    Dinerkaj
                  </span>
                  <span className="text-[11px] text-(--text-muted) leading-relaxed">
                    Your daily task & focus companion
                  </span>
                </div>
                <button onClick={() => setOpen(false)}
                  className="p-1 rounded-md text-(--text-muted) hover:text-(--text-primary) hover:bg-white/5 transition-colors"> <X size={16} /> </button>
              </div>

              <SidebarNav
                activePage={activePage}
                onNavigate={onNavigate}
                onClose={() => setOpen(false)}
              />

              <SidebarLoginButton />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
