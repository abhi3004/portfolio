# Portfolio Website

A modern portfolio website built with Next.js, featuring analytics tracking and link generation.

## Features

- **Analytics Tracking**: Track website visits with UID-based link tracking
- **Link Generator**: Create custom tracking links for different platforms
- **Modern UI**: Built with Tailwind CSS and Framer Motion
- **Responsive Design**: Works on all devices

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. MongoDB Setup

#### Option A: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user
5. Get your connection string
6. Add to `.env.local`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-analytics?retryWrites=true&w=majority
```

#### Option B: Local MongoDB
1. Install MongoDB locally
2. Add to `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio-analytics
```

### 3. Environment Variables
Create a `.env.local` file:
```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run Development Server
```bash
npm run dev
```

## Analytics

### View Analytics
Visit `/analytics` to see your website analytics dashboard.

### Generate Tracking Links
Visit `/link-generator` to create custom tracking links.

### Example Tracking Links
- `https://yoursite.com?uid=linkedin` - LinkedIn traffic
- `https://yoursite.com?uid=john-recruiter` - Specific person
- `https://yoursite.com?uid=google-search` - Search traffic

## Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Environment Variables for Production
- `MONGODB_URI`: Your MongoDB connection string

## Database Schema

### Visits Collection
```javascript
{
  uid: "linkedin",
  path: "/",
  timestamp: "2024-01-15T10:30:00.000Z",
  userAgent: "Mozilla/5.0...",
  referrer: {
    url: "https://google.com/search?q=react+developer",
    source: "google",
    searchTerms: "react developer"
  },
  ip: "192.168.1.1",
  country: "US",
  city: "New York",
  screenResolution: "1920x1080",
  language: "en-US",
  timezone: "America/New_York"
}
```

## License

MIT
