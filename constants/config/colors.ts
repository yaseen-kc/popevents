/**
 * Color constants - Centralized color palette for the application
 *
 * @module constants/config/colors
 */

// ============================================
// Brand Colors
// ============================================

/** Primary dark green (racing green) - Main brand color */
export const RACING_GREEN = "#13261b";

/** Darker variant of racing green - Used for hover states */
export const RACING_GREEN_DARK = "#1a3424";

/** Darkest variant of racing green - Used for hover states */
export const RACING_GREEN_DARKER = "#0f1e15";

// ============================================
// Text and UI Colors
// ============================================

/** Muted text gray (corduroy) - Used for secondary text */
export const CORDUROY = "#5e6b64";

/** Light background color (porcelain) - Used for badges and light backgrounds */
export const PORCELAIN = "#f3f6f5";

/** White color */
export const WHITE = "#ffffff";

/** Gray border color - Used for footer borders */
export const GRAY_BORDER = "#969696";

/** Light gray divider - Used for section dividers */
export const LIGHT_GRAY = "#e5e5e5";

/** Very light background - Used for hover states */
export const LIGHT_BG = "#f9fbfa";

// ============================================
// Category Colors
// ============================================

/** Planning category color - Red */
export const PLANNING = "#d32f2f";

/** Industry category color - Blue */
export const INDUSTRY = "#1976d2";

/** Tips category color - Orange */
export const TIPS = "#f57c00";

/** Trends category color - Purple */
export const TRENDS = "#7b1fa2";

// ============================================
// Color Collections
// ============================================

/**
 * Category color mapping for article categories
 */
export const CATEGORY_COLORS = {
  Planning: PLANNING,
  Industry: INDUSTRY,
  Tips: TIPS,
  Trends: TRENDS,
} as const;

/**
 * All colors as a single object for easy access
 */
export const COLORS = {
  // Brand
  racingGreen: RACING_GREEN,
  racingGreenDark: RACING_GREEN_DARK,
  racingGreenDarker: RACING_GREEN_DARKER,
  // Text/UI
  corduroy: CORDUROY,
  porcelain: PORCELAIN,
  white: WHITE,
  grayBorder: GRAY_BORDER,
  lightGray: LIGHT_GRAY,
  lightBg: LIGHT_BG,
  // Categories
  planning: PLANNING,
  industry: INDUSTRY,
  tips: TIPS,
  trends: TRENDS,
  // Collections
  categoryColors: CATEGORY_COLORS,
} as const;

