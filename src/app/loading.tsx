export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center animate-pulse">
          <span className="text-white font-heading font-bold text-lg">IN</span>
        </div>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
