/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Placeholder catalog images ship as SVG until real product photography is provided.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
