# Hotel Management System

## Overview

This is a production-ready Next.js hotel management system frontend designed to help users find and browse luxury hotels. The application features a modern, fully responsive interface built with React, TypeScript, and a comprehensive UI component library (shadcn/ui). The system follows a backend-oriented, role-based architecture with reusable components and a separated data layer, making it easy to integrate with any API.

## Recent Changes (Latest Session)

**Folder Reorganization - Role-Based Structure (Completed - October 15, 2025)**
- Restructured app directory into role-based sections:
  - `/app/customer/` - Customer-facing pages (landing, signin, signup, thank-you)
  - `/app/admin/` - Super Admin dashboard
  - `/app/owner/` - Property Owner dashboard
- Authentication pages moved to `/app/customer/` with inlined logic:
  - `/app/customer/signin/page.tsx` - Sign in page with email/password and Google OAuth
  - `/app/customer/signup/page.tsx` - Complex signup form (Customer/Owner registration)
  - `/app/customer/signup/thank-you/page.tsx` - Post-signup confirmation
- All auth logic inlined directly in pages (no external components)
- Root `/app/page.tsx` redirects to `/customer`
- Customer landing page at `/app/customer/page.tsx` (former home page)
- Removed redundant files: components/auth/, components/signin-form.tsx, components/signup-form.tsx
- All auth pages use Rectangle-334.png hotel room image with #3F2C77 overlay
- Maintained all existing validations and design consistency

**Previous Changes**

**Dashboard Panels Implementation (Completed - October 14, 2025)**
- Built two professional dashboard panels with consistent design system
- Created reusable DashboardSidebar component:
  - Responsive sidebar navigation with icons and page titles
  - Active state highlighting with smooth transitions
  - Mobile drawer implementation for small screens
  - Reusable across different user types (admin/owner)
- Created reusable DashboardNavbar component:
  - Section title display
  - Search functionality (desktop only)
  - Notification bell with indicator
  - User profile display with avatar (supports image or initials fallback)
- Super Admin Dashboard (`/dashboard/admin`):
  - Stats cards: Total Hotels, Total Bookings, Active Users, Revenue
  - Navigation: Overview, Manage Hotels, Bookings, Users, Reports, Content
  - Placeholder sections: Recent Bookings, Top Hotels, User Management, System Activity
- Property Owner Dashboard (`/dashboard/owner`):
  - Stats cards: My Properties, Month Bookings, Revenue, Average Rating
  - Navigation: Overview, My Hotels, Bookings, Revenue, Reviews, Guests
  - Quick action buttons: Add Property, View Bookings, Manage Rooms
  - Placeholder sections: My Properties, Recent Bookings, Revenue Overview, Reviews
- Both dashboards fully responsive with professional spacing and shadows
- All interactive elements include data-testid attributes
- Ready for backend integration (no hardcoded logic)

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
- Production-ready role-based folder structure:
  - `/app/admin/` - Admin dashboard pages
  - `/app/owner/` - Property owner dashboard pages
  - `/app/customer/` - Customer-facing pages (landing, auth)
  - `/app/listing/` - Property listing pages
- Separated data layer (`lib/data.ts`) and type definitions (`types/index.ts`)
- Reusable component library in `components/` directory
- Client-side state management with React hooks and TanStack Query
- Configured as standalone build for optimized deployment
- Next.js Image and Link components used throughout for optimization

**UI Component System**
- Built on Radix UI primitives for accessible, unstyled components
- Styled with Tailwind CSS using custom design system (#3F2C77 primary color)
- shadcn/ui pattern with "New York" style variant
- Customer-facing components: Header, Navigation, Footer, DestinationCard, HotelCard, PropertyCard, FilterSidebar, ListingCard
- Dashboard components: DashboardSidebar, DashboardNavbar (reusable across user roles)
- Comprehensive pre-built components: forms, dialogs, dropdowns, navigation, data display, feedback, sliders, sheets, cards
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
- Type-safe interfaces in `types/index.ts` (Destination, Hotel, Property, FooterLink, Listing)
- Helper functions for API requests with automatic error handling
- Ready for API integration - just swap static data with fetch calls
- Toast notifications for user feedback via Radix UI Toast
- Client-side state management for filters, sorting, pagination, and view modes

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