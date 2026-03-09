# Restructure Constants Folder for Backend API Integration

## Current Problems

1. **Page-based organization**: Constants are organized by page (landing, about, contact) rather than by domain entities
2. **Mixed concerns**: Static UI text, dynamic data, and configuration are all mixed together
3. **No API boundaries**: Everything is hardcoded with no clear separation for what will come from API
4. **Inconsistent structure**: Some files have types mixed in (platform.ts), others don't 

## Proposed Structure

```
constants/
├── config/              # Static application configuration
│   ├── colors.ts        # Color palette (unchanged)
│   ├── navigation.ts    # Navbar/footer links (unchanged)
│   └── ui.ts           # Shared UI labels, placeholders, button text
├── content/            # Static page content (text, descriptions)
│   ├── landing.ts      # Landing page static text
│   ├── about.ts        # About page static text
│   ├── contact.ts      # Contact page static text
│   └── services.ts     # Services page static text
└── entities/           # Domain entities (API-ready data structures)
    ├── events/
    │   ├── index.ts    # Event data exports
    │   └── mock.ts     # Mock data (temporary, will be replaced by API)
    ├── artists/
    │   ├── index.ts
    │   └── mock.ts
    ├── venues/
    │   ├── index.ts
    │   └── mock.ts
    ├── testimonials/
    │   ├── index.ts
    │   └── mock.ts
    └── articles/
        ├── index.ts
        └── mock.ts
```

## Implementation Steps

### 1. Create New Directory Structure

- Create `constants/config/`, `constants/content/`, and `constants/entities/` directories
- Create subdirectories for each entity type

### 2. Extract Static Configuration

- Move `colors.ts` → `constants/config/colors.ts` (unchanged)
- Move `navigation.ts` → `constants/config/navigation.ts` (unchanged)
- Create `constants/config/ui.ts` with shared UI labels:
  - Form labels/placeholders from contact.ts
  - Button text constants
  - Common UI strings

### 3. Extract Static Content

- Create `constants/content/landing.ts` with:
  - `HERO_CONTENT`, `ABOUT_CONTENT`, `FAQ_CONTENT`, `CTA_CONTENT`
  - Keep only static text, remove dynamic data
- Create `constants/content/about.ts` with:
  - `ABOUT_HERO_CONTENT`, `WHO_WE_ARE_CONTENT`, `MISSION_AND_VALUES_CONTENT`, `CULTURE_SECTION_CONTENT`
- Create `constants/content/contact.ts` with:
  - `CONTACT_CONTENT` (form labels moved to config/ui.ts)
  - `CONTACT_BACKGROUND_IMAGE`
  - `SOCIAL_MEDIA_LINKS`
- Create `constants/content/services.ts` with:
  - Service hero content (static text only)
  - Service detail content (static text only)

### 4. Extract Dynamic Data to Entities

- **Events** (`constants/entities/events/`):
  - Extract from `landing.ts`: `PREVIOUS_EVENTS_CONTENT.events`
  - Extract from `event.ts`: `EVENT_HERO_CONTENT`, `BAHRAIN_COFFEE_FESTIVAL_LOCATION`
  - Extract from `platform.ts`: `HERO_EVENTS`, `EVENTS` (top events)
  - Create `mock.ts` with all event data
  - Create `index.ts` that exports from mock (will switch to API later)

- **Artists** (`constants/entities/artists/`):
  - Extract from `artists.ts`: `ARTIST_DETAIL_MAP`
  - Extract from `platform.ts`: `ARTISTS` array
  - Create `mock.ts` and `index.ts`

- **Venues** (`constants/entities/venues/`):
  - Extract from `platform.ts`: `VENUES` array
  - Create `mock.ts` and `index.ts`

- **Testimonials** (`constants/entities/testimonials/`):
  - Extract from `landing.ts`: `TESTIMONIALS_CONTENT.testimonials`
  - Create `mock.ts` and `index.ts`

- **Articles** (`constants/entities/articles/`):
  - Extract from `landing.ts`: `RESOURCES_AND_INSIGHTS_CONTENT.articles`
  - Create `mock.ts` and `index.ts`

### 5. Create API-Ready Structure

Each entity's `index.ts` will follow this pattern:

```typescript
// constants/entities/events/index.ts
import { mockEvents } from './mock';

// TODO: Replace with API call
export async function getEvents(): Promise<Event[]> {
  // Future: return await api.get('/events');
  return mockEvents;
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  // Future: return await api.get(`/events/${slug}`);
  return mockEvents.find(e => e.slug === slug) || null;
}
```

### 6. Update Imports Across Codebase

- Update all component imports to use new paths
- Update `lib/services.ts` to use new structur
- Ensure type imports remain in `types/` folder

### 7. Create Migration Guide

- Document the new structure
- Add comments indicating what will be replaced by API
- Add TODO comments for API integration points

## Files to Modify

### New Files

- `constants/config/ui.ts`
- `constants/content/landing.ts`
- `constants/content/about.ts`
- `constants/content/contact.ts`
- `constants/content/services.ts`
- `constants/entities/events/index.ts`
- `constants/entities/events/mock.ts`
- `constants/entities/artists/index.ts`
- `constants/entities/artists/mock.ts`
- `constants/entities/venues/index.ts`
- `constants/entities/venues/mock.ts`
- `constants/entities/testimonials/index.ts`
- `constants/entities/testimonials/mock.ts`
- `constants/entities/articles/index.ts`
- `constants/entities/articles/mock.ts`

### Files to Update

- All component files importing from `@/constants/*`
- `lib/services.ts`
- Potentially `types/` files if needed

### Files to Delete (after migration)

- `constants/landing.ts`
- `constants/about.ts`
- `constants/contact.ts`
- `constants/event.ts`
- `constants/artists.ts`
- `constants/platform.ts`
- `constants/service.ts`

## Benefits

1. **Clear separation**: Configuration, content, and data are clearly separated
2. **API-ready**: Entity structure makes it easy to swap mock data for API calls
3. **Domain-driven**: Organized by business entities (events, artists) rather than pages
4. **Maintainable**: Easier to find and update related data
5. **Scalable**: Easy to add new entities or API endpoints

## Migration Strategy

1. Create new structure alongside old files
2. Update imports gradually
3. Test each section as it's migrated
4. Remove old files once all imports are updated
5. Add API integration layer when backend is ready
