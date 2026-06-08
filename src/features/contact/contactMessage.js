function formatContactMessage(values, labels) {
  return [
    `${labels.nameLabel}: ${values.name.trim()}`,
    `${labels.emailLabel}: ${values.email.trim()}`,
    '',
    `${labels.messageLabel}:`,
    values.message.trim(),
  ].join('\n')
}

function buildMailtoLink(recipient, values, labels) {
  const subject = encodeURIComponent(values.subject.trim())
  const body = encodeURIComponent(formatContactMessage(values, labels))

  return `mailto:${recipient}?subject=${subject}&body=${body}`
}

export { buildMailtoLink, formatContactMessage }
