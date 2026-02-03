"use client";

export default function BackgroundLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      
      {/* LEFT GREEN LINES */}
      <span
        className="absolute left-10 top-0 h-full w-[2px] bg-green-500/30 animate-lineDrop"
        style={{ animationDelay: "0s" }}
      />
      <span
        className="absolute left-20 top-0 h-full w-[2px] bg-green-500/50 animate-lineDrop"
        style={{ animationDelay: "2s" }}
      />
      <span
        className="absolute left-30 top-0 h-full w-[2px] bg-green-500/70 animate-lineDrop"
        style={{ animationDelay: "4s" }}
      />
      <span
        className="absolute left-40 top-0 h-full w-[2px] bg-green-500/100 animate-lineDrop"
        style={{ animationDelay: "4s" }}
      />

      {/* RIGHT WHITE LINES */}
      <span
        className="absolute right-10 top-0 h-full w-[2px] bg-white/40 animate-lineDrop"
        style={{ animationDelay: "1s" }}
      />
      <span
        className="absolute right-20 top-0 h-full w-[2px] bg-white/25 animate-lineDrop"
        style={{ animationDelay: "3s" }}
      />
      <span
        className="absolute right-30 top-0 h-full w-[2px] bg-white/15 animate-lineDrop"
        style={{ animationDelay: "5s" }}
      />
      <span
        className="absolute right-40 top-0 h-full w-[2px] bg-white/15 animate-lineDrop"
        style={{ animationDelay: "5s" }}
      />
    </div>
  );
}
