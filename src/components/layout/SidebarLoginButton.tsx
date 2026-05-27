import { LogIn } from "lucide-react";
import { Button } from "../ui/button";

export default function SidebarLoginButton() {
    return (
        <Button className="bg-(--accent-soft) text-(--accent) font-medium text-md py-5">
            <LogIn className="w-4 h-4" />
            Sign In
        </Button>
    )
}