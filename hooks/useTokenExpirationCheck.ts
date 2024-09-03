'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const useTokenExpirationCheck = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (status === 'authenticated' && session) {
        const token = session.user.token;
        const currentTime = Math.floor(Date.now() / 1000);

        if (token.exp < currentTime) {
          if (confirm('セッションの有効期限が切れました。再度ログインしてください。')) {
            router.push('/login');
          }
        }
      }
    };

    checkTokenExpiration();
  }, [status, session, router]);
};

export default useTokenExpirationCheck;
