
// Google Analytics utility for tracking events in a React SPA

// Track page views
export const pageView = (title?: string, location?: string, path?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: location || window.location.href,
      page_path: path || window.location.pathname,
    });
  }
};

// Track custom events
export const event = (action: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
};
