export const MOBILE_IMAGE_RATIO_THRESHOLD = 0.9

export function detectProjectGalleryDisplayMode(width, height) {
  if (!Number.isFinite(width) || !Number.isFinite(height) || height <= 0) {
    return 'desktop'
  }

  return width / height < MOBILE_IMAGE_RATIO_THRESHOLD ? 'mobile' : 'desktop'
}

export function resolveProjectGalleryDisplayMode(
  requestedMode,
  detectedMode = 'desktop',
) {
  return requestedMode === 'auto' ? detectedMode : requestedMode
}
