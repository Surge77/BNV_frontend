# Positivus - Digital Marketing Agency Website

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A premium, high-performance website for a digital marketing agency, built with modern web technologies. Focuses on user experience, smooth animations, and responsive design.

## 🚀 Features

- **Modern & Responsive Design**: Fully responsive layout that looks great on all devices (Mobile First approach).
- **Interactive UI**: Smooth animations powered by Framer Motion.
- **Dynamic Components**: Reusable and modular component architecture.
- **Accessibility**: Built with specialized accessibility features including ARIA labels and keyboard navigation.
- **Performance Optimized**: Lazy loading assets and optimized bundle size.
- **Dark Mode Ready**: Built on top of a themable design system.

## 🛠️ Technology Stack

- **Frontend Framework**: [React](https://reactjs.org/) (v18)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable UI components
│   ├── ui/          # Core design system components (shadcn)
│   └── ...          # Feature components (Header, Hero, etc.)
├── constants/       # Static data and configuration
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries and helpers
├── pages/           # Page layouts
├── types/           # TypeScript definitions
└── utils/           # Shared utility functions
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/positivus-agency.git
   cd positivus-agency
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

## 🧪 Scripts

- `npm run dev`: Starts the development server with HMR
- `npm run build`: Builds the application for production
- `npm run lint`: Runs ESLint to check for code quality issues
- `npm run preview`: Previews the production build locally

## 🎨 Design System

The project uses a custom design system defined in `tailwind.config.ts`.
- **Primary Color**: Lime Green (`#B9FF66`)
- **Secondary Color**: Dark Charcoal (`#191A23`)
- **Typography**: Space Grotesk

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Developed for assignment submission.*
