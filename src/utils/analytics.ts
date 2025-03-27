
// Google Analytics utility for tracking events in a React SPA

// Track page views
export const pageView = (title?: string, location?: string, path?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      console.log('Tracking page view:', {
        page_title: title || document.title,
        page_location: location || window.location.href,
        page_path: path || window.location.pathname,
      });
      
      (window as any).gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: location || window.location.href,
        page_path: path || window.location.pathname,
        send_to: 'G-V1BSL8ECXX'
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  } else {
    console.warn('Google Analytics not loaded (gtag not found)');
  }
};

// Track custom events
export const event = (action: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      console.log('Tracking event:', action, params);
      
      (window as any).gtag('event', action, {
        ...params,
        send_to: 'G-V1BSL8ECXX'
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  } else {
    console.warn('Google Analytics not loaded (gtag not found)');
  }
};

// Check if Analytics is loaded
export const isAnalyticsLoaded = () => {
  const isLoaded = typeof window !== 'undefined' && !!(window as any).gtag;
  console.log('Google Analytics loaded:', isLoaded);
  return isLoaded;
};
