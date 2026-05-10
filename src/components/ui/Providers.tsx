'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#4338CA"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
