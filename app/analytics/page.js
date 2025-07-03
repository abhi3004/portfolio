"use client";
import { useState, useEffect } from 'react';

export default function AnalyticsPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/analytics');
        if (!response.ok) {
          throw new Error('Failed to fetch analytics');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading analytics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-8">Website Analytics</h1>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Total Visits</h3>
            <p className="text-3xl font-bold text-blue-400">{stats?.totalVisits || 0}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Unique Visitors</h3>
            <p className="text-3xl font-bold text-green-400">{stats?.uniqueVisitors || 0}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Unique Pages</h3>
            <p className="text-3xl font-bold text-purple-400">{stats?.uniquePaths || 0}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Last Updated</h3>
            <p className="text-sm text-gray-300">
              {stats?.recentVisits?.[0]?.timestamp 
                ? new Date(stats.recentVisits[0].timestamp).toLocaleString()
                : 'No data'
              }
            </p>
          </div>
        </div>

        {/* Top UIDs */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Referrers (UIDs)</h2>
          <div className="space-y-2">
            {stats?.topUIDs && Object.entries(stats.topUIDs)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 10)
              .map(([uid, count]) => (
                <div key={uid} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-mono text-sm text-yellow-400">{uid}</span>
                  <span className="text-blue-400 font-semibold">{count} visits</span>
                </div>
              ))}
          </div>
        </div>

        {/* Referrer Sources */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Traffic Sources</h2>
          <div className="space-y-2">
            {stats?.referrerSources && Object.entries(stats.referrerSources)
              .sort(([,a], [,b]) => b - a)
              .map(([source, count]) => (
                <div key={source} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="capitalize text-sm">{source}</span>
                  <span className="text-green-400 font-semibold">{count} visits</span>
                </div>
              ))}
          </div>
        </div>

        {/* Search Terms */}
        {stats?.searchTerms && Object.keys(stats.searchTerms).length > 0 && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Terms</h2>
            <div className="space-y-2">
              {Object.entries(stats.searchTerms)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 10)
                .map(([term, count]) => (
                  <div key={term} className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm italic">&quot{term}&quot</span>
                    <span className="text-orange-400 font-semibold">{count} searches</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Campaigns */}
        {stats?.campaigns && Object.keys(stats.campaigns).length > 0 && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Campaigns</h2>
            <div className="space-y-2">
              {Object.entries(stats.campaigns)
                .sort(([,a], [,b]) => b - a)
                .map(([campaign, count]) => (
                  <div key={campaign} className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm">{campaign}</span>
                    <span className="text-pink-400 font-semibold">{count} visits</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Top Pages */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Most Visited Pages</h2>
          <div className="space-y-2">
            {stats?.topPaths && Object.entries(stats.topPaths)
              .sort(([,a], [,b]) => b - a)
              .map(([path, count]) => (
                <div key={path} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-mono text-sm">{path}</span>
                  <span className="text-blue-400 font-semibold">{count} visits</span>
                </div>
              ))}
          </div>
        </div>

        {/* Recent Visits */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Visits</h2>
          <div className="space-y-4">
            {stats?.recentVisits?.map((visit, index) => (
              <div key={index} className="border border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-blue-400">{visit.path}</span>
                    {visit.uid && visit.uid !== 'direct' && (
                      <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">
                        {visit.uid}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(visit.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-300">
                  <div>IP: {visit.ip}</div>
                  <div>Country: {visit.country}</div>
                  <div>City: {visit.city}</div>
                  <div>Screen: {visit.screenResolution}</div>
                </div>
                {visit.referrer?.source && visit.referrer.source !== 'direct' && (
                  <div className="text-xs text-gray-400 mt-2">
                    Source: {visit.referrer.source}
                    {visit.referrer.searchTerms && (
                      <span className="ml-2 text-orange-400">
                        Search: &quot{visit.referrer.searchTerms}&quot
                      </span>
                    )}
                  </div>
                )}
                {visit.referrer?.url && (
                  <div className="text-xs text-gray-400 mt-1 truncate">
                    Referrer: {visit.referrer.url}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 