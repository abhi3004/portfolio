# MongoDB Atlas Setup Guide

## Step-by-Step Setup

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" or "Sign Up"
3. Create your account

### 2. Create a Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider (AWS/Google Cloud/Azure)
4. Choose a region close to you
5. Click "Create"

### 3. Set Up Database Access
1. In the left sidebar, click "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username (e.g., `portfolio-user`)
5. Click "Autogenerate Secure Password" or create your own
6. **IMPORTANT**: Save the username and password!
7. Under "Database User Privileges", select "Read and write to any database"
8. Click "Add User"

### 4. Set Up Network Access
1. In the left sidebar, click "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for Vercel deployment)
4. Click "Confirm"

### 5. Get Your Connection String
1. Go back to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string

### 6. Update Your Connection String
Replace the placeholder values in your connection string:

**Original (from MongoDB Atlas):**
```
mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
```

**Updated (replace with your values):**
```
mongodb+srv://portfolio-user:YourPassword123@cluster0.abc123.mongodb.net/portfolio-analytics?retryWrites=true&w=majority
```

**Important changes:**
- Replace `<username>` with your actual username
- Replace `<password>` with your actual password
- Add `/portfolio-analytics` before the `?` (this is your database name)

### 7. Add to Environment Variables

**For Local Development:**
Create `.env.local` in your project root:
```env
MONGODB_URI=mongodb+srv://portfolio-user:YourPassword123@cluster0.abc123.mongodb.net/portfolio-analytics?retryWrites=true&w=majority
```

**For Vercel Production:**
1. Go to your Vercel project dashboard
2. Go to "Settings" → "Environment Variables"
3. Add `MONGODB_URI` with your connection string

## Troubleshooting

### Common Issues:

1. **Authentication failed**
   - Check username and password are correct
   - Make sure you saved the password when creating the user
   - Try creating a new database user

2. **ENOTFOUND error**
   - Check your connection string format
   - Make sure you're using `mongodb+srv://` not `mongodb://`
   - Verify the cluster name is correct

3. **Connection timeout**
   - Check your network access settings
   - Make sure you allowed access from anywhere (0.0.0.0/0)

### Test Your Connection:

1. Restart your development server:
```bash
npm run dev
```

2. Check the console for connection messages:
- ✅ "MongoDB connected successfully" = Working
- ❌ "MongoDB connection failed" = Check your setup

### Example Working Connection String:
```
mongodb+srv://portfolio-user:MySecurePassword123@cluster0.abc123.mongodb.net/portfolio-analytics?retryWrites=true&w=majority
```

## Need Help?

If you're still having issues:
1. Double-check your username and password
2. Make sure you copied the entire connection string
3. Verify your network access settings
4. Try creating a new database user 