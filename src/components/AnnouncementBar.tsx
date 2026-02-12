import { useState } from "react";
import { X, Megaphone } from "lucide-react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="gradient-navy-horizontal text-primary-foreground py-3 px-4 text-center text-sm font-medium relative">
      <div className="flex items-center justify-center gap-2">
        <Megaphone className="w-4 h-4 flex-shrink-0" />
        <span>
          📢 BCS 46th Preliminary Result Published!{" "}
          <a href="#" className="underline hover:opacity-80 transition-opacity">
            Check Your Preparation Level →
          </a>
        </span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
