"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "use-of-platform", label: "Use of the Platform" },
  { id: "delivery-requests", label: "Delivery Requests" },
  { id: "refund-policy", label: "Refund Policy" },
  { id: "wait-time", label: "Wait Time Policy" },
  { id: "item-acceptance", label: "Item Acceptance" },
  { id: "packaging", label: "Packaging" },
  { id: "liability", label: "Liability" },
  { id: "pricing", label: "Pricing & Payments" },
  { id: "privacy", label: "Data & Privacy" },
  { id: "account", label: "Account Suspension" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("use-of-platform");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
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
        .prose ol { margin: 0.75rem 0 1rem 1.25rem; }
        .prose ol li { font-size: 0.9375rem; line-height: 1.75; color: #475569; margin-bottom: 0.375rem; list-style: decimal; }
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
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                Terms &amp; Conditions
              </div>
              <h1 className="font-syne text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                Terms of Service
              </h1>
              <p className="text-slate-500 text-base leading-relaxed">
                These Terms and Conditions govern your use of the Swyft Mobility
                platform, mobile application, and delivery services. By using
                Swyft, you agree to be bound by these terms.
              </p>
            </div>

            <div className="prose">
              {/* ── 1. USE OF PLATFORM ── */}
              <section id="use-of-platform" className="section-anchor">
                <h2>1. Use of the Platform</h2>
                <p>
                  Swyft Mobility provides a technology platform that connects
                  customers with independent delivery pilots and riders for
                  last-mile logistics services.
                </p>
                <p>By using the platform you agree to:</p>
                <ul>
                  <li>
                    Provide accurate and complete information when creating an
                    account.
                  </li>
                  <li>Use the service only for lawful purposes.</li>
                  <li>
                    Ensure that items submitted for delivery comply with all
                    applicable laws and regulations.
                  </li>
                  <li>
                    Accept that delivery timelines may vary due to traffic,
                    weather, or operational constraints.
                  </li>
                </ul>
                <p>
                  Swyft Mobility reserves the right to suspend or terminate
                  accounts that violate these terms.
                </p>
              </section>

              {/* ── 2. DELIVERY REQUESTS ── */}
              <section id="delivery-requests" className="section-anchor">
                <h2>2. Delivery Requests</h2>
                <p>When a user places a delivery request:</p>
                <ol>
                  <li>The request is received by the Swyft Mobility system.</li>
                  <li>
                    Delivery details are verified by our administrative team.
                  </li>
                  <li>The request is assigned to a rider/pilot.</li>
                  <li>
                    The rider may contact the sender or receiver for
                    clarification before completing the delivery.
                  </li>
                </ol>
                <p>
                  Customers are responsible for ensuring that delivery details —
                  including pickup address, recipient address, phone numbers,
                  and item description — are accurate.
                </p>
                <div
                  style={{
                    background: "#fff7ed",
                    border: "1px solid #fed7aa",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    margin: "1.5rem 0",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#9a3412",
                      fontSize: "0.875rem",
                      lineHeight: "1.65",
                    }}
                  >
                    <strong style={{ color: "#9a3412" }}>Please note:</strong>{" "}
                    Incorrect information may lead to delays, additional
                    charges, or cancellation of your delivery without a refund.
                  </p>
                </div>
              </section>

              {/* ── 3. REFUND POLICY ── */}
              <section id="refund-policy" className="section-anchor">
                <h2>3. 7-Day Refund Policy</h2>
                <p>
                  If a customer places a delivery order and later decides not to
                  proceed after payment has been made, a refund may be requested
                  under the following conditions:
                </p>
                <ul>
                  <li>
                    Refund requests must be made through the Swyft Mobility
                    platform or official support channels.
                  </li>
                  <li>
                    Approved refunds will be processed within{" "}
                    <strong>seven (7) working business days</strong>.
                  </li>
                  <li>
                    Refunds will be issued using the original payment method
                    where possible.
                  </li>
                </ul>
                <p>
                  Swyft Mobility reserves the right to deduct any operational
                  costs incurred prior to cancellation where applicable.
                </p>
              </section>

              {/* ── 4. WAIT TIME ── */}
              <section id="wait-time" className="section-anchor">
                <h2>4. Wait Time Policy</h2>
                <p>
                  To ensure efficient operations for all users, Swyft Mobility
                  enforces the following wait-time policy.
                </p>

                <h3>At the Pickup Location</h3>
                <ul>
                  <li>
                    Riders will wait a maximum of <strong>10 minutes</strong> at
                    the pickup location.
                  </li>
                  <li>
                    If the sender is unavailable within this period, the
                    delivery will be cancelled.
                  </li>
                  <li>
                    In this situation, the customer will receive a{" "}
                    <strong>50% refund</strong> of the delivery fee.
                  </li>
                </ul>

                <h3>At the Delivery Location</h3>
                <ul>
                  <li>
                    Riders will wait a maximum of <strong>10 minutes</strong> at
                    the delivery destination.
                  </li>
                  <li>
                    If the recipient is unavailable within this time, the
                    delivery will not be completed.
                  </li>
                  <li>
                    The item will be transported to a Swyft Mobility collection
                    centre.
                  </li>
                  <li>
                    The sender must arrange and pay for a new delivery request
                    for re-delivery.
                  </li>
                </ul>
              </section>

              {/* ── 5. ITEM ACCEPTANCE ── */}
              <section id="item-acceptance" className="section-anchor">
                <h2>5. Item Acceptance Policy</h2>
                <p>
                  Customers are responsible for the nature and legality of items
                  submitted for delivery. Swyft Mobility does not accept
                  responsibility for items that violate laws or regulations.
                </p>
                <p>
                  The following items are <strong>strictly prohibited:</strong>
                </p>
                <ul>
                  <li>Illegal substances or narcotics</li>
                  <li>Weapons, firearms, or explosives</li>
                  <li>Hazardous materials</li>
                  <li>Counterfeit goods</li>
                  <li>Stolen property</li>
                  <li>Perishable goods without proper packaging</li>
                  <li>Any item prohibited by law</li>
                </ul>
                <p>
                  Swyft Mobility reserves the right to inspect packages when
                  necessary and refuse transportation of any item considered
                  unsafe or unlawful.
                </p>

                <div
                  style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    margin: "1.5rem 0",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px",
                      fontWeight: 700,
                      color: "#991b1b",
                      fontSize: "0.875rem",
                    }}
                  >
                    If prohibited items are discovered:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                    <li
                      style={{
                        fontSize: "0.875rem",
                        color: "#991b1b",
                        marginBottom: "4px",
                      }}
                    >
                      The delivery will be cancelled immediately.
                    </li>
                    <li
                      style={{
                        fontSize: "0.875rem",
                        color: "#991b1b",
                        marginBottom: "4px",
                      }}
                    >
                      Authorities may be notified where required by law.
                    </li>
                    <li style={{ fontSize: "0.875rem", color: "#991b1b" }}>
                      The customer account may be permanently suspended.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── 6. PACKAGING ── */}
              <section id="packaging" className="section-anchor">
                <h2>6. Packaging Responsibility</h2>
                <p>
                  Customers must ensure that all items are securely packaged
                  before pickup. Swyft Mobility shall not be responsible for:
                </p>
                <ul>
                  <li>Damage caused by poor or inadequate packaging</li>
                  <li>Leakage from liquid items</li>
                  <li>Fragile items not properly labelled or protected</li>
                </ul>
                <p>
                  For fragile goods, customers must clearly indicate that the
                  item is <strong>"FRAGILE"</strong> when placing their order.
                </p>
              </section>

              {/* ── 7. LIABILITY ── */}
              <section id="liability" className="section-anchor">
                <h2>7. Liability Limitations</h2>
                <p>
                  While Swyft Mobility takes reasonable care in handling
                  deliveries, the company is not liable for:
                </p>
                <ul>
                  <li>Indirect or consequential losses</li>
                  <li>Loss of profit or business interruption</li>
                  <li>
                    Delays caused by circumstances beyond our control (traffic,
                    weather, accidents, security incidents)
                  </li>
                </ul>
                <p>
                  Where liability is established, compensation shall not exceed
                  the declared value of the item or the delivery fee paid,
                  whichever is lower.
                </p>
              </section>

              {/* ── 8. PRICING ── */}
              <section id="pricing" className="section-anchor">
                <h2>8. Pricing and Payments</h2>
                <p>Delivery charges are determined based on:</p>
                <ul>
                  <li>Distance between pickup and drop-off locations</li>
                  <li>Delivery urgency</li>
                  <li>Operational costs</li>
                  <li>Demand at the time of request</li>
                </ul>
                <p>
                  All payments must be made through approved payment methods on
                  the Swyft Mobility platform unless otherwise stated. Prices
                  may change without prior notice.
                </p>
              </section>

              {/* ── 9. PRIVACY ── */}
              <section id="privacy" className="section-anchor">
                <h2>9. Data and Privacy</h2>
                <p>
                  By using the Swyft Mobility platform, you agree that we may
                  collect and process certain personal information including
                  your name, phone number, email address, delivery history, and
                  device and usage data.
                </p>
                <p>This data may be used for:</p>
                <ul>
                  <li>Processing and fulfilling your delivery requests</li>
                  <li>Improving our logistics services</li>
                  <li>Customer support and service optimisation</li>
                  <li>Business analytics and operational improvements</li>
                </ul>
                <p>
                  We do not sell personal data to third parties. We may share
                  necessary information with delivery riders, payment providers,
                  and regulatory authorities when required by law.
                </p>
                <p>
                  For full details on how we handle your data, please read our{" "}
                  <a href="/privacy-policy">Privacy Policy</a>.
                </p>
              </section>

              {/* ── 10. ACCOUNT ── */}
              <section id="account" className="section-anchor">
                <h2>10. Account Suspension or Termination</h2>
                <p>Swyft Mobility may suspend or terminate accounts that:</p>
                <ul>
                  <li>Provide false or misleading information</li>
                  <li>Attempt fraud or payment abuse</li>
                  <li>Submit prohibited items for delivery</li>
                  <li>Harass riders, staff, or other users</li>
                  <li>Violate any part of these Terms and Conditions</li>
                </ul>
              </section>

              {/* ── 11. CHANGES ── */}
              <section id="changes" className="section-anchor">
                <h2>11. Changes to Terms</h2>
                <p>
                  Swyft Mobility reserves the right to update these Terms and
                  Conditions at any time. Users will be notified of significant
                  changes through the app or via email.
                </p>
                <p>
                  Continued use of the platform after changes have been
                  published constitutes acceptance of the updated terms.
                </p>
              </section>

              {/* ── 12. CONTACT ── */}
              <section id="contact" className="section-anchor">
                <h2>12. Contact Information</h2>
                <p>
                  For support, complaints, or enquiries regarding these Terms
                  and Conditions, please contact us:
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
                    Swyft Mobility Support
                  </p>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: "0.9375rem",
                      color: "#475569",
                    }}
                  >
                    Email:{" "}
                    <a href="mailto:swyftmobility25@gmail.com">
                      swyftmobility25@gmail.com
                    </a>
                  </p>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: "0.9375rem",
                      color: "#475569",
                    }}
                  >
                    Phone: <a href="tel:+2347042566385">+234 704 256 6385</a>
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

                <p
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid #f1f5f9",
                    fontSize: "0.8125rem",
                    color: "#94a3b8",
                  }}
                >
                  These Terms and Conditions were last updated in{" "}
                  <strong style={{ color: "#94a3b8" }}>March 2026</strong>.
                  Swyft Mobility reserves the right to amend these terms at any
                  time. Continued use of the platform constitutes acceptance of
                  any revised terms.
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
            ©️ 2026 Swyft Mobility. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              className="text-sm text-blue-600 font-medium"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
