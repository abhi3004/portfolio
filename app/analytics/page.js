"use client";
import { useState, useEffect } from 'react';

export default function AnalyticsPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination and filtering state
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [visitsPerPage] = useState(10);

  const fetchStats = async (page = 1, country = 'all') => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: visitsPerPage.toString(),
        country: country
      });
      
      const response = await fetch(`/api/analytics?${params}`);
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

  useEffect(() => {
    fetchStats();
  }, []);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCountry]);

  // Fetch data when page or country changes
  useEffect(() => {
    if (stats) { // Only fetch if we have initial data
      fetchStats(currentPage, selectedCountry);
    }
  }, [currentPage, selectedCountry]);

  if (loading && !stats) {
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

  // Get unique countries from visits (for dropdown)
  const uniqueCountries = [...new Set(stats?.recentVisits?.map(visit => visit.country).filter(Boolean) || [])];

  // Pagination info from API
  const pagination = stats?.pagination;
  const totalPages = pagination?.totalPages || 1;
  const currentVisits = stats?.recentVisits || [];

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-2xl font-bold">Recent Visits</h2>
            
            {/* Country Filter */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <label htmlFor="country-filter" className="text-sm font-medium">
                Filter by Country:
              </label>
              <select
                id="country-filter"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-white/10 border border-white/20 rounded px-3 py-1 text-sm focus:outline-none focus:border-blue-400"
                disabled={loading}
              >
                <option value="all">All Countries</option>
                <option value="IN">India (IN)</option>
                <option value="CN">China (CN)</option>
                <option value="CA">Canada (CA)</option>
                <option value="NL">Netherlands (NL)</option>
                <option value="US">United States (US)</option>
                <option value="UK">United Kingdom (UK)</option>
                {uniqueCountries
                  .filter(country => !['IN', 'CN', 'NL', 'US', 'UK', 'CA'].includes(country))
                  .map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-sm text-gray-400 mb-4">
            {loading ? (
              <span>Loading...</span>
            ) : (
              <>
                Showing {pagination?.currentPage || 1} of {pagination?.totalPages || 1} pages
                ({pagination?.totalVisits || 0} total visits)
                {selectedCountry !== 'all' && ` from ${selectedCountry}`}
              </>
            )}
          </div>

          {loading && (
            <div className="text-center py-8 text-gray-400">
              Loading visits...
            </div>
          )}

          {!loading && (
            <>
              <div className="space-y-4">
                {currentVisits.map((visit, index) => (
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
                      <div>City: {visit?.city?.split("%20").join(" ")}</div>
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

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1 || loading}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          disabled={loading}
                          className={`px-3 py-1 rounded text-sm transition-colors ${
                            currentPage === pageNum
                              ? 'bg-blue-500 text-white'
                              : 'bg-white/10 border border-white/20 hover:bg-white/20'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages || loading}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}

              {currentVisits.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  No visits found for the selected filter.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 