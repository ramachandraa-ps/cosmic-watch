import axios from 'axios';
import { NeoFeed } from '../types/neo';

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1';

export const getNeoFeed = async (startDate: string, endDate: string): Promise<NeoFeed> => {
  try {
    const response = await axios.get(`${BASE_URL}/feed`, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: NASA_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch NEO data');
  }
};