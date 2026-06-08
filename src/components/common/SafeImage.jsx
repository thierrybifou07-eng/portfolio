import { useState } from 'react'
import defaultFallbackSrc from '../../assets/images/placeholders/media-placeholder.svg'

function SafeImage({
  src,
  alt,
  fallbackSrc = defaultFallbackSrc,
  loading = 'lazy',
  decoding = 'async',
  onError,
  ...imageProps
}) {
  const [failedSrc, setFailedSrc] = useState(null)

  if (typeof alt !== 'string') {
    throw new TypeError('SafeImage requires an alt string.')
  }

  const resolvedSrc = !src || failedSrc === src ? fallbackSrc : src

  const handleError = (event) => {
    if (resolvedSrc !== fallbackSrc) {
      setFailedSrc(src)
    }

    onError?.(event)
  }

  return (
    <img
      {...imageProps}
      src={resolvedSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={handleError}
    />
  )
}

export default SafeImage
