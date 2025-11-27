#!/bin/bash

echo "🚀 PollWatch KE - Vercel + Render Deployment Script"
echo "=================================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Please install it first:"
    echo "npm install -g vercel"
    exit 1
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "❌ You are not logged in to Vercel. Please login first:"
    echo "vercel login"
    exit 1
fi

echo "📋 Deployment Instructions:"
echo "==========================="
echo ""
echo "1. 🚀 Deploy Backend to Render First:"
echo "   - Go to https://render.com"
echo "   - Create new Web Service"
echo "   - Connect your GitHub repo"
echo "   - Set build command: npm install"
echo "   - Set start command: npm start"
echo "   - Add environment variables:"
echo "     * MONGO_URI=mongodb+srv://..."
echo "     * JWT_SECRET=your-secret-here"
echo "     * NODE_ENV=production"
echo "     * PORT=10000"
echo ""
echo "2. 📝 Note your Render backend URL (e.g., https://your-app.onrender.com)"
echo ""
echo "3. 🔧 Update frontend config with your Render URL:"
echo "   Edit client/vercel.json and replace:"
echo "   'https://your-pollwatch-api.onrender.com' with your actual Render URL"
echo ""

read -p "Have you deployed the backend to Render and noted the URL? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Please deploy the backend to Render first, then run this script again."
    exit 1
fi

read -p "Enter your Render backend URL (e.g., https://your-app.onrender.com): " BACKEND_URL

if [ -z "$BACKEND_URL" ]; then
    echo "❌ No backend URL provided"
    exit 1
fi

echo "✅ Backend URL: $BACKEND_URL"

echo "📦 Deploying Frontend to Vercel..."
cd client

# Update the API URL in vercel.json
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s|https://your-pollwatch-api.onrender.com|$BACKEND_URL|g" vercel.json
else
    # Linux/Windows
    sed -i "s|https://your-pollwatch-api.onrender.com|$BACKEND_URL|g" vercel.json
fi

vercel --prod
FRONTEND_URL=$(vercel --prod 2>&1 | grep -o 'https://[^ ]*\.vercel\.app')

echo "✅ Frontend deployed to: $FRONTEND_URL"
echo ""
echo "🎉 Deployment Complete!"
echo "======================"
echo "Frontend: $FRONTEND_URL"
echo "Backend:  $BACKEND_URL"
echo ""
echo "⚠️  Important Notes:"
echo "1. Update your MongoDB Atlas IP whitelist to allow all IPs (0.0.0.0/0)"
echo "2. Verify environment variables are set in Render dashboard"
echo "3. File uploads work perfectly on Render! 🎉"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"