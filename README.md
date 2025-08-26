# Mirai Collective

A modern portfolio website for Mirai Collective, a student-led nonprofit consultancy connecting international nonprofits with Japanese communities.

## About

Mirai Collective is dedicated to breaking down cultural and logistical barriers for international nonprofits, enabling them to thrive in Japan. Our structured three-phase approach ensures seamless market entry, from initial research and compatibility assessment to partnership planning and sustained growth support.

## Tech Stack

### Core Framework
- **Next.js 15.3.3** - React framework with App Router for server-side rendering and static generation
- **React 18.3.1** - Frontend library with TypeScript support
- **TypeScript 5** - Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework with custom design system
- **Shadcn/ui** - Modern, accessible component library built on Radix UI primitives
- **Radix UI** - Comprehensive collection of low-level UI primitives for accessibility
- **Lucide React** - Beautiful & consistent icon library
- **Class Variance Authority (CVA)** - Component variant management
- **Tailwind Merge & clsx** - Dynamic className composition

### Design System
- **Custom Color Palette**: Blue-based theme with light/dark mode support
- **Typography**: Playfair Display (headlines) + PT Sans (body text)
- **CSS Variables**: HSL-based color system for consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Features & Functionality
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Tailwind CSS Animate for smooth transitions and keyframe animations
- **Carousels**: Embla Carousel with autoplay support for partner showcases
- **Charts**: Recharts for data visualization
- **Date Handling**: date-fns for robust date manipulation
- **AI Integration**: Google Genkit for AI-powered features

### Development Tools
- **ESLint & TypeScript**: Code quality and type checking
- **PostCSS**: CSS processing and optimization
- **Patch Package**: Dependency patch management

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── contact/          # Contact page with form actions
│   ├── how-it-works/     # Process explanation page
│   ├── mission/          # Mission statement page
│   └── partners/         # Partners showcase page
├── components/
│   ├── ui/               # Shadcn/ui component library
│   ├── home/             # Homepage-specific components
│   ├── contact/          # Contact form components
│   ├── layout/           # Header, footer, navigation
│   ├── shared/           # Reusable components
│   └── icons/            # Custom icon components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
└── ai/                   # AI/Genkit integration
```

## Styling Methodology

### Design Philosophy
- **Accessibility-First**: All components built on Radix UI primitives ensure WCAG compliance
- **Consistency**: Centralized design tokens via CSS variables for colors, spacing, and typography
- **Responsive**: Mobile-first design with progressive enhancement for larger screens
- **Performance**: Utility-first CSS approach minimizes bundle size and maximizes reusability

### Color System
- **Primary**: Blue (#77B5FE) - Professional trust and reliability
- **Accent**: Light Green (#90EE90) - Growth and sustainability
- **Background**: Light blue (#E6F3FF) with dark mode support
- **Semantic Colors**: Consistent destructive, muted, and border colors across themes

### Component Architecture
- **Compound Components**: Complex UI patterns built from smaller, focused components
- **Variant System**: CVA-powered component variants for size, color, and state management
- **Composition**: Flexible component composition using Radix Slot primitive
- **Type Safety**: Full TypeScript coverage for component props and variants

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/mirai-collective.git
cd mirai-collective

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack on port 9002
npm run build        # Build production application
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
npm run typecheck    # Run TypeScript compiler checks
npm run genkit:dev   # Start Genkit development server
npm run genkit:watch # Start Genkit with file watching
```

### Development Server
The development server runs on `http://localhost:9002` with Turbopack for fast hot reloading.

## Key Features

### Homepage
- **Hero Section**: Compelling introduction with call-to-action
- **Process Overview**: Three-phase methodology visualization
- **Partner Showcase**: Auto-playing carousel of trusted organizations
- **Responsive Images**: Optimized image loading with Next.js Image component

### Contact System
- **Form Validation**: Zod schema validation with React Hook Form
- **Server Actions**: Next.js server actions for form submission
- **Accessibility**: Full keyboard navigation and screen reader support

### Content Pages
- **About**: Team information and organizational background
- **Mission**: Detailed mission statement and values
- **How It Works**: Comprehensive process explanation
- **Partners**: Partnership opportunities and current collaborations

### Performance Optimizations
- **Static Generation**: Pre-rendered pages for optimal loading speeds
- **Image Optimization**: Automatic image optimization and responsive loading
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **SEO Ready**: Meta tags and structured data for search engine optimization

## Contributing

This project follows standard web development best practices:
- Component-based architecture with clear separation of concerns
- Type-safe development with comprehensive TypeScript coverage
- Accessible design patterns following WCAG guidelines
- Mobile-first responsive design approach
- Semantic HTML structure for SEO and accessibility

## License

This project is part of Mirai Collective's digital presence and is subject to the organization's usage policies.
