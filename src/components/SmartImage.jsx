import Image from 'next/image'

// Wraps next/image so every page gets responsive, correctly-sized images
// (CLS = 0) without pages ever reaching for a raw <img>.
export default function SmartImage({ src, alt, width, height, loading = 'lazy', style, ...rest }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading === 'eager' ? undefined : 'lazy'}
      priority={loading === 'eager'}
      style={{ width: '100%', height: '100%', objectFit: 'contain', ...style }}
      {...rest}
    />
  )
}
