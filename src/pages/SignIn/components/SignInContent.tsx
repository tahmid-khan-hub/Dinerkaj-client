import { useNavigate } from "react-router";
import SignInFormFields from "./SignInFormFields";
import { motion } from "framer-motion";

export default function SignInContent() {
    const navigate = useNavigate();
  return (
    <div className="w-full var(--bg) min-h-screen flex items-center justify-center px-4">
      <motion.div>
        {/* Title */}
        <div className="text-center pt-2 space-y-1">
          <h2 className="text-3xl font-bold"> Welcome Back </h2>
          <p className="text-sm" > Sign in to continue with Dinerkaj </p>
        </div>
        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <span
            className="text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-ui)" }}
          >
            one click sign in
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>
        {/* Form */}
        <SignInFormFields
          onSuccess={() => navigate("/")}
        />
      </motion.div>
    </div>
  );
}
