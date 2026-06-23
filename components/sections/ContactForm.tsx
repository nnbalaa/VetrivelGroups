"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactDivisionOptions } from "@/lib/content";

interface FormState {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  division: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  division: "General Enquiry",
  message: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [touched, setTouched] = useState(false);

  // Pre-fill division from query params (e.g. linked from Divisions or Careers pages)
  useEffect(() => {
    const division = searchParams.get("division");
    const role = searchParams.get("role");
    const isKnownDivision = (contactDivisionOptions as readonly string[]).includes(division ?? "");
    if (division && isKnownDivision) {
      setForm((f) => ({
        ...f,
        division,
        message: role ? `I'd like to apply for the ${role} role.` : f.message,
      }));
    }
  }, [searchParams]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const isValid =
    form.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length > 4;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);

    if (!isValid) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
      setTouched(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-card text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 mb-5">
          <CheckCircle2 className="h-7 w-7 text-green-600" />
        </span>
        <h3 className="font-display text-xl font-semibold text-navy-dark mb-2">
          Thank you for contacting Vetrivel Groups.
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          Your enquiry has been received and our team will get back to you within one business
          day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-card">
      <h2 className="font-display text-2xl font-semibold text-navy-dark mb-6">
        Send us a message
      </h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Full Name" required>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              required
              className="form-input"
              aria-invalid={touched && form.name.trim().length <= 1}
            />
          </Field>
          <Field label="Organisation">
            <input
              type="text"
              value={form.organisation}
              onChange={(e) => update("organisation", e.target.value)}
              placeholder="Company / Institution"
              className="form-input"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Email" required>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              required
              className="form-input"
              aria-invalid={touched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)}
            />
          </Field>
          <Field label="Phone">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91"
              className="form-input"
            />
          </Field>
        </div>

        <Field label="Division of Interest">
          <select
            value={form.division}
            onChange={(e) => update("division", e.target.value)}
            className="form-input"
          >
            {contactDivisionOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label="How can we help?" required>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us about your project or requirement..."
            required
            rows={5}
            className="form-input resize-none"
            aria-invalid={touched && form.message.trim().length <= 4}
          />
        </Field>

        {status === "error" && (
          <div className="flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {touched && !isValid && status !== "loading" && (
          <p className="text-xs text-red-600">
            Please fill in your name, a valid email, and a message before sending.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label} {required && <span className="text-gold-dark">*</span>}
      </span>
      {children}
    </label>
  );
}
