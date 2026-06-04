import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { XCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function ErrorAlert({ title, description, onClose, }: {
  title: string; description: string; onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Alert className="w-80 bg-(--bg-surface) border border-(--text-muted)/40">
        <XCircleIcon className="mt-0.5 text-(--text-secondary)" />
        <AlertTitle className="mb-1 font-sans text-sm font-medium text-(--text-primary)">
          {title}
        </AlertTitle>
        <AlertDescription className="font-sans text-xs text-(--text-secondary)">
          {description}
        </AlertDescription>
      </Alert>
    </motion.div>
  );
}
