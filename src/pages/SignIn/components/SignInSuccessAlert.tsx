import { useSearchParams } from "react-router";
import { AnimatePresence } from "framer-motion";
import { SuccessAlert } from "@/hooks/Alert/SuccessAlert";

export default function SignInSuccessAlert() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showAlert = searchParams.get("signedIn") === "true";

  const handleClose = () => {
    setSearchParams({});
  };

  return (
    <AnimatePresence>
      {showAlert && (
        <SuccessAlert
          title="Welcome Back!"
          description="You have successfully signed in to Dinerkaj."
          onClose={handleClose}
        />
      )}
    </AnimatePresence>
  );
}