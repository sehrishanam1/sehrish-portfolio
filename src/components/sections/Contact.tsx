"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Add a short subject"),
  message: z.string().min(10, "Tell me a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: MapPin, label: "Location", value: SITE.location, href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Simulate an async submission (swap for a real API route).
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Contact form submitted:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  const fieldClass =
    "w-full rounded-xl border border-bg-line bg-bg-soft px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project in mind or just want to say hi? Drop a message — I usually reply within a day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <Reveal key={info.label} delay={i * 0.1} direction="right">
                  <a
                    href={info.href}
                    className="group flex items-center gap-4 rounded-2xl border border-bg-line bg-bg-card/60 p-5 transition-all duration-300 hover:border-accent/40"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-bg-line bg-bg text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.3} direction="right">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="font-display text-lg font-semibold text-white">
                  Currently available
                </p>
                <p className="mt-1 text-sm text-muted">
                  Booking new projects for Q3 2026. Let&apos;s build something
                  remarkable.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-surface space-y-5 p-7"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    placeholder="Email address"
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className={fieldClass}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`${fieldClass} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || sent}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    Sending
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : sent ? (
                  <>
                    Message sent
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
