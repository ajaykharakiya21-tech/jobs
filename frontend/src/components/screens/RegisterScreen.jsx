import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Building2,
  Briefcase,
  Sparkles,
  Link as LinkIcon,
  ArrowRight,
  Check,
} from "lucide-react";
import { toast } from "sonner";

const qualifications = [
  "10th Pass",
  "12th Pass",
  "Diploma",
  "Graduate",
  "Post-Graduate",
];

const companies = [
  "Maruti Suzuki",
  "Hero MotoCorp",
  "TCS",
  "Infosys",
  "Wipro",
  "Honda Motorcycle & Scooter India",
  "DLF Limited",
  "JBM Group",
  "Zomato (Gurugram)",
  "MakeMyTrip (Gurugram)",
  "Any / Open to all",
];

const statuses = [
  {
    id: "unemployed",
    label: "Unemployed",
    hint: "Actively seeking a role",
  },
  { id: "employed", label: "Employed", hint: "Looking to switch" },
  { id: "student", label: "Student", hint: "Finishing studies" },
];

function Field({
  icon: Icon,
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}) {
  const noIcon = !Icon;
  return (
    <div className="field">
      {Icon && (
        <Icon size={16} className="field-icon" strokeWidth={2.2} />
      )}
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder || " "}
        required={required}
        data-testid={`input-${name}`}
        className={`field-input ${noIcon ? "no-icon" : ""}`}
      />
      <label className={`field-label ${noIcon ? "no-icon" : ""} ${value ? "filled" : ""}`}>
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
    </div>
  );
}

function SelectField({ icon: Icon, label, name, value, onChange, options, required }) {
  return (
    <div className="field">
      {Icon && <Icon size={16} className="field-icon" strokeWidth={2.2} />}
      <select
        name={name}
        value={value || ""}
        onChange={onChange}
        required={required}
        data-testid={`select-${name}`}
        className="field-input appearance-none pr-10 cursor-pointer"
      >
        <option value="" disabled hidden></option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <label className={`field-label ${value ? "filled" : ""}`}>
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function RegisterScreen({ initial, onContinue }) {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    qualification: "",
    industry: "",
    targetCompany: "",
    currentStatus: "unemployed",
    experience: "",
    skills: "",
    linkedin: "",
    ...initial,
  });
  const [loading, setLoading] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    const req = [
      ["fullName", "Full Name"],
      ["phone", "Phone Number"],
      ["email", "Email"],
      ["city", "City / District"],
      ["qualification", "Qualification"],
      ["industry", "Target Industry / Role"],
      ["targetCompany", "Target Company"],
      ["experience", "Total Years of Experience"],
      ["skills", "Top Skills"],
    ];
    for (const [k, label] of req) {
      if (!String(data[k] || "").trim()) {
        toast.error(`Please fill: ${label}`);
        return false;
      }
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!/^[0-9+\-\s()]{7,15}$/.test(data.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onContinue(data);
    }, 900);
  };

  return (
    <div className="screen-scroll">
      <form
        onSubmit={submit}
        className="mx-auto max-w-3xl px-5 sm:px-8 pt-6 pb-16"
        data-testid="register-form"
      >
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900"
          >
            Tell us about <span className="text-gradient-blue">yourself</span>
          </motion.h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Takes ~3 minutes. All fields marked * are required.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Personal block */}
          <div className="glass rounded-2xl p-5 md:col-span-2">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-3">
              Personal
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field
                icon={User}
                name="fullName"
                label="Full Name"
                value={data.fullName}
                onChange={update}
                required
              />
              <Field
                icon={Phone}
                name="phone"
                label="Phone Number"
                type="tel"
                value={data.phone}
                onChange={update}
                required
              />
              <Field
                icon={Mail}
                name="email"
                label="Email Address"
                type="email"
                value={data.email}
                onChange={update}
                required
              />
              <Field
                icon={MapPin}
                name="city"
                label="City & District in Haryana"
                value={data.city}
                onChange={update}
                required
              />
            </div>
          </div>

          {/* Education & Target */}
          <div className="glass rounded-2xl p-5">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-3">
              Education
            </div>
            <div className="grid gap-3">
              <SelectField
                icon={GraduationCap}
                name="qualification"
                label="Highest Qualification"
                value={data.qualification}
                onChange={update}
                options={qualifications}
                required
              />
              <Field
                icon={Briefcase}
                name="industry"
                label="Target Industry / Role"
                value={data.industry}
                onChange={update}
                required
              />
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-3">
              Preferred Employer
            </div>
            <div className="grid gap-3">
              <SelectField
                icon={Building2}
                name="targetCompany"
                label="Target Company in Haryana"
                value={data.targetCompany}
                onChange={update}
                options={companies}
                required
              />
              <Field
                name="experience"
                label="Total Years of Experience"
                type="number"
                value={data.experience}
                onChange={update}
                required
              />
            </div>
          </div>

          {/* Current status - radio cards */}
          <div className="glass rounded-2xl p-5 md:col-span-2">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-3">
              Current Status
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {statuses.map((s) => {
                const active = data.currentStatus === s.id;
                return (
                  <div
                    key={s.id}
                    className={`radio-card ${active ? "active" : ""}`}
                    onClick={() =>
                      setData((p) => ({ ...p, currentStatus: s.id }))
                    }
                    data-testid={`radio-status-${s.id}`}
                    role="radio"
                    aria-checked={active}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setData((p) => ({ ...p, currentStatus: s.id }));
                      }
                    }}
                  >
                    <div className="rc-tick">
                      {active && <Check size={12} strokeWidth={3} />}
                    </div>
                    <div className="font-semibold text-slate-900">
                      {s.label}
                    </div>
                    <div className="text-xs text-slate-500">{s.hint}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="glass rounded-2xl p-5 md:col-span-2">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-3">
              Skills & Links
            </div>
            <div className="grid gap-3">
              <div className="field">
                <Sparkles size={16} className="field-icon" />
                <textarea
                  name="skills"
                  value={data.skills}
                  onChange={update}
                  placeholder=" "
                  required
                  data-testid="input-skills"
                  className="field-input"
                />
                <label
                  className={`field-label ${data.skills ? "filled" : ""}`}
                >
                  Top Skills <span className="text-rose-500">*</span>
                </label>
              </div>
              <Field
                icon={LinkIcon}
                name="linkedin"
                label="LinkedIn / Resume Link (optional)"
                value={data.linkedin}
                onChange={update}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Your details are encrypted &amp; never shared without consent.
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="btn-continue-verification"
            className="btn-magnetic inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold disabled:opacity-80"
          >
            {loading ? (
              <>
                <span className="spinner" /> Preparing...
              </>
            ) : (
              <>
                Continue to Verification <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
