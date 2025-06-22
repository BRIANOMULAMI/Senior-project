// vite-env.d.ts
/// <reference types="vite/client" />

// Declare global variables provided by the Canvas environment
declare const __app_id: string | undefined;
declare const __firebase_config: string | undefined; // It's a stringified JSON object
declare const __initial_auth_token: string | undefined;