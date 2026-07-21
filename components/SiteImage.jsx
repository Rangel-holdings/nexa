import Image from 'next/image'

/**
 * Optimized site image with sensible defaults for LCP and cacheability.
 * Prefer fill + sizes for responsive cards; use width/height for static layouts.
 */
export default function SiteImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  quality = 75,
}) {
  const shared = {
    src,
    alt: alt || '',
    className,
    sizes,
    quality,
    priority,
    loading: priority ? undefined : 'lazy',
    decoding: 'async',
  }

  if (fill) {
    return <Image {...shared} fill style={{ objectFit: 'cover' }} />
  }

  return <Image {...shared} width={width} height={height} style={{ width: '100%', height: 'auto' }} />
}
