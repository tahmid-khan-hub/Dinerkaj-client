import { LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function SidebarLoginButton() {
    return (
        <Link to={"/signin"} className="">
            <Button className="w-full bg-(--accent-soft) text-(--accent) font-medium text-md py-5">
                <LogIn className="w-4 h-4" />
                Sign In
            </Button>
        </Link>
    )
}