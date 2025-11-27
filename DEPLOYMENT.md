# PollWatch KE - Vercel + Render Deployment Guide

## 🚀 Deployment Overview

This application uses **Vercel for frontend** and **Render for backend** for optimal performance and file upload support.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **MongoDB Database**: Set up MongoDB Atlas or another MongoDB provider
4. **Git Repository**: Push your code to GitHub

## 🔧 Environment Variables

### Backend Environment Variables (Render)
Set these in your Render service settings:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/pollwatch
JWT_SECRET=your-super-secure-jwt-secret-here
NODE_ENV=production
PORT=10000
```

### Frontend Environment Variables (Vercel)
```
VITE_API_URL=https://your-pollwatch-api.onrender.com
```

## 📦 Deployment Steps

### 1. Deploy Backend to Render First

1. **Create a new Web Service on Render**
   - Go to [render.com](https://render.com) and click "New +"
   - Select "Web Service"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

3. **Set Environment Variables**
   ```
   MONGO_URI=your-mongodb-atlas-connection-string-here
   JWT_SECRET=your-secure-jwt-secret-here
   NODE_ENV=production
   PORT=10000
   ```

4. **Deploy**
   - Render will automatically build and deploy
   - Note the service URL (e.g., `https://your-app-name.onrender.com`)

### 2. Deploy Frontend to Vercel

```bash
# Navigate to client directory
cd client

# Update the API URL in vercel.json to match your Render backend URL
# Replace "https://your-pollwatch-api.onrender.com" with your actual Render URL

# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## ⚠️ Important Notes

### File Uploads
**✅ File uploads work perfectly on Render!** Your multer configuration will work out-of-the-box with persistent file storage.

### Database Connection
- Ensure your MongoDB Atlas IP whitelist includes `0.0.0.0/0` (all IPs) for both Vercel and Render
- Use a strong, unique password for the database user

### Free Tiers
- **Render**: 750 hours/month free, then $7/month
- **Vercel**: 100GB bandwidth/month free, then pay-as-you-go
- **MongoDB Atlas**: 512MB free tier available

## 🔍 Testing Deployment

1. **Frontend**: Should load and display the landing page
2. **Authentication**: Register/Login should work
3. **Monitoring**: Should redirect to login if not authenticated
4. **API Calls**: Check browser network tab for successful API requests

## 🛠 Troubleshooting

### Common Issues:

1. **API Connection Failed**
   - Check that `VITE_API_URL` in frontend matches backend URL
   - Ensure CORS is properly configured

2. **Database Connection Failed**
   - Verify MongoDB connection string
   - Check IP whitelist in MongoDB Atlas

3. **Authentication Not Working**
   - Verify JWT_SECRET is set in backend
   - Check token expiration (7 days)

4. **File Uploads Not Working**
   - This is expected on Vercel without additional storage setup
   - Implement cloud storage solution

## 📁 Project Structure

```
pollwatch/
├── client/                 # React frontend
│   ├── vercel.json        # Frontend deployment config
│   └── src/
├── server/                 # Node.js backend
│   ├── vercel.json        # Backend deployment config
│   ├── api/               # Vercel serverless functions
│   └── src/               # Original Express code
└── DEPLOYMENT.md          # This file
```

## 🔄 Updating Deployment

```bash
# For both frontend and backend
vercel --prod

# Or push to your git repository to trigger automatic deployment
git add .
git commit -m "Update deployment"
git push origin main
```

## 📞 Support

If you encounter issues:
1. Check Vercel function logs in the dashboard
2. Verify environment variables are set correctly
3. Test locally first before deploying

## 🎯 Next Steps

After successful deployment:
1. Set up custom domain
2. Configure monitoring and analytics
3. Implement file upload storage solution
4. Add admin panel for incident management