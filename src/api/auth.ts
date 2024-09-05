import useLocalStorage from 'hooks/useLocalStorage';
import { useMutation } from 'hooks/useMutation';

interface SignupData {
  username: string;
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation('login', {
    method: 'POST',
    url: '/user/adminSignin',
    onSuccess: (data) => {
      // You can perform actions here after successful signup
      console.log('Signup successful:', data);

      // For example, redirect to a dashboard
      // router.push('/dashboard');
    },
  });
};
