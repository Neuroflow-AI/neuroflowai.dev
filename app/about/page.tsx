"use client"

import { useState } from "react"
import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"
import { Brain, ArrowRight, Users, Target, Zap } from "lucide-react"
import { translations, type Language } from "@/lib/i18n"

export default function About() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const scrollToHome = () => {
    window.location.href = "/"
  }

  const aboutContent = {
    es: {
      title: "Sobre Neuroflow AI",
      subtitle: "Transformando empresas a través de la inteligencia artificial estratégica",
      sections: [
        {
          title: "Nuestra Historia",
          description:
            "Fundada con la misión de revolucionar la forma en que las empresas adoptan inteligencia artificial, Neuroflow AI nace del profundo entendimiento de los desafíos de transformación digital en el entorno empresarial moderno.",
          icon: "history",
        },
        {
          title: "Nuestro Equipo",
          description:
            "Un colectivo de expertos en inteligencia artificial, arquitectura de sistemas y estrategia empresarial, dedicados a crear soluciones que generan valor sostenible y transformación exponencial.",
          icon: "team",
        },
        {
          title: "Nuestro Compromiso",
          description:
            "Nos comprometemos a ser partners estratégicos de nuestros clientes, entendiendo profundamente sus necesidades y entregando soluciones de inteligencia artificial que optimizan operaciones y aceleran innovación.",
          icon: "commitment",
        },
      ],
      cta: "¿Listo para transformar tu empresa?",
      button: "Conectar con nosotros",
    },
    en: {
      title: "About Neuroflow AI",
      subtitle: "Transforming businesses through strategic artificial intelligence",
      sections: [
        {
          title: "Our Story",
          description:
            "Founded with the mission to revolutionize how enterprises adopt artificial intelligence, Neuroflow AI emerges from a deep understanding of digital transformation challenges in the modern business landscape.",
          icon: "history",
        },
        {
          title: "Our Team",
          description:
            "A collective of experts in artificial intelligence, systems architecture, and business strategy, dedicated to creating solutions that generate sustainable value and exponential transformation.",
          icon: "team",
        },
        {
          title: "Our Commitment",
          description:
            "We commit to being strategic partners for our clients, deeply understanding their needs and delivering AI solutions that optimize operations and accelerate innovation.",
          icon: "commitment",
        },
      ],
      cta: "Ready to transform your business?",
      button: "Connect with us",
    },
  }

  const content = aboutContent[language]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Neuroflow AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition text-sm">
              {t.nav.solutions}
            </Link>
            <a
              href="https://www.linkedin.com/company/neuroflowai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition text-sm"
            >
              {t.nav.contact}
            </a>
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>

          <div className="md:hidden">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">{content.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.sections.map((section, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  {section.icon === "history" && (
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  {section.icon === "team" && (
                    <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                  )}
                  {section.icon === "commitment" && (
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{content.cta}</h2>
          <a
            href="https://www.linkedin.com/company/neuroflowai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-3 rounded-lg transition text-lg font-medium inline-flex items-center justify-center gap-2"
          >
            {content.button}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition">
                    {t.footer.about}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:contacto@neuroflowai.dev" className="hover:text-foreground transition">
                    {t.footer.email}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/neuroflowai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition"
                  >
                    {t.footer.linkedin}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
