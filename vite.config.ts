import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // This line correctly loads environment variables from your .env files
    const env = loadEnv(mode, '.', '');
    return {
      // CRITICAL FIX: Set the base path to your GitHub repository name
      base: "/copy-of-marketing-widget/", 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      
      plugins: [react()],
      
      // Environment variables definitions (needed for API key injection)
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      
      // Path aliases for cleaner imports
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
