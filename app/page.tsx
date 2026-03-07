"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "⚡",
    title: "Instant Booking",
    desc: "Book a same-day delivery across Port Harcourt in under 60 seconds. Pick your pickup window, enter your route, and you're done.",
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    icon: "📍",
    title: "Real-Time Tracking",
    desc: "From pickup to doorstep — follow your package live at every step. No more wondering if it's arrived.",
    color: "text-violet-500",
    bg: "bg-violet-50 border-violet-100",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    desc: "Pay safely with Paystack. Your card details are encrypted and protected. What you see is what you pay.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: "🕐",
    title: "Flexible Pickup Windows",
    desc: "Choose from three daily pickup slots — morning, afternoon, or evening. We work around your schedule.",
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-100",
  },
  {
    icon: "🚲",
    title: "Electric Bicycle Delivery",
    desc: "Every Swyft delivery is made on a clean electric bicycle — zero emissions, zero noise, zero compromise on speed.",
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
  },
  {
    icon: "🔔",
    title: "Live Notifications",
    desc: "Get instant push alerts every time your order status changes. You'll always know exactly what's happening.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 border-cyan-100",
  },
];

const steps = [
  {
    num: "01",
    title: "Book Your Delivery",
    desc: "Open the Swyft app, enter pickup and drop-off addresses, and choose a time window that works for you.",
  },
  {
    num: "02",
    title: "Pay Securely",
    desc: "Complete payment through Paystack. Your order is confirmed instantly — no cash, no stress.",
  },
  {
    num: "03",
    title: "We Pick It Up",
    desc: "A verified Swyft rider arrives at your door on an electric bicycle within your chosen time window.",
  },
  {
    num: "04",
    title: "Delivered Fast",
    desc: "Your package is delivered safely and you receive live notifications at every step of the journey.",
  },
];

const stats = [
  { value: "2,400+", label: "Deliveries Completed" },
  { value: "98%", label: "On-Time Rate" },
  { value: "4.9★", label: "Average Rating" },
  { value: "0g", label: "CO₂ Per Delivery" },
];

const areas = [
  "Choba",
  "GRA Phase 1",
  "GRA Phase 2",
  "Rumuola",
  "D-Line",
  "Peter Odili",
  "Woji",
  "Rumuokoro",
  "Eleme",
  "Trans Amadi",
  "Rumuigbo",
  "Ozuoba",
];

const smePerks = [
  {
    icon: "💰",
    title: "Flat, affordable rates",
    desc: "No surge pricing. No hidden fees. Fixed rates per route so you can plan your business budget with confidence.",
  },
  {
    icon: "📊",
    title: "Business dashboard",
    desc: "Track all your deliveries in one place. Perfect for SMEs managing multiple orders daily.",
  },
  {
    icon: "🤝",
    title: "Bulk delivery deals",
    desc: "Running a small business? Ask about our weekly bulk delivery packages designed for startups and traders.",
  },
];

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div
      className="bg-slate-50 text-slate-900 overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="noise" />

      {/* Cursor glow */}
      <div
        className="hidden lg:block fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle,rgba(34,197,94,.06) 0%,transparent 70%)",
          transform: "translate(-50%,-50%)",
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-300 ${scrollY > 20 ? "bg-slate-50/92 backdrop-blur-xl border-b border-slate-200/80" : ""}`}
      >
        <div className="flex items-center gap-2.5">
          <Image
            src={"/logo_name.png"}
            height={150}
            width={150}
            alt="Swyft Logo"
          />
        </div>
        <div className="hidden md:flex items-center gap-9">
          {[
            ["Features", "#features"],
            ["How it works", "#how-it-works"],
            ["For SMEs", "#sme"],
            ["Coverage", "#coverage"],
            ["Download", "#download"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="#download"
          className="bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-slate-900/20"
        >
          Get the App
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 hero-grid" />

        {/* Green blob */}
        <div
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(circle,rgba(34,197,94,.1) 0%,transparent 70%)",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div
          className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(circle,rgba(16,185,129,.08) 0%,transparent 70%)",
          }}
        />

        {/* Floating leaves */}
        <div
          className="leaf-drift absolute top-[20%] right-[20%] text-4xl hidden lg:block"
          style={{ animationDelay: "0s" }}
        >
          🌿
        </div>
        <div
          className="leaf-drift absolute top-[60%] right-[12%] text-2xl hidden lg:block"
          style={{ animationDelay: "1.5s" }}
        >
          🍃
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="anim-fade inline-flex items-center gap-2 bg-slate-900 rounded-full px-4 py-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block pulse-green" />
              <span className="text-slate-300 text-xs font-medium">
                By <span className="text-blue-400 font-bold">reality3dhub</span>{" "}
                — Robotics from Port Harcourt 🤖
              </span>
            </div>

            <div className="anim-fade inline-flex items-center gap-2 eco-badge rounded-full px-4 py-1.5 mb-8 ml-2">
              <span className="text-lg">⚡</span>
              <span className="text-blue-600 text-xs font-semibold">
                100% Electric. Zero emissions across PH.
              </span>
            </div>

            <h1 className="font-clash text-5xl md:text-6xl lg:text-[68px] leading-[1.04] tracking-tight mb-6">
              <span className="anim-slide-1 block text-slate-900">
                Clean delivery
              </span>
              <span className="anim-slide-2 block gradient-text">
                your business
              </span>
              <span className="anim-slide-3 block text-slate-900">
                can afford.
              </span>
            </h1>

            <p className="anim-slide-3 text-slate-500 text-lg leading-relaxed mb-4 max-w-lg">
              Swyft is Port Harcourt's electric bicycle delivery service built
              for{" "}
              <strong className="text-slate-700 font-semibold">
                SMEs and startups
              </strong>
              . Flat rates, same-day delivery, zero emissions — helping your
              business grow without the logistics headache.
            </p>

            <div className="anim-slide-3 flex flex-wrap gap-2 mb-8">
              {[
                "🌿 Eco-friendly",
                "💰 Flat-rate pricing",
                "⚡ Same-day delivery",
                "📦 Any package size",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="anim-slide-4 flex flex-wrap gap-3 mb-14">
              <a
                href="#download"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-700 text-white px-5 py-3.5 rounded-2xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/20"
              >
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-[10px] text-white/60 font-normal leading-none mb-0.5">
                    Download on
                  </p>
                  <p className="text-sm font-bold leading-none">Android App</p>
                </div>
              </a>
              <a
                href="#sme"
                className="inline-flex items-center gap-2 text-slate-700 font-medium px-5 py-3.5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all text-sm"
              >
                For your business ↓
              </a>
            </div>

            {/* Mini stats */}
            <div className="anim-fade flex flex-wrap gap-8">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-clash text-3xl text-slate-900 leading-none">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-xs font-medium mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone */}
          <div className="relative justify-center items-center hidden lg:flex">
            <div
              className="absolute w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle,rgba(34,197,94,.15) 0%,transparent 70%)",
              }}
            />

            <div
              className="phone-float relative z-10 w-[270px] bg-slate-900 rounded-[48px] p-3 shadow-2xl shadow-slate-900/40"
              style={{
                boxShadow:
                  "0 48px 96px rgba(15,23,42,.3),0 0 0 1px rgba(255,255,255,.08)",
              }}
            >
              <div className="w-24 h-6 bg-slate-900 rounded-full mx-auto mb-2" />
              <div className="bg-slate-50 rounded-[38px] h-[520px] p-5 overflow-hidden">
                <div className="mb-5">
                  <p className="text-slate-400 text-xs mb-1">Good morning 👋</p>
                  <p className="text-slate-900 text-lg font-bold">
                    Track your order
                  </p>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 mb-3 text-white">
                  <p className="text-[10px] text-white/60 mb-1">ORDER ID</p>
                  <p className="font-bold text-base mb-3">ORDAB12X</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
                      🚲 On the way!
                    </span>
                    <span className="font-black text-lg">₦800</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 mb-3 flex items-center gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="text-emerald-800 text-xs font-bold">
                      You saved 0.4kg CO₂
                    </p>
                    <p className="text-emerald-600 text-[10px]">
                      vs a petrol motorbike delivery
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
                  <p className="text-slate-700 text-xs font-bold mb-3">
                    Progress
                  </p>
                  <div className="flex items-center gap-1">
                    {[
                      { i: "✓", d: true },
                      { i: "✓", d: true },
                      { i: "→", a: true },
                      { i: "○" },
                      { i: "○" },
                    ].map((s, idx, arr) => (
                      <div
                        key={idx}
                        className="flex items-center"
                        style={{ flex: idx < arr.length - 1 ? 1 : undefined }}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${s.d ? "bg-blue-500 text-white" : s.a ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`}
                        >
                          {s.i}
                        </div>
                        {idx < arr.length - 1 && (
                          <div
                            className={`flex-1 h-0.5 mx-0.5 ${idx < 2 ? "bg-blue-500" : "bg-slate-100"}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div className="w-px flex-1 bg-slate-200 my-1" />
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px]">From</p>
                      <p className="text-slate-900 text-xs font-semibold mb-3">
                        Choba Junction
                      </p>
                      <p className="text-slate-400 text-[10px]">To</p>
                      <p className="text-slate-900 text-xs font-semibold">
                        GRA Phase 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="badge-float-a absolute top-[15%] -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2 border border-slate-100">
              <span className="text-xl">🚲</span>
              <div>
                <p className="text-slate-900 text-xs font-bold">
                  Electric rider nearby
                </p>
                <p className="text-slate-400 text-[10px]">3 mins away</p>
              </div>
            </div>
            <div className="badge-float-b absolute bottom-[20%] -left-6 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2 border border-slate-100">
              <span className="text-xl">🌿</span>
              <div>
                <p className="text-slate-900 text-xs font-bold">
                  Zero emissions
                </p>
                <p className="text-slate-400 text-[10px]">
                  100% electric fleet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-slate-700 py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-clash text-4xl text-white mb-2">
                {s.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOR SMEs ── */}
      <section
        id="sme"
        className="py-24 px-6 md:px-12 bg-white border-y border-slate-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-600 text-xs font-semibold">
                🏪 Made for small businesses
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
              Logistics built for
              <br />
              <span className="gradient-text">SMEs & startups</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
              You focus on building your business. We handle getting your
              products to your customers — affordably and reliably.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {smePerks.map((p) => (
              <div
                key={p.title}
                className="sme-card bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 cursor-default"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-2 border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-clash text-2xl text-slate-900 mb-1">
                Are you a trader, courier, or founder in PH?
              </p>
              <p className="text-blue-600 text-sm">
                Swyft was built with you in mind. Affordable delivery that
                scales with your orders.
              </p>
            </div>
            <a
              href="#download"
              className="flex-shrink-0 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5 shadow-md shadow-slate-900/20 text-sm whitespace-nowrap"
            >
              Start delivering today →
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/8 border border-blue-500/15 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-600 text-xs font-semibold">
                Everything you need
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
              Built for speed.
              <br />
              Powered by electricity.
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
              Every feature is crafted to make your delivery experience seamless
              — and clean.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className={`feature-card bg-white rounded-3xl p-8 border-2 ${f.bg} cursor-default`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${f.bg} border flex items-center justify-center text-2xl mb-5`}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="py-24 px-6 md:px-12 bg-white border-y border-slate-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-500/8 border border-emerald-500/15 rounded-full px-4 py-1.5 mb-5">
              <span className="text-emerald-700 text-xs font-semibold">
                Simple process
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Four steps to your
              <br />
              delivery being done
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div
                key={s.num}
                className="step-card relative bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden cursor-default"
              >
                <div className="font-clash text-7xl text-blue-100 leading-none absolute -top-3 -left-2 select-none">
                  {s.num}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section id="coverage" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-500/8 border border-blue-500/15 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-600 text-xs font-semibold">
                Where we deliver
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
              All across Port Harcourt
            </h2>
            <p className="text-slate-500 text-base max-w-sm mx-auto">
              12+ areas covered with flat-rate pricing per route. No hidden
              charges.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white border-2 border-slate-100 hover:border-blue-200 hover:bg-blue-50 rounded-2xl py-4 px-3 text-center text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all cursor-default"
              >
                📍 {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ── */}
      <section id="download" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-slate-900 rounded-[40px] px-8 py-16 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle,rgba(34,197,94,.18) 0%,transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle,rgba(16,185,129,.12) 0%,transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle,white 1px,transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10">
              <h2 className="font-clash text-4xl md:text-5xl text-white tracking-tight leading-tight mb-5">
                Start delivering
                <br />
                smarter today
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-2 max-w-sm">
                Download Swyft and join hundreds of Port Harcourt businesses
                enjoying clean, affordable, same-day delivery.
              </p>
              <p className="text-blue-400 text-xs mb-8 font-medium">
                Available on Android — iOS coming soon.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white px-5 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5"
                >
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="text-[10px] text-white/50 font-normal">
                      Get it on
                    </p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white px-5 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5"
                >
                  <span className="text-2xl">🍎</span>
                  <div>
                    <p className="text-[10px] text-white/50 font-normal">
                      Coming soon on
                    </p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative z-10">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                {[
                  { icon: "🚲", text: "100% electric bicycle fleet" },
                  { icon: "🌿", text: "Zero emissions per delivery" },
                  { icon: "💰", text: "Flat, affordable rates for SMEs" },
                  { icon: "📍", text: "Live tracking across PH" },
                  { icon: "🔔", text: "Instant push notifications" },
                  { icon: "💳", text: "Secure Paystack payments" },
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 py-3.5 ${i < arr.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-white/80 text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 border-t border-white/5 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-base">
                  🚲
                </div>
                <span className="font-clash text-xl text-white">Swyft</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-4">
                Fast, clean delivery across Port Harcourt. We move what matters
                — on electric.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                <span className="text-base">🤖</span>
                <div>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest font-semibold">
                    Created by
                  </p>
                  <p className="text-blue-400 text-xs font-bold">
                    reality3dhub
                  </p>
                </div>
              </div>
            </div>
            {[
              {
                heading: "Product",
                links: ["Features", "How it works", "For SMEs", "Download"],
              },
              {
                heading: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookies"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                  {col.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
            <p className="text-slate-600 text-sm">
              © 2026 Swyft by reality3dhub. All rights reserved.
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "ig", "fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-500 border border-white/5 rounded-xl flex items-center justify-center text-slate-500 hover:text-white text-xs font-bold transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
