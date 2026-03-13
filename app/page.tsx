"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "⚡",
    title: "Instant Booking",
    desc: "Book a same-day delivery across Port Harcourt in under 60 seconds. Pick your pickup window, enter your route, and you're done.",
  },
  {
    icon: "📍",
    title: "Real-Time Tracking",
    desc: "From pickup to doorstep — follow your package live at every step. No more wondering if it's arrived.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    desc: "Pay safely with Paystack. Your card details are encrypted and protected. What you see is what you pay.",
  },
  {
    icon: "🕐",
    title: "Flexible Pickup Windows",
    desc: "Choose from three daily pickup slots — morning, afternoon, or evening. We work around your schedule.",
  },
  {
    icon: "🚲",
    title: "Electric Bicycle Delivery",
    desc: "Every Swyft delivery is made on a clean electric bicycle — zero emissions, zero noise, zero compromise on speed.",
  },
  {
    icon: "🔔",
    title: "Live Notifications",
    desc: "Get instant push alerts every time your order status changes. You'll always know exactly what's happening.",
  },
];

const steps = [
  {
    num: "01",
    icon: "📱",
    title: "Book a Delivery",
    desc: "Request a pickup through the Swyft app. Enter pickup and drop-off addresses and choose a time window.",
  },
  {
    num: "02",
    icon: "🚲",
    title: "Rider Pickup",
    desc: "A nearby Swyft pilot arrives quickly on an electric bicycle to collect your package.",
  },
  {
    num: "03",
    icon: "📦",
    title: "Fast Delivery",
    desc: "Your package is delivered safely and efficiently with live updates at every step.",
  },
];

const stats = [
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
    const onMouse = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div className="bg-[#0d1117] text-[#e6edf3] font-sans overflow-x-hidden">
      {/* Cursor glow */}
      <div
        className="hidden lg:block fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[68px] transition-all duration-300 ${
          scrollY > 20
            ? "bg-[#0d1117]/95 backdrop-blur-xl border-b border-blue-500/20"
            : ""
        }`}
      >
        <Image src="/logo_name.png" height={120} width={120} alt="Swyft Logo" />
        <div className="hidden md:flex items-center gap-9">
          {[
            ["Features", "#features"],
            ["How it works", "#how-it-works"],
            ["For SMEs", "#sme"],
            ["Coverage", "#coverage"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="text-sm font-medium text-[#8b949e] hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/Emmybrown775/swyft-releases/releases/download/v1.0.0/swyft-mobility.apk"
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 border border-blue-500/40 shadow-lg shadow-blue-900/30"
        >
          Download App
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 z-0 opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
        {/* Glow blobs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />
        <div
          className="absolute bottom-[5%] left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1c2333] border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse" />
              <span className="text-[#8b949e] text-xs font-medium">
                By <span className="text-blue-400 font-bold">reality3dhub</span>{" "}
                — Port Harcourt 🤖
              </span>
            </div>

            <h1 className="font-clash text-5xl md:text-6xl lg:text-[64px] leading-[1.08] tracking-tight mb-6 text-white">
              Building Africa&apos;s
              <br />
              <span className="text-blue-400">fastest growing</span>
              <br />
              electric delivery network.
            </h1>

            <p className="text-[#8b949e] text-lg leading-relaxed mb-4 max-w-lg">
              Swyft is Port Harcourt&apos;s electric bicycle delivery service
              built for{" "}
              <strong className="text-white font-semibold">
                SMEs and startups
              </strong>
              . Flat rates, same-day delivery, zero emissions.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "🌿 Eco-friendly",
                "💰 Flat-rate pricing",
                "⚡ Same-day delivery",
                "📦 Any package size",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#1c2333] border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="https://github.com/Emmybrown775/swyft-releases/releases/download/v1.0.0/swyft-mobility.apk"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/40 border border-blue-500/40"
              >
                <span className="text-xl">🤖</span>
                <div>
                  <p className="text-[10px] text-white/60 font-normal leading-none mb-0.5">
                    Download on
                  </p>
                  <p className="text-sm font-bold leading-none">Android App</p>
                </div>
              </a>
              <a
                href="#sme"
                className="inline-flex items-center gap-2 text-white font-medium px-5 py-3.5 rounded-xl border border-blue-500/20 hover:border-blue-400 hover:bg-blue-500/10 transition-all text-sm"
              >
                For your business ↓
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-8">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-clash text-3xl text-white leading-none">
                    {s.value}
                  </div>
                  <div className="text-[#8b949e] text-xs font-medium mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative justify-center items-center hidden lg:flex">
            <div
              className="absolute w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative z-10 w-[255px] bg-[#161b22] rounded-[44px] p-3 border border-white/[0.08] phone-float"
              style={{
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                animation: "floatPhone 4s ease-in-out infinite",
              }}
            >
              <div className="w-20 h-5 bg-[#0d1117] rounded-full mx-auto mb-2" />
              <div className="bg-[#1c2333] rounded-[34px] h-[490px] p-5 overflow-hidden">
                <div className="mb-4">
                  <p className="text-[#8b949e] text-xs mb-1">Good morning 👋</p>
                  <p className="text-white text-base font-bold">
                    Track your order
                  </p>
                </div>
                {/* Order card */}
                <div className="bg-blue-600 rounded-2xl p-4 mb-3 text-white">
                  <p className="text-[10px] text-white/60 mb-1">ORDER ID</p>
                  <p className="font-bold text-base mb-3">ORDAB12X</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
                      🚲 On the way!
                    </span>
                    <span className="font-black text-lg">₦800</span>
                  </div>
                </div>
                {/* Eco */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3 mb-3 flex items-center gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="text-emerald-300 text-xs font-bold">
                      You saved 0.4kg CO₂
                    </p>
                    <p className="text-emerald-400 text-[10px]">
                      vs a petrol motorbike delivery
                    </p>
                  </div>
                </div>
                {/* Route */}
                <div className="bg-[#21262d] rounded-2xl p-4">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div className="w-px flex-1 bg-[#484f58] my-1" />
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                    </div>
                    <div>
                      <p className="text-[#8b949e] text-[10px]">From</p>
                      <p className="text-white text-xs font-semibold mb-3">
                        Choba Junction
                      </p>
                      <p className="text-[#8b949e] text-[10px]">To</p>
                      <p className="text-white text-xs font-semibold">
                        GRA Phase 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="badge-float-a absolute top-[12%] -right-4 bg-[#161b22] border border-blue-500/20 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
              style={{ animation: "floatBadge 3s ease-in-out 0.5s infinite" }}
            >
              <span className="text-xl">🚲</span>
              <div>
                <p className="text-white text-xs font-bold">
                  Electric rider nearby
                </p>
                <p className="text-[#8b949e] text-[10px]">3 mins away</p>
              </div>
            </div>
            <div
              className="badge-float-b absolute bottom-[18%] -left-6 bg-[#161b22] border border-blue-500/20 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
              style={{ animation: "floatBadge 3.5s ease-in-out 1s infinite" }}
            >
              <span className="text-xl">🌿</span>
              <div>
                <p className="text-white text-xs font-bold">Zero emissions</p>
                <p className="text-[#8b949e] text-[10px]">
                  100% electric fleet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#161b22] border-t border-b border-blue-500/20 py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-clash text-4xl text-blue-400 mb-2">
                {s.value}
              </div>
              <div className="text-[#8b949e] text-sm font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#1c2333] border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-400 text-xs font-semibold">
                Simple process
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              How It Works
            </h2>
            <p className="text-[#8b949e] text-lg max-w-md mx-auto leading-relaxed">
              Get your packages delivered in three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="relative bg-[#161b22] border border-blue-500/20 rounded-2xl p-8 text-center overflow-hidden hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="font-clash text-[5rem] font-bold text-blue-600/10 absolute -top-3 left-3 leading-none select-none">
                  {s.num}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-blue-900/40">
                    {s.icon}
                  </div>
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Step {i + 1}
                  </span>
                  <h3 className="font-bold text-lg text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#8b949e] text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR SMEs ── */}
      <section
        id="sme"
        className="py-24 px-6 md:px-12 bg-[#161b22] border-t border-b border-blue-500/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#0d1117] border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-400 text-xs font-semibold">
                🏪 Made for small businesses
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Why <span className="text-blue-400">Swyft Mobility</span>
            </h2>
            <p className="text-[#8b949e] text-lg max-w-md mx-auto leading-relaxed">
              The smarter way to deliver across Port Harcourt. Built for SMEs
              and startups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {smePerks.map((p) => (
              <div
                key={p.title}
                className="bg-[#1c2333] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-clash text-2xl text-white mb-1">
                Are you a trader, courier, or founder in PH?
              </p>
              <p className="text-blue-400 text-sm">
                Swyft was built with you in mind. Affordable delivery that
                scales with your orders.
              </p>
            </div>
            <a
              href="#download"
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm whitespace-nowrap border border-blue-500/40 shadow-lg shadow-blue-900/30"
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
            <div className="inline-flex items-center bg-[#1c2333] border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-400 text-xs font-semibold">
                Everything you need
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Delivery at Your <span className="text-blue-400">Fingertips</span>
            </h2>
            <p className="text-[#8b949e] text-lg max-w-md mx-auto leading-relaxed">
              Book deliveries, track packages in real-time, and get matched with
              a rider — all from the Swyft app.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#161b22] border border-blue-500/20 rounded-2xl p-7 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-2xl mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-base text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section
        id="coverage"
        className="py-24 px-6 md:px-12 bg-[#161b22] border-t border-b border-blue-500/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#0d1117] border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-400 text-xs font-semibold">
                Where we deliver
              </span>
            </div>
            <h2 className="font-clash text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              All across <span className="text-blue-400">Port Harcourt</span>
            </h2>
            <p className="text-[#8b949e] text-base max-w-sm mx-auto">
              12+ areas covered with flat-rate pricing per route. No hidden
              charges.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-[#0d1117] border border-blue-500/20 hover:border-blue-400 hover:bg-blue-600/10 rounded-xl py-4 px-3 text-center text-sm font-semibold text-[#8b949e] hover:text-blue-400 transition-all cursor-default"
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
          <div
            className="rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
            }}
          >
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <h2 className="font-clash text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
                Start Delivering
                <br />
                the Swyft Way
              </h2>
              <p className="text-white/75 text-base leading-relaxed mb-2 max-w-sm">
                Join thousands of customers and businesses using Swyft Mobility
                to move packages faster.
              </p>
              <p className="text-white/50 text-xs mb-8 font-medium">
                Available on Android — iOS coming soon.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Emmybrown775/swyft-releases/releases/download/v1.0.0/swyft-mobility.apk"
                  className="inline-flex items-center gap-3 bg-black/25 hover:bg-black/40 border border-white/20 text-white px-5 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 font-semibold"
                >
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="text-[10px] text-white/60 font-normal leading-none mb-0.5">
                      Download App
                    </p>
                    <p className="text-sm font-bold leading-none">
                      Android (APK)
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black/25 hover:bg-black/40 border border-white/20 text-white px-5 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 font-semibold"
                >
                  <span className="text-2xl">🍎</span>
                  <div>
                    <p className="text-[10px] text-white/60 font-normal leading-none mb-0.5">
                      Coming soon on
                    </p>
                    <p className="text-sm font-bold leading-none">
                      App Store (iOS)
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative z-10">
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
                  className={`flex items-center gap-4 py-3.5 ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-white/85 text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d1117] border-t border-blue-500/20 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
            <div className="col-span-2 md:col-span-1">
              <div className="font-clash text-xl text-white font-bold mb-3">
                ⚡ Swyft Mobility
              </div>
              <p className="text-[#8b949e] text-sm leading-relaxed max-w-xs mb-5">
                Building Africa&apos;s fastest growing electric logistics
                network. Fast, clean delivery across Port Harcourt.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#161b22] border border-blue-500/20 rounded-xl px-3 py-2">
                <span className="text-base">🤖</span>
                <div>
                  <p className="text-[#484f58] text-[9px] uppercase tracking-widest font-semibold">
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
                heading: "Quick Links",
                links: ["Home", "About", "Services", "Contact"],
              },
              {
                heading: "Legal",
                links: ["Terms and Conditions", "Privacy Policy", "Cookies"],
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
                      className="text-[#8b949e] hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
            <p className="text-[#484f58] text-sm">
              © 2026 Swyft Mobility by reality3dhub. All rights reserved.
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "ig", "fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-[#161b22] hover:bg-blue-600 border border-blue-500/20 rounded-lg flex items-center justify-center text-[#8b949e] hover:text-white text-xs font-bold transition-all"
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
