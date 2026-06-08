import { useState } from 'react'
import {
  buildMailtoLink,
  formatContactMessage,
} from '../../features/contact/contactMessage.js'
import copyText from '../../features/contact/copyText.js'

const initialValues = Object.freeze({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function ContactForm({ recipient, labels }) {
  const [values, setValues] = useState(initialValues)
  const [copyStatus, setCopyStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
    setCopyStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.currentTarget.reportValidity()) {
      return
    }

    window.location.href = buildMailtoLink(recipient, values, labels)
  }

  const handleCopy = async () => {
    const form = document.getElementById('contact-form')

    if (!form?.reportValidity()) {
      return
    }

    try {
      await copyText(formatContactMessage(values, labels))
      setCopyStatus('success')
    } catch {
      setCopyStatus('error')
    }
  }

  const statusMessage =
    copyStatus === 'success'
      ? labels.copiedMessage
      : copyStatus === 'error'
        ? labels.copyError
        : ''

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <div className="contact-form-heading">
        <h2 id="contact-form-title">{labels.title}</h2>
        <p>{labels.requiredHint}</p>
      </div>

      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field-row">
          <label>
            <span>{labels.nameLabel}</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder={labels.namePlaceholder}
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>{labels.emailLabel}</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder={labels.emailPlaceholder}
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label>
          <span>{labels.subjectLabel}</span>
          <input
            name="subject"
            type="text"
            placeholder={labels.subjectPlaceholder}
            value={values.subject}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>{labels.messageLabel}</span>
          <textarea
            name="message"
            rows="7"
            placeholder={labels.messagePlaceholder}
            value={values.message}
            onChange={handleChange}
            required
          />
        </label>

        <div className="contact-form-actions">
          <button className="button button-primary" type="submit">
            {labels.prepareEmail}
          </button>
          <button
            className="button button-secondary"
            type="button"
            onClick={handleCopy}
          >
            {labels.copyMessage}
          </button>
        </div>

        <p
          className="contact-copy-status"
          role="status"
          aria-label={labels.copyStatusLabel}
        >
          {statusMessage}
        </p>
      </form>
    </section>
  )
}

export default ContactForm
