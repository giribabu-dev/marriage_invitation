import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { submitRSVP } from "../services/rsvpService";

const INITIAL_FORM = {
  name: "",
  phone: "",
  guests: "1",
  attendance: "accept",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!form.guests || Number(form.guests) < 1 || Number(form.guests) > 20) {
    errors.guests = "Enter a number of guests between 1 and 20.";
  }
  return errors;
}

export default function RSVPSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await submitRSVP(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="rsvp" className="bg-brown py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <p className="uppercase tracking-[0.3em] text-gold-light text-xs sm:text-sm">Kindly Respond</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-ivory">RSVP</h2>
        <SectionDivider className="mt-5" />
      </div>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto max-w-xl rounded-2xl border border-gold/30 bg-ivory/95 backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 space-y-5"
      >
        <div>
          <label htmlFor="rsvp-name" className="block text-sm text-brown/80 mb-1.5">
            Full Name
          </label>
          <input
            id="rsvp-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "rsvp-name-error" : undefined}
            className="focus-ring w-full rounded-lg border border-brown/20 bg-white px-4 py-2.5 text-brown"
          />
          {errors.name && (
            <p id="rsvp-name-error" className="mt-1 text-xs text-maroon">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="rsvp-phone" className="block text-sm text-brown/80 mb-1.5">
            Phone Number
          </label>
          <input
            id="rsvp-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "rsvp-phone-error" : undefined}
            className="focus-ring w-full rounded-lg border border-brown/20 bg-white px-4 py-2.5 text-brown"
          />
          {errors.phone && (
            <p id="rsvp-phone-error" className="mt-1 text-xs text-maroon">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="rsvp-guests" className="block text-sm text-brown/80 mb-1.5">
            Number of Guests
          </label>
          <input
            id="rsvp-guests"
            name="guests"
            type="number"
            min="1"
            max="20"
            value={form.guests}
            onChange={handleChange}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "rsvp-guests-error" : undefined}
            className="focus-ring w-full rounded-lg border border-brown/20 bg-white px-4 py-2.5 text-brown"
          />
          {errors.guests && (
            <p id="rsvp-guests-error" className="mt-1 text-xs text-maroon">
              {errors.guests}
            </p>
          )}
        </div>

        <fieldset>
          <legend className="block text-sm text-brown/80 mb-1.5">Attendance</legend>
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="focus-ring flex-1 flex items-center gap-2 rounded-lg border border-brown/20 bg-white px-4 py-2.5 cursor-pointer">
              <input
                type="radio"
                name="attendance"
                value="accept"
                checked={form.attendance === "accept"}
                onChange={handleChange}
              />
              Joyfully Accept
            </label>
            <label className="focus-ring flex-1 flex items-center gap-2 rounded-lg border border-brown/20 bg-white px-4 py-2.5 cursor-pointer">
              <input
                type="radio"
                name="attendance"
                value="decline"
                checked={form.attendance === "decline"}
                onChange={handleChange}
              />
              Regretfully Decline
            </label>
          </div>
        </fieldset>

        <div>
          <label htmlFor="rsvp-message" className="block text-sm text-brown/80 mb-1.5">
            Message (optional)
          </label>
          <textarea
            id="rsvp-message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="focus-ring w-full rounded-lg border border-brown/20 bg-white px-4 py-2.5 text-brown resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-ring w-full inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm uppercase tracking-wide text-ivory hover:bg-maroon-dark transition-colors disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={18} /> Sending…
            </>
          ) : (
            "Send RSVP"
          )}
        </button>

        {status === "success" && (
          <p role="status" className="flex items-center gap-2 justify-center text-sm text-sage font-medium">
            <CheckCircle2 size={18} /> Thank you! Your RSVP has been received.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="flex items-center gap-2 justify-center text-sm text-maroon font-medium">
            <AlertCircle size={18} /> Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
