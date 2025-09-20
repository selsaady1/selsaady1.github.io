# Modern Portfolio Website

A beautifully crafted portfolio website built with React, TypeScript, and Tailwind CSS, featuring a brown aesthetic design inspired by OpenAI's visual language.

## 🚀 Features

- **Modern Design**: Clean, professional brown aesthetic with cream backgrounds and elegant typography
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Interactive**: Project filtering system with smooth animations and hover effects
- **Smooth Navigation**: Anchor links with smooth scrolling and proper offset for fixed navigation
- **Optimized Performance**: Fast loading with code splitting and optimized assets

## 📦 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion, CSS transitions
- **Deployment**: GitHub Pages (automated)

## 🛠️ Installation & Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 🚀 GitHub Pages Deployment

This portfolio is configured for easy deployment to GitHub Pages with automatic builds.

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

3. **Automatic build & deploy**
   - GitHub Actions will automatically build and deploy your site
   - The workflow automatically handles base paths for different deployment types:
     - **User/Org pages** (`username.github.io`): Uses base path `/`
     - **Repository pages** (`username.github.io/repo-name`): Uses base path `/repo-name/`
   - Includes 404.html fallback for client-side routing support
   - Your portfolio will be available at the appropriate GitHub Pages URL

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The built files will be in dist/public/
# Deploy the contents of dist/public/ to your hosting provider
```

## 📝 Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `client/src/components/hero.tsx`
- **About Section**: `client/src/components/about.tsx` 
- **Projects**: `client/src/components/projects.tsx`
- **Skills**: `client/src/components/skills.tsx`
- **Experience**: `client/src/components/experience.tsx`
- **Contact**: `client/src/components/contact.tsx`

### Styling

The color scheme is defined in `client/src/index.css`:

```css
:root {
  --background: 39 36% 96%;      /* Cream background */
  --foreground: 27 35% 15%;      /* Deep brown text */
  --accent: 27 45% 35%;          /* Brown accent */
  /* ... more colors */
}
```

### Projects Data

Add your projects in the projects section with:
- Project name and description
- Technologies used
- GitHub/demo links
- Project images
- Categories (featured, hardware, software, research)

## 📱 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Professional background and expertise
3. **Projects**: Portfolio of work with filtering
4. **Skills**: Technical skills and proficiencies
5. **Experience**: Professional experience timeline
6. **Contact**: Contact information and social links

## 🎨 Design Features

- **Brown Aesthetic**: Warm, professional color palette
- **Inter Typography**: Clean, modern typeface throughout
- **Hover Effects**: Subtle animations on interactive elements
- **Scroll Animations**: Content fades in as you scroll
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Project Filtering**: Filter projects by category

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

If you have any questions or need help with deployment, please open an issue in this repository.

---

**Happy coding!** 🎉