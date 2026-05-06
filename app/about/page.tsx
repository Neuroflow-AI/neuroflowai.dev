"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { LanguageSelector } from "@/components/language-selector"
import { translations, type Language } from "@/lib/i18n"

const ease = [0.16, 1, 0.3, 1] as const
const spring = { type: "spring", stiffness: 280, damping: 26 } as const

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease },
}

const aboutContent = {
  es: {
    eyebrow: "NOSOTROS",
    title: "Construimos software",
    titleHighlight: "que vale la pena enviar.",
    intro:
      "Neuroflow AI es un equipo pequeño que diseña y desarrolla productos SaaS y soluciones IA a medida. Trabajamos con startups y empresas que quieren operar más rápido, con menos fricción.",
    sections: [
      {
        num: "01",
        title: "Historia",
        description:
          "Nacemos del entendimiento profundo de los retos de transformación digital — y de la convicción de que la IA, bien aplicada, deja de ser un buzzword y se vuelve infraestructura.",
      },
      {
        num: "02",
        title: "Equipo",
        description:
          "Un colectivo enfocado en producto, IA aplicada y arquitectura. Pequeño por elección — para movernos rápido, sin capas que diluyan la calidad de lo que enviamos.",
      },
      {
        num: "03",
        title: "Compromiso",
        description:
          "Nos comprometemos a ser partners reales: entender el problema, proponer la solución más simple que funcione, y entregar producto que opere en condiciones reales.",
      },
    ],
    teamLabel: "EQUIPO",
    teamTitle: "El equipo detrás de Neuroflow AI.",
    teamMembers: [
      {
        name: "Christian Elías",
        role: "Senior Frontend Engineer",
        image: "/ChristianÉliasProfesional.jpeg",
        linkedin: "https://www.linkedin.com/in/christianeliascg/",
      },
      {
        name: "Sergio Calderón",
        role: "Desarrollador",
        image: "/sergio_calderon.jpg",
        linkedin: "https://www.linkedin.com/in/sergio-calderon-sanpedro",
      },
      {
        name: "Bernardo Aguayo",
        role: "AI Software Engineer",
        image: "/BernardoAguayo_.png",
        linkedin: "https://www.linkedin.com/in/bernardo-aguayo/",
      },
      {
        name: "Valentina Aguayo",
        role: "Desarrolladora",
        image: "/ValeAguayo.png",
        linkedin: "https://www.linkedin.com/in/valentina-aguayo/",
      },
      {
        name: "Ricardo Rito",
        role: "Sr. AI Software Engineer",
        image: "/Ricardo.png",
        linkedin: "https://www.linkedin.com/in/ricardoaar/",
      },
    ],
    cta: "Construyamos algo que valga la pena.",
    ctaDesc: "Cuéntanos qué necesitas resolver. Respondemos en menos de 24 horas.",
    button: "Hablemos",
  },
  en: {
    eyebrow: "ABOUT",
    title: "We build software",
    titleHighlight: "worth shipping.",
    intro:
      "Neuroflow AI is a small team that designs and builds SaaS products and custom AI solutions. We work with startups and companies that want to operate faster, with less friction.",
    sections: [
      {
        num: "01",
        title: "Story",
        description:
          "We were born from a deep understanding of the digital transformation challenge — and from the conviction that AI, applied well, stops being a buzzword and becomes infrastructure.",
      },
      {
        num: "02",
        title: "Team",
        description:
          "A collective focused on product, applied AI, and architecture. Small by choice — to move fast, without layers that dilute the quality of what we ship.",
      },
      {
        num: "03",
        title: "Commitment",
        description:
          "We commit to being real partners: understand the problem, propose the simplest solution that works, and deliver product that operates in real-world conditions.",
      },
    ],
    teamLabel: "TEAM",
    teamTitle: "The team behind Neuroflow AI.",
    teamMembers: [
      {
        name: "Christian Elías",
        role: "Senior Frontend Engineer",
        image: "/ChristianÉliasProfesional.jpeg",
        linkedin: "https://www.linkedin.com/in/christianeliascg/",
      },
      {
        name: "Sergio Calderón",
        role: "Developer",
        image: "/sergio_calderon.jpg",
        linkedin: "https://www.linkedin.com/in/sergio-calderon-sanpedro",
      },
      {
        name: "Bernardo Aguayo",
        role: "AI Software Engineer",
        image: "/BernardoAguayo_.png",
        linkedin: "https://www.linkedin.com/in/bernardo-aguayo/",
      },
      {
        name: "Valentina Aguayo",
        role: "Developer",
        image: "/ValeAguayo.png",
        linkedin: "https://www.linkedin.com/in/valentina-aguayo/",
      },
      {
        name: "Ricardo Rito",
        role: "Sr. AI Software Engineer",
        image: "/Ricardo.png",
        linkedin: "https://www.linkedin.com/in/ricardoaar/",
      },
    ],
    cta: "Let's build something worth shipping.",
    ctaDesc: "Tell us what you need to solve. We respond in under 24 hours.",
    button: "Get in touch",
  },
}

export default function About() {
  const [language, setLanguage] = useState<Language>("en")
  const [scrolled, setScrolled] = useState(false)
  const t = translations[language]
  const content = aboutContent[language]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
            <Link href="/#capabilities" className="hover:text-foreground transition-colors">
              {t.nav.solutions}
            </Link>
            <Link href="/#products" className="hover:text-foreground transition-colors">
              {t.nav.products}
            </Link>
            <Link href="/#process" className="hover:text-foreground transition-colors">
              {t.nav.process}
            </Link>
            <Link href="/about" className="text-foreground transition-colors">
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
      <section className="relative pt-44 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="section-label mb-10 flex items-center gap-3"
          >
            <span className="hairline-accent" />
            {content.eyebrow}
          </motion.p>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease }}
                className="display text-[clamp(2.75rem,8vw,7rem)] mb-2"
              >
                {content.title}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.15 }}
                className="display text-[clamp(2.75rem,8vw,7rem)]"
                style={{ color: "var(--muted-foreground)" }}
              >
                {content.titleHighlight}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.5 }}
                className="mt-10 text-lg md:text-xl max-w-2xl leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                {content.intro}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sections (Story / Team / Commitment) ─────────────────────────── */}
      <section className="px-6 lg:px-12 py-24 lg:py-32" style={{ background: "var(--surface-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.12 }}
            className="grid md:grid-cols-3 gap-x-12 gap-y-16"
          >
            {content.sections.map(({ num, title, description }) => (
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
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.p {...fadeUp} className="section-label mb-6 flex items-center gap-3">
            <span className="hairline-accent" />
            {content.teamLabel}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-3xl md:text-5xl max-w-3xl leading-tight mb-16"
          >
            {content.teamTitle}
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.12 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {content.teamMembers.map(({ name, role, image, linkedin }) => (
              <motion.article
                key={name}
                variants={{
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease }}
                className="surface-card overflow-hidden"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, transparent 50%, color-mix(in oklch, var(--background) 82%, transparent) 100%)",
                    }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold tracking-tight mb-2">{name}</h3>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {role}
                    </p>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:text-foreground"
                      style={{ borderColor: "var(--border-strong)", color: "var(--muted-foreground)" }}
                      aria-label={`LinkedIn ${name}`}
                    >
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-32 lg:py-44">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            {...fadeUp}
            className="display text-[clamp(2.25rem,6vw,5rem)] mb-10"
          >
            {content.cta}
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-lg mb-12 max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            {content.ctaDesc}
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
              {content.button}
            </motion.a>
            <a
              href="mailto:contacto@neuroflowai.dev"
              className="group inline-flex items-center gap-1.5 text-sm font-medium"
            >
              contacto@neuroflowai.dev
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
            <Link href="/" className="hover:text-foreground transition-colors">
              {t.nav.solutions}
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
