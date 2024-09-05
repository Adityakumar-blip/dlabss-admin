import {
  useMutation as useReactQueryMutation,
  UseMutationOptions,
} from 'react-query';
import { request } from 'utils/apiClient';

export const useMutation: any = (
  key: string,
  { ...options }: UseMutationOptions = {},
) => {
  return useReactQueryMutation(
    key,
    (data) => request({ ...options, data }),
    options,
  );
};
