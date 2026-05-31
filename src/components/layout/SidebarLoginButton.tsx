import { LogIn, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { authClient } from "@/lib/authClient";

export default function SidebarLoginButton() {
    const { isLoggedIn, isPending } = useAuth();

    const handleSignOut = async() => {
        await authClient.signOut()
    }

    if(isPending) return (
        <div className="w-full h-10.5 rounded-2xl bg-(--accent-soft) flex items-center justify-center gap-2">
            <div className="w-4 h-4 rounded-sm animate-pulse bg-(--bg-elevated)" />
            <div className="w-15 h-3.5 rounded animate-pulse bg-(--bg-elevated)" />
        </div>
    )

    return (
        <>
            {!isLoggedIn ? (
                <Link to={"/signin"} className="">
                    <Button className="w-full bg-(--accent-soft) text-(--accent) font-medium text-md py-5">
                        <LogIn className="w-4 h-4" />
                        Sign In
                    </Button>
                </Link>
            ) : (
                <Button
                onClick={handleSignOut}
                className="w-full bg-(--accent-soft) text-(--accent) font-medium text-md py-5">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Button>
            )}
        </>
    )
}