// Utility function to generate tracking links
export function generateTrackingLink(baseUrl, uid, additionalParams = {}) {
  const url = new URL(baseUrl);
  
  // Add UID parameter
  url.searchParams.set('uid', uid);
  
  // Add any additional parameters
  Object.entries(additionalParams).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  
  return url.toString();
}

// Predefined UIDs for common scenarios
export const TRACKING_UIDS = {
  LINKEDIN: 'linkedin',
  TWITTER: 'twitter',
  GITHUB: 'github',
  EMAIL: 'email',
  RESUME: 'resume',
  PORTFOLIO: 'portfolio',
  NETWORKING: 'networking',
  CONFERENCE: 'conference',
  MEETUP: 'meetup',
  REFERRAL: 'referral',
  CLIENT: 'client',
  RECRUITER: 'recruiter',
  FRIEND: 'friend',
  COLLEAGUE: 'colleague',
  SOCIAL_MEDIA: 'social',
  BLOG: 'blog',
  ARTICLE: 'article',
  PODCAST: 'podcast',
  VIDEO: 'video',
  PRESENTATION: 'presentation'
};

// Generate links for different platforms
export function generatePlatformLinks(baseUrl) {
  return {
    linkedin: generateTrackingLink(baseUrl, TRACKING_UIDS.LINKEDIN, { source: 'linkedin' }),
    twitter: generateTrackingLink(baseUrl, TRACKING_UIDS.TWITTER, { source: 'twitter' }),
    github: generateTrackingLink(baseUrl, TRACKING_UIDS.GITHUB, { source: 'github' }),
    email: generateTrackingLink(baseUrl, TRACKING_UIDS.EMAIL, { source: 'email' }),
    resume: generateTrackingLink(baseUrl, TRACKING_UIDS.RESUME, { source: 'resume' }),
    networking: generateTrackingLink(baseUrl, TRACKING_UIDS.NETWORKING, { source: 'networking' }),
    conference: generateTrackingLink(baseUrl, TRACKING_UIDS.CONFERENCE, { source: 'conference' }),
    client: generateTrackingLink(baseUrl, TRACKING_UIDS.CLIENT, { source: 'client' }),
    recruiter: generateTrackingLink(baseUrl, TRACKING_UIDS.RECRUITER, { source: 'recruiter' }),
  };
}

// Custom UID generator for specific people
export function generateCustomUID(name, context = '') {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanContext = context.toLowerCase().replace(/[^a-z0-9]/g, '');
  const timestamp = Date.now().toString(36);
  
  return `${cleanName}${cleanContext ? `-${cleanContext}` : ''}-${timestamp}`;
} 