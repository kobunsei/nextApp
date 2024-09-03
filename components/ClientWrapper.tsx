'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import useTokenExpirationCheck from '@/hooks/useTokenExpirationCheck';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SessionCheck>{children}</SessionCheck>
    </SessionProvider>
  );
};

const SessionCheck = ({ children }: { children: React.ReactNode }) => {
  useTokenExpirationCheck();

  return <>{children}</>;
};

export default ClientWrapper;
