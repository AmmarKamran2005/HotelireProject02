# Hotel Management System

## Overview

This is a Next.js-based hotel management system designed to help users find and browse luxury hotels. The application features a modern, responsive interface built with React, TypeScript, and a comprehensive UI component library (shadcn/ui). The system is configured for standalone deployment with image optimization disabled, making it suitable for various hosting environments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework: Next.js 15 with App Router**
- The application uses Next.js's modern App Router architecture with server and client components
- TypeScript is used throughout for type safety
- Client-side state management is handled through React hooks and TanStack Query (React Query)
- The app is configured as a standalone build for optimized deployment

**UI Component System**
- Built on Radix UI primitives for accessible, unstyled components
- Styled with Tailwind CSS using a custom design system
- Component library follows the shadcn/ui pattern with "New York" style variant
- Comprehensive set of pre-built components including forms, dialogs, dropdowns, navigation, data display, and feedback components
- Design tokens managed through CSS variables for theming (colors, border radius, spacing)

**Styling Approach**
- Tailwind CSS for utility-first styling
- Custom design system with semantic color tokens (primary, secondary, destructive, muted, accent)
- Two custom font families: Poppins (primary) and Inter (secondary)
- Responsive design with mobile-first breakpoints
- Custom animations for fade, marquee, and shimmer effects

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- Custom query client configuration with 5-second stale time
- Helper functions for API requests with automatic error handling
- Support for different unauthorized (401) behaviors in query functions
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