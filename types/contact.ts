/**
 * Contact page type definitions
 *
 * @module types/contact
 */

/**
 * ContactUs component props
 */
export interface ContactUsProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Contact form data structure
 */
export interface ContactFormData {
  /** User's name */
  name: string;
  /** User's email address */
  email: string;
  /** User's message */
  message: string;
}




