"use client"

interface LanguageSelectorProps {
  currentLanguage: "es" | "en"
  onLanguageChange: (lang: "es" | "en") => void
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div
      className="inline-flex items-center text-xs font-medium tracking-widest uppercase select-none"
      style={{ color: "var(--muted-foreground)" }}
    >
      <button
        type="button"
        onClick={() => onLanguageChange("es")}
        className="px-1.5 py-1 transition-colors"
        style={{
          color: currentLanguage === "es" ? "var(--foreground)" : "inherit",
        }}
      >
        ES
      </button>
      <span aria-hidden style={{ opacity: 0.4 }}>/</span>
      <button
        type="button"
        onClick={() => onLanguageChange("en")}
        className="px-1.5 py-1 transition-colors"
        style={{
          color: currentLanguage === "en" ? "var(--foreground)" : "inherit",
        }}
      >
        EN
      </button>
    </div>
  )
}
