# Portfolio Website

A modern, clean portfolio website built with Next.js, featuring a dark theme design and smooth animations.

## Features

- 🎨 Modern dark theme with green accents
- ⚡ Built with Next.js 16 and React 19
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- 📧 Contact form with SMTP email integration
- 🎨 Clean, minimalist UI inspired by modern portfolio designs

## Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Email**: Nodemailer (for contact form)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (see Configuration section below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Email/SMTP Configuration

The contact form uses SMTP to send emails. Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=your-email@gmail.com
```

#### Gmail Setup (Recommended)

1. Enable 2-Factor Authentication in your Google Account
2. Generate an App Password:
   - Go to Google Account Settings → Security
   - Select "2-Step Verification"
   - Scroll to "App passwords"
   - Generate a new app password for "Mail"
3. Use the generated password as `SMTP_PASSWORD`

#### Other Email Providers

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

**Custom SMTP:**
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587  # or 465 for SSL, or 25
```

**Note:** You can change the port value to any port required by your SMTP provider. Common ports are:
- **587** - TLS/STARTTLS (recommended)
- **465** - SSL
- **25** - Plain/STARTTLS (often blocked by ISPs)

### Personalizing the Site

Update the following files with your information:

1. **Contact Information** - `app/contact/page.js`
   - Email address
   - Phone number
   - Location

2. **Social Links** - Multiple files
   - GitHub: Update URLs in Navbar, Footer, Home page
   - LinkedIn: Update URLs in Navbar, Footer, Home page
   - Twitter: Update URLs in Navbar, Footer, Home page

3. **About Content** - `app/about/page.js`
   - Your story
   - Experience
   - Education
   - Skills

4. **Projects** - `app/portfolio/page.js`
   - Add your actual projects
   - Update descriptions
   - Add project links

5. **Services** - `app/services/page.js`
   - Customize service offerings
   - Update pricing if applicable

## Project Structure

```
portfolio/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── portfolio/          # Portfolio/projects page
│   ├── services/           # Services page
│   │   ├── web-development/
│   │   ├── graphic-design/
│   │   ├── seo/
│   │   └── marketing/
│   ├── api/
│   │   └── send-email/     # Email API endpoint
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/
│   ├── Footer.js           # Footer component
│   └── Navbar.js           # Navigation component
├── public/                 # Static assets
├── .env.local             # Environment variables (create this)
└── README.md              # This file
```

## Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all SMTP_* variables from your `.env.local`
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Your own server with Node.js

**Important:** Make sure to set environment variables in your deployment platform's dashboard.

## Customization

### Colors

The site uses a dark theme with green accents. To change colors, update:
- `app/globals.css` - CSS variables (lines 11-24)
- Tailwind classes throughout components

### Fonts

Currently using Geist Sans and Geist Mono. To change fonts:
1. Update imports in `app/layout.js`
2. Modify font variables in the layout

### Adding New Pages

1. Create new folder in `app/` directory
2. Add `page.js` file
3. Update navigation in `components/Navbar.js`

## Troubleshooting

### Email Not Sending

1. **Check environment file**: Verify `.env.local` exists in root directory
2. **Verify credentials**: Ensure SMTP credentials are correct
3. **App passwords**: Check if your email provider requires app-specific passwords
4. **Port issues**: Ensure the SMTP port is not blocked by your firewall
5. **Server logs**: Check terminal/console for detailed error messages
6. **Test with Gmail first**: Use Gmail SMTP settings to verify setup works

### Common SMTP Errors

- **"Invalid login"**: Wrong username/password or need app password
- **"Connection timeout"**: Port might be blocked by firewall
- **"Self-signed certificate"**: Add `rejectUnauthorized: false` (not recommended for production)

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

## Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Create production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | smtp.gmail.com |
| `SMTP_PORT` | SMTP server port | 587 |
| `SMTP_USER` | Email account username | your-email@gmail.com |
| `SMTP_PASSWORD` | Email account password/app password | your-app-password |
| `SMTP_FROM` | "From" email address | your-email@gmail.com |
| `SMTP_TO` | Email address to receive contact form submissions | your-email@gmail.com |

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
- Open an issue on GitHub
- Contact through the website contact form

## Credits

- Design inspiration: Modern portfolio websites
- Icons: Lucide React
- Animations: Framer Motion
- Framework: Next.js

---

Made with ❤️ in Bangladesh
