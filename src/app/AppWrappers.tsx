'use client';
import React, { ReactNode } from 'react';
import 'styles/App.css';
import 'styles/Contact.css';
// import '@asseinfo/react-kanban/dist/styles.css';
// import 'styles/Plugins.css';
import 'styles/MiniCalendar.css';
import 'styles/index.css';

import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
  ssr: false,
});

export default function AppWrappers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NoSSR>{children}</NoSSR>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
