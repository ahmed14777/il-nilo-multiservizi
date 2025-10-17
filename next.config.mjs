import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  async headers() {
    const security = [
      ["X-Frame-Options","SAMEORIGIN"],
      ["X-Content-Type-Options","nosniff"],
      ["Referrer-Policy","strict-origin-when-cross-origin"]
    ];
    return [{ source: "/(.*)", headers: security.map(([k,v])=>({ key:k, value:v })) }];
  }
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production'
})(baseConfig);
