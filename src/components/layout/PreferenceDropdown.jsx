import { useEffect, useId, useRef, useState } from 'react'
import '../../styles/preference-dropdown.css'

function getSelectedIndex(options, value) {
  const selectedIndex = options.findIndex((option) => option.value === value)

  return selectedIndex >= 0 ? selectedIndex : 0
}

function PreferenceDropdown({ icon, label, onChange, options, value }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(() =>
    getSelectedIndex(options, value),
  )
  const buttonRef = useRef(null)
  const listboxRef = useRef(null)
  const rootRef = useRef(null)
  const generatedId = useId()
  const listboxId = `preference-listbox-${generatedId}`
  const selectedIndex = getSelectedIndex(options, value)
  const selectedOption = options[selectedIndex]
  const activeOption = options[activeIndex] ?? selectedOption

  const openMenu = (nextIndex = selectedIndex) => {
    setActiveIndex(nextIndex)
    setIsOpen(true)
  }

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false)

    if (restoreFocus) {
      requestAnimationFrame(() => buttonRef.current?.focus())
    }
  }

  const selectOption = (option) => {
    onChange(option.value)
    closeMenu(true)
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const focusFrame = requestAnimationFrame(() => listboxRef.current?.focus())
    const handleOutsidePointer = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointer)

    return () => {
      cancelAnimationFrame(focusFrame)
      document.removeEventListener('pointerdown', handleOutsidePointer)
    }
  }, [isOpen])

  const handleButtonClick = () => {
    if (isOpen) {
      closeMenu()
      return
    }

    openMenu()
  }

  const handleButtonKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      openMenu(selectedIndex)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      openMenu(selectedIndex)
    } else if (event.key === 'Home') {
      event.preventDefault()
      openMenu(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      openMenu(options.length - 1)
    }
  }

  const handleListboxKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((currentIndex) => (currentIndex + 1) % options.length)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex(
        (currentIndex) =>
          (currentIndex - 1 + options.length) % options.length,
      )
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(options.length - 1)
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      selectOption(activeOption)
      return
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      closeMenu(true)
      return
    }

    if (event.key === 'Tab') {
      setIsOpen(false)
    }
  }

  return (
    <div className="preference-dropdown" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="preference-dropdown-trigger"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
      >
        {icon ? (
          <span className="preference-dropdown-icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <span className="preference-dropdown-value">
          {selectedOption.label}
        </span>
        <svg
          className="preference-dropdown-chevron"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>

      {isOpen ? (
        <ul
          ref={listboxRef}
          id={listboxId}
          className="preference-dropdown-menu"
          role="listbox"
          aria-label={label}
          aria-activedescendant={`${listboxId}-option-${activeIndex}`}
          tabIndex="-1"
          onKeyDown={handleListboxKeyDown}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value
            const isHighlighted = index === activeIndex

            return (
              <li
                id={`${listboxId}-option-${index}`}
                key={option.value}
                className="preference-dropdown-option"
                role="option"
                aria-selected={isSelected}
                data-highlighted={isHighlighted}
                onClick={() => selectOption(option)}
                onPointerMove={() => setActiveIndex(index)}
              >
                <span>{option.label}</span>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="m3.5 8 3 3 6-6" />
                </svg>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default PreferenceDropdown
