import { Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function Briefcase3D() {
  return (
    <div
      className="scene-3d mx-auto"
      data-testid="hero-3d-briefcase"
      aria-hidden="true"
    >
      <div className="briefcase">
        <div className="bc-face bc-back" />
        <div className="bc-face bc-bottom" />
        <div className="bc-face bc-top" />
        <div className="bc-face bc-left" />
        <div className="bc-face bc-right" />
        <div className="bc-face bc-front" />
        <div className="bc-split" />
        <div className="bc-clasp" />
        <div className="bc-handle" />
      </div>
      <div className="bc-glow" />

      <div className="chip c1">
        <Sparkles size={12} className="text-blue-600" />
        Verified
      </div>
      <div className="chip c2">
        <TrendingUp size={12} className="text-emerald-500" />
        +2,148 hired
      </div>
      <div className="chip c3">
        <ShieldCheck size={12} className="text-blue-600" />
        Secure ₹100
      </div>
    </div>
  );
}
