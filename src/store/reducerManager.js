import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

const sliceCache = new Map();

export function createDynamicSlice(name, initialState = {}) {
  if (sliceCache.has(name)) {
    return sliceCache.get(name);
  }

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      updateState: (state, action) => {
        return { ...state, ...action.payload };
      },
    },
  });

  sliceCache.set(name, slice);
  return slice;
}

export function createDynamicApiEndpoint(name, method, url) {
  return apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      [name]: builder[method.toLowerCase()](url),
    }),
    overrideExisting: false,
  });
}

export function createMultiApiManager(apiConfigs) {
  const apiEndpoints = {};
  const slices = {};

  Object.entries(apiConfigs).forEach(([name, config]) => {
    const { method, url, initialState } = config;
    apiEndpoints[name] = createDynamicApiEndpoint(name, method, url);
    slices[name] = createDynamicSlice(name, initialState);
  });

  return { apiEndpoints, slices };
}
