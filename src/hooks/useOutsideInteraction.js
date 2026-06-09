import { useEffect, useRef } from 'react'

function isEventInside(event, elementRefs) {
  const eventPath =
    typeof event.composedPath === 'function' ? event.composedPath() : null

  return elementRefs.some(({ current: element }) => {
    if (!element) {
      return false
    }

    if (eventPath) {
      return eventPath.includes(element)
    }

    return event.target instanceof Node && element.contains(event.target)
  })
}

function useOutsideInteraction({ enabled, onOutside, refs }) {
  const onOutsideRef = useRef(onOutside)
  const elementRefsRef = useRef(refs)

  useEffect(() => {
    onOutsideRef.current = onOutside
    elementRefsRef.current = refs
  }, [onOutside, refs])

  useEffect(() => {
    if (!enabled) {
      return undefined
    }

    const handleOutsideInteraction = (event) => {
      if (!isEventInside(event, elementRefsRef.current)) {
        onOutsideRef.current(event)
      }
    }
    const listenerOptions = { capture: true, passive: true }

    if ('PointerEvent' in window) {
      document.addEventListener(
        'pointerdown',
        handleOutsideInteraction,
        listenerOptions,
      )

      return () =>
        document.removeEventListener(
          'pointerdown',
          handleOutsideInteraction,
          listenerOptions,
        )
    }

    document.addEventListener(
      'mousedown',
      handleOutsideInteraction,
      listenerOptions,
    )
    document.addEventListener(
      'touchstart',
      handleOutsideInteraction,
      listenerOptions,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideInteraction,
        listenerOptions,
      )
      document.removeEventListener(
        'touchstart',
        handleOutsideInteraction,
        listenerOptions,
      )
    }
  }, [enabled])
}

export default useOutsideInteraction
