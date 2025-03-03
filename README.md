This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Detailed:

# Writing Buddy

A modern, organizational writing and text manipulation tool built with Next.js and TypeScript.

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
bash
git clone [repository-url]
cd writing-buddy

2. Install dependencies:
bash
npm install


This will install all required packages including:
- next
- react
- react-dom
- typescript
- tailwindcss
- lucide-react
- next-themes
- @types/node
- @types/react
- @types/react-dom

## Running the Application

1. Start the development server:
bash
npm run dev


## Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Page components
├── styles/ # Global styles
├── types/ # TypeScript types
├── utils/ # Utility functions
└── app/ # Next.js app directory

## Features

- Modern UI with Tailwind CSS
- Dark mode support
- File upload functionality
- Multiple text manipulation tools
- Responsive design
- TypeScript integration

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- Next-themes for dark mode

## Development Notes

- The project uses Next.js 14's app directory structure
- Tailwind CSS is configured with custom theme values
- Components are built with TypeScript for type safety
- Lucide icons are used for consistent UI elements

## Troubleshooting

If you encounter any issues:

1. Clear npm cache:
bash
npm cache clean --force


2. Delete node_modules and reinstall:
bash
rm -rf node_modules
rm package-lock.json
npm install

## Additional Configuration

The project includes:
- TypeScript configuration (tsconfig.json)
- Tailwind CSS configuration (tailwind.config.ts)
- Next.js configuration (next.config.js)