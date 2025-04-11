# Botox & Chill - Luxury Med Spa Landing Page

A Next.js landing page for a fictional luxury Med Spa in Maui called "Botox and Chill" that caters exclusively to high net worth clients.

## Project Overview

This is a modern Next.js application built with:
- Next.js 15.3.0
- TypeScript
- Tailwind CSS
- React

The landing page features a black and gold luxury theme and includes the following sections:
- Hero section highlighting the Med Spa's exclusive services
- Services section with humorous fictional case studies
- Testimonials section with fictional client reviews
- FAQ section with plausible luxury med spa questions
- Contact section with operating hours and contact information
- Footer section with additional information

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/botox-and-chill.git
cd botox-and-chill
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
botox-and-chill/
├── public/               # Static files
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── assets/       # Assets directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # React components
│       ├── layout/       # Layout components (Header, Footer)
│       ├── sections/     # Page sections (Hero, Services, FAQ, etc.)
│       └── ui/           # UI components
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Project dependencies
```

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Customization

### Images
The website currently uses placeholder images from placehold.co. Replace these with actual images by updating the image URLs in the component files.

### Content
All content is fictional and can be modified in the respective component files:
- Hero section: `src/components/sections/Hero.tsx`
- Services section: `src/components/sections/Services.tsx`
- Testimonials section: `src/components/sections/Testimonials.tsx`
- FAQ section: `src/components/sections/FAQ.tsx`
- Contact section: `src/components/sections/Contact.tsx`

### Theme
The black and gold luxury theme is defined in:
- `src/app/globals.css`
- `tailwind.config.ts`

## License

This project is created for demonstration purposes only as a fictional business profile.
