import { useAuth } from "@/hooks/useAuth"

export default function TasksPageHeading() {
    const { user } = useAuth();
    const firstName = user?.name?.split(" ")[0];

    return (
        <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl md:text-4xl text-(--text-primary) p-3">
                    Welcome back, <span className="font-serif text-(--accent)">{firstName}</span>.
                </h1>
            </div>
        </div>
    )
}