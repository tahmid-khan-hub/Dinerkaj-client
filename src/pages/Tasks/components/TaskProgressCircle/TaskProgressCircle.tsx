import { useQuery } from "@tanstack/react-query"
import type { Task } from "../../lib/types"
import { PieChart, Pie } from "recharts";

export default function TaskProgressCircle() {
    const { data: tasks=[] } = useQuery<Task[]>({ queryKey: ["tasks"] });

    const total = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "completed").length;
    const percentage = total === 0 ? 0 : Math.round((completedTasks / total)*100);
    const PieChartData = [
        { value: percentage, fill: "var(--accent)" },
        { value: 100 - percentage, fill: "var(--border)" },
    ];

    return (
        <>
            <h3 className="font-medium text-(--text-secondary) uppercase tracking-wide self-start mt-3 mb-5.75">
                Today's Progress
            </h3>
            <div className="rounded-xl border border-(--border) bg-(--bg-surface) p-4 flex flex-col items-center gap-2">
                <div className="relative w-36 h-36">
                    <PieChart height={144} width={144}>
                        <Pie
                            data={PieChartData}
                            cx={67}
                            cy={67}
                            innerRadius={48}
                            outerRadius={64}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                            strokeWidth={0}
                        />  
                    </PieChart>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-semibold text-(--text-primary) font-[Instrument_Serif]">
                            {percentage}%
                        </span>
                    </div>
                </div>
                <p className="text-xs text-(--text-secondary)">
                    {completedTasks} of {total} tasks done
                </p>
                {total > 0 && percentage === 100 && (
                    <p className="text-xs text-(--accent)">All done today ✦</p>
                )}
            </div>
        </>
    )
}