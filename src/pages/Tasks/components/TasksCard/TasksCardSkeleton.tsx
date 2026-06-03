export default function TasksCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-start gap-3 px-4 py-3">
          <div className="w-5 h-5 rounded-full bg-(--bg-elevated) animate-pulse shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2 flex-1">
            <div className="h-3.5 rounded-md bg-(--bg-elevated) animate-pulse w-3/4" />
            <div className="h-2.5 rounded-md bg-(--bg-elevated) animate-pulse w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
 