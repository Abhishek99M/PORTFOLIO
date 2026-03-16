"use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/lib/data";

// ─── EmailJS config ───
// 1. Go to https://www.emailjs.com/ and sign up (free)
// 2. Add an Email Service (Gmail) → copy the Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy your Public Key from Account → General
// 5. Replace the values below:
const EMAILJS_SERVICE_ID = "service_6mjaexx";
const EMAILJS_TEMPLATE_ID = "template_b3nzrh4";
const EMAILJS_PUBLIC_KEY = "aWq7zhTklNykmtiwU";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Abhishek99M",
      href: socialLinks.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abhishek Kumar",
      href: socialLinks.linkedin,
    },
    { icon: MapPin, label: "Location", value: "India", href: undefined },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Let's connect."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-neutral-200/60 bg-white/60 p-4 backdrop-blur-md transition-all hover:border-primary-300/60 hover:shadow-md dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-primary-700/60"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                      <item.icon className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-xl border border-neutral-200/60 bg-white/60 p-4 backdrop-blur-md dark:border-neutral-700/60 dark:bg-neutral-900/60">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                      <item.icon className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-neutral-200/60 bg-white/60 p-6 backdrop-blur-md dark:border-neutral-700/60 dark:bg-neutral-900/60"
            >
              <div>
                <label
                  htmlFor="from_name"
                  className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="from_email"
                  className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:brightness-110 disabled:opacity-60"
              >
                {status === "sending" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="h-4 w-4" />
                    Failed — Try Again
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
