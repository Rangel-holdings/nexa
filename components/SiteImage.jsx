import Image from 'next/image'

/**
 * Optimized site image — AVIF/WebP via next/image, responsive sizes, lazy by default.
 * Priority heroes get high fetchPriority for LCP; others stay lazy + async decode.
 */
export default function SiteImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px',
  quality = 72,
}) {
  const shared = {
    src,
    alt: alt || '',
    className: className ? `site-image ${className}` : 'site-image',
    sizes,
    quality,
    priority,
    loading: priority ? undefined : 'lazy',
    decoding: 'async',
    fetchPriority: priority ? 'high' : 'auto',
  }

  if (fill) {
    return <Image {...shared} fill sizes={sizes} style={{ objectFit: 'cover' }} />
  }

  return (
    <Image
      {...shared}
      width={width}
      height={height}
      style={{ width: '100%', height: 'auto' }}
    />
  )
}
