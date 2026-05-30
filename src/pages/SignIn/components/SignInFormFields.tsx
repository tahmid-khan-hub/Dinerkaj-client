import { Button } from "@/components/ui/button";
import { ErrorAlert } from "@/hooks/Alert/ErrorAlert";
import { SuccessAlert } from "@/hooks/Alert/SuccessAlert";
import { AnimatePresence } from "framer-motion";
import { useState } from "react"

interface SignInFormFieldsProps {
  onGoogleSignIn: () => void;
  onSuccess?: () => void;
}

export default function SignInFormFields({ onGoogleSignIn }: SignInFormFieldsProps) {
    const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGoogleSignIn = async() => {
        setLoading(true);
        try {
            await onGoogleSignIn();
            setAlertType("success");
        } catch {
            setAlertType("error")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <Button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-5 font-semibold text-base text-(--accent) bg-(--accent-soft) rounded-md transition-all disabled:opacity-50">
                {/* Google SVG icon */}
                <svg width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.8 40.1 16.4 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.8l6.2 5.2C41 35.8 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
                </svg>
                {loading ? "Redirecting..." : "Continue with Google"}
            </Button>
            <AnimatePresence>
                {alertType === 'success' && (
                    <SuccessAlert title="Welcome Back!"
                    description="You have successfully signed in to Dinerkaj."
                    onClose={() => setAlertType(null)} />
                )}
                {alertType === 'error' && (
                    <ErrorAlert title="Sign In Falied"
                    description="Something went wrong. Please try again." 
                    onClose={() => setAlertType(null)} />
                )}
            </AnimatePresence>
        </div>
    )
}