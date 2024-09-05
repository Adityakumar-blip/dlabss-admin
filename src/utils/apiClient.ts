import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const request = async ({ ...options }) => {
  const onSuccess = (response: any) => response.data;
  const onError = (error: any) => {
    throw error;
  };

  try {
    const response = await apiClient(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
