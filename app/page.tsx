"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "motion/react"
import { ArrowUpRight, Bot, Calendar, Clock, LayoutDashboard, MonitorSmartphone, Scissors, Star, User } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { translations, type Language } from "@/lib/i18n"

const ease = [0.16, 1, 0.3, 1] as const
const spring = { type: "spring", stiffness: 280, damping: 26 } as const

function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ")
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-baseline py-[0.18em] -my-[0.18em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.06 }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease },
}

/* ── ProcessTimeline ────────────────────────────────────────────────────── */
type ProcessStep = { label: string; title: string; desc: string }

function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (!isInView) return
    const delays = [700, 1600, 2500]
    const timers = delays.map((delay, i) =>
      setTimeout(() => setActiveIndex(i), delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-x-12 gap-y-14 relative">
      {/* Static base line */}
      <div
        aria-hidden
        className="hidden md:block absolute top-3 left-12 right-12 h-px"
        style={{ background: "var(--border)" }}
      />

      {/* Traveling light beam */}
      <motion.div
        aria-hidden
        className="hidden md:block absolute top-[11px] left-12 h-0.5 pointer-events-none"
        style={{ right: "3rem" }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, var(--accent) 40%, var(--accent) 60%, transparent 100%)",
            opacity: 0.7,
          }}
        />
        {/* Glow dot at the leading edge */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
          style={{
            right: "-6px",
            background: "var(--accent)",
            boxShadow: "0 0 14px 4px var(--accent)",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.15, times: [0, 0.1, 0.85, 1] }}
        />
      </motion.div>

      {steps.map(({ label, title, desc }, i) => {
        const isActive = activeIndex >= i
        return (
          <motion.div
            key={label}
            className="relative"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: isActive ? 1 : 0.28, y: isInView ? 0 : 28 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, ease, delay: isActive ? 0 : 0.2 + i * 0.1 }}
          >
            {/* Dot */}
            <motion.div
              className="w-6 h-6 rounded-full mb-6 flex items-center justify-center"
              animate={
                isActive
                  ? {
                      borderColor: "var(--accent)",
                      boxShadow: "0 0 0 1px var(--accent), 0 0 12px 2px color-mix(in oklch, var(--accent) 50%, transparent)",
                    }
                  : {
                      borderColor: "var(--border-strong)",
                      boxShadow: "none",
                    }
              }
              transition={{ duration: 0.5, ease }}
              style={{
                background: "var(--background)",
                border: "1px solid var(--border-strong)",
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                animate={isActive ? { background: "var(--accent)" } : { background: "var(--subtle-foreground)" }}
                transition={{ duration: 0.4, ease }}
              />
            </motion.div>

            <p className="text-xs font-mono mb-3" style={{ color: "var(--accent)" }}>
              {label}
            </p>
            <h3 className="text-xl font-semibold mb-3 leading-snug">{title}</h3>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {desc}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const [scrolled, setScrolled] = useState(false)
  const t = translations[language]
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 360], [1, 0])
  const heroY = useTransform(scrollY, [0, 360], [0, -32])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen text-foreground">
      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "color-mix(in oklch, var(--background) 78%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span
              aria-hidden
              className="block transition-transform duration-500"
              style={{
                width: 18,
                height: 18,
                background: "var(--accent)",
                borderRadius: 4,
                transform: "rotate(45deg)",
                boxShadow: "0 0 24px -4px var(--accent)",
              }}
            />
            <span className="text-[17px] font-bold tracking-[-0.02em]">
              Neuroflow<span style={{ color: "var(--accent)" }}> AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--muted-foreground)" }}>
            <button onClick={() => scrollTo("capabilities")} className="hover:text-foreground transition-colors">
              {t.nav.solutions}
            </button>
            <button onClick={() => scrollTo("products")} className="hover:text-foreground transition-colors">
              {t.nav.products}
            </button>
            <button onClick={() => scrollTo("process")} className="hover:text-foreground transition-colors">
              {t.nav.process}
            </button>
            <Link href="/about" className="hover:text-foreground transition-colors">
              {t.nav.about}
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            <motion.a
              href="mailto:contacto@neuroflowai.dev"
              whileHover={{ scale: 1.03 }}
              transition={spring}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              {t.nav.contact}
            </motion.a>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative pt-40 pb-28 lg:pt-48 lg:pb-36 px-6 lg:px-12 overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-6xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="section-label mb-10 flex items-center gap-3"
          >
            <span className="hairline-accent" />
            {t.hero.eyebrow}
          </motion.p>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="display text-[clamp(2.25rem,5.6vw,5.25rem)] mb-2">
                <WordReveal text={t.hero.title} />
              </h1>
              <h1 className="display text-[clamp(2.25rem,5.6vw,5.25rem)]" style={{ color: "var(--muted-foreground)" }}>
                <WordReveal text={t.hero.titleHighlight} delay={0.25} />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.7 }}
                className="mt-10 text-lg md:text-xl max-w-xl leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.85 }}
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <motion.a
                  href="mailto:contacto@neuroflowai.dev"
                  whileHover={{ scale: 1.03 }}
                  transition={spring}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                  style={{ background: "var(--foreground)", color: "var(--background)" }}
                >
                  {t.hero.cta1}
                </motion.a>
                <button
                  onClick={() => scrollTo("products")}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  {t.hero.cta2}
                  <span className="arrow-shift">→</span>
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:flex justify-center">
              <FloatingTechObject />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────────────────── */}
      <section id="capabilities" className="px-6 lg:px-12 py-28 lg:py-36">
        <div className="max-w-6xl mx-auto">
          <motion.p {...fadeUp} className="section-label mb-6 flex items-center gap-3">
            <span className="hairline-accent" />
            {t.capabilities.label}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-3xl md:text-5xl max-w-3xl leading-tight mb-20"
          >
            {t.capabilities.title}
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.12 }}
            className="grid md:grid-cols-3 gap-x-12 gap-y-16"
          >
            {[
              { num: "01", title: t.capabilities.cap1Title, desc: t.capabilities.cap1Desc },
              { num: "02", title: t.capabilities.cap2Title, desc: t.capabilities.cap2Desc },
              { num: "03", title: t.capabilities.cap3Title, desc: t.capabilities.cap3Desc },
            ].map(({ num, title, desc }) => (
              <motion.div
                key={num}
                variants={{
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-mono" style={{ color: "var(--accent)" }}>
                    {num}
                  </span>
                  <span className="h-px flex-1" style={{ background: "var(--border)" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-snug">{title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────────────────────── */}
      <section id="products" className="px-6 lg:px-12 py-28 lg:py-36" style={{ background: "var(--surface-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.p {...fadeUp} className="section-label mb-6 flex items-center gap-3">
            <span className="hairline-accent" />
            {t.products.label}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-3xl md:text-5xl max-w-2xl leading-tight mb-16"
          >
            {t.products.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard
              name={t.products.tuagenda.name}
              status={t.products.tuagenda.status}
              statusType="live"
              tagline={t.products.tuagenda.tagline}
              description={t.products.tuagenda.description}
              cta={t.products.tuagenda.cta}
              href="https://tuagenda.digital"
            />
            <TuAgendaDemo copy={t.products.tuagenda.demo} delay={0.1} />
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section id="process" className="px-6 lg:px-12 py-28 lg:py-36">
        <div className="max-w-6xl mx-auto">
          <motion.p {...fadeUp} className="section-label mb-6 flex items-center gap-3">
            <span className="hairline-accent" />
            {t.process.label}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-3xl md:text-5xl max-w-3xl leading-tight mb-20"
          >
            {t.process.title}
          </motion.h2>

          <ProcessTimeline
            steps={[
              { label: t.process.step1Label, title: t.process.step1Title, desc: t.process.step1Desc },
              { label: t.process.step2Label, title: t.process.step2Title, desc: t.process.step2Desc },
              { label: t.process.step3Label, title: t.process.step3Title, desc: t.process.step3Desc },
            ]}
          />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="px-6 lg:px-12 py-32 lg:py-44">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            {...fadeUp}
            className="display text-[clamp(2.25rem,6vw,5rem)] mb-10"
          >
            {t.cta.title}
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-lg mb-12 max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.cta.description}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.a
              href="mailto:contacto@neuroflowai.dev"
              whileHover={{ scale: 1.03 }}
              transition={spring}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium"
              style={{ background: "var(--foreground)", color: "var(--background)" }}
            >
              {t.cta.cta1}
            </motion.a>
            <a
              href={`mailto:${t.cta.email}`}
              className="group inline-flex items-center gap-1.5 text-sm font-medium"
            >
              {t.cta.email}
              <span className="arrow-shift">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="px-6 lg:px-12 py-12" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="block"
              style={{
                width: 14,
                height: 14,
                background: "var(--accent)",
                borderRadius: 3,
                transform: "rotate(45deg)",
                boxShadow: "0 0 18px -4px var(--accent)",
              }}
            />
            <span className="text-[15px] font-bold tracking-[-0.02em]">
              Neuroflow<span style={{ color: "var(--accent)" }}> AI</span>
            </span>
            <span className="text-xs ml-3" style={{ color: "var(--muted-foreground)" }}>
              {t.footer.tagline}
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted-foreground)" }}>
            <Link href="/about" className="hover:text-foreground transition-colors">
              {t.footer.about}
            </Link>
            <a
              href="https://www.linkedin.com/company/neuroflowai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.linkedin}
            </a>
            <a href="mailto:contacto@neuroflowai.dev" className="hover:text-foreground transition-colors">
              {t.footer.email}
            </a>
            <span className="text-xs" style={{ color: "var(--subtle-foreground)" }}>
              {t.footer.copyright}
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}

/* ── FloatingTechObject ─────────────────────────────────────────────────── */
/* Esfera de bandas latitudinales rotando en 3D + núcleo de inteligencia      */
/* pulsante + satélite orbitando. Inspiración: spade.com — adaptado a la      */
/* identidad Neuroflow (bandas = datos, núcleo = IA, órbita = flujo).         */
function FloatingTechObject() {
  const ringCount = 38
  return (
    <motion.div
      className="relative w-full max-w-[420px] aspect-square"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { duration: 1.4, ease, delay: 0.3 },
        scale: { duration: 1.4, ease, delay: 0.3 },
        y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ perspective: "1400px" }}
    >
      {/* Sphere (rotating in 3D) */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: 360, rotateX: [-6, 6, -6] }}
        transition={{
          rotateY: { duration: 34, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 11, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {Array.from({ length: ringCount }).map((_, i) => {
          const t = i / (ringCount - 1) - 0.5
          const radius = Math.sqrt(Math.max(0, 1 - (t * 2) ** 2))
          const opacity = 0.18 + radius * 0.55
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: `${radius * 96}%`,
                height: `${radius * 96}%`,
                border: `1px solid rgba(255, 255, 255, ${opacity})`,
                transform: `translate(-50%, -50%) translateY(${t * 100}%) rotateX(90deg)`,
              }}
            />
          )
        })}
      </motion.div>

      {/* Subtle outer perimeter (depth cue, doesn't rotate) */}
      <div
        className="absolute inset-[6%] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}
      />

      {/* Intelligence core — soft pulsing glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "18%",
          height: "18%",
          marginLeft: "-9%",
          marginTop: "-9%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",
          filter: "blur(6px)",
        }}
      />

      {/* Orbiting satellite — counter-rotates */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute top-0 left-1/2 rounded-full"
          style={{
            width: 7,
            height: 7,
            marginLeft: -3.5,
            marginTop: -3.5,
            background: "#ffffff",
            boxShadow: "0 0 16px rgba(255,255,255,0.85), 0 0 4px rgba(255,255,255,1)",
          }}
        />
      </motion.div>

      {/* Faint accent glow behind everything (uses brand purple very subtly) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--accent) 22%, transparent) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  )
}

/* ── TuAgendaDemo ───────────────────────────────────────────────────────── */
const DEMO_VIEWS = ["booking", "calendar", "whatsapp", "dashboard"] as const
type DemoView = (typeof DEMO_VIEWS)[number]
type TuAgendaDemoCopy = {
  tabs: Record<DemoView, string>
  booking: {
    business: string
    ratingLocation: string
    servicesTitle: string
    scheduleTitle: string
    date: string
    confirm: string
    selectedSummary: string
    services: { name: string; price: string; duration: string }[]
  }
  calendar: {
    month: string
    week: string
    monthView: string
    days: string[]
  }
  whatsapp: {
    assistant: string
    inputPlaceholder: string
    messages: string[]
  }
  dashboard: {
    title: string
    date: string
    today: string
    week: string
    clients: string
    appointments: string
    active: string
    appointmentsTitle: string
    confirmed: string
    pending: string
    services: string[]
  }
}

const DEMO_VIEW_ICONS: Record<DemoView, typeof Calendar> = {
  calendar: Calendar,
  whatsapp: Bot,
  dashboard: LayoutDashboard,
  booking: MonitorSmartphone,
}

const DEMO_SLOTS = ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00"]
const DEMO_HOURS = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00"]
const DEMO_EVENTS = [
  { day:0, start:0, span:1, cls:"bg-blue-500/15 border-l-2 border-blue-400 text-blue-100", label:"Ana M." },
  { day:0, start:3, span:2, cls:"bg-emerald-500/15 border-l-2 border-emerald-400 text-emerald-100", label:"Carlos R." },
  { day:1, start:1, span:1, cls:"bg-violet-500/15 border-l-2 border-violet-400 text-violet-100", label:"Laura P." },
  { day:2, start:0, span:2, cls:"bg-blue-500/15 border-l-2 border-blue-400 text-blue-100", label:"Diego L." },
  { day:3, start:1, span:1, cls:"bg-emerald-500/15 border-l-2 border-emerald-400 text-emerald-100", label:"Pedro S." },
  { day:4, start:2, span:1, cls:"bg-blue-500/15 border-l-2 border-blue-400 text-blue-100", label:"Rosa M." },
]
const DEMO_CHAT_SENDERS = ["client", "ai", "client", "ai"] as const
const DEMO_APTS = [
  { time:"09:00", name:"Ana Martinez", ok:true },
  { time:"10:30", name:"Carlos Ruiz", ok:true },
  { time:"11:30", name:"Laura Perez", ok:false },
  { time:"13:00", name:"Sofia Garcia", ok:true },
]

function DemoBooking({ copy }: { copy: TuAgendaDemoCopy["booking"] }) {
  return (
    <div className="aspect-[16/10] bg-[#090b10] flex flex-col text-[10px] text-slate-200">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-blue-500/[0.06]">
        <div className="h-6 w-6 rounded-full bg-blue-500/15 flex items-center justify-center">
          <Scissors className="h-3 w-3 text-blue-300" />
        </div>
        <div>
          <p className="font-semibold text-slate-50 text-[11px]">{copy.business}</p>
          <p className="text-slate-400 flex items-center gap-0.5">
            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" /> {copy.ratingLocation}
          </p>
        </div>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-[45%] p-2.5 border-r border-white/10 flex flex-col gap-1.5 overflow-hidden">
          <p className="font-semibold text-slate-100 text-[11px] mb-0.5">{copy.servicesTitle}</p>
          {copy.services.map((s, i) => (
            <div key={s.name} className={`rounded-lg p-2 ${i===0?"bg-blue-500/15 ring-1 ring-blue-400/30":"bg-white/[0.04]"}`}>
              <span className={`font-medium text-[10px] ${i===0?"text-blue-200":"text-slate-200"}`}>{s.name}</span>
              <div className="flex gap-2 mt-0.5 text-slate-500 text-[9px]">
                <span>{s.duration}</span><span className="font-semibold text-slate-200">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 p-2.5 flex flex-col overflow-hidden">
          <p className="font-semibold text-slate-100 text-[11px] mb-0.5">{copy.scheduleTitle}</p>
          <p className="text-slate-500 mb-1.5">{copy.date}</p>
          <div className="grid grid-cols-3 gap-1 overflow-hidden">
            {DEMO_SLOTS.map((slot, i) => (
              <div key={slot} className={`rounded-md py-1 text-center font-medium transition-colors ${i===2?"bg-blue-500 text-white":"bg-white/[0.05] text-slate-300"}`}>{slot}</div>
            ))}
          </div>
          <div className="mt-auto pt-1.5 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div><p className="font-medium text-slate-100">{copy.services[0]?.name}</p><p className="text-slate-500">{copy.selectedSummary}</p></div>
              <div className="rounded-md bg-blue-500 px-2.5 py-1 text-[9px] font-semibold text-white">{copy.confirm}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DemoCalendar({ copy }: { copy: TuAgendaDemoCopy["calendar"] }) {
  return (
    <div className="aspect-[16/10] bg-[#090b10] flex flex-col text-[10px] text-slate-300">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-blue-300" />
          <span className="font-semibold text-slate-50 text-[11px]">{copy.month}</span>
        </div>
        <div className="flex gap-1">
          <span className="rounded bg-blue-500/15 px-1.5 py-0.5 text-blue-200 font-medium">{copy.week}</span>
          <span className="rounded px-1.5 py-0.5 text-slate-500">{copy.monthView}</span>
        </div>
      </div>
      <div className="grid grid-cols-[40px_repeat(5,1fr)] border-b border-white/10">
        <div />
        {copy.days.map((d, i) => (
          <div key={d} className={`py-1.5 text-center font-medium ${i===1?"text-blue-200":"text-slate-500"}`}>
            <div>{d}</div>
            <div className={`text-[11px] font-semibold mt-0.5 ${i===1?"bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mx-auto":""}`}>{5+i}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-[40px_repeat(5,1fr)] overflow-hidden">
        <div className="flex flex-col">
          {DEMO_HOURS.map(h => (
            <div key={h} className="flex-1 pr-1.5 text-right text-slate-600 border-b border-white/[0.04] flex items-start justify-end pt-0.5">{h}</div>
          ))}
        </div>
        {copy.days.map((_, di) => (
          <div key={di} className="relative border-l border-white/[0.04]">
            {DEMO_HOURS.map((_, hi) => <div key={hi} className="border-b border-white/[0.04]" style={{height:`${100/DEMO_HOURS.length}%`}} />)}
            {DEMO_EVENTS.filter(e=>e.day===di).map((ev,i) => (
              <div key={i} className={`absolute left-0.5 right-0.5 rounded-sm px-1 py-0.5 text-[8px] font-medium truncate ${ev.cls}`}
                style={{top:`${(ev.start/DEMO_HOURS.length)*100}%`,height:`${(ev.span/DEMO_HOURS.length)*100}%`}}>
                {ev.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function DemoWhatsApp({ copy, business }: { copy: TuAgendaDemoCopy["whatsapp"]; business: string }) {
  return (
    <div className="aspect-[16/10] flex flex-col">
      <div className="flex items-center gap-2.5 bg-[#075E54] px-3 py-2 text-white">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <Bot className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold">{business}</p>
          <p className="text-[9px] text-white/70">{copy.assistant}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1.5 bg-[#0B141A] p-3 overflow-hidden">
        {copy.messages.map((text, i) => (
          <div key={i} className={`flex ${DEMO_CHAT_SENDERS[i]==="ai"?"justify-end":"justify-start"}`}>
            <div className={`max-w-[75%] rounded-lg px-2.5 py-1.5 text-[10px] leading-relaxed shadow-sm ${DEMO_CHAT_SENDERS[i]==="ai"?"rounded-tr-sm bg-[#005C4B] text-slate-100":"rounded-tl-sm bg-[#202C33] text-slate-100"}`}>
              {text}
              <span className="ml-2 text-[8px] text-slate-500">{`10:0${i}`}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-[#202C33] px-3 py-1.5">
        <div className="flex-1 rounded-full bg-[#2A3942] px-3 py-1 text-[10px] text-slate-400">{copy.inputPlaceholder}</div>
        <div className="h-6 w-6 rounded-full bg-[#25D366] flex items-center justify-center">
          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </div>
      </div>
    </div>
  )
}

function DemoDashboard({ copy }: { copy: TuAgendaDemoCopy["dashboard"] }) {
  return (
    <div className="aspect-[16/10] bg-[#090b10] flex flex-col text-[10px] text-slate-300">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <LayoutDashboard className="h-3.5 w-3.5 text-blue-300" />
          <span className="font-semibold text-slate-50 text-[11px]">{copy.title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500">{copy.date}</span>
          <div className="h-5 w-5 rounded-full bg-blue-500/15 flex items-center justify-center">
            <User className="h-3 w-3 text-blue-300" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-3 pt-2.5 pb-1.5">
        {[{l:copy.today,v:"8",s:copy.appointments,c:"text-blue-300"},{l:copy.week,v:"34",s:copy.appointments,c:"text-emerald-300"},{l:copy.clients,v:"127",s:copy.active,c:"text-violet-300"}].map(x=>(
          <div key={x.l} className="rounded-lg bg-white/[0.04] p-2">
            <p className="text-slate-500">{x.l}</p>
            <p className={`text-lg font-bold leading-tight ${x.c}`}>{x.v}</p>
            <p className="text-slate-500">{x.s}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 px-3 pb-2 overflow-hidden">
        <p className="text-[11px] font-semibold text-slate-100 mb-1.5 flex items-center gap-1"><Clock className="h-3 w-3" />{copy.appointmentsTitle}</p>
        <div className="flex flex-col gap-1">
          {DEMO_APTS.map((a, i)=>(
            <div key={a.time} className="flex items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1.5">
              <span className="font-mono font-medium text-blue-300 w-8">{a.time}</span>
              <div className="flex-1 min-w-0">
                <span className="font-medium text-slate-100">{a.name}</span>
                <span className="text-slate-500 ml-1.5">{copy.services[i]}</span>
              </div>
              <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-medium ${a.ok?"bg-emerald-100 text-emerald-700":"bg-amber-100 text-amber-700"}`}>
                {a.ok ? copy.confirmed : copy.pending}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TuAgendaDemo({ copy, delay = 0 }: { copy: TuAgendaDemoCopy; delay?: number }) {
  const [active, setActive] = useState<DemoView>("booking")
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActive(prev => {
          const idx = DEMO_VIEWS.indexOf(prev)
          return DEMO_VIEWS[(idx + 1) % DEMO_VIEWS.length]
        })
        setFading(false)
      }, 300)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const switchView = (v: DemoView) => {
    setFading(true)
    setTimeout(() => { setActive(v); setFading(false) }, 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
      className="surface-card overflow-hidden flex flex-col"
    >
      {/* Card header */}
      <div className="flex items-center justify-between px-10 pt-10 pb-6">
        <h3 className="text-2xl font-semibold tracking-tight">tuagenda.digital</h3>
        <span
          className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: "var(--live-soft)", color: "var(--live)" }}
        >
          Live
        </span>
      </div>

      {/* Browser frame */}
      <div className="mx-6 mb-6 rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
        {/* macOS dots */}
        <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: "oklch(0.18 0 0)", borderBottom: "1px solid var(--border)" }}>
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* Animated view */}
        <div style={{ transition: "opacity 0.3s", opacity: fading ? 0 : 1 }}>
          {active === "booking"   && <DemoBooking copy={copy.booking} />}
          {active === "calendar"  && <DemoCalendar copy={copy.calendar} />}
          {active === "whatsapp"  && <DemoWhatsApp copy={copy.whatsapp} business={copy.booking.business} />}
          {active === "dashboard" && <DemoDashboard copy={copy.dashboard} />}
        </div>

        {/* Tab pills */}
        <div className="flex justify-center gap-1.5 py-2 border-t" style={{ background: "oklch(0.13 0 0)", borderColor: "var(--border)" }}>
          {DEMO_VIEWS.map(v => {
            const Icon = DEMO_VIEW_ICONS[v]
            return (
              <button
                key={v}
                onClick={() => switchView(v)}
                className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium transition-all duration-200"
                style={{
                  background: active === v ? "var(--accent-soft)" : "transparent",
                  color: active === v ? "var(--accent)" : "var(--muted-foreground)",
                }}
              >
                <Icon className="h-3 w-3" />{copy.tabs[v]}
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

/* ── ProductCard ────────────────────────────────────────────────────────── */
function ProductCard({
  name,
  status,
  statusType,
  tagline,
  description,
  cta,
  href,
  delay = 0,
}: {
  name: string
  status: string
  statusType: "live" | "soon"
  tagline: string
  description: string
  cta: string
  href: string
  delay?: number
}) {
  const isLive = statusType === "live"
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.7, ease, delay, ...spring }}
      className="surface-card p-10 md:p-12 flex flex-col gap-6 group"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
        <span
          className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{
            background: isLive ? "var(--live-soft)" : "var(--accent-soft)",
            color: isLive ? "var(--live)" : "var(--accent)",
          }}
        >
          {status}
        </span>
      </div>
      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
        {tagline}
      </p>
      <p className="text-[15px] leading-relaxed" style={{ color: "var(--foreground)" }}>
        {description}
      </p>
      <div
        className="mt-auto inline-flex self-start items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium"
        style={{ borderColor: "var(--border-strong)" }}
      >
        {cta}
        <span className="arrow-shift">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </motion.a>
  )
}
