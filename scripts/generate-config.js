#!/usr/bin/env node
/**
 * BanaoCV — Config Generator
 * Reads .env and writes assets/js/config.runtime.js
 * Usage: node scripts/generate-config.js
 */
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const outputPath = path.join(__dirname, '..', 'assets', 'js', 'config.runtime.js');

function parseEnv(content) {
  const result = {};
  content.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const eq = line.indexOf('=');
    if (eq === -1) return;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim();
    result[key] = val;
  });
  return result;
}

const envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const env = parseEnv(envContent);

const configJS = `/**
 * BanaoCV — Runtime Config (generated from .env)
 * Generated: ${new Date().toISOString()}
 * Only fill keys in .env — this file is rebuilt by scripts/generate-config.js
 */
const BANAOCV_CONFIG = {
  ai: {
    apiKey: "${env.AI_API_KEY || ''}",
    endpoint: "${env.AI_API_ENDPOINT || 'https://api.openai.com/v1/chat/completions'}",
    model: "${env.AI_MODEL || 'gpt-4o-mini'}",
    systemPrompt: "You are BanaoCV AI assistant. Help users create professional resumes in English based on their Hindi input.",
    enabled: ${(env.FEATURE_AI_RESUME || 'true') === 'true'},
  },
  auth: {
    provider: "${env.AUTH_PROVIDER || 'firebase'}",
    apiKey: "${env.AUTH_API_KEY || ''}",
    domain: "${env.AUTH_DOMAIN || ''}",
    projectId: "${env.AUTH_PROJECT_ID || ''}",
    appId: "${env.AUTH_APP_ID || ''}",
    jwtSecret: "${env.JWT_SECRET || 'dev-jwt-secret-change-in-production'}",
    jwtExpiry: "${env.JWT_EXPIRY || '7d'}",
  },
  payment: {
    razorpayKeyId: "${env.RAZORPAY_KEY_ID || ''}",
    razorpayKeySecret: "${env.RAZORPAY_KEY_SECRET || ''}",
    razorpayWebhookSecret: "${env.RAZORPAY_WEBHOOK_SECRET || ''}",
    stripePublicKey: "${env.STRIPE_PUBLIC_KEY || ''}",
    stripeSecretKey: "${env.STRIPE_SECRET_KEY || ''}",
  },
  app: {
    url: "${env.APP_URL || 'https://banaocv.in'}",
    name: "BanaoCV",
    supportEmail: "${env.APP_SUPPORT_EMAIL || 'support@banaocv.in'}",
    logoUrl: "${env.APP_LOGO_URL || 'assets/logo.svg'}",
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
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, configJS);
console.log('✅ Config generated at', outputPath);
