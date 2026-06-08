function formatSocialLabel(key) {
  return key.charAt(0).toUpperCase() + key.slice(1)
}

function ContactDetails({ contact, profile }) {
  const socialLinks = Object.entries(contact.socialLinks)

  return (
    <aside className="contact-details" aria-labelledby="contact-details-title">
      <h2 id="contact-details-title">{contact.detailsTitle}</h2>

      <dl className="contact-detail-list">
        <div>
          <dt>{contact.emailLabel}</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
        </div>
        <div>
          <dt>{contact.locationLabel}</dt>
          <dd>{profile.location}</dd>
        </div>
        <div>
          <dt>{contact.availabilityLabel}</dt>
          <dd>{profile.availability}</dd>
        </div>
      </dl>

      <div className="contact-socials">
        <h3>{contact.socialLabel}</h3>
        <ul>
          {socialLinks.map(([key, href]) => (
            <li key={key}>
              <a href={href} target="_blank" rel="noreferrer">
                {formatSocialLabel(key)}
                <span aria-hidden="true">↗</span>
                <span className="visually-hidden">
                  {' '}
                  ({contact.externalLinkLabel})
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a className="button button-secondary" href={`mailto:${contact.email}`}>
        {contact.directEmailAction}
      </a>
    </aside>
  )
}

export default ContactDetails
