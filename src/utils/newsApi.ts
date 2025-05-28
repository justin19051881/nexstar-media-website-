import axios from 'axios';
import { NewsResponse, NewsFilterParams } from './types';

const API_KEY = 'ce2294b925f046ae8e397394536ed491';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (params: NewsFilterParams): Promise<NewsResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        ...params,
        apiKey: API_KEY,
        language: 'en',
        domains: 'techcrunch.com,engadget.com,mashable.com',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    // Return mock data in case of error or for development
    return getMockNewsData();
  }
};

// Mock data for development/demo purposes
const getMockNewsData = (): NewsResponse => {
  return {
    status: 'ok',
    totalResults: 5,
    articles: [
      {
        source: { id: 'nexstar', name: 'Nexstar Digital' },
        author: 'John Smith',
        title: 'Nexstar Media Group Expands Digital Footprint with New Acquisition',
        description: 'Nexstar Media Group announced today the acquisition of a leading digital media company, expanding its reach across multiple platforms.',
        url: '#',
        urlToImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        publishedAt: '2023-09-15T09:00:00Z',
        content: 'Nexstar Media Group announced today the acquisition of a leading digital media company...',
      },
      {
        source: { id: 'nexstar', name: 'Nexstar Broadcasting' },
        author: 'Jane Doe',
        title: 'Nexstar Broadcasting Sets New Record in Q3 Viewership',
        description: 'Nexstar Broadcasting achieved record-breaking viewership numbers in the third quarter across its television stations nationwide.',
        url: '#',
        urlToImage: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        publishedAt: '2023-09-12T14:30:00Z',
        content: 'Nexstar Broadcasting achieved record-breaking viewership numbers in the third quarter...',
      },
      {
        source: { id: 'nexstar', name: 'Nexstar Media' },
        author: 'Robert Johnson',
        title: 'Nexstar Launches New Streaming Service for Local News',
        description: 'Nexstar Media introduces a new streaming service dedicated to local news content from its stations across the country.',
        url: '#',
        urlToImage: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        publishedAt: '2023-09-10T11:15:00Z',
        content: 'Nexstar Media introduces a new streaming service dedicated to local news content...',
      },
      {
        source: { id: 'nexstar', name: 'Nexstar Networks' },
        author: 'Sarah Williams',
        title: 'Nexstar Networks Unveils Innovative Advertising Solutions',
        description: 'Nexstar Networks announced today a suite of innovative advertising solutions designed to help businesses reach targeted audiences more effectively.',
        url: '#',
        urlToImage: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        publishedAt: '2023-09-08T16:45:00Z',
        content: 'Nexstar Networks announced today a suite of innovative advertising solutions...',
      },
      {
        source: { id: 'nexstar', name: 'Nexstar Digital' },
        author: 'Michael Brown',
        title: 'Nexstar Digital Partners with Major Tech Companies for AI Integration',
        description: 'Nexstar Digital announces strategic partnerships with leading technology companies to integrate AI solutions into its digital content platforms.',
        url: '#',
        urlToImage: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        publishedAt: '2023-09-05T10:20:00Z',
        content: 'Nexstar Digital announces strategic partnerships with leading technology companies...',
      },
    ],
  };
};

export const getNewsCategories = (): string[] => {
  return [
    'All',
    'Business',
    'Entertainment',
    'Health',
    'Science',
    'Sports',
    'Technology',
    'Politics',
  ];
};