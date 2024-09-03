import { User } from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    email: string;
    sub: string;
    iat: number;
    exp: number;
    jti: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      token: JWT;
    };
  }
}
