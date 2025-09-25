# Marc Montiveles - Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and SCSS. This portfolio showcases my skills, experience, and projects with a clean, professional design and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **SCSS Architecture**: Organized styling with BEM methodology, variables, and mixins
- **GitHub Integration**: Automatically fetches and displays projects from GitHub API
- **Smooth Animations**: Framer Motion animations with intersection observer
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Contact Form**: Interactive contact form with validation and feedback
- **SEO Optimized**: Proper meta tags and semantic structure

## 📋 Sections

1. **Hero Section** - Introduction with animated call-to-action buttons
2. **About Me** - Professional summary with key highlights and statistics
3. **Skills** - Categorized technical skills with proficiency indicators
4. **Experience** - Interactive timeline of work history
5. **Projects** - Auto-populated from GitHub with filtering capabilities
6. **Contact** - Contact form and social links

## 🛠️ Tech Stack

### Frontend
- **React** 18 with TypeScript
- **Vite** for build tooling
- **SCSS** with modules for styling
- **Framer Motion** for animations

### Libraries & APIs
- **Axios** for HTTP requests
- **React Icons** for consistent iconography
- **GitHub API** for project data
- **Intersection Observer API** for scroll animations

## 🎨 Design System

### Color Palette
- Primary: `#007bff` (Blue gradient)
- Secondary: `#6c757d` (Gray)
- Accent: `#28a745` (Green)
- Text: `#2c3e50` (Dark blue-gray)
- Background: `#ffffff` / `#f8f9fa`

### Typography
- **Headings**: Space Grotesk (600-700 weight)
- **Body**: Inter (300-600 weight)
- **Code**: Fira Code (monospace)

### Spacing & Layout
- **Container**: Max-width 1200px with responsive padding
- **Grid System**: CSS Grid with responsive breakpoints
- **Spacing Scale**: 4px base unit (0.25rem to 8rem)

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── About/           # About section
│   ├── Contact/         # Contact form and info
│   ├── Experience/      # Work timeline
│   ├── Hero/           # Landing section
│   ├── Navigation/     # Header navigation
│   ├── Projects/       # GitHub projects
│   ├── Skills/         # Skills grid
│   └── common/         # Shared components
├── data/               # Static data
├── hooks/              # Custom React hooks
├── services/           # API services
├── styles/             # SCSS files
│   ├── abstracts/      # Variables & mixins
│   ├── base/          # Reset & typography
│   └── components/    # Component styles
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcmontiveles/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:
   ```env
   VITE_GITHUB_TOKEN=your_github_token_here
   VITE_GITHUB_USERNAME=your_github_username
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🔧 Configuration

### GitHub Integration

To display your projects:

1. Create a GitHub Personal Access Token:
   - Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/personal-access-tokens/new)
   - Generate token with `public_repo` scope
   - Add to `.env` file as `VITE_GITHUB_TOKEN`

2. Update your GitHub username in:
   - `.env` file: `VITE_GITHUB_USERNAME`
   - `src/components/Projects/Projects.tsx`

### Customization

#### Personal Information
Update these files with your information:
- `src/data/experience.ts` - Work history
- `src/data/skills.ts` - Technical skills
- `src/components/About/About.tsx` - About section content
- `src/components/Contact/Contact.tsx` - Contact details

#### Styling
- `src/styles/abstracts/_variables.scss` - Colors, fonts, spacing
- `src/styles/components/` - Component-specific styles
- `src/styles/abstracts/_mixins.scss` - Reusable style patterns

#### Content
- Replace placeholder image in About section
- Update social media links
- Customize hero section copy
- Add your resume PDF

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

All components are fully responsive with optimized layouts for each breakpoint.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance
- Focus management

## 🎯 Performance

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Dynamic imports for optimal bundle size
- **Caching**: GitHub API responses cached for 5 minutes
- **Animations**: Respect user's motion preferences
- **Optimized Assets**: Compressed images and fonts

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy automatically

### Netlify
1. Build project: `npm run build`
2. Upload `dist/` folder to [Netlify](https://netlify.com)
3. Configure environment variables

### Custom Server
1. Build project: `npm run build`
2. Serve `dist/` folder with any static file server
3. Configure environment variables

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Marc Montiveles**
- Website: [marcmontiveles.com](https://marcmontiveles.com)
- Email: marc.montiveles@email.com
- LinkedIn: [linkedin.com/in/marcmontiveles](https://linkedin.com/in/marcmontiveles)
- GitHub: [github.com/marcmontiveles](https://github.com/marcmontiveles)

---

⭐ **Built with React, TypeScript, and SCSS** ⭐