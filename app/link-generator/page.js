"use client";
import { useState } from 'react';
import { generateTrackingLink, TRACKING_UIDS, generateCustomUID, generatePlatformLinks } from '../utils/linkGenerator';

export default function LinkGeneratorPage() {
  const [baseUrl, setBaseUrl] = useState('https://abhijeetpareek.com');
  const [customName, setCustomName] = useState('');
  const [customContext, setCustomContext] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerateCustomLink = () => {
    if (!customName.trim()) return;
    
    const uid = generateCustomUID(customName, customContext);
    const link = generateTrackingLink(baseUrl, uid);
    setGeneratedLink(link);
  };

  const handleCopyLink = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const platformLinks = generatePlatformLinks(baseUrl);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-8">Link Generator</h1>
        
        {/* Base URL Configuration */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Base URL</label>
              <input
                type="url"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                placeholder="https://abhijeetpareek.com"
              />
            </div>
          </div>
        </div>

        {/* Custom Link Generator */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Generate Custom Link</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name/Identifier</label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                placeholder="john-doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Context (Optional)</label>
              <input
                type="text"
                value={customContext}
                onChange={(e) => setCustomContext(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                placeholder="recruiter, client, etc."
              />
            </div>
          </div>
          <button
            onClick={handleGenerateCustomLink}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Generate Custom Link
          </button>
          
          {generatedLink && (
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between">
                <code className="text-sm text-green-400 break-all">{generatedLink}</code>
                <button
                  onClick={() => handleCopyLink(generatedLink)}
                  className="ml-4 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Predefined Platform Links */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Platform Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(platformLinks).map(([platform, link]) => (
              <div key={platform} className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold capitalize">{platform}</h3>
                  <button
                    onClick={() => handleCopyLink(link)}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm"
                  >
                    Copy
                  </button>
                </div>
                <code className="text-xs text-gray-300 break-all">{link}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Quick UID Examples */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Examples</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span>LinkedIn Post</span>
              <code className="text-green-400">{generateTrackingLink(baseUrl, TRACKING_UIDS.LINKEDIN)}</code>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span>Email Signature</span>
              <code className="text-green-400">{generateTrackingLink(baseUrl, TRACKING_UIDS.EMAIL)}</code>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span>Resume</span>
              <code className="text-green-400">{generateTrackingLink(baseUrl, TRACKING_UIDS.RESUME)}</code>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span>Conference Talk</span>
              <code className="text-green-400">{generateTrackingLink(baseUrl, TRACKING_UIDS.CONFERENCE)}</code>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Custom (John Recruiter)</span>
              <code className="text-green-400">{generateTrackingLink(baseUrl, generateCustomUID('john', 'recruiter'))}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 