"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LanguageSelector } from "@/components/language-selector"
import { ChevronRight, Brain, Zap, Shield, TrendingUp, Sparkles, ArrowRight } from "lucide-react"
import { translations, type Language } from "@/lib/i18n"

const features = [
  { icon: Brain, colorClass: "primary" },
  { icon: Zap, colorClass: "accent" },
  { icon: Shield, colorClass: "primary" },
  { icon: TrendingUp, colorClass: "accent" },
  { icon: Sparkles, colorClass: "primary" },
  { icon: Brain, colorClass: "accent" },
]

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Neuroflow AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-muted-foreground hover:text-foreground transition text-sm"
            >
              {t.nav.solutions}
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-muted-foreground hover:text-foreground transition text-sm"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-muted-foreground hover:text-foreground transition text-sm"
            >
              {t.nav.resources}
            </button>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition text-sm">
              {t.nav.about}
            </Link>
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            <a
              href="https://www.linkedin.com/company/neuroflowai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-4 py-2 rounded-lg transition"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Language Selector */}
          <div className="md:hidden">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <p className="text-sm text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t.hero.badge}
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            {t.hero.title}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {" "}
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://www.linkedin.com/company/neuroflowai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-3 rounded-lg transition text-lg font-medium inline-flex items-center justify-center gap-2"
            >
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5" />
            </a>
            <Button
              variant="outline"
              size="lg"
              className="text-lg h-12 border-primary/50 hover:bg-primary/10 bg-transparent"
              onClick={() => scrollToSection("solutions")}
            >
              {t.hero.cta2}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">{t.hero.metric1}</p>
              <p className="text-sm text-muted-foreground">{t.hero.metric1Label}</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">{t.hero.metric2}</p>
              <p className="text-sm text-muted-foreground">{t.hero.metric2Label}</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">{t.hero.metric3}</p>
              <p className="text-sm text-muted-foreground">{t.hero.metric3Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              const feature = features[item - 1]
              const Icon = feature.icon
              const isAccent = feature.colorClass === "accent"
              const colorBorder = isAccent ? "accent" : "primary"
              const featureKey = `feature${item}Title` as keyof typeof t.features

              return (
                <Card
                  key={item}
                  className={`p-8 bg-card border-${colorBorder}/20 hover:border-${colorBorder}/50 transition group cursor-pointer`}
                >
                  <div
                    className={`w-12 h-12 bg-${colorBorder}/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${colorBorder}/30 transition`}
                  >
                    <Icon className={`w-6 h-6 text-${colorBorder}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.features[featureKey as keyof typeof t.features]}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t.features[`feature${item}Desc` as keyof typeof t.features]}
                  </p>
                  <p className={`text-sm text-${colorBorder} flex items-center gap-2 group-hover:gap-3 transition`}>
                    {t.features.explore} <ChevronRight className="w-4 h-4" />
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">{t.vision.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.vision.description}</p>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground">{t.vision[`item${item}` as keyof typeof t.vision]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">{t.mission.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.mission.description}</p>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-muted-foreground">{t.mission[`item${item}` as keyof typeof t.mission]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.clients.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {["Innovatech", "DataSync", "CloudNext", "MetaCorp"].map((client) => (
              <div
                key={client}
                className="flex items-center justify-center p-6 rounded-lg border border-border/50 hover:border-primary/30 transition bg-background/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-white">{client[0]}</span>
                </div>
                <span className="font-semibold text-sm text-muted-foreground hidden sm:inline">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/company/neuroflowai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-3 rounded-lg transition text-lg font-medium inline-flex items-center justify-center gap-2"
            >
              {t.cta.cta1}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:contacto@neuroflowai.dev"
              className="border border-primary/50 hover:bg-primary/10 bg-transparent text-foreground px-8 py-3 rounded-lg transition text-lg font-medium inline-flex items-center justify-center"
            >
              {t.cta.cta2}
            </a>
          </div>
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
