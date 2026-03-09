/**
 * Button component - Reusable button with variants
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * ```
 */

// ============================================
// Type Definitions
// ============================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant style */
  variant?: "primary" | "secondary";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Button content */
  children: React.ReactNode;
}

// ============================================
// Component Implementation
// ============================================

/**
 * Button component with multiple variants and sizes
 *
 * @param props - Button component props
 * @returns Button element
 */
export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-racing-green text-white hover:bg-racing-green-dark focus:ring-racing-green",
    secondary:
      "bg-transparent border-2 border-racing-green text-racing-green hover:bg-racing-green hover:text-white focus:ring-racing-green",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-4 text-base",
    lg: "px-8 py-5 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
