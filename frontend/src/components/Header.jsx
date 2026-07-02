import { ArrowLeft, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "Start" },
  { id: 2, label: "Apply" },
  { id: 3, label: "Verify" },
];

export default function Header({ step, onBack, canBack }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      data-testid="app-header"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-4">
        <div className="glass rounded-2xl px-3 sm:px-5 py-3 flex items-center justify-between gap-3">
          {/* Left: back / brand */}
          <div className="flex items-center gap-2 min-w-0">
            {canBack ? (
              <button
                onClick={onBack}
                data-testid="btn-header-back"
                className="grid place-items-center w-9 h-9 rounded-full hover:bg-slate-100 transition-colors text-slate-700"
                aria-label="Go back"
              >
                <ArrowLeft size={18} />
              </button>
            ) : (
              <div className="w-9 h-9 grid place-items-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_6px_18px_-6px_rgba(0,85,255,0.6)]">
                <Briefcase size={16} />
              </div>
            )}

            <div className="flex items-center gap-2 min-w-0">
              <span className="logo-dot hidden sm:inline-block" />
              <div className="min-w-0">
                <div
                  className="font-heading font-extrabold text-[15px] sm:text-base leading-none tracking-tight text-slate-900 truncate"
                  data-testid="brand-title"
                >
                  JobsForAll{" "}
                  <span className="text-gradient-blue">Haryana</span>
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 mt-1 hidden sm:block">
                  Talent · Trust · Placement
                </div>
              </div>
            </div>
          </div>

          {/* Right: stepper */}
          <div
            className="flex items-center gap-1.5 sm:gap-2"
            data-testid="stepper"
          >
            {steps.map((s, i) => {
              const state =
                step > s.id ? "done" : step === s.id ? "active" : "todo";
              return (
                <div key={s.id} className="flex items-center gap-1.5 sm:gap-2">
                  <motion.div
                    layout
                    className={`step-dot ${state === "active" ? "active" : ""} ${state === "done" ? "done" : ""}`}
                    data-testid={`step-dot-${s.id}`}
                  >
                    {state === "done" ? "✓" : s.id}
                  </motion.div>
                  <span
                    className={`hidden md:inline text-xs font-semibold ${
                      state === "todo" ? "text-slate-400" : "text-slate-700"
                    }`}
                  >
                    {s.label}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="step-bar">
                      <span
                        style={{
                          transform:
                            step > s.id ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
