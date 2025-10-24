#!/bin/bash

# Aqua Eagle Intelligence - Quick Setup Script
# This script automates the initial setup process

echo "🚀 Aqua Eagle Intelligence - Quick Setup"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Create project directory
echo "📁 Creating project directory..."
mkdir -p aqua-eagle-website
cd aqua-eagle-website || exit

# Initialize React app
echo "⚛️  Creating React app (this may take 2-5 minutes)..."
npx create-react-app . --silent

# Install dependencies
echo "📦 Installing Lucide React icons..."
npm install lucide-react --silent

echo "🎨 Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer --silent

# Initialize Tailwind
echo "⚙️  Initializing Tailwind configuration..."
npx tailwindcss init -p

# Create Tailwind config
echo "📝 Creating Tailwind configuration..."
cat > tailwind.config.js << 'EOL'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Update index.css
echo "🎨 Updating CSS files..."
cat > src/index.css << 'EOL'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
EOL

# Empty App.css
echo "" > src/App.css

# Create media folders
echo "📁 Creating media folders..."
mkdir -p public/images
mkdir -p public/videos
mkdir -p public/gifs

# Create .gitignore
echo "🔒 Creating .gitignore..."
cat > .gitignore << 'EOL'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/

# Vercel
.vercel

# Environment
.env
EOL

# Create README
echo "📄 Creating README.md..."
cat > README.md << 'EOL'
# Aqua Eagle Intelligence

AI-powered computer vision solutions for industrial safety and security.

## Quick Start

```bash
npm install
npm start
```

Visit http://localhost:3000

## Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Documentation

See DEPLOYMENT-GUIDE.md for complete instructions.
EOL

echo ""
echo "✅ Setup Complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Replace src/App.js with the Aqua Eagle website code"
echo "2. Test locally: npm start"
echo "3. Deploy to Vercel: vercel --prod"
echo ""
echo "📚 Full documentation available in:"
echo "   - README.md"
echo "   - DEPLOYMENT-GUIDE.md"
echo "   - DEPLOYMENT-CHECKLIST.md"
echo ""
echo "🎉 Happy coding!"
