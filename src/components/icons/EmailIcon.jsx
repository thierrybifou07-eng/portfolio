function EmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <rect
        width="17"
        height="13"
        x="3.5"
        y="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        rx="2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="m4.5 7 7.5 6 7.5-6"
      />
    </svg>
  )
}

export default EmailIcon
