import { redirect } from 'next/navigation';

export default function Home() {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (token) {
    redirect('/admin/default');
  } else {
    redirect('/auth/sign-in');
  }

  return null;
}
