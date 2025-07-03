import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

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

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio-analytics');
    const collection = db.collection('visits');

    // Insert the visit data
    await collection.insertOne(enrichedData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to record visit' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio-analytics');
    const collection = db.collection('visits');

    // Get all visits
    const visits = await collection.find({}).sort({ serverTimestamp: -1 }).limit(1000).toArray();

    // Enhanced statistics
    const stats = {
      totalVisits: visits.length,
      uniquePaths: [...new Set(visits.map(v => v.path))].length,
      recentVisits: visits.slice(0, 10), // Last 10 visits
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