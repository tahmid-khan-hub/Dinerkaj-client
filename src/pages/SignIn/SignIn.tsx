import { Suspense } from "react";
import SignInContent from "./components/SignInContent";

export default function SignInPage() {
    return (
        <Suspense fallback={<p>loading...</p>}>
            <SignInContent />
        </Suspense>
    )
}