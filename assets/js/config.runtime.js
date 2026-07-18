/**
 * BanaoCV — Runtime Config (generated from .env)
 * Generated: 2026-07-18T10:55:38.679Z
 * Only fill keys in .env — this file is rebuilt by scripts/generate-config.js
 */
const BANAOCV_CONFIG = {
  ai: {
    apiKey: "",
    endpoint: "https://api.openai.com/v1/chat/completions",
    model: "gpt-4o-mini",
    systemPrompt: "You are BanaoCV AI assistant. Help users create professional resumes in English based on their Hindi input.",
    enabled: true,
  },
  auth: {
    provider: "firebase",
    apiKey: "",
    domain: "",
    projectId: "",
    appId: "",
    jwtSecret: "dev-jwt-secret-change-in-production",
    jwtExpiry: "7d",
  },
  payment: {
    razorpayKeyId: "",
    razorpayKeySecret: "",
    razorpayWebhookSecret: "",
    stripePublicKey: "",
    stripeSecretKey: "",
  },
  app: {
    url: "https://banaocv.in",
    name: "BanaoCV",
    supportEmail: "support@banaocv.in",
    logoUrl: "assets/logo.svg",
  },
  features: {
    darkMode: true,
    aiResume: true,
    paymentPremium: true,
    analytics: true,
  },
};
if (typeof window !== 'undefined') window.BANAOCV_CONFIG = BANAOCV_CONFIG;
if (typeof module !== 'undefined' && module.exports) module.exports = BANAOCV_CONFIG;
