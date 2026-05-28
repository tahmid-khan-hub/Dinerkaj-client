import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function SuccessAlert({ title, description, onClose, }: {
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
      <Alert
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--success)",
        }}
        className="w-80"
      >
        <CheckCircle2Icon
          style={{ color: "var(--success)" }}
          className="mt-0.5"
        />
        <AlertTitle style={{ color: "var(--success)" }} className="mb-1">
          {title}
        </AlertTitle>
        <AlertDescription style={{ color: "var(--success)" }}>
          {description}
        </AlertDescription>
      </Alert>
    </motion.div>
  );
}
