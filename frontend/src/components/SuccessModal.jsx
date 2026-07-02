import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Sparkles, Calendar, RotateCcw } from "lucide-react";

export default function SuccessModal({ open, onClose, name, company }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center px-4"
          data-testid="success-modal"
          style={{
            background:
              "radial-gradient(circle at center, rgba(10,37,64,0.35), rgba(10,37,64,0.55))",
            backdropFilter: "blur(6px)",
          }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="glass rounded-3xl w-full max-w-md p-7 text-center relative overflow-hidden"
          >
            {/* soft green halo */}
            <div
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(16,185,129,0.35), transparent 70%)",
                filter: "blur(4px)",
              }}
            />
            <div className="relative">
              <motion.div
                initial={{ scale: 0.6, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 240, damping: 14 }}
                className="mx-auto w-16 h-16 rounded-full bg-emerald-500 text-white grid place-items-center shadow-[0_14px_30px_-8px_rgba(16,185,129,0.55)]"
              >
                <CheckCircle2 size={34} strokeWidth={2.2} />
              </motion.div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mt-4 text-slate-900 tracking-tight">
                Registration Successful
              </h3>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                {name ? (
                  <>
                    Welcome,{" "}
                    <span className="font-semibold text-slate-800">{name}</span>
                    !{" "}
                  </>
                ) : (
                  "Welcome! "
                )}
                We&apos;ve received your profile and payment reference.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 text-left">
                <div className="flex items-start gap-2.5 text-sm text-slate-700 bg-white/70 border border-slate-100 rounded-xl p-3">
                  <Sparkles size={16} className="text-blue-600 mt-0.5" />
                  <span>
                    Our team will shortlist and match your profile with{" "}
                    <span className="font-semibold">
                      {company || "your target employer"}
                    </span>
                    .
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700 bg-white/70 border border-slate-100 rounded-xl p-3">
                  <Calendar size={16} className="text-emerald-600 mt-0.5" />
                  <span>
                    Expect an interview call within{" "}
                    <span className="font-semibold">30 days</span>. Otherwise
                    your ₹100 is refunded automatically.
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                data-testid="btn-success-close"
                className="btn-magnetic mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold"
              >
                <RotateCcw size={16} /> Register Another
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
