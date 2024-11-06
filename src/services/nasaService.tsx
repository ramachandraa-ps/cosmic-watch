const NASA_API_KEY = 'mWqUzMJ023FZXM7c2q9OWOENAAxIxMytTaHh9CDe'; // Replace with your actual NASA API key
const NASA_API_BASE_URL = 'https://api.nasa.gov';

export const getAPOD = async () => {
  try {
    const response = await fetch(
      `${NASA_API_BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch APOD data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching APOD:', error);
    throw error;
  }
};

export const searchNASAImages = async (query: string, page: number = 1) => {
  try {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image&page=${page}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch NASA images');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching NASA images:', error);
    throw error;
  }
};