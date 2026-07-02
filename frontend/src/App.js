import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "@/App.css";
import Header from "@/components/Header";
import HeroScreen from "@/components/screens/HeroScreen";
import RegisterScreen from "@/components/screens/RegisterScreen";
import VerifyScreen from "@/components/screens/VerifyScreen";
import SuccessModal from "@/components/SuccessModal";
import { Toaster } from "@/components/ui/sonner";

const stepVariants = {
  initial: { x: 40, opacity: 0, filter: "blur(4px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: { x: -40, opacity: 0, filter: "blur(4px)" },
};

const stepTransition = { type: "spring", stiffness: 260, damping: 28 };

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);

  const goNext = useCallback((data) => {
    if (data) setFormData((p) => ({ ...p, ...data }));
    setStep((s) => Math.min(3, s + 1));
  }, []);

  const goBack = useCallback(() => {
    setStep((s) => Math.max(1, s - 1));
  }, []);

  const finish = useCallback(() => {
    setSuccess(true);
  }, []);

  const restart = useCallback(() => {
    setSuccess(false);
    setStep(1);
    setFormData({});
  }, []);

  return (
    <div className="app-shell" data-testid="app-shell">
      {/* ambient blobs */}
      <div
        className="blob"
        style={{
          width: 420,
          height: 420,
          top: -120,
          left: -120,
          background: "rgba(0,85,255,0.28)",
        }}
      />
      <div
        className="blob"
        style={{
          width: 380,
          height: 380,
          bottom: -140,
          right: -100,
          background: "rgba(16,185,129,0.22)",
        }}
      />
      <div className="grain absolute inset-0" />

      <Header step={step} onBack={goBack} canBack={step > 1 && !success} />

      <main className="relative z-10 h-full pt-20 pb-6">
        <AnimatePresence mode="wait" initial={false}>
          {step === 1 && (
            <motion.section
              key="s1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={stepTransition}
              className="h-full"
              data-testid="screen-hero"
            >
              <HeroScreen onStart={() => goNext()} />
            </motion.section>
          )}

          {step === 2 && (
            <motion.section
              key="s2"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={stepTransition}
              className="h-full"
              data-testid="screen-register"
            >
              <RegisterScreen initial={formData} onContinue={goNext} />
            </motion.section>
          )}

          {step === 3 && (
            <motion.section
              key="s3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={stepTransition}
              className="h-full"
              data-testid="screen-verify"
            >
              <VerifyScreen formData={formData} onSuccess={finish} />
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <SuccessModal
        open={success}
        onClose={restart}
        name={formData.fullName}
        company={formData.targetCompany}
      />

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
