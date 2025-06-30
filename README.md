# Typhon Group - Revenue Engineering Website

A modern, responsive website for Typhon Group built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Contact Form**: Functional contact form with email integration
- **Performance Optimized**: Built with Vite for fast development and production builds

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Contact Form Setup

The contact form is designed to work with Supabase Edge Functions for secure email handling.

### For Development/Testing

The form currently shows a success message for demonstration purposes. To implement actual email functionality:

1. Set up a Supabase project
2. Deploy the Edge Function in `supabase/functions/send-contact-email/`
3. Configure your email service (Resend recommended)
4. Update the environment variables

### Email Service Integration

The contact form sends emails to: `narayanananurag5@gmail.com`

Form submissions include:
- Contact information (name, email, company, title)
- Business details (revenue, challenge, timeline)
- Additional context provided by the user

## Build and Deploy

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons
- **Supabase** - Backend services (Edge Functions)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── DataWall.tsx
│   ├── MethodologyFramework.tsx
│   ├── ServiceMatrix.tsx
│   ├── ContactPortal.tsx
│   └── Footer.tsx
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles

supabase/
└── functions/
    └── send-contact-email/
        └── index.ts    # Email handling function
```

## Contact

For questions about this project, please use the contact form on the website or reach out directly.