"use client";

import { signIn } from 'next-auth/react';

export default function Login() {

  return (
    <div>
      <p>Not signed in</p>
      <button onClick={() => signIn('cognito')}>Sign in with Cognito</button>
    </div>
  );
}
