"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const stats = [
  { value: "50k+", label: "ACTIVE USERS" },
  { value: "4.49/5", label: "APP RATING" },
  { value: "$100M+", label: "TRANSFERRED" },
];

const testimonials = [
  {
    stars: 5,
    text: "SaharaPay has made it incredibly easy for me to send money back home to my family in Nigeria. The exchange rates are competitive and transfers are instant.",
    name: "Mohammed Al-Rashid",
    location: "Riyadh, Saudi Arabia",
  },
  {
    stars: 5,
    text: "I've been using SaharaPay for over a year and it has never let me down. The app is intuitive, the support team is responsive and rates are always fair.",
    name: "Amara Diallo",
    location: "Jeddah, Saudi Arabia",
  },
  {
    stars: 5,
    text: "Finally a service that understands the African diaspora in Saudi Arabia. Fast transfers, great customer support and you can rely on them completely.",
    name: "Fatima Al-Hassan",
    location: "Dammam, Saudi Arabia",
  },
];

const faqs = [
  {
    question: "How long do transfers usually take?",
    answer:
      "Most transfers are completed within minutes. In rare cases, it may take up to 24 hours depending on the recipient's bank.",
  },
  {
    question: "Is SaharaPay regulated in Saudi Arabia?",
    answer:
      "Yes. SaharaPay is fully licensed and compliant with SAMA (Saudi Arabian Monetary Authority) regulations.",
  },
  {
    question: "What are the transfer fees?",
    answer:
      "We offer competitive fees with zero hidden charges. Transfer fees vary by destination and amount — you always see the exact fee before confirming.",
  },
  {
    question: "What countries can I send money to?",
    answer:
      "We currently support transfers to Nigeria, Kenya, Ghana, Uganda, Tanzania, Ethiopia, and more African countries. We are expanding rapidly.",
  },
];

const footerLinks = {
  PRODUCT: ["How it works", "Exchange Rates", "Download the App", "Other Integrations"],
  COMPANY: ["About Us", "Careers", "Press", "Contact"],
  LEGAL: ["Privacy Policy", "Terms of Service", "Cookie Policy", "KYC Policy"],
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
      >
        <span>{question}</span>
        {open ? (
          <FiChevronUp className="h-4 w-4 shrink-0 text-blue-600" />
        ) : (
          <FiChevronDown className="h-4 w-4 shrink-0 text-gray-400" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-gray-500">{answer}</p>
      )}
    </div>
  );
}

export default function TrustFaqFoot() {
  return (
    <div className="w-full font-[family-name:var(--font-montserrat)]">
      {/* ── Trusted by Thousands ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by Thousands
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Hear from our community in Kingdom of Saudi Arabia
            </p>
          </div>
          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-blue-700">{s.value}</p>
                <p className="mt-0.5 text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3">
                <StarRating count={t.stars} />
                <p className="text-sm leading-relaxed text-gray-600">{t.text}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="mt-10">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-blue-700 px-8 py-16 text-center">
          {/* subtle globe watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
            <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
              <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
              <ellipse cx="200" cy="200" rx="90" ry="180" stroke="white" strokeWidth="1" />
              <ellipse cx="200" cy="200" rx="180" ry="70" stroke="white" strokeWidth="1" />
              <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="1" />
              <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to send Money Home ?
            </h2>
            <p className="max-w-md text-sm text-blue-200">
              Join thousands of Africans using SaharaPay to support their
              families and businesses with peace of mind.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Download iOS
              </Link>
              <Link
                href="#"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Download Android
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-xl font-bold text-blue-700">
                SaharaPay
              </Link>
              <p className="text-sm leading-relaxed text-gray-500">
                Providing premium financial connectivity between Saudi Arabia
                and Africa. Fast, secure and transparent.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-blue-600 hover:text-blue-600"
                >
                  <FaXTwitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-blue-600 hover:text-blue-600"
                >
                  <FaXTwitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} SaharaPay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}