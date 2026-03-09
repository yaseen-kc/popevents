This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17 or higher (required for Next.js 16.0.10)
  - Check your version: `node --version`
  - Download from [nodejs.org](https://nodejs.org/)
- **Package Manager**: One of the following:
  - npm (comes with Node.js)
  - yarn (`npm install -g yarn`)
  - pnpm (`npm install -g pnpm`) - Recommended
  - bun (`npm install -g bun`)
- **Git**: For version control
  - Download from [git-scm.com](https://git-scm.com/)

## Technology Stack

This project is built with the following technologies:

### Core Framework
- **[Next.js 16.0.10](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching (light/dark mode)

### UI Components & Icons
- **[@heroicons/react](https://heroicons.com/)** - Icon library
- **[lucide-react](https://lucide.dev/)** - Additional icon set
- **[react-social-icons](https://github.com/couetilc/react-social-icons)** - Social media icons

### Key Features
- **App Router**: Next.js 13+ App Router for file-based routing
- **Image Optimization**: Automatic image optimization with `next/image`
- **Font Optimization**: Automatic font optimization with `next/font`
- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting with Next.js ESLint configuration

## Project Structure

```
popevents/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── artists/           # Artists listing and detail pages
│   ├── contact/           # Contact page
│   ├── events/            # Events listing and detail pages
│   ├── platform/          # Platform page
│   ├── services/          # Services pages
│   ├── venues/            # Venues listing and detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── about/             # About page components
│   ├── artists/           # Artist-related components
│   ├── contact/           # Contact form components
│   ├── events/            # Event-related components
│   ├── landing/           # Landing page components
│   ├── platform/          # Platform page components
│   ├── services/          # Service-related components
│   ├── venues/            # Venue-related components
│   ├── providers/         # Context providers (Theme, Translation)
│   └── shared/            # Shared components (Navbar, Footer, UI)
├── constants/             # Configuration and data
│   ├── config/            # App configuration (colors, navigation, UI)
│   ├── content/           # Static content (about, contact, landing, services)
│   ├── entities/          # Entity data (events, artists, venues, articles, testimonials)
│   └── translations/      # Translation files
├── contexts/              # React contexts
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and services
├── public/                # Static assets (images, icons)
├── types/                 # TypeScript type definitions
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Available Scripts

In the project directory, you can run the following commands:

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Runs the development server on [http://localhost:3000](http://localhost:3000). The page will reload automatically when you make changes.

### Production Build

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Creates an optimized production build of the application. The output is stored in the `.next` directory.

### Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

Starts the production server. **Note:** You must run `build` first before running `start`.

### Linting

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

Runs ESLint to check for code quality and style issues.

## Environment Variables

Create a `.env.local` file in the project root with the following entry so the contact form can submit to Formspree:

```
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_id_here
```

Restart the dev server after changing environment variables.

## Managing Content Entities

The project stores content data (events, artists, venues, articles, testimonials) in the `constants/entities/` directory. Each entity type has two files:
- `mock.ts` - Contains the actual data (edit this file to add/update entities)
- `index.ts` - Exports API-ready functions and types (typically doesn't need modification)

### General Structure

Each entity directory follows this pattern:
```
constants/entities/
├── events/
│   ├── index.ts    # Exports and API functions
│   └── mock.ts     # Event data (edit this)
├── artists/
│   ├── index.ts
│   └── mock.ts     # Artist data (edit this)
├── venues/
│   ├── index.ts
│   └── mock.ts     # Venue data (edit this)
├── articles/
│   ├── index.ts
│   └── mock.ts     # Article data (edit this)
└── testimonials/
    ├── index.ts
    └── mock.ts     # Testimonial data (edit this)
```

### Adding/Updating Events

**Location:** `constants/entities/events/mock.ts`

Events are stored in the `mockEventDetailMap` object. Each event entry requires:

- **id** (string): Unique identifier in kebab-case (e.g., `"mina-nader-comedy-manama"`)
- **status** (`"completed" | "in-progress"`): Current status of the event
- **heroContent** (optional): Content for the event detail page
  - `slug`: Event slug (usually matches id)
  - `slides`: Array of image slides
  - `badge`: Badge text (e.g., "Live Comedy", "Comedy Night")
  - `info`: Event information object
    - `title`: Event title
    - `shortDescription`: Brief description
    - `location`: Venue location string
    - `locationUrl`: Google Maps URL
    - `date`: Formatted date string
    - `description`: Array of description paragraphs
    - `priceFrom`: Starting price string
- **location** (optional): Venue location details
  - `venueName`: Name of the venue
  - `venueAddress`: Full address
  - `directionsUrl`: Google Maps directions URL
  - `byCarInstructions`: Driving directions
  - `byTaxiInstructions`: Taxi instructions
- **topEvent** (optional): Simplified event data for listings
  - `id`, `title`, `price`, `dateRange`, `badge`, `image`
- **termsAndCondition** (optional): Array of terms sections
  - Each section has `title` and `items` array

**Example:**
```typescript
"your-event-slug": {
  id: "your-event-slug",
  status: "in-progress",
  heroContent: {
    slug: "your-event-slug",
    slides: [
      {
        id: "slide-1",
        image: {
          src: "https://example.com/image.webp",
          alt: "Event poster description",
        },
      },
    ],
    badge: "Live Comedy",
    info: {
      title: "Your Event Title",
      shortDescription: "Brief description here",
      location: "Venue Name, City, Country",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=...",
      date: "Sat, 8 Nov 2025",
      description: [
        "First paragraph of description",
        "Second paragraph of description",
      ],
      priceFrom: "10 BHD",
    },
  },
  location: {
    venueName: "Venue Name",
    venueAddress: "Full Address",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=...",
    mapEmbedUrl: "",
    byCarInstructions: "Driving directions here",
    byTaxiInstructions: "Taxi instructions here",
  },
  topEvent: {
    id: "your-event-slug",
    title: "Your Event Title",
    price: "10 BHD",
    dateRange: "Sat, 8 Nov 2025",
    badge: "Exclusive",
    image: {
      src: "https://example.com/image.webp",
      alt: "Event image alt text",
    },
  },
  termsAndCondition: [
    {
      title: "General Information",
      items: [
        "Term item 1",
        "Term item 2",
      ],
    },
  ],
},
```

**Hero Events Carousel:**
To add an event to the hero carousel, also add an entry to the `mockHeroEvents` array:
```typescript
{
  id: "your-event-slug",
  title: "Your Event Title",
  date: "Sat, 8 Nov 2025",
  venue: "Venue Name",
  image: {
    src: "https://example.com/banner-image.webp",
    alt: "Banner image description",
  },
}
```

### Adding/Updating Artists

**Location:** `constants/entities/artists/mock.ts`

Artists are stored in the `mockArtistDetailMap` object. Each artist entry requires:

- **id** (string): Unique identifier in kebab-case (e.g., `"mina-nader"`)
- **name** (string): Artist's full name
- **followers** (string): Follower count display (e.g., `"2M followers"`)
- **biography** (string): Detailed biography text
- **image** (object): Artist image
  - `src`: Image URL
  - `alt`: Alt text description
- **events** (optional): Array of upcoming events for this artist

**Example:**
```typescript
"artist-slug": {
  id: "artist-slug",
  name: "Artist Name",
  followers: "500K followers",
  biography: "Detailed biography text here...",
  image: {
    src: "https://example.com/artist-image.jpg",
    alt: "Artist performing on stage",
  },
  events: [
    {
      dateTime: "Fri, 19 Sep 2025, 8:00 PM",
      name: "Event Name",
      venue: "Venue Name",
      price: "150 BHD onwards",
      location: "City, Country",
      image: {
        src: "https://example.com/event-image.jpg",
        alt: "Event poster",
      },
    },
  ],
},
```

### Adding/Updating Venues

**Location:** `constants/entities/venues/mock.ts`

Venues are stored in the `mockVenueDetailMap` object. Each venue entry requires:

- **id** (string): Unique identifier in kebab-case (e.g., `"bahrain-national-theatre"`)
- **name** (string): Venue name
- **location** (string): City and country (e.g., `"Manama, Bahrain"`)
- **description** (string): Detailed description of the venue
- **image** (object): Venue image
  - `src`: Image URL
  - `alt`: Alt text description

**Example:**
```typescript
"venue-slug": {
  id: "venue-slug",
  name: "Venue Name",
  location: "City, Country",
  description: "Detailed description of the venue, its facilities, capacity, and notable features...",
  image: {
    src: "https://example.com/venue-image.jpeg",
    alt: "Venue exterior view",
  },
},
```

### Adding/Updating Articles

**Location:** `constants/entities/articles/mock.ts`

Articles are stored in the `mockArticles` object with separate arrays for English (`en`) and Arabic (`ar`). Each article requires:

- **category** (`"Planning" | "Industry" | "Tips" | "Trends"`): Article category
- **date** (string): Publication date (formatted string)
- **title** (string): Article title
- **description** (string): Article description/excerpt
- **image** (object): Article image
  - `src`: Image URL
  - `alt`: Alt text description

**Important:** You must provide both English and Arabic versions.

**Example:**
```typescript
// English version in mockArticles.en array
{
  category: "Planning" as const,
  date: "May 11, 2025",
  title: "Article Title in English",
  description: "Article description in English...",
  image: {
    src: "https://example.com/article-image.jpg",
    alt: "Article image description",
  },
},

// Arabic version in mockArticles.ar array
{
  category: "Planning" as const,
  date: "11 مايو 2025",
  title: "عنوان المقال بالعربية",
  description: "وصف المقال بالعربية...",
  image: {
    src: "https://example.com/article-image.jpg",
    alt: "وصف الصورة",
  },
},
```

### Adding/Updating Testimonials

**Location:** `constants/entities/testimonials/mock.ts`

Testimonials are stored in the `mockTestimonials` object with separate arrays for English (`en`) and Arabic (`ar`). Each testimonial requires:

- **quote** (string): Testimonial quote text
- **name** (string): Client's name
- **company** (string): Client's company name
- **avatar** (object): Client avatar image
  - `src`: Image URL
  - `alt`: Alt text description

**Important:** You must provide both English and Arabic versions.

**Example:**
```typescript
// English version in mockTestimonials.en array
{
  quote: "Testimonial quote text in English...",
  name: "Client Name",
  company: "Company Name",
  avatar: {
    src: "https://example.com/avatar.jpg",
    alt: "Portrait of Client Name",
  },
},

// Arabic version in mockTestimonials.ar array
{
  quote: "نص الشهادة بالعربية...",
  name: "اسم العميل",
  company: "اسم الشركة",
  avatar: {
    src: "https://example.com/avatar.jpg",
    alt: "صورة اسم العميل",
  },
},
```

### Best Practices

When adding or updating entities, follow these guidelines:

1. **IDs**: Use kebab-case for all IDs (e.g., `"mina-nader-comedy-manama"`, `"bahrain-national-theatre"`)
2. **Image URLs**: Ensure all image URLs are valid, accessible, and use appropriate formats (`.webp`, `.jpg`, `.jpeg`, `.png`)
3. **Descriptions**: Keep descriptions concise but informative
4. **Bilingual Content**: For articles and testimonials, maintain consistency between English and Arabic versions
5. **Date Formats**: Use consistent date formatting (e.g., `"Sat, 8 Nov 2025"` for events, `"May 11, 2025"` for articles)
6. **Follow Patterns**: Reference existing entries in the mock files as templates
7. **Type Safety**: The codebase uses TypeScript, so ensure your data matches the expected types
8. **Status Updates**: Update event `status` from `"in-progress"` to `"completed"` when events finish

### Notes

- The `index.ts` files automatically derive data from `mock.ts` files, so you typically don't need to modify them when adding new entities
- All entity data is currently stored in mock files and will eventually be replaced by API calls
- TypeScript types are defined in separate type files (e.g., `@/types/artists`, `@/types/venues`, `@/types/event-tickets`, `@/types/landing`)

## Troubleshooting

### Common Issues and Solutions

#### Environment Variables Not Working

**Problem:** Environment variables are undefined in the application.

**Solutions:**
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Restart the development server after adding/changing environment variables
- Check that `.env.local` is in the project root (not in a subdirectory)
- Verify variable names match exactly (case-sensitive)
- For production, ensure variables are set in your deployment platform (Vercel, etc.)

#### Build Errors

**Problem:** `npm run build` fails with errors.

**Solutions:**
- Clear the `.next` directory: `rm -rf .next` (or `rmdir /s .next` on Windows)
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: Look for red underlines in your IDE
- Ensure all imports are correct and files exist
- Check `next.config.ts` for configuration issues

#### Image Optimization Errors

**Problem:** Images fail to load or show optimization errors.

**Solutions:**
- Ensure image URLs are added to `remotePatterns` in `next.config.ts`
- Use the `next/image` component instead of regular `<img>` tags
- Verify image URLs are accessible and use HTTPS
- Check that image domains are correctly configured in `next.config.ts`

#### Port Already in Use

**Problem:** `Error: Port 3000 is already in use`

**Solutions:**
- Find and kill the process using port 3000:
  ```bash
  # On macOS/Linux
  lsof -ti:3000 | xargs kill -9
  
  # On Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```
- Or use a different port: `npm run dev -- -p 3001`

#### Dependency Installation Issues

**Problem:** `npm install` fails or takes too long.

**Solutions:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json` (or `pnpm-lock.yaml`), then reinstall
- Try using a different package manager (pnpm is recommended)
- Check your Node.js version matches requirements (18.17+)
- On Windows, try running terminal as administrator

#### TypeScript Errors

**Problem:** TypeScript compilation errors.

**Solutions:**
- Run `npm run build` to see all TypeScript errors at once
- Check that types are imported correctly from `@/types/*`
- Ensure all required properties are provided in entity data
- Verify that mock data matches the TypeScript interfaces
- Use your IDE's TypeScript language server to see inline errors

#### Module Not Found Errors

**Problem:** `Cannot find module` or `Module not found` errors.

**Solutions:**
- Check that the file path is correct (case-sensitive on Linux/Mac)
- Verify imports use the `@/` alias correctly (configured in `tsconfig.json`)
- Ensure the file extension is correct (`.ts`, `.tsx`, `.js`, `.jsx`)
- Run `npm install` to ensure all dependencies are installed

#### Form Submission Not Working

**Problem:** Contact form doesn't submit or shows errors.

**Solutions:**
- Verify `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set correctly
- Check Formspree form ID is valid and form is active
- Ensure the form endpoint URL is correct
- Check browser console for error messages
- Verify network requests in browser DevTools

### Getting Help

If you encounter issues not covered here:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Search [GitHub Issues](https://github.com/vercel/next.js/issues)
3. Ask questions on [Next.js Discord](https://nextjs.org/discord)
4. Review the project's issue tracker (if applicable)

## Contributing

We welcome contributions! Please follow these guidelines when contributing to the project.

### Code Style and Conventions

- **TypeScript**: Use TypeScript for all new files. Avoid `any` types when possible.
- **Components**: Use functional components with TypeScript interfaces for props.
- **File Naming**: Use PascalCase for components (`ContactForm.tsx`) and kebab-case for utilities (`format-date.ts`).
- **Imports**: Use the `@/` alias for internal imports (e.g., `@/components/shared/Button`).
- **Formatting**: Code should be formatted consistently. Consider using Prettier if not already configured.

### Git Workflow

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following the code style guidelines.

3. **Commit your changes** using conventional commits format:
   ```bash
   git commit -m "feat(scope): add new feature"
   git commit -m "fix(scope): fix bug description"
   git commit -m "style(scope): update styling"
   git commit -m "docs(scope): update documentation"
   ```

   **Commit Types:**
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes (formatting, etc.)
   - `refactor`: Code refactoring
   - `test`: Adding or updating tests
   - `chore`: Maintenance tasks

   **Examples:**
   - `feat(landing): add hero section`
   - `fix(navbar): correct mobile menu toggle`
   - `style(contact): update form styling`
   - `docs(readme): add deployment instructions`

4. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub with a clear description of your changes.

### Pull Request Process

- **Title**: Use a clear, descriptive title
- **Description**: Explain what changes you made and why
- **Testing**: Describe how you tested your changes
- **Screenshots**: Include screenshots for UI changes
- **Breaking Changes**: Clearly mark any breaking changes

### Code Review Guidelines

- All pull requests require review before merging
- Address review comments promptly
- Keep pull requests focused and reasonably sized
- Ensure all checks pass (build, lint, etc.)

### Adding New Features

When adding new features:
1. Follow the existing project structure
2. Add TypeScript types for new data structures
3. Update relevant documentation
4. Ensure consistency with existing code patterns
5. Test thoroughly before submitting

### Reporting Issues

When reporting issues:
- Use a clear, descriptive title
- Provide steps to reproduce the issue
- Include relevant error messages and logs
- Specify your environment (OS, Node.js version, browser)
- Add screenshots if applicable

### Questions?

If you have questions about contributing:
- Check existing documentation
- Review similar pull requests
- Ask in discussions or issues

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Deploy on Vercel

[Vercel](https://vercel.com) is the recommended platform for deploying Next.js applications. It's created by the team behind Next.js and offers seamless integration.

#### Step-by-Step Deployment

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import your project to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Sign in with your GitHub account
   - Click "Import Project" and select your repository
   - Vercel will automatically detect Next.js and configure the build settings

3. **Configure Environment Variables**
   - In the Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add the following variables:
     ```
     NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_id_here
     ```
   - Make sure to add it for all environments (Production, Preview, Development)

4. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Your app will be live at `https://your-project.vercel.app`

#### Build Settings

Vercel automatically detects Next.js projects and uses these settings:
- **Build Command**: `next build` (automatically set)
- **Output Directory**: `.next` (automatically set)
- **Install Command**: `pnpm install` (or `npm install` / `yarn install` based on your lock file)

#### Preview Deployments

Every push to a branch other than `main` creates a preview deployment. This allows you to:
- Test changes before merging to production
- Share preview URLs with team members
- Review changes in a production-like environment

#### Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain and follow the DNS configuration instructions

#### Production Deployment Checklist

Before deploying to production, ensure:
- [ ] All environment variables are set in Vercel dashboard
- [ ] Build completes successfully locally (`npm run build`)
- [ ] All tests pass (if applicable)
- [ ] Images are optimized and hosted on allowed domains (configured in `next.config.ts`)
- [ ] Form submissions are working (test contact form)
- [ ] All external links and APIs are accessible

### Local Production Build Testing

Before deploying, test your production build locally:

```bash
# Build the production version
npm run build

# Start the production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to verify everything works correctly.

### Other Deployment Options

While Vercel is recommended, you can also deploy to:
- **Netlify**: Similar to Vercel, supports Next.js out of the box
- **AWS Amplify**: AWS hosting solution
- **Docker**: Build a containerized version for any platform
- **Self-hosted**: Run on your own server using `npm start` after building

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
