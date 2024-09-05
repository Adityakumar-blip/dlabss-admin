'use client';
import React, { ReactNode, useEffect } from 'react';
import AppWrappers from './AppWrappers';
import useLocalStorage from 'hooks/useLocalStorage';
import { useRouter } from 'next/navigation';
// import '@asseinfo/react-kanban/dist/styles.css';
// import '/public/styles/Plugins.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [token] = useLocalStorage('token');

  useEffect(() => {
    if (token) {
      router.push('/admin/default');
    } else {
      router.push('/auth/sign-in');
    }
  }, [token]);
  return (
    <html lang="en">
      <body id={'root'}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
