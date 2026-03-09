"use client";

import { useEffect } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

interface TranslationWrapperProps {
  children: React.ReactNode;
}

/**
 * Client component wrapper that updates HTML lang and dir attributes based on translation context
 */
export default function TranslationWrapper({ children }: TranslationWrapperProps) {
  const { language } = useTranslation();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return <>{children}</>;
}

