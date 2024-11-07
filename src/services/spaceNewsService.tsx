// src/services/spaceNewsService.tsx
import { AxiosResponse } from 'axios';
import axios from 'axios';

export interface SpaceNewsArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
}

export interface SpaceNewsResponse {
  results: SpaceNewsArticle[];
  count: number;
}

const BASE_URL = 'https://api.spaceflightnewsapi.net/v4';

export const getLatestNews = async (limit: number = 6): Promise<SpaceNewsResponse> => {
  try {
    const response: AxiosResponse<SpaceNewsResponse> = await axios.get(
      `${BASE_URL}/articles?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching space news:', error);
    throw error;
  }
};