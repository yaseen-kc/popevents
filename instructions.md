# Instructions Document for PopEvents Landing Page

## Project Overview

This is a Next.js 16 application for a shows and concert event management company landing page. The project uses TypeScript, Tailwind CSS v4, and React 19.

## File and Folder Structure

```
popevents/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata and global styles
│   ├── page.tsx                 # Landing page (home)
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── blog/
│   │   ├── page.tsx             # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Individual blog post page (optional)
│   ├── globals.css              # Global styles and Tailwind imports
│   └── favicon.ico              # Site favicon
├── components/                   # Reusable React components
│   ├── shared/                  # Shared components used across all pages
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar.tsx       # Navigation bar component
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   └── Header.tsx       # Optional header component
│   │   └── ui/                  # Shared UI components
│   │       ├── Button.tsx       # Reusable button component
│   │       ├── Card.tsx         # Reusable card component
│   │       ├── Input.tsx        # Reusable input component
│   │       └── Section.tsx      # Reusable section wrapper
│   ├── landing/                 # Landing page components (feature-based)
│   │   ├── Hero.tsx             # Hero section
│   │   ├── ServicesPreview.tsx  # Services preview section
│   │   ├── FeaturedEvents.tsx   # Featured events section
│   │   └── Testimonials.tsx     # Testimonials section
│   ├── services/                # Services page components (feature-based)
│   │   ├── ServicesOverview.tsx # Services overview section
│   │   ├── ServiceCard.tsx      # Individual service card
│   │   └── Pricing.tsx          # Pricing section (if applicable)
│   ├── about/                   # About page components (feature-based)
│   │   ├── CompanyStory.tsx     # Company story/mission section
│   │   ├── Team.tsx             # Team section
│   │   └── Values.tsx           # Company values section
│   ├── contact/                 # Contact page components (feature-based)
│   │   ├── ContactForm.tsx       # Contact form component
│   │   ├── ContactInfo.tsx      # Contact information display
│   │   └── Map.tsx              # Map/location component (optional)
│   └── blog/                    # Blog page components (feature-based)
│       ├── BlogCard.tsx         # Individual blog post card
│       ├── BlogList.tsx         # Blog listing component
│       └── BlogFilters.tsx      # Blog filters/search (optional)
├── lib/                         # Utility functions and helpers
│   └── utils.ts                 # General utility functions
├── types/                        # TypeScript type definitions (all types stored here)
│   ├── index.ts                 # Shared/common types and interfaces
│   ├── landing.ts               # Landing page types
│   ├── services.ts              # Services page types
│   ├── about.ts                 # About page types
│   ├── contact.ts               # Contact page types
│   ├── blog.ts                  # Blog page types
│   ├── components.ts            # Component prop types
│   └── api.ts                   # API response types (if applicable)
├── constants/                    # All text content and constants
│   ├── index.ts                 # Shared constants
│   ├── landing.ts               # Landing page text content (h1, h2, p, etc.)
│   ├── services.ts              # Services page text content
│   ├── about.ts                 # About page text content
│   ├── contact.ts               # Contact page text content
│   ├── blog.ts                  # Blog page text content
│   └── navigation.ts            # Navigation menu text
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   ├── icons/                   # Icon files
│   └── ...                      # Other static files
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration (if needed)
├── postcss.config.mjs           # PostCSS configuration
├── eslint.config.mjs            # ESLint configuration
└── instructions.md              # This file

```

## Code Comment Formats

### Component Comments

Use JSDoc-style comments for all components:

````typescript
/**
 * Navbar component - Main navigation bar for the website
 *
 * @component
 * @example
 * ```tsx
 * <Navbar />
 * ```
 */
export default function Navbar() {
  // Component implementation
}
````

### Function Comments

Document all functions with parameters and return values:

```typescript
/**
 * Formats a date string to a readable format
 *
 * @param dateString - ISO date string to format
 * @param format - Optional format type ('short' | 'long')
 * @returns Formatted date string
 * @example
 * formatDate('2024-01-15', 'long') // Returns "January 15, 2024"
 */
export function formatDate(
  dateString: string,
  format?: "short" | "long"
): string {
  // Implementation
}
```

### Inline Comments

Use inline comments sparingly, only when code logic is not immediately obvious:

```typescript
// Calculate total events count from filtered array
const totalEvents = filteredEvents.reduce((sum, event) => sum + event.count, 0);
```

### Type/Interface Comments

Document TypeScript types and interfaces:

```typescript
/**
 * Event data structure for concert and show events
 *
 * @interface Event
 */
interface Event {
  /** Unique identifier for the event */
  id: string;
  /** Event title/name */
  title: string;
  /** Event date in ISO format */
  date: string;
  /** Event location */
  location: string;
}
```

### Section Comments

Use section comments to organize code within files:

```typescript
// ============================================
// Component Imports
// ============================================
import { useState } from "react";
import Button from "@/components/ui/Button";

// ============================================
// Type Definitions
// ============================================
interface Props {
  // ...
}

// ============================================
// Component Implementation
// ============================================
export default function Component() {
  // ...
}
```

## Naming Conventions

### Files and Folders

- **Components**: PascalCase (e.g., `Navbar.tsx`, `ContactForm.tsx`)
- **Pages**: lowercase with hyphens for routes (e.g., `page.tsx` in `about/` folder)
- **Utilities**: camelCase (e.g., `utils.ts`, `formatDate.ts`)
- **Types**: camelCase with `.ts` extension (e.g., `types.ts`)

### Variables and Functions

- **Variables**: camelCase (e.g., `eventCount`, `userName`)
- **Functions**: camelCase (e.g., `handleSubmit`, `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_EVENTS`, `API_BASE_URL`)
- **Components**: PascalCase (e.g., `EventCard`, `ContactForm`)

### CSS Classes

- Use Tailwind utility classes primarily
- For custom classes, use kebab-case (e.g., `event-card`, `hero-section`)

## Development Guidelines

### Component Structure

1. **Imports**: Group imports in this order:

   - React and Next.js imports
   - Third-party library imports
   - Internal component imports
   - Type imports
   - Utility/helper imports

2. **Component Organization**:

   ```typescript
   // 1. Imports
   import { ... } from '...';

   // 2. Type definitions
   interface Props { ... }

   // 3. Component
   export default function Component({ prop1, prop2 }: Props) {
     // 4. Hooks
     const [state, setState] = useState();

     // 5. Event handlers
     const handleClick = () => { ... };

     // 6. Render
     return ( ... );
   }
   ```

### TypeScript Best Practices

- Always define types for component props
- Use `interface` for object shapes, `type` for unions/intersections
- Avoid `any` type - use `unknown` if type is truly unknown
- Export types from a central `types/index.ts` file when shared

### Styling Guidelines

- Use Tailwind CSS utility classes for styling
- Create reusable component variants when needed
- Use CSS variables for theme colors (define in `globals.css`)
- Keep custom CSS minimal - prefer Tailwind utilities

### Page Structure

Each page should follow this structure:

1. Hero/Header section
2. Main content sections
3. Call-to-action section (if applicable)
4. Footer (via layout)

### Accessibility

- Use semantic HTML elements
- Include proper ARIA labels where needed
- Ensure keyboard navigation works
- Maintain proper heading hierarchy (h1 → h2 → h3)

### Performance

- Use Next.js Image component for images
- Implement lazy loading for below-the-fold content
- Optimize images before adding to `public/images/`
- Use dynamic imports for heavy components when appropriate

## Page-Specific Requirements

### Landing Page (`app/page.tsx`)

- Hero section with compelling headline
- Services preview section
- Featured events section
- Testimonials section
- Call-to-action section

### Services Page (`app/services/page.tsx`)

- Services overview
- Detailed service offerings
- Pricing information (if applicable)
- Service-specific call-to-action

### About Page (`app/about/page.tsx`)

- Company story/mission
- Team section
- Company values
- Timeline/history (optional)

### Contact Page (`app/contact/page.tsx`)

- Contact form
- Contact information (address, phone, email)
- Map/location (optional)
- Social media links

### Blog Page (`app/blog/page.tsx`)

- Blog post listing
- Category filters (optional)
- Search functionality (optional)
- Pagination (if needed)

## Git Workflow

- Use descriptive commit messages
- Follow conventional commits format: `type(scope): description`
- Examples:
  - `feat(landing): add hero section`
  - `fix(navbar): correct mobile menu toggle`
  - `style(contact): update form styling`

## Environment Variables

Create a `.env.local` file for local development (do not commit):

- API endpoints (if applicable)
- Third-party service keys
- Feature flags

## Testing (Future)

- Unit tests for utility functions
- Component tests for UI components
- Integration tests for critical user flows

## Deployment

- Build command: `npm run build` or `pnpm build`
- Start command: `npm start` or `pnpm start`
- Ensure all environment variables are set in production
