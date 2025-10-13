# Hotel Management System

## Overview

This is a production-ready Next.js hotel management system frontend designed to help users find and browse luxury hotels. The application features a modern, fully responsive interface built with React, TypeScript, and a comprehensive UI component library (shadcn/ui). The system follows a backend-oriented architecture with reusable components and a separated data layer, making it easy to integrate with any API.

## Recent Changes (Latest Session)

**Production-Ready Home Page Implementation (Completed)**
- Migrated to production-ready architecture with clean separation of concerns
- Created reusable component library: Header, Navigation, Footer, DestinationCard, HotelCard, PropertyCard
- Implemented TypeScript interfaces in `types/index.ts` for type safety
- Separated data layer in `lib/data.ts` ready for API integration
- Used Next.js Image and Link components throughout for optimization
- Fully responsive design across desktop, tablet, and mobile with proper breakpoints
- Added smooth hover animations (200-300ms ease-in-out transitions)
- Semantic HTML with proper accessibility (labels, aria-labels, alt text)
- All console errors resolved with proper prefetch handling
- Follows Figma design precisely: Primary color #3F2C77, Poppins and Inter fonts

## User Preferences

- Preferred communication style: Simple, everyday language
- Design requirements: Primary color #3F2C77, fonts Poppins and Inter from Figma design
- Architecture preference: Backend-oriented UI with data separated from components for easy API integration
- Code style: Production-ready with reusable components, no hardcoded data in components
- Responsiveness: Full responsiveness across desktop, tablet, mobile with hover animations (200-300ms ease-in-out)

## System Architecture

### Frontend Architecture

**Framework: Next.js 15 with App Router**
- Modern App Router architecture with server and client components
- TypeScript used throughout for type safety
- Production-ready structure with separated data layer (`lib/data.ts`)
- Type definitions in `types/index.ts` for maintainability
- Reusable component library in `components/` directory
- Client-side state management with React hooks and TanStack Query
- Configured as standalone build for optimized deployment
- Next.js Image and Link components used throughout for optimization
- Prefetch disabled on navigation links (remove when routes are implemented)

**UI Component System**
- Built on Radix UI primitives for accessible, unstyled components
- Styled with Tailwind CSS using custom design system (#3F2C77 primary color)
- shadcn/ui pattern with "New York" style variant
- Reusable components: Header, Navigation, Footer, DestinationCard, HotelCard, PropertyCard
- Comprehensive pre-built components: forms, dialogs, dropdowns, navigation, data display, feedback
- Design tokens managed through CSS variables
- Semantic HTML with proper accessibility attributes
- Smooth hover animations with 200-300ms ease-in-out transitions

**Styling Approach**
- Tailwind CSS for utility-first styling
- Custom design system: Primary #3F2C77, Accent #FEBC11
- Font families: Poppins (primary headings/UI), Inter (secondary/body text)
- Fully responsive design with mobile-first breakpoints (md:768px, lg:1024px)
- Custom animations: fade, marquee, shimmer
- Hover effects on all interactive elements (cards, buttons, links)
- Smooth transitions: 200-300ms ease-in-out for professional feel

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- Custom query client configuration with 5-second stale time
- API-ready architecture: Data layer separated in `lib/data.ts`
- Type-safe interfaces in `types/index.ts` (Destination, Hotel, Property, FooterLink)
- Helper functions for API requests with automatic error handling
- Ready for API integration - just swap static data with fetch calls
- Toast notifications for user feedback via Radix UI Toast

### Backend/API Architecture

**Data Layer**
- Drizzle ORM for type-safe database operations
- Schema defined with Drizzle-Zod for runtime validation
- Currently configured for Neon Database (PostgreSQL-compatible serverless database)
- User authentication schema with username/password fields
- UUID-based primary keys using PostgreSQL's `gen_random_uuid()`

**API Design**
- RESTful API pattern with fetch-based requests
- Custom API request wrapper with JSON handling
- Credential-based authentication (cookies)
- Centralized error handling that checks response status

**Database Schema**
- Users table with id (UUID), username (unique), and password fields
- Type-safe insert and select schemas generated via Drizzle-Zod
- Schema exports TypeScript types for use throughout the application

### External Dependencies

**Database**
- Neon Database (@neondatabase/serverless): Serverless PostgreSQL database
- Drizzle ORM: Type-safe ORM with PostgreSQL support
- Drizzle-Zod: Schema validation and type generation

**UI Component Libraries**
- Radix UI: Complete set of accessible, unstyled component primitives (accordion, dialog, dropdown, select, tabs, toast, tooltip, etc.)
- shadcn/ui: Pre-styled component patterns built on Radix UI
- Lucide React: Icon library
- cmdk: Command palette component
- Embla Carousel: Carousel/slider functionality
- Vaul: Drawer component
- react-day-picker: Date picker component
- input-otp: OTP input component
- react-resizable-panels: Resizable panel layouts

**Form Management**
- React Hook Form: Form state management
- @hookform/resolvers: Validation resolvers
- Zod: Schema validation

**Utilities**
- class-variance-authority: Component variant management
- clsx & tailwind-merge: Conditional className handling
- date-fns: Date manipulation

**Development Tools**
- ESLint with Next.js configuration
- TypeScript with strict mode enabled
- PostCSS with Tailwind CSS and Autoprefixer

**Fonts**
- Google Fonts: Poppins (primary) and Inter (secondary)
- Font files loaded with next/font for optimization