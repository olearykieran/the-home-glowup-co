// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config options go here
};

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://js.stripe.com 'unsafe-inline' 'unsafe-eval';
  style-src 'self' https://js.stripe.com 'unsafe-inline';
  img-src 'self' https: data:;
  font-src 'self' https://js.stripe.com;
  frame-src 'self' https://js.stripe.com https://hooks.stripe.com;
  connect-src 'self' https://api.stripe.com https://*.googleapis.com https://*.firebaseio.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  // You can add other security headers here if needed
];

const nextConfigWithHeaders = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfigWithHeaders;
