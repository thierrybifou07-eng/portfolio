function formatResumeMonth(value, locale) {
  if (!value) {
    return null
  }

  const [year, month] = value.split('-').map(Number)

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)))
}

function formatResumeDateRange(item, locale, currentLabel) {
  const start = formatResumeMonth(item.start, locale)
  const end = item.end
    ? formatResumeMonth(item.end, locale)
    : currentLabel

  return `${start} - ${end}`
}

export { formatResumeDateRange, formatResumeMonth }
