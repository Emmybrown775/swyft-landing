"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "data-we-collect", label: "Data We Collect" },
  { id: "how-we-use-it", label: "How We Use It" },
  { id: "third-parties", label: "Third Parties" },
  { id: "retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section in sidebar
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 96, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@700;800&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        html { scroll-behavior: smooth; }
        .prose h2 { font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 2.5rem 0 1rem; padding-top: 0.5rem; }
        .prose h3 { font-size: 1rem; font-weight: 600; color: #0f172a; margin: 1.5rem 0 0.5rem; }
        .prose p  { font-size: 0.9375rem; line-height: 1.75; color: #475569; margin: 0 0 1rem; }
        .prose ul { margin: 0.75rem 0 1rem 1.25rem; }
        .prose ul li { font-size: 0.9375rem; line-height: 1.75; color: #475569; margin-bottom: 0.375rem; list-style: disc; }
        .prose a  { color: #2563eb; text-decoration: underline; text-underline-offset: 2px; }
        .prose strong { color: #0f172a; font-weight: 600; }
        .section-anchor { scroll-margin-top: 96px; }
      `}</style>

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-sm">
              ⚡
            </div>
            <span className="font-syne font-black text-lg text-slate-900">
              Swyft
            </span>
          </a>
          <a
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to home
          </a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24">
        <div className="flex gap-16">
          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      activeSection === s.id
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>

              {/* Last updated pill */}
              <div className="mt-8 px-3 py-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-400 font-medium">
                  Last updated
                </p>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  March 2026
                </p>
              </div>
            </div>
          </aside>

          {/* ── CONTENT ── */}
          <main className="flex-1 min-w-0 max-w-2xl">
            {/* Page header */}
            <div className="mb-10 pb-10 border-b border-slate-100">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                Privacy Policy
              </div>
              <h1 className="font-syne text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                Your privacy,
                <br />
                our responsibility.
              </h1>
              <p className="text-slate-500 text-base leading-relaxed">
                This policy explains what personal data Swyft collects, why we
                collect it, and how we protect it. We've written it in plain
                English — no legal jargon.
              </p>
            </div>

            <div className="prose">
              {/* ── OVERVIEW ── */}
              <section id="overview" className="section-anchor">
                <h2>Overview</h2>
                <p>
                  Swyft ("we", "our", "us") is a same-day delivery service
                  operating in Port Harcourt, Nigeria. Our mobile application
                  and website are operated by <strong>Swyft Mobility</strong>.
                </p>
                <p>
                  When you use the Swyft app or visit{" "}
                  <a href="https://bookswyft.com">bookswyft.com</a>, we collect
                  and process certain personal information to deliver our
                  service. This Privacy Policy applies to all users of the Swyft
                  mobile application and website.
                </p>
                <p>
                  By creating an account or placing an order, you agree to the
                  collection and use of your information as described in this
                  policy.
                </p>

                {/* Highlight box */}
                <div
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    margin: "1.5rem 0",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#166534",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    <strong style={{ color: "#166534" }}>
                      The short version:
                    </strong>{" "}
                    We only collect what we need to run your deliveries. We
                    don't sell your data. Ever.
                  </p>
                </div>
              </section>

              {/* ── DATA WE COLLECT ── */}
              <section id="data-we-collect" className="section-anchor">
                <h2>Data We Collect</h2>
                <p>
                  We collect information you provide directly, and some
                  information automatically when you use our app.
                </p>

                <h3>Information you give us</h3>
                <ul>
                  <li>
                    <strong>Account details</strong> — your name, email address,
                    and password when you register.
                  </li>
                  <li>
                    <strong>Phone number</strong> — used to verify your account
                    and contact you about deliveries.
                  </li>
                  <li>
                    <strong>Delivery information</strong> — pickup address,
                    drop-off address, sender and receiver names and phone
                    numbers, and package description for each order you place.
                  </li>
                  <li>
                    <strong>Payment information</strong> — we do not store your
                    card details. Payments are handled entirely by Paystack. We
                    only store confirmation of whether a payment was made and
                    the amount.
                  </li>
                </ul>

                <h3>Information collected automatically</h3>
                <ul>
                  <li>
                    <strong>Device token</strong> — a push notification token
                    generated by your device, used to send you order status
                    updates. This is not tied to your identity outside of Swyft.
                  </li>
                  <li>
                    <strong>App usage data</strong> — basic logs such as when
                    you opened the app and which screens you visited, used to
                    fix bugs and improve the experience.
                  </li>
                  <li>
                    <strong>Device information</strong> — device model and
                    operating system version, collected to ensure compatibility.
                  </li>
                </ul>

                <h3>Information we do not collect</h3>
                <ul>
                  <li>We do not track your real-time location.</li>
                  <li>We do not collect biometric data.</li>
                  <li>
                    We do not access your contacts, photos, or camera except
                    when you explicitly grant permission for a specific feature.
                  </li>
                </ul>
              </section>

              {/* ── HOW WE USE IT ── */}
              <section id="how-we-use-it" className="section-anchor">
                <h2>How We Use Your Data</h2>
                <p>
                  We use the data we collect strictly to provide and improve the
                  Swyft service. Specifically:
                </p>
                <ul>
                  <li>
                    <strong>To process and fulfil your deliveries</strong> —
                    your pickup and drop-off details are shared with the rider
                    assigned to your order.
                  </li>
                  <li>
                    <strong>To communicate with you</strong> — we send push
                    notifications and emails about your order status, account
                    verification, and password resets.
                  </li>
                  <li>
                    <strong>To process payments</strong> — your email and order
                    amount are sent to Paystack to initialise a payment
                    transaction.
                  </li>
                  <li>
                    <strong>To improve our service</strong> — anonymised usage
                    data helps us understand how the app is being used and where
                    we can do better.
                  </li>
                  <li>
                    <strong>To comply with legal obligations</strong> — we may
                    retain records of transactions as required by Nigerian law.
                  </li>
                </ul>
                <p>
                  We will never use your data for advertising purposes, and we
                  will never sell or rent your personal information to any third
                  party.
                </p>
              </section>

              {/* ── THIRD PARTIES ── */}
              <section id="third-parties" className="section-anchor">
                <h2>Third Parties</h2>
                <p>
                  We work with a small number of trusted third-party services to
                  operate Swyft. Each is listed below with details of what data
                  is shared and why.
                </p>

                {[
                  {
                    name: "Paystack",
                    purpose: "Payment processing",
                    data: "Your email address and order amount are sent to Paystack when you initiate a payment. Paystack handles all card processing and PCI compliance. Swyft never receives or stores your card number, CVV, or bank details.",
                    link: "https://paystack.com/privacy",
                    linkLabel: "Paystack Privacy Policy",
                  },
                  {
                    name: "Expo / Firebase (Push Notifications)",
                    purpose: "Order status notifications",
                    data: "Your device push token is registered with Expo's push notification service and/or Firebase Cloud Messaging (FCM) to deliver real-time order updates to your device. No personally identifiable information beyond the token is shared.",
                    link: "https://firebase.google.com/support/privacy",
                    linkLabel: "Firebase Privacy Policy",
                  },
                  {
                    name: "Hosting & Infrastructure",
                    purpose: "App and API hosting",
                    data: "Our backend runs on servers in the United Kingdom. All data in transit is encrypted via HTTPS/TLS. Data at rest is stored in a private database not accessible to the public.",
                    link: null,
                    linkLabel: null,
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "20px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <strong
                        style={{ color: "#0f172a", fontSize: "0.9375rem" }}
                      >
                        {t.name}
                      </strong>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          background: "#f1f5f9",
                          color: "#64748b",
                          padding: "2px 10px",
                          borderRadius: "999px",
                          whiteSpace: "nowrap",
                          marginLeft: "12px",
                        }}
                      >
                        {t.purpose}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: "0 0 8px",
                        fontSize: "0.875rem",
                        color: "#475569",
                        lineHeight: "1.65",
                      }}
                    >
                      {t.data}
                    </p>
                    {t.link && (
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "0.8125rem", color: "#2563eb" }}
                      >
                        {t.linkLabel} ↗
                      </a>
                    )}
                  </div>
                ))}

                <p>
                  We do not use Google Analytics, Facebook Pixel, or any
                  advertising tracking tools.
                </p>
              </section>

              {/* ── RETENTION ── */}
              <section id="retention" className="section-anchor">
                <h2>Data Retention & Deletion</h2>

                <h3>How long we keep your data</h3>
                <ul>
                  <li>
                    <strong>Account data</strong> — retained for as long as your
                    account is active.
                  </li>
                  <li>
                    <strong>Order history</strong> — retained for 2 years after
                    the order was placed, in line with standard business
                    record-keeping requirements.
                  </li>
                  <li>
                    <strong>Push tokens</strong> — retained until you uninstall
                    the app, revoke notification permissions, or delete your
                    account.
                  </li>
                  <li>
                    <strong>Payment records</strong> — retained for 5 years as
                    required by Nigerian financial regulations.
                  </li>
                </ul>

                <h3>Deleting your account</h3>
                <p>
                  You can request deletion of your account and personal data at
                  any time by emailing{" "}
                  <a href="mailto:support@bookswyft.com">
                    support@bookswyft.com
                  </a>
                  . We will process your request within 14 days. Note that some
                  records (such as completed transaction records) may be
                  retained for the legally required period even after account
                  deletion.
                </p>
              </section>

              {/* ── YOUR RIGHTS ── */}
              <section id="your-rights" className="section-anchor">
                <h2>Your Rights</h2>
                <p>
                  Under applicable data protection law, you have the following
                  rights regarding your personal data:
                </p>
                <ul>
                  <li>
                    <strong>Right to access</strong> — you can request a copy of
                    the personal data we hold about you.
                  </li>
                  <li>
                    <strong>Right to rectification</strong> — you can ask us to
                    correct inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong>Right to erasure</strong> — you can request that we
                    delete your personal data, subject to any legal retention
                    obligations.
                  </li>
                  <li>
                    <strong>Right to restrict processing</strong> — you can ask
                    us to limit how we use your data in certain circumstances.
                  </li>
                  <li>
                    <strong>Right to data portability</strong> — you can request
                    your data in a structured, machine-readable format.
                  </li>
                  <li>
                    <strong>Right to object</strong> — you can object to us
                    processing your data for certain purposes.
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, contact us at{" "}
                  <a href="mailto:support@bookswyft.com">
                    support@bookswyft.com
                  </a>
                  . We will respond within 30 days.
                </p>

                <div
                  style={{
                    background: "#fffbeb",
                    border: "1px solid #fde68a",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    margin: "1.5rem 0",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#92400e",
                      fontSize: "0.875rem",
                      lineHeight: "1.65",
                    }}
                  >
                    <strong style={{ color: "#92400e" }}>
                      Nigeria Data Protection Act (NDPA):
                    </strong>{" "}
                    Swyft is committed to compliance with the Nigeria Data
                    Protection Act 2023. If you believe your rights have been
                    violated, you may also lodge a complaint with the Nigeria
                    Data Protection Commission (NDPC) at{" "}
                    <a href="https://ndpc.gov.ng" style={{ color: "#92400e" }}>
                      ndpc.gov.ng
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* ── CONTACT ── */}
              <section id="contact" className="section-anchor">
                <h2>Contact & Complaints</h2>
                <p>
                  If you have any questions about this Privacy Policy, want to
                  exercise your rights, or have a complaint about how we've
                  handled your data, please contact us:
                </p>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "24px",
                    margin: "1.5rem 0",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    Swyft Mobility
                  </p>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: "0.9375rem",
                      color: "#475569",
                    }}
                  >
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: "0.9375rem",
                      color: "#475569",
                    }}
                  >
                    Email:{" "}
                    <a href="mailto:support@bookswyft.com">
                      support@bookswyft.com
                    </a>
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9375rem",
                      color: "#475569",
                    }}
                  >
                    Website: <a href="https://bookswyft.com">bookswyft.com</a>
                  </p>
                </div>

                <p>
                  We take all privacy complaints seriously and will respond
                  within 30 days. If you're not satisfied with our response, you
                  have the right to escalate to the Nigeria Data Protection
                  Commission.
                </p>

                <p
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid #f1f5f9",
                    fontSize: "0.8125rem",
                    color: "#94a3b8",
                  }}
                >
                  This policy was last updated in{" "}
                  <strong style={{ color: "#94a3b8" }}>March 2026</strong>. We
                  may update this policy from time to time. If we make
                  significant changes, we will notify you via the app or email
                  before the changes take effect.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #f1f5f9",
          background: "#f8fafc",
          padding: "32px 0",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-xs">
              ⚡
            </div>
            <span className="font-syne font-black text-slate-900">Swyft</span>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 Swyft Mobility. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              className="text-sm text-blue-600 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
