/**
 * Translation Context - Manages language state and provides translation utilities
 *
 * @module contexts/TranslationContext
 */

"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "ar";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const STORAGE_KEY = "popevents-language";

interface TranslationProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

/**
 * Translation provider that manages language state and persists to localStorage
 *
 * @param children - React children to wrap
 * @returns TranslationProvider component
 */
export function TranslationProvider({ children, initialLanguage }: TranslationProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage ?? "en");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") {
      setLanguageState(stored);
    }
  }, []);

  // Persist language to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.cookie = `${STORAGE_KEY}=${language}; path=/; max-age=31536000`;
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

/**
 * Hook to access translation context
 *
 * @returns Translation context with current language and setter
 * @throws Error if used outside TranslationProvider
 */
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}

