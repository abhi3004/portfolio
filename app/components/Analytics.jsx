"use client";
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV === 'production') {
      const recordVisit = async () => {
        try {
          // Extract UID from URL parameters
          const uid = searchParams.get('uid') || searchParams.get('ref') || 'direct';
          
          // Enhanced referrer analysis
          const referrer = document.referrer;
          let referrerData = {
            url: referrer,
            source: 'direct',
            searchTerms: null,
            campaign: null
          };

          if (referrer) {
            try {
              const referrerUrl = new URL(referrer);
              
              // Detect Google search
              if (referrerUrl.hostname.includes('google')) {
                referrerData.source = 'google';
                referrerData.searchTerms = referrerUrl.searchParams.get('q');
              }
              // Detect other search engines
              else if (referrerUrl.hostname.includes('bing')) {
                referrerData.source = 'bing';
                referrerData.searchTerms = referrerUrl.searchParams.get('q');
              }
              else if (referrerUrl.hostname.includes('yahoo')) {
                referrerData.source = 'yahoo';
                referrerData.searchTerms = referrerUrl.searchParams.get('p');
              }
              else if (referrerUrl.hostname.includes('duckduckgo')) {
                referrerData.source = 'duckduckgo';
                referrerData.searchTerms = referrerUrl.searchParams.get('q');
              }
              // Social media sources
              else if (referrerUrl.hostname.includes('linkedin')) {
                referrerData.source = 'linkedin';
              }
              else if (referrerUrl.hostname.includes('twitter') || referrerUrl.hostname.includes('x.com')) {
                referrerData.source = 'twitter';
              }
              else if (referrerUrl.hostname.includes('facebook')) {
                referrerData.source = 'facebook';
              }
              else if (referrerUrl.hostname.includes('github')) {
                referrerData.source = 'github';
              }
              else {
                referrerData.source = 'other';
              }

              // Extract UTM parameters
              referrerData.campaign = {
                utm_source: referrerUrl.searchParams.get('utm_source'),
                utm_medium: referrerUrl.searchParams.get('utm_medium'),
                utm_campaign: referrerUrl.searchParams.get('utm_campaign'),
                utm_term: referrerUrl.searchParams.get('utm_term'),
                utm_content: referrerUrl.searchParams.get('utm_content')
              };
            } catch (e) {
              referrerData.source = 'invalid_url';
            }
          }

          const visitData = {
            uid: uid,
            path: pathname,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            referrer: referrerData,
            screenResolution: `${screen.width}x${screen.height}`,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            urlParams: Object.fromEntries(searchParams.entries()),
          };

          // Send to your API endpoint
          await fetch('/api/analytics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitData),
          });
        } catch (error) {
          console.error('Failed to record visit:', error);
        }
      };

      recordVisit();
    }
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
} 