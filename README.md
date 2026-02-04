# 2b Project - Product Filter Application

A React-based product filtering and sorting application built with Next.js 14, Shadcn UI, and Tailwind CSS.

## Features

- **Product Filtering**: Filter products by category (Electronics, Clothing)
- **Dynamic Sorting**: Sort products by price (ascending, descending, or default)
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Built with Shadcn UI components and Tailwind CSS
- **Type-Safe**: Full TypeScript support

## Tech Stack

- **Framework**: Next.js 14+ (App Router with "use client")
- **UI Library**: Shadcn UI & Radix UI
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React useState and useMemo hooks

## Project Structure

```
2b/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage with product filtering
├── components/
│   ├── ui/                  # Shadcn UI components
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   └── select.tsx
│   ├── product-card.tsx     # Product display card component
│   └── select-control.tsx   # Reusable select dropdown component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── types/
│   └── index.ts             # TypeScript type definitions
├── components.json          # Shadcn UI configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Installation

1. Install dependencies:
```bash
pnpm install
```

2. Install Shadcn components (if needed):
```bash
pnpm dlx shadcn@latest add card button select badge
```

## Running the Project

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Key Components

### ProductCard
Displays individual products with name, price, and category badge.

### SelectControl
Reusable dropdown component for filtering and sorting.

### Main Page (page.tsx)
- Manages filter and sort state
- Displays filtered and sorted products in a responsive grid
- Includes 4 sample products for demonstration

## Sample Products

- Laptop ($999.99) - Electronics
- Smartphone ($699.99) - Electronics
- T-Shirt ($29.99) - Clothing
- Jeans ($79.99) - Clothing

## Author

Abhinav Gurung
