import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Search,
  CheckCircle2,
  XCircle,
  Lock,
  Zap,
  TrendingUp,
  Sparkles,
  MessageSquare,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

const SELAR_LINK = "https://selar.co/your-product-link"; // Replace with your actual Selar link

// --- Reusable Components ---
const CTAButton = ({ text, className = "" }) => (
  <a
    href={SELAR_LINK}
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 active:scale-95 ${className}`}
  >
    {text}
    <ChevronRight className="w-5 h-5" />
  </a>
);

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const ChatSimulation = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setStep(1); // User typed
      await new Promise((r) => setTimeout(r, 1000));
      setStep(2); // AI thinking
      await new Promise((r) => setTimeout(r, 1500));
      setStep(3); // AI response 1
      await new Promise((r) => setTimeout(r, 800));
      setStep(4); // AI response 2
      await new Promise((r) => setTimeout(r, 800));
      setStep(5); // AI response 3
    };
    sequence();
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden border rounded-2xl bg-slate-900 border-slate-700/50 shadow-2xl shadow-cyan-500/10">
      {/* Mac window header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-2 text-xs font-medium text-slate-400">
          AI Chat{" "}
        </span>
      </div>

      <div className="p-5 space-y-4 text-sm sm:text-base font-inter min-h-[300px]">
        {/* User Message */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-end"
          >
            <div className="max-w-[85%] bg-indigo-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md">
              "Best manicure salon in Lagos state"
            </div>
          </motion.div>
        )}

        {/* AI Thinking */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-900/50 text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce delay-75"></span>
              <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce delay-150"></span>
            </div>
          </motion.div>
        )}

        {/* AI Response */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3"
          >
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="px-4 py-3 bg-slate-800 text-slate-200 rounded-2xl rounded-tl-sm w-[85%]">
              <p className="mb-2">
                Here are some top manicure salons in Lagos based on reviews:
              </p>
              <ul className="space-y-2">
                {step >= 3 && (
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    ✨ Glow Beauty Lounge – Lekki
                  </motion.li>
                )}
                {step >= 4 && (
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    💅 Nail Haven – Ikeja
                  </motion.li>
                )}
                {step >= 5 && (
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    💎 Luxe Nails – Victoria Island
                  </motion.li>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      {/* Warning Highlight */}
      {step >= 5 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-500/30 bg-red-500/10 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-red-400">
            <AlertTriangle className="w-5 h-5" />
            Your business could be here... but it isn't.
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased text-slate-50 bg-slate-950 selection:bg-purple-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-700/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="px-6 pt-24 pb-16 mx-auto max-w-7xl lg:pt-32 lg:pb-24">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700"
              >
                <span className="flex w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300">
                  The Rules of Search Have Changed
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                Your Customers Are Searching… <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  But Your Business Isn’t Showing
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed text-slate-400 sm:text-xl"
              >
                People are now using AI tools like ChatGPT and Google AI to find
                businesses in Nigeria. If your business isn’t optimized for
                this,{" "}
                <strong className="text-white">
                  you are losing customers daily to your competitors.
                </strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <CTAButton
                  text="Get The AI SEO Playbook"
                  className="w-full sm:w-auto"
                />
                <p className="mt-3 text-sm text-slate-500">
                  Instant Access • Step-by-Step Guide • Proven Results
                </p>
              </motion.div>
            </div>

            {/* Right Side: Chat UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ChatSimulation />
            </motion.div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="px-6 py-20 bg-slate-900/50 border-y border-slate-800">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why You’re Not Getting Customers Online
              </h2>
              <p className="mt-4 text-slate-400">
                The old way of getting visibility is dying. Here's why you're
                stuck:
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Relying only on Instagram",
                  desc: "Social media reach is dropping. You're at the mercy of algorithms.",
                },
                {
                  title: "Invisible on Google & AI",
                  desc: "When people search for 'best [your service] near me', you don't exist.",
                },
                {
                  title: "Competitors steal traffic",
                  desc: "They are ranking easily while you struggle for likes.",
                },
                {
                  title: "AI is replacing Search",
                  desc: "Customers ask ChatGPT directly instead of scrolling through web links.",
                },
              ].map((item, idx) => (
                <FadeIn
                  key={idx}
                  delay={idx * 0.1}
                  className="p-6 border rounded-2xl bg-slate-900 border-slate-800"
                >
                  <XCircle className="w-10 h-10 mb-4 text-red-500" />
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SOLUTION SECTION */}
        <section className="px-6 py-24 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-20 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business Growth"
                  className="relative object-cover w-full h-auto border shadow-2xl rounded-2xl border-slate-700/50"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Introducing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  The AI SEO Playbook
                </span>
              </h2>
              <p className="text-lg text-slate-400">
                A simple, beginner-friendly system that shows you exactly how to
                optimize your Nigerian business for the new era of search. No
                coding. No expensive ads.
              </p>

              <ul className="space-y-4">
                {[
                  "Rank highly on Google & AI tools natively",
                  "Get high-paying customers without running Facebook/IG Ads",
                  "Use AI to write your content and grow your business easily",
                ].map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-cyan-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <CTAButton text="Get Instant Access" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. TEASER CONTENT (BLURRED SECTION) */}
        <section className="px-6 py-20 border-y border-slate-800 bg-slate-900/30">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">
                Sneak Peek: The Exact Framework
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative overflow-hidden border rounded-2xl border-slate-700 bg-slate-800 p-8 min-h-[450px]">
                {/* Fake Content (Gradually blurring) */}
                <div className="space-y-6 text-left select-none">
                  {/* Perfectly Clear Part */}
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">
                      Step 1: The ChatGPT Trigger Prompt
                    </h3>
                    <p className="mt-2 text-slate-300">
                      Use this exact prompt to tell AI models about your
                      business so they recommend you when people search.
                    </p>
                    <div className="p-4 mt-3 rounded-lg bg-slate-900 font-mono text-sm text-purple-300 border border-slate-700/50">
                      "Act as an SEO expert. Analyze my business: [Business
                      Name]. We are located in [Location]..."
                    </div>
                  </div>

                  {/* Partially Blurred Part */}
                  <div className="blur-[2px] opacity-70 pointer-events-none">
                    <h3 className="text-2xl font-bold text-cyan-400">
                      Step 2: Google Profile AI Optimization
                    </h3>
                    <p className="mt-2 text-slate-300">
                      Copy and paste this template into your Google Business
                      description to trigger Google's AI Overviews...
                    </p>
                  </div>

                  {/* Completely Blurred Part */}
                  <div className="blur-[6px] opacity-30 pointer-events-none">
                    <div className="p-4 mt-3 rounded-lg bg-slate-900 font-mono text-sm text-purple-300 border border-slate-700/50">
                      [LOCKED TEMPLATE] Insert your keywords into the
                      brackets...
                    </div>
                  </div>
                </div>

                {/* Overlay (Fades from transparent at top to solid at bottom) */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-6 pb-10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                  <div className="flex flex-col items-center mt-32">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-600/20 text-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <Lock className="w-8 h-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      Unlock the Full System
                    </h3>
                    <p className="mb-6 text-slate-300 max-w-md mx-auto text-center">
                      Get access to the step-by-step framework, copy-paste
                      prompts, and templates used by top earning freelancers and
                      businesses.
                    </p>
                    <CTAButton text="Get Full Access Now" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 5. WHAT YOU GET & 6. PRICING */}
        <section className="px-6 py-24 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* What you get */}
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">
                Everything You're Getting Today
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <TrendingUp />,
                    title: "Full AI SEO Playbook",
                    desc: "The core system to dominate search rankings.",
                  },
                  {
                    icon: <MessageSquare />,
                    title: "Prompt Library",
                    desc: "Copy & paste ChatGPT prompts to set up your profiles.",
                  },
                  {
                    icon: <Search />,
                    title: "Templates & Frameworks",
                    desc: "Fill-in-the-blank templates for your bio and listings.",
                  },
                  {
                    icon: <Zap />,
                    title: "Niche Strategies",
                    desc: "Custom tactics for fashion, real estate, freelancers, etc.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700"
                  >
                    <div className="text-cyan-400 flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Pricing Box */}
            <FadeIn delay={0.2}>
              <div className="relative p-8 border-2 border-purple-500 rounded-3xl bg-slate-900 shadow-[0_0_40px_rgba(139,92,246,0.15)] text-center">
                <div className="absolute top-0 px-4 py-1 text-sm font-bold text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-gradient-to-r from-purple-500 to-cyan-500">
                  LAUNCH OFFER
                </div>

                <h3 className="text-2xl font-bold mb-2">The AI SEO Playbook</h3>
                <p className="text-slate-400 mb-6">
                  Get customers daily without running expensive ads.
                </p>

                <div className="flex items-center justify-center gap-3 mb-8">
                  <span className="text-2xl font-medium text-slate-500 line-through">
                    ₦9,999
                  </span>
                  <span className="text-5xl font-extrabold text-white">
                    ₦4,999
                  </span>
                </div>

                <div className="space-y-4">
                  <CTAButton text="Buy Now" className="w-full py-5 text-xl" />
                  <p className="text-sm text-slate-500">
                    Secure payment via Selar
                  </p>
                </div>

                {/* 7. Social Proof */}
                <div className="pt-8 mt-8 border-t border-slate-800">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    Works perfectly for beginners.
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Used by smart Nigerian business owners & freelancers.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 8. URGENCY SECTION */}
        <section className="px-6 py-16 bg-red-900/10 border-y border-red-900/20 text-center">
          <FadeIn className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              AI is changing how people find businesses.
            </h2>
            <p className="text-red-400 text-lg">
              Every single day you wait, you are literally handing over paying
              customers to your competitors who are already optimized.
            </p>
          </FadeIn>
        </section>

        {/* 9. FINAL CTA SECTION */}
        <section className="px-6 py-24 text-center">
          <FadeIn className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Start Getting Customers Today
            </h2>
            <p className="text-xl text-slate-400">
              Stop struggling with Instagram algorithms. Let AI and Google send
              ready-to-buy customers directly to your DMs and WhatsApp.
            </p>
            <CTAButton
              text="Get The Playbook Now"
              className="py-5 text-xl px-10"
            />
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t text-slate-500 border-slate-800 bg-slate-950">
          <p>
            © {new Date().getFullYear()} AI SEO Playbook. All rights reserved.
          </p>
        </footer>

        {/* Sticky Mobile CTA (Only visible on mobile, appears after scrolling a bit) */}
        <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-slate-800 bg-slate-900/90 backdrop-blur-md sm:hidden z-50">
          <a
            href={SELAR_LINK}
            className="flex items-center justify-center w-full py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/20"
          >
            Buy Now - ₦4,999
          </a>
        </div>
      </div>
    </div>
  );
}
