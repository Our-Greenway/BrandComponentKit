import { useState } from "react";

type ColourCardProps = {
  label: string;
  hex: string;
  cymk: string;
  contrast: string;
};

function ColourCard({
  label,
  hex,
  cymk,
  contrast,
}: ColourCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-4">
        <button onClick={handleCopy} style={{ backgroundColor: hex }} className="text-white font-bold rounded-lg p-30 text-2xl shadow">
          {hex}
        </button>
        <div className="text-black">
          <div className="font-bold text-xl">{label}</div>
          <div>CYMK({cymk})</div>
          <div>Contrast with white: {contrast}</div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col sm:hidden gap-2">
        <button onClick={handleCopy} style={{ backgroundColor: hex }} className="text-white font-bold rounded-lg px-6 py-4 text-lg shadow">
          {hex}
        </button>
        <div className="text-black">
          <div className="font-bold text-xl">{label}</div>
          <div>CYMK({cymk})</div>
          <div>Contrast with white: {contrast}</div>
        </div>
      </div>

    </div>
  );
}

export default ColourCard