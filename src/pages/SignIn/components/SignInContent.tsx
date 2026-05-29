import { useNavigate } from "react-router";
import SignInFormFields from "./SignInFormFields";
import { motion } from "framer-motion";

export default function SignInContent() {
    const navigate = useNavigate();
  return (
    <div className="w-full bg-(--bg) min-h-screen flex items-center justify-center px-4">
      <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md bg-(--bg-surface) border border-(--border) p-8 space-y-6 rounded-xl">
        {/* Title */}
        <div className="text-center pt-2 space-y-1">
          <h2 className="font-serif text-(--text-primary) font(--font-display) text-3xl font-bold"> Welcome Back </h2>
          <p className="text-sm text-(--text-secondary)" > Sign in to continue with Dinerkaj </p>
        </div>
        {/* Divider */}
        <div className="flex items-center gap-5">
          <div className="flex-1 h-px bg-(--border)" />
          <span className="text-sm text-(--text-muted)">
            one click sign in
          </span>
          <div className="flex-1 h-px bg-(--border)" />
        </div>
        {/* Form */}
        <SignInFormFields
          onSuccess={() => navigate("/")}
        />
      </motion.div>
    </div>
  );
}
