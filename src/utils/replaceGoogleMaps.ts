// Utility function to replace Google Maps URLs with OpenStreetMap URLs
export const replaceGoogleMapsUrl = (googleUrl: string): string => {
  if (googleUrl.includes('maps.google.com')) {
    // Extract the query parameter from Google Maps URL
    const urlParams = new URLSearchParams(googleUrl.split('?')[1]);
    const query = urlParams.get('q');
    if (query) {
      return `https://www.openstreetmap.org/search?query=${query}`;
    }
  }
  return googleUrl;
};