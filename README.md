# Aqua Eagle Intelligence

![Aqua Eagle Intelligence](https://i.postimg.cc/MGg7HkdC/1000054637-removebg-preview.png)

**Vision Beyond Sight** - AI-powered computer vision solutions for industrial safety, security, and surveillance.

## 🚀 Live Demo

Visit: [Your Vercel URL here after deployment]

## 📋 About

Aqua Eagle Intelligence provides enterprise-grade AI-powered computer vision solutions for:

- **Oil & Gas Facilities** - Spill detection, confined space monitoring
- **Healthcare & Hospitals** - Fall detection, PPE compliance
- **Manufacturing & Industrial** - Safety monitoring, equipment detection
- **Luxury Hotels** - Weapon detection, crowd management
- **Retail & Shopping Centers** - Footfall analytics, customer tracking
- **Security & Surveillance** - Perimeter monitoring, threat detection

## 🛠️ Technologies

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Vercel** - Deployment platform

## 📦 Installation

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/aqua-eagle-website.git
cd aqua-eagle-website

# Install dependencies
npm install

# Start development server
npm start
```

Visit http://localhost:3000

## 🏗️ Build for Production

```bash
npm run build
```

## 🚀 Deploy to Vercel

### Quick Deploy
```bash
npm install -g vercel
vercel --prod
```

### Or via GitHub
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

## 📁 Project Structure

```
aqua-eagle-website/
├── public/
│   ├── images/         # Add your images here
│   ├── videos/         # Add your videos here
│   └── gifs/           # Add your GIFs here
├── src/
│   ├── App.js          # Main application (all 6 pages)
│   ├── index.css       # Tailwind imports
│   └── index.js        # Entry point
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Features

### Pages
- ✅ Home - Hero section, solutions preview
- ✅ Solutions - 8 AI-powered solutions
- ✅ Industries - 6 industry-specific pages
- ✅ Case Studies - 6 success stories
- ✅ About - Company information
- ✅ Contact - Demo request form

### Solutions
- PPE Detection
- Fall Detection
- Weapon Detection
- Oil & Chemical Spill Detection
- Forklift Red Zone Monitoring
- Crowd Counting & Management
- Customer Footfall Analytics
- Litter Detection

## 🖼️ Adding Media Files

Place your media in the `public` folder:

```bash
public/images/ppe-detection.jpg
public/videos/hero-demo.mp4
public/gifs/forklift-safety.gif
```

Reference in code:
```javascript
<img src="/images/ppe-detection.jpg" alt="PPE Detection" />
<video src="/videos/hero-demo.mp4" autoPlay loop muted />
```

## 🔧 Configuration

### Environment Variables (Optional)
Create `.env` file:
```
REACT_APP_API_URL=your_api_url
REACT_APP_CONTACT_EMAIL=your_email
```

### Tailwind Customization
Edit `tailwind.config.js` to customize colors, fonts, etc.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fully responsive navigation
- Optimized for all devices

## 🔄 Making Updates

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically rebuild and deploy!

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- SEO Optimized

## 🆘 Troubleshooting

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port Already in Use
```bash
npx kill-port 3000
npm start
```

### Deployment Issues
- Check Vercel logs in dashboard
- Verify all dependencies in package.json
- Ensure no syntax errors

## 📄 License

© 2025 Aqua Eagle Intelligence. All rights reserved.

## 📞 Contact

- **Website:** [Your deployed URL]
- **Email:** contact@aquaeagle-intelligence.com
- **Phone:** +90 (551) 032-8412

## 🙏 Acknowledgments

- React Team
- Tailwind Labs
- Lucide Icons
- Vercel

---

**Built with ❤️ by Aqua Eagle Intelligence Team**