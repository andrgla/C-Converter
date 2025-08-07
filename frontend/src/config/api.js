// frontend/src/config/api.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  upload: `${API_BASE_URL}/upload`,
  preview: `${API_BASE_URL}/api/preview`,
  videos: `${API_BASE_URL}/api/videos`,
  video: (folder, filename) => `${API_BASE_URL}/video/${folder}/${filename}`
};

export default API_BASE_URL;