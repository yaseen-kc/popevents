/**
 * Theme Provider component - Wraps the app with next-themes ThemeProvider
 *
 * @component
 * @example
 * ```tsx
 * <ThemeProvider>
 *   {children}
 * </ThemeProvider>
 * ```
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Theme provider wrapper that configures next-themes with dark mode as default
 *
 * @param children - React children to wrap
 * @returns ThemeProvider component
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}

