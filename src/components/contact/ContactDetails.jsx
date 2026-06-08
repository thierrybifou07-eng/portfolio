import { getIcon } from '../icons/iconRegistry.js'

const ExternalLinkIcon = getIcon('external')

function ContactDetails({ contact, profile }) {
  const visibleLinks = contact.links.filter(({ url }) => Boolean(url))

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
          {visibleLinks.map((link) => {
            const Icon = getIcon(link.icon)

            return (
              <li key={link.id}>
                <a
                  href={link.url}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {Icon ? <Icon className="contact-social-icon" /> : null}
                  <span>{link.label}</span>
                  {link.external ? (
                    <>
                      <ExternalLinkIcon className="contact-external-icon" />
                      <span className="visually-hidden">
                        {' '}
                        ({contact.externalLinkLabel})
                      </span>
                    </>
                  ) : null}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <a className="button button-secondary" href={`mailto:${contact.email}`}>
        {contact.directEmailAction}
      </a>
    </aside>
  )
}

export default ContactDetails
