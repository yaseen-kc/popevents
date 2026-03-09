/**
 * Navbar component - Main navigation bar for the website
 *
 * @component
 * @example
 * ```tsx
 * <Navbar />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Languages, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { NAVBAR_LINKS } from "@/constants/config/navigation";
import { RACING_GREEN, CORDUROY } from "@/constants/config/colors";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * Navigation bar section component with logo, navigation links, and search
 *
 * @returns Navbar element
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  /**
   * Toggles mobile menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Closes mobile menu when a link is clicked
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Toggles dark mode using next-themes
   */
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Helper to get the current theme icon and label
  const getThemeToggleContent = () => {
    if (!mounted) {
      // Return default (light mode) during SSR to match initial render
      return {
        icon: (
          <Moon
            size={20}
            className="shrink-0"
            stroke={CORDUROY}
            strokeWidth={1.5}
          />
        ),
        label: "Switch to dark mode",
      };
    }

    return theme === "dark"
      ? {
          icon: (
            <Sun
              size={20}
              className="shrink-0"
              stroke={CORDUROY}
              strokeWidth={1.5}
            />
          ),
          label: "Switch to light mode",
        }
      : {
          icon: (
            <Moon
              size={20}
              className="shrink-0"
              stroke={CORDUROY}
              strokeWidth={1.5}
            />
          ),
          label: "Switch to dark mode",
        };
  };

  const themeToggleContent = getThemeToggleContent();

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const languages = [
    { code: "en" as const, label: "English (Default)" },
    { code: "ar" as const, label: "Arabic" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-gray-100"
      aria-label="Main navigation"
    >
      {/* Main Navbar Container */}
      <div className="flex flex-row items-center justify-between w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-0 h-[65px] md:h-[60px]">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-2 h-[28.8px] hover:opacity-80 transition-opacity"
          aria-label="Pop Events Home"
        >
          <span className="font-poppins text-2xl font-normal leading-[29px] tracking-[-0.72px] text-racing-green">
            Pop Events
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-row items-center justify-center gap-6 h-[41px] px-0">
          {NAVBAR_LINKS[language].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-poppins text-base font-normal leading-6 text-corduroy hover:text-racing-green transition-colors px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions: Language Selector & Dark Mode */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative" ref={languageDropdownRef}>
            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 hover:opacity-80 transition-opacity"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              aria-label="Select language"
              aria-expanded={isLanguageDropdownOpen}
            >
              <Languages
                size={20}
                className="shrink-0"
                stroke={CORDUROY}
                strokeWidth={1.5}
              />
            </button>

            {/* Language Dropdown */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center justify-between px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        language === lang.code
                          ? "bg-gray-50 text-racing-green"
                          : "text-corduroy"
                      }`}
                    >
                      <span className="font-poppins text-sm">{lang.label}</span>
                      {language === lang.code && (
                        <Check
                          size={16}
                          className="text-racing-green"
                          strokeWidth={2}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            className="flex items-center justify-center w-5 h-5 hover:opacity-80 transition-opacity"
            onClick={toggleDarkMode}
            aria-label={themeToggleContent.label}
          >
            {themeToggleContent.icon}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-6 h-6"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu
            size={24}
            className="shrink-0"
            stroke={RACING_GREEN}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Drawer */}
          <div className="fixed top-0 left-0 bottom-0 w-full bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out flex flex-col">
            {/* Menu Header */}
            <div className="flex flex-row items-center justify-between w-full px-6 py-6 border-b border-gray-100">
              {/* Logo Section */}
              <Link
                href="/"
                className="flex flex-row items-center justify-center gap-2 h-[28.8px] hover:opacity-80 transition-opacity"
                onClick={closeMobileMenu}
                aria-label="Pop Events Home"
              >
                <span className="font-poppins text-2xl font-normal leading-[29px] tracking-[-0.72px] text-racing-green">
                  Pop Events
                </span>
              </Link>

              {/* Close Button */}
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X
                  size={16}
                  className="shrink-0"
                  stroke={RACING_GREEN}
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col items-start justify-between flex-1 px-6 py-8 min-h-0">
              {/* Navigation Links */}
              <div className="flex flex-col items-start gap-6 w-full">
                {NAVBAR_LINKS[language].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-poppins text-base font-normal leading-6 text-corduroy hover:text-racing-green transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Language Selector & Dark Mode at Bottom */}
              <div className="w-full mt-auto pt-8 flex flex-col gap-4">
                {/* Language Selector */}
                <div className="flex flex-col gap-2">
                  <span className="font-poppins text-sm font-medium text-corduroy mb-1">
                    Language
                  </span>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        closeMobileMenu();
                      }}
                      className={`flex items-center justify-between px-4 py-2 rounded hover:bg-gray-50 transition-colors ${
                        language === lang.code
                          ? "bg-gray-50 text-racing-green"
                          : "text-corduroy"
                      }`}
                    >
                      <span className="font-poppins text-sm">{lang.label}</span>
                      {language === lang.code && (
                        <Check
                          size={16}
                          className="text-racing-green"
                          strokeWidth={2}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Dark Mode Toggle */}
                <button
                  type="button"
                  className="flex items-center justify-start hover:opacity-80 transition-opacity"
                  onClick={toggleDarkMode}
                  aria-label={themeToggleContent.label}
                >
                  {themeToggleContent.icon}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
