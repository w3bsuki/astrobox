# Astrobox - Mystery Box Platform

A modern mystery box platform built with Next.js 15.1, React 19, and TypeScript. This platform allows users to purchase and open mystery boxes containing various items.

## Tech Stack

- **Framework:** Next.js 15.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **UI Components:** shadcn/ui + Radix UI
- **State Management:** Zustand 5.0
- **Authentication:** NextAuth.js 6.0
- **Database:** Neon (Postgres)
- **ORM:** Drizzle ORM
- **Payment Processing:** Stripe
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Features

- Modern, responsive design
- Server-side rendering and static generation
- Dark mode support
- Authentication with multiple providers
- Real-time updates
- Secure payment processing
- Database integration
- Type-safe API routes
- Optimized performance

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/astrobox.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local`

5. Start the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # App router pages and layouts
├── components/       # React components
├── lib/             # Utility functions and shared logic
│   ├── db/         # Database configuration and schemas
│   └── utils/      # Helper functions
├── styles/          # Global styles and Tailwind CSS
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
└── store/           # Zustand store configurations
```

## Development

- Run development server: `pnpm dev`
- Build for production: `pnpm build`
- Start production server: `pnpm start`
- Run linter: `pnpm lint`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [Zustand](https://zustand-demo.pmnd.rs)
- [NextAuth.js](https://next-auth.js.org)
- [Neon](https://neon.tech)
- [Drizzle ORM](https://orm.drizzle.team)
- [Stripe](https://stripe.com)
