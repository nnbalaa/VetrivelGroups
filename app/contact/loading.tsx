export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-navy/15 border-t-gold animate-spin" />
        <p className="text-sm text-slate-400 tracking-wide">Loading…</p>
      </div>
    </div>
  );
}
