# Project Structure & Technical Documentation

## Directory Structure 

.
├── src/
│ ├── pages/
│ │ ├── app.tsx # App component wrapper
│ │ ├── document.tsx # Custom document component
│ │ ├── index.tsx # Homepage
│ │ └── api/
│ │ └── hello.ts # Example API route
│ └── styles/
│ └── globals.css # Global styles and Tailwind imports
├── public/ # Static assets
├── node_modules/ # Dependencies
└── configuration files # Various config files

## Technical Stack

### Core Technologies
- Next.js 15.1.0 (Pages Router)
- React 19
- TypeScript 5
- Tailwind CSS 3.4.1

### Key Features
1. **TypeScript Integration**
   - Strict mode enabled
   - Path aliases configured (@/*)
   - Full type checking

2. **Styling**
   - Tailwind CSS with custom configuration
   - Dark mode support via CSS variables
   - Geist font family integration
   - Responsive design utilities

3. **Development Environment**
   - ESLint with Next.js specific rules
   - PostCSS configuration
   - Development hot reloading

4. **API Support**
   - API routes under /api directory
   - TypeScript types for requests/responses

## Configuration Files

- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS settings
- `tsconfig.json`: TypeScript compiler options
- `postcss.config.mjs`: PostCSS plugins
- `eslint.config.mjs`: ESLint rules
- `package.json`: Dependencies and scripts

## Theme Configuration

### Colors
- Dynamic theme using CSS variables
- Light/dark mode support
- Custom color variables:
  - `--background`
  - `--foreground`

### Typography
- Geist font family integration
- Responsive text utilities
- Custom font variables:
  - `--font-geist-sans`
  - `--font-geist-mono`

## Development Scripts

- `npm run dev`: Start development server
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Deployment

- Configured for Vercel deployment
- Environment variables support
- Production optimization ready

## Notes

- Project uses the Pages Router pattern (not App Router)
- Includes basic API route example
- Dark mode implementation uses system preferences
- TypeScript strict mode is enabled for better type safety