"use client"
import { Button } from "@/components/ui/button"

interface LanguageSelectorProps {
  currentLanguage: "es" | "en"
  onLanguageChange: (lang: "es" | "en") => void
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex gap-1 bg-card/50 backdrop-blur-sm rounded-lg p-1 border border-border/30">
      <Button
        variant={currentLanguage === "es" ? "default" : "ghost"}
        size="sm"
        className="w-10 h-8"
        onClick={() => onLanguageChange("es")}
      >
        ES
      </Button>
      <Button
        variant={currentLanguage === "en" ? "default" : "ghost"}
        size="sm"
        className="w-10 h-8"
        onClick={() => onLanguageChange("en")}
      >
        EN
      </Button>
    </div>
  )
}
