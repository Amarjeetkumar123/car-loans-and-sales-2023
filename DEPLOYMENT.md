# Render.com Backend Deployment Guide

## Step 1: Prepare Your Repository
1. Push your code to GitHub (if not already done)
2. Ensure the `server/` folder contains:
   - `package.json` with `"start": "node src/server.js"`
   - `render.yaml` (already created)
   - All source files in `src/` directory

## Step 2: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub account
3. Go to Dashboard

## Step 3: Connect GitHub Repository
1. Click **New +** → **Web Service**
2. Click **Connect a repository** → Select your car-loans-and-sales repo
3. Set deployment settings:
   - **Name**: `car-loans-sales-api` (or your preferred name)
   - **Root Directory**: `server` (important!)
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Click **Create Web Service**

## Step 4: Configure Environment Variables
Once the web service is created, go to **Environment** tab and add these variables:

| Variable | Value | Notes |
|----------|-------|-------|
| `NODE_ENV` | `production` | |
| `MONGODB_URI` | Your MongoDB connection string | Keep from .env |
| `JWT_SECRET` | Generate a secure random string | Use strong secret (min 32 chars) |
| `JWT_EXPIRE` | `7d` | |
| `REFRESH_TOKEN_SECRET` | Generate a different secure random string | |
| `REFRESH_TOKEN_EXPIRE` | `30d` | |
| `SMTP_HOST` | `smtp.hostinger.com` | From your .env |
| `SMTP_PORT` | `465` | |
| `SMTP_SECURE` | `true` | |
| `SMTP_USER` | Your email (e.g., noreply@carloansandsales.com) | |
| `SMTP_PASS` | Your email password | Stored securely |
| `COMPANY_NAME` | `Car Loans & Sales` | |
| `SERVER_URL` | Your Render URL (e.g., `https://car-loans-sales-api.onrender.com`) | Update after deployment |
| `EMAIL_LOGO_URL` | `https://car-loans-sales-api.onrender.com/assets/logo.svg` | Or use your domain |
| `SUPPORT_EMAIL` | `info@carloansandsales.com` | |
| `SUPPORT_PHONE` | `+91 9686-870-536` | |
| `ADMIN_EMAIL` | `carloansandsales123@gmail.com` | |
| `FROM_EMAIL` | `noreply@carloansandsales.com` | |
| `CLIENT_URL` | Your frontend URL | e.g., `https://yourdomain.com` (update after frontend deployment) |
| `ADMIN_DEFAULT_EMAIL` | `carloansandsales123@gmail.com` | |
| `ADMIN_DEFAULT_PASSWORD` | Your secure password | Change on first login |

## Step 5: Verify Deployment
1. Check **Logs** in Render dashboard
2. When deployment is complete, you'll see:
   ```
   🚀 Server running on port 10000 in production mode
   ```
3. Test the API:
   ```bash
   curl https://your-service-name.onrender.com/
   ```
   Should return:
   ```json
   {
     "success": true,
     "message": "Car Loans & Sales API Server",
     "version": "1.0.0"
   }
   ```

## Step 6: Update Frontend
After backend is deployed:
1. Get your Render URL (e.g., `https://car-loans-sales-api.onrender.com`)
2. Update `client/src/services/api.js`:
   ```javascript
   const API_BASE_URL = 'https://your-service-name.onrender.com/api';
   ```
3. Update `.env` in client folder:
   ```
   VITE_API_BASE_URL=https://your-service-name.onrender.com/api
   ```

## Step 7: MongoDB Connection
If using MongoDB Atlas:
1. Whitelist Render's IP in MongoDB Atlas
2. Or use "Allow access from anywhere" (0.0.0.0/0) for development

## Troubleshooting

### Deployment fails with "Module not found"
- Check `Root Directory` is set to `server`
- Verify `package.json` exists in server folder

### Cannot connect to MongoDB
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas whitelist includes Render IPs
- Use MongoDB Atlas `Network Access` → **Allow From Anywhere**

### CORS errors
- Update `CLIENT_URL` environment variable with correct frontend URL
- Ensure frontend is deployed before updating env var

### Email not sending
- Verify `SMTP_USER` and `SMTP_PASS` are correct
- Check Hostinger account has correct SMTP credentials
- Verify `FROM_EMAIL` is authorized sender

## Monitoring
1. View logs: Render dashboard → **Logs** tab
2. Set up email alerts: **Settings** → **Notifications**
3. Enable auto-deploy: **Settings** → **Auto-Deploy** → Choose branch

## Next Steps
1. After backend is successfully deployed, deploy frontend
2. Update all API base URLs to production URL
3. Test the complete application
4. Monitor logs for any errors
