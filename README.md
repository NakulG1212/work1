# Sournaksh Buildsoft - Professional Dark-Theme React Website

A modern, responsive, and accessible React.js website for Sournaksh Buildsoft Pvt. Ltd., showcasing web development, software solutions, and training services with a beautiful dark theme design.

## 🚀 Features

- **Modern Dark Theme**: Professional design with custom color palette and glass morphism effects
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Framer Motion integration with scroll-triggered animations
- **Interactive Components**: Service cards, portfolio modals, and contact forms
- **Accessibility First**: WCAG 2.1 compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Meta tags, Open Graph data, and proper heading structure
- **Performance Focused**: Lazy loading, optimized images, and efficient code splitting

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter from Google Fonts

## 🎨 Design System

### Color Palette
- **Background**: #0b0f14 (dark-bg)
- **Surface**: #0f1720 (dark-surface)
- **Cards**: #1a2332 (dark-card)
- **Text**: #e2e8f0 (dark-text)
- **Muted**: #9aa4b2 (dark-muted)
- **Primary**: #00c2a8 (teal accent)
- **Secondary**: #4fc3f7 (blue accent)

### Typography
- **Font Family**: Inter
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with 150% line height
- **Small Text**: Medium weight for better readability

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Modal.tsx          # Reusable modal component
│   │   ├── ServiceCard.tsx    # Service display cards
│   │   └── ProjectCard.tsx    # Portfolio project cards
│   ├── Header.tsx             # Navigation header with mobile menu
│   ├── Hero.tsx              # Hero section with CTA
│   ├── About.tsx             # Company information and values
│   ├── Services.tsx          # Services showcase with modals
│   ├── Portfolio.tsx         # Project portfolio with details
│   ├── Contact.tsx           # Contact form and information
│   └── Footer.tsx            # Footer with links and social media
├── utils/
│   └── smoothScroll.ts       # Smooth scrolling utilities
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sournaksh-buildsoft-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📧 Contact Form Setup

The contact form is currently set up with client-side validation. To enable actual form submissions, you can integrate with:

1. **EmailJS** (Recommended for client-side)
2. **Netlify Forms** (If deploying to Netlify)
3. **Formspree** (Third-party form service)
4. **Custom Backend** (Node.js/Express server)

### EmailJS Integration Example

1. Install EmailJS:
   ```bash
   npm install emailjs-com
   ```

2. Update the contact form submit handler in `Contact.tsx`:
   ```typescript
   import emailjs from 'emailjs-com';
   
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if (!validateForm()) return;
     setStatus('loading');
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         formData,
         'YOUR_USER_ID'
       );
       setStatus('success');
     } catch (error) {
       setStatus('error');
     }
   };
   ```

3. Create `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables** (if using EmailJS)
   - Add environment variables in Vercel dashboard

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop `dist` folder to Netlify
   - Or connect GitHub repository for automatic deployments

3. **Configure Environment Variables** (if needed)

## 🔧 Customization

### Updating Company Information

1. **Contact Details**: Update in `Contact.tsx`
2. **About Section**: Modify content in `About.tsx`
3. **Services**: Update service information in `Services.tsx`
4. **Portfolio**: Replace project data in `Portfolio.tsx`

### Changing Colors

Update the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-primary-color',
      },
      dark: {
        bg: '#your-background-color',
        surface: '#your-surface-color',
        // ... other colors
      }
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.tsx`
3. Update navigation in `Header.tsx` if needed

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color ratios
- **Alternative Text**: Descriptive alt text for all images

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔍 SEO Features

- **Meta Tags**: Title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Proper HTML semantics
- **Performance**: Optimized images and code splitting

## 📄 License

This project is created for Sournaksh Buildsoft Pvt. Ltd. All rights reserved.

## 📞 Support

For technical support or customization requests, contact:
- **Email**: jainsourabh1357@gmail.com
- **Phone**: +91 9595506516

---

Built with ❤️ by Sournaksh Buildsoft Pvt. Ltd.