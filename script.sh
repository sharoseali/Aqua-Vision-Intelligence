#!/bin/bash
# Quick Image Placeholder Replacement Script
# This finds and helps you replace placeholders

echo "================================"
echo "Image Placeholder Finder"
echo "================================"
echo ""

# Find all placeholder divs
echo "Finding placeholders in src/App.js..."
echo ""

grep -n "Image/Video Placeholder" src/App.js | while read -r line; do
    echo "$line"
done

echo ""
echo "================================"
echo "MANUAL REPLACEMENT GUIDE:"
echo "================================"
echo ""
echo "Open src/App.js in your editor:"
echo "  code src/App.js"
echo ""
echo "Press Ctrl+F and search for:"
echo "  [Image/Video Placeholder]"
echo ""
echo "Replace each placeholder with:"
echo ""
echo "  <div className=\"bg-slate-700 rounded-xl overflow-hidden h-80\">"
echo "    <img "
echo "      src=\"/images/FILENAME.jpg\" "
echo "      alt=\"Description\" "
echo "      className=\"w-full h-full object-cover\""
echo "    />"
echo "  </div>"
echo ""
echo "================================"
echo ""

# List available images
echo "Available images in public/images/:"
ls -1 public/images/ 2>/dev/null || echo "No images folder found!"
echo ""
echo "================================"
