/**
 * BanaoCV — Environment-based Configuration
 * Generated from .env — only fill keys in .env
 */
const BANAOCV_CONFIG = {
  // AI
  ai: {
    apiKey: (typeof process !== 'undefined' && process.env && process.env.AI_API_KEY) ? process.env.AI_API_KEY : '',
    endpoint: (typeof process !== 'undefined' && process.env && process.env.AI_API_ENDPOINT) ? process.env.AI_API_ENDPOINT : 'https://api.openai.com/v1/chat/completions',
    model: (typeof process !== 'undefined' && process.env && process.env.AI_MODEL) ? process.env.AI_MODEL : 'gpt-4o-mini',
    systemPrompt: 'You are BanaoCV AI assistant. Help users create professional resumes in English based on their Hindi input.',
    enabled: (typeof process !== 'undefined' && process.env && process.env.FEATURE_AI_RESUME) ? process.env.FEATURE_AI_RESUME === 'true' : true,
  },

  // Auth
  auth: {
    provider: (typeof process !== 'undefined' && process.env && process.env.AUTH_PROVIDER) ? process.env.AUTH_PROVIDER : 'firebase',
    apiKey: (typeof process !== 'undefined' && process.env && process.env.AUTH_API_KEY) ? process.env.AUTH_API_KEY : '',
    domain: (typeof process !== 'undefined' && process.env && process.env.AUTH_DOMAIN) ? process.env.AUTH_DOMAIN : '',
    projectId: (typeof process !== 'undefined' && process.env && process.env.AUTH_PROJECT_ID) ? process.env.AUTH_PROJECT_ID : '',
    appId: (typeof process !== 'undefined' && process.env && process.env.AUTH_APP_ID) ? process.env.AUTH_APP_ID : '',
    jwtSecret: (typeof process !== 'undefined' && process.env && process.env.JWT_SECRET) ? process.env.JWT_SECRET : 'dev-jwt-secret-change-in-production',
    jwtExpiry: (typeof process !== 'undefined' && process.env && process.env.JWT_EXPIRY) ? process.env.JWT_EXPIRY : '7d',
  },

  // Payment
  payment: {
    razorpayKeyId: (typeof process !== 'undefined' && process.env && process.env.RAZORPAY_KEY_ID) ? process.env.RAZORPAY_KEY_ID : '',
    razorpayKeySecret: (typeof process !== 'undefined' && process.env && process.env.RAZORPAY_KEY_SECRET) ? process.env.RAZORPAY_KEY_SECRET : '',
    razorpayWebhookSecret: (typeof process !== 'undefined' && process.env && process.env.RAZORPAY_WEBHOOK_SECRET) ? process.env.RAZORPAY_WEBHOOK_SECRET : '',
    stripePublicKey: (typeof process !== 'undefined' && process.env && process.env.STRIPE_PUBLIC_KEY) ? process.env.STRIPE_PUBLIC_KEY : '',
    stripeSecretKey: (typeof process !== 'undefined' && process.env && process.env.STRIPE_SECRET_KEY) ? process.env.STRIPE_SECRET_KEY : '',
  },

  // App
  app: {
    url: (typeof process !== 'undefined' && process.env && process.env.APP_URL) ? process.env.APP_URL : 'https://banaocv.in',
    name: 'BanaoCV',
    supportEmail: (typeof process !== 'undefined' && process.env && process.env.APP_SUPPORT_EMAIL) ? process.env.APP_SUPPORT_EMAIL : 'support@banaocv.in',
    logoUrl: (typeof process !== 'undefined' && process.env && process.env.APP_LOGO_URL) ? process.env.APP_LOGO_URL : 'assets/logo.svg',
  },

  // Features
  features: {
    darkMode: true,
    aiResume: true,
    paymentPremium: true,
    analytics: true,
  },
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BANAOCV_CONFIG;
}
