import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Wrench, ArrowRight } from "lucide-react";
import Briefcase3D from "@/components/Briefcase3D";

export default function HeroScreen({ onStart }) {
  return (
    <div className="screen-scroll">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-6 pb-16 min-h-full flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="trust-badge"
          data-testid="hero-eyebrow"
        >
          <span className="logo-dot" /> Haryana&apos;s Trusted Placement Bridge
        </motion.span>

        {/* 3D briefcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
          className="mt-6"
        >
          <Briefcase3D />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-heading font-black tracking-tighter text-slate-900 mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] max-w-3xl"
          data-testid="hero-headline"
        >
          Connecting Talent with{" "}
          <span className="text-gradient-blue">Opportunity</span> in Haryana.
          <br className="hidden sm:block" /> Get Hired Today.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mt-4 text-slate-600 max-w-xl text-base sm:text-lg leading-relaxed"
          data-testid="hero-sub"
        >
          Register in 3 minutes. Our team matches you to top employers across
          Gurugram, Manesar, Faridabad &amp; more.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
          data-testid="hero-trust-badges"
        >
          <span className="trust-badge" data-testid="badge-10th12th">
            <BookOpen size={14} className="text-blue-600" /> 10th / 12th Pass
          </span>
          <span className="trust-badge" data-testid="badge-graduates">
            <GraduationCap size={14} className="text-blue-600" /> Graduates
            (B.Tech / B.A.)
          </span>
          <span className="trust-badge" data-testid="badge-diploma">
            <Wrench size={14} className="text-blue-600" /> Diploma Holders
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-9 relative"
        >
          <span className="cta-pulse absolute inset-0 rounded-full" />
          <button
            onClick={onStart}
            data-testid="btn-get-started"
            className="btn-magnetic relative inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-base sm:text-lg"
          >
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Micro trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="mt-6 text-xs text-slate-500"
          data-testid="hero-micro-trust"
        >
          🔒 100% Secure · Refundable Verification · Haryana-Focused Placements
        </motion.div>
      </div>
    </div>
  );
}
