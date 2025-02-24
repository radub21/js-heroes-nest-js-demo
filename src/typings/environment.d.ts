/* eslint-disable @typescript-eslint/no-empty-object-type */
declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}

interface Environment {
  DATABASE_URL: string;
  NODE_ENV: 'development' | 'production';
}

export {};
