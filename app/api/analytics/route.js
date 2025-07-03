import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const visitData = await request.json();
    
    // Add additional server-side data
    const enrichedData = {
      ...visitData,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      country: request.headers.get('x-vercel-ip-country') || 'unknown',
      city: request.headers.get('x-vercel-ip-city') || 'unknown',
      serverTimestamp: new Date().toISOString(),
    };

    // Create analytics directory if it doesn't exist
    const analyticsDir = path.join(process.cwd(), 'analytics');
    if (!fs.existsSync(analyticsDir)) {
      fs.mkdirSync(analyticsDir, { recursive: true });
    }

    // Store in a JSON file (you can replace this with a database)
    const filePath = path.join(analyticsDir, 'visits.json');
    
    let visits = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      visits = JSON.parse(fileContent);
    }

    visits.push(enrichedData);
    
    // Keep only last 1000 visits to prevent file from growing too large
    if (visits.length > 1000) {
      visits = visits.slice(-1000);
    }

    fs.writeFileSync(filePath, JSON.stringify(visits, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to record visit' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const analyticsDir = path.join(process.cwd(), 'analytics');
    const filePath = path.join(analyticsDir, 'visits.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ visits: [] });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const visits = JSON.parse(fileContent);

    // Enhanced statistics
    const stats = {
      totalVisits: visits.length,
      uniquePaths: [...new Set(visits.map(v => v.path))].length,
      recentVisits: visits.slice(-10), // Last 10 visits
      topPaths: visits.reduce((acc, visit) => {
        acc[visit.path] = (acc[visit.path] || 0) + 1;
        return acc;
      }, {}),
      
      // UID tracking
      uniqueVisitors: [...new Set(visits.map(v => v.uid))].length,
      topUIDs: visits.reduce((acc, visit) => {
        acc[visit.uid] = (acc[visit.uid] || 0) + 1;
        return acc;
      }, {}),
      
      // Referrer analysis
      referrerSources: visits.reduce((acc, visit) => {
        const source = visit.referrer?.source || 'unknown';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {}),
      
      // Search terms analysis
      searchTerms: visits
        .filter(v => v.referrer?.searchTerms)
        .reduce((acc, visit) => {
          const term = visit.referrer.searchTerms.toLowerCase();
          acc[term] = (acc[term] || 0) + 1;
          return acc;
        }, {}),
      
      // Campaign tracking
      campaigns: visits
        .filter(v => v.referrer?.campaign?.utm_campaign)
        .reduce((acc, visit) => {
          const campaign = visit.referrer.campaign.utm_campaign;
          acc[campaign] = (acc[campaign] || 0) + 1;
          return acc;
        }, {}),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to retrieve analytics' }, { status: 500 });
  }
} 