# Kwento - Filipino Cinema Crowdfunding Platform

## Overview

Kwento is a full-stack web application designed to support Filipino filmmakers through crowdfunding. The platform allows users to discover and fund authentic Filipino film projects, connecting passionate filmmakers with supportive audiences. The application features a modern, responsive design with a focus on showcasing film projects and facilitating community engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This is a full-stack TypeScript application built with a modern web stack:

**Frontend**: React with TypeScript, using Vite as the build tool and development server
**Backend**: Express.js with TypeScript running on Node.js
**Styling**: Tailwind CSS with shadcn/ui components for consistent, accessible UI elements
**Database**: PostgreSQL with Drizzle ORM for type-safe database operations
**Database Provider**: Neon Database (serverless PostgreSQL)
**Routing**: Wouter for client-side routing (lightweight React Router alternative)
**State Management**: TanStack Query (React Query) for server state management
**Build System**: Vite for frontend bundling, esbuild for backend bundling

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling Strategy**: Tailwind CSS with CSS custom properties for theming
- **Font Strategy**: Google Fonts (Merriweather for headings, Open Sans for body text)
- **State Management**: React Query for server state, local React state for UI state
- **Routing**: File-based routing with Wouter (/, /film/:id, 404 handling)

### Backend Architecture
- **API Structure**: RESTful API with Express.js, routes prefixed with `/api`
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage Interface**: Abstracted storage layer with in-memory fallback (MemStorage)
- **Development**: Hot module replacement with Vite integration
- **Logging**: Custom request logging middleware for API endpoints

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Migration System**: Drizzle Kit for schema migrations
- **Type Safety**: Zod schemas for runtime validation, integrated with Drizzle

### UI Design System
- **Theme**: Custom "Kwento" brand colors (maroon primary, gold secondary, coral accent)
- **Typography**: Hierarchical font system with custom CSS properties
- **Components**: Comprehensive UI library including cards, dialogs, forms, navigation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

1. **Static Data**: Film information currently stored in static TypeScript files
2. **Client-Server Communication**: JSON API with fetch-based queries through React Query
3. **Authentication**: Session-based (infrastructure in place but not implemented)
4. **Database Operations**: CRUD operations through storage interface abstraction
5. **Form Handling**: React Hook Form with Zod validation (infrastructure ready)

## External Dependencies

### Core Framework Dependencies
- React 18+ with TypeScript
- Express.js for server
- Drizzle ORM with Neon Database serverless driver
- Tailwind CSS for styling

### UI and UX Libraries
- Radix UI primitives for accessible components
- Lucide React for icons
- TanStack React Query for data fetching
- React Hook Form for form management

### Development Tools
- Vite for development server and building
- esbuild for server bundling
- TypeScript for type safety
- Drizzle Kit for database migrations

### External Services
- Neon Database for PostgreSQL hosting
- Google Fonts for typography
- Unsplash for placeholder images (in development)

## Deployment Strategy

**Development Environment**:
- Vite dev server for frontend with HMR
- tsx for running TypeScript server with hot reload
- Integrated development setup with proxy handling

**Production Build**:
- Frontend: Vite builds to `dist/public` directory
- Backend: esbuild bundles server to `dist/index.js`
- Static file serving: Express serves built frontend assets

**Database Management**:
- Environment-based DATABASE_URL configuration
- Drizzle migrations for schema changes
- `db:push` script for development database updates

**Key Build Commands**:
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for both client and server
- `npm run start`: Production server startup
- `npm run db:push`: Push schema changes to database

The application is designed for deployment on platforms that support Node.js applications with PostgreSQL databases, with particular optimization for Replit's environment through specialized plugins and configuration.