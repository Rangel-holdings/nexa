import SiteImage from './SiteImage'

/**
 * Designed media frame — image sits inside a composed surface, not a raw drop-in.
 */
export default function MediaFrame({
  src,
  alt,
  priority = false,
  quality = 72,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px',
  ratio = '4 / 3',
  caption,
  tone = 'light',
  className = '',
  reveal,
}) {
  return (
    <figure
      className={`media-frame media-frame--${tone} ${className}`.trim()}
      data-reveal={reveal || undefined}
      style={{ '--media-ratio': ratio }}
    >
      <div className="media-frame__surface">
        <div className="media-frame__shade" aria-hidden="true" />
        <SiteImage src={src} alt={alt} fill priority={priority} quality={quality} sizes={sizes} />
      </div>
      {caption ? <figcaption className="media-frame__caption">{caption}</figcaption> : null}
    </figure>
  )
}
