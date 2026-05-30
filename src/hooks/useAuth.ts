import { authClient } from "@/lib/authClient"

export const useAuth = () => {
    const { data: session, isPending } = authClient.useSession();
    return { 
        user: session?.user, 
        isLoggedIn: !!session,
        isPending 
    };
}