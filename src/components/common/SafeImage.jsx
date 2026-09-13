import { useState } from 'react'
import defaultFallbackSrc from '../../assets/images/placeholders/media-placeholder.svg'
import '../../styles/safe-image.css'

function SafeImage({
  src,
  alt,
  fallbackSrc = defaultFallbackSrc,
  loading = 'lazy',
  decoding = 'async',
  onError,
  onLoad,
  ...imageProps
}) {
  const [failedSrc, setFailedSrc] = useState(null)
  const [loadedSrc, setLoadedSrc] = useState(null)

  if (typeof alt !== 'string') {
    throw new TypeError('SafeImage requires an alt string.')
  }

  const resolvedSrc = !src || failedSrc === src ? fallbackSrc : src
  const isLoaded = loadedSrc === resolvedSrc

  const handleError = (event) => {
    if (resolvedSrc !== fallbackSrc) {
      setFailedSrc(src)
    } else {
      setLoadedSrc(resolvedSrc)
    }

    onError?.(event)
  }

  const handleLoad = (event) => {
    setLoadedSrc(resolvedSrc)
    onLoad?.(event)
  }

  return (
    <span
      className="safe-image-shell"
      data-image-loaded={isLoaded ? 'true' : 'false'}
      aria-busy={!isLoaded}
    >
      <span className="safe-image-loader" aria-hidden="true" />
      <img
        {...imageProps}
        src={resolvedSrc}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onError={handleError}
        onLoad={handleLoad}
      />
    </span>
  )
}

export default SafeImage
