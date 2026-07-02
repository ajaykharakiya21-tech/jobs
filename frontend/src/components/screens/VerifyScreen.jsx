import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  Info,
  Lock,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

export default function VerifyScreen({ formData, onSuccess }) {
  const [utr, setUtr] = useState("");
  const [loading, setLoading] = useState(false);

  const fireConfetti = () => {
    const end = Date.now() + 900;
    const colors = ["#0055FF", "#22D3EE", "#10B981", "#FFFFFF"];
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.5 },
      colors,
      scalar: 1.05,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!utr.trim() || utr.trim().length < 6) {
      toast.error("Please enter a valid UTR / Transaction ID (min 6 chars)");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fireConfetti();
      onSuccess();
    }, 1100);
  };

  return (
    <div className="screen-scroll">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-6 pb-16">
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 trust-badge"
            data-testid="verify-security-pill"
          >
            <Lock size={13} className="text-emerald-600" /> 256-bit Encrypted
            Payment
          </motion.div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 mt-3">
            Verify &amp;{" "}
            <span className="text-gradient-blue">Complete Registration</span>
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Pay a small ₹100 verification fee. Fully refundable if we don&apos;t
            schedule an interview in 30 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* QR Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 glass rounded-2xl p-5 text-center relative"
            data-testid="qr-card"
          >
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
              <ShieldCheck size={12} /> 100% Secure
            </div>

            <div className="qr-frame mx-auto mt-4 inline-flex flex-col items-center">
              <div className="qr-corner tl" />
              <div className="qr-corner tr" />
              <div className="qr-corner bl" />
              <div className="qr-corner br" />
              <img
                src="/assets/payment-qr.jpg"
                alt="Scan to pay ₹100 via PhonePe / UPI"
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-lg object-contain select-none"
                draggable="false"
                data-testid="payment-qr-image"
              />
              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#5F259F]/10 text-[#5F259F] font-bold">
                  PhonePe
                </span>
                · UPI · GPay · Paytm
              </div>
            </div>

            <div className="mt-4 text-sm font-semibold text-slate-800">
              Scan to pay{" "}
              <span className="text-blue-600 font-bold">₹100</span> Platform
              Verification Fee
            </div>
            <div className="text-xs text-slate-500 mt-1">
              After payment, enter the UTR / Transaction ID below
            </div>
          </motion.div>

          {/* UTR + Submit */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            onSubmit={submit}
            className="md:col-span-3 glass rounded-2xl p-5"
            data-testid="verify-form"
          >
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-3">
              Enter Transaction Reference
            </div>

            <div className="field">
              <BadgeCheck size={16} className="field-icon" />
              <input
                type="text"
                value={utr}
                onChange={(e) => setUtr(e.target.value.toUpperCase())}
                placeholder=" "
                data-testid="input-utr"
                className="field-input tracking-widest font-semibold"
              />
              <label className={`field-label ${utr ? "filled" : ""}`}>
                UTR Number / Transaction ID{" "}
                <span className="text-rose-500">*</span>
              </label>
            </div>

            <div className="mt-3 text-xs text-slate-500">
              Find UTR/RRN in your UPI payment success screen.
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="btn-verify-complete"
              className="btn-magnetic w-full mt-5 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-base disabled:opacity-80"
              style={{
                boxShadow:
                  "0 12px 34px -12px rgba(16,185,129,0.55), inset 0 2px 0 rgba(255,255,255,0.4)",
              }}
            >
              {loading ? (
                <>
                  <span className="spinner" /> Verifying payment...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} /> Verify &amp; Complete Registration{" "}
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Guarantee Box */}
            <div
              className="mt-5 rounded-2xl p-4 border border-blue-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,85,255,0.06), rgba(0,85,255,0.02))",
              }}
              data-testid="guarantee-box"
            >
              <div className="flex gap-3">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600/10 grid place-items-center text-blue-700">
                  <Info size={16} />
                </div>
                <p className="text-[13px] leading-relaxed text-slate-700">
                  <span className="font-bold text-slate-900">Note:</span>{" "}
                  Please allow up to <span className="font-semibold">30 days</span>{" "}
                  for our team to match your profile with your selected company
                  {formData?.targetCompany ? (
                    <>
                      {" "}
                      (
                      <span className="font-semibold text-blue-700">
                        {formData.targetCompany}
                      </span>
                      )
                    </>
                  ) : (
                    " (e.g., Maruti Suzuki, TCS)"
                  )}{" "}
                  and schedule an interview. If no interview is scheduled within
                  this period, your{" "}
                  <span className="font-semibold text-emerald-700">
                    ₹100 verification fee will be fully refunded
                  </span>{" "}
                  to your source account.
                </p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
