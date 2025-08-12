# Overview

This is a modern, feature-rich To-Do List web application built with React, TypeScript, and a full-stack architecture. The application provides comprehensive task management capabilities including task creation, editing, filtering, sorting, and progress tracking with a clean, mobile-friendly UI. It features priority-based color coding, due date management, category organization, and advanced filtering options.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and local storage hooks for client-side state
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Hot reload with Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **API Design**: RESTful API structure with `/api` prefix routing

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle with type-safe schema definitions and migrations
- **Local Storage**: Browser localStorage for client-side persistence and offline capability
- **Schema**: Comprehensive task and user models with relationships and constraints

## Key Design Patterns
- **Component Architecture**: Modular component structure with separation of concerns
- **Hook-based State**: Custom hooks for task management, theming, and local storage
- **Type Safety**: End-to-end TypeScript with shared schema definitions
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Accessibility**: ARIA-compliant components using Radix UI primitives

## Features Architecture
- **Task Management**: CRUD operations with priority levels, categories, and due dates
- **Filtering System**: Multi-dimensional filtering by status, priority, category, and date
- **Search Functionality**: Real-time search across task titles and descriptions
- **Progress Tracking**: Completion percentage calculation and visual progress indicators
- **Theme System**: Light/dark mode with CSS custom properties
- **PWA Support**: Service worker for offline functionality and app-like experience

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support with strict configuration
- **Build Tools**: Vite, ESBuild for production builds, PostCSS for CSS processing

## UI and Styling
- **Component Library**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom configuration and CSS variables
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography

## Database and Backend
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for runtime type validation and schema validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Development and Utilities
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date manipulation and formatting
- **Utility Libraries**: clsx and class-variance-authority for conditional styling
- **Development**: tsx for TypeScript execution, Replit-specific plugins

## PWA and Performance
- **Service Worker**: Custom implementation for offline functionality
- **Manifest**: Web app manifest for installable PWA experience
- **Caching**: Local storage caching strategy for offline task management