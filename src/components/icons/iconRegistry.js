import EmailIcon from './EmailIcon.jsx'
import ExternalLinkIcon from './ExternalLinkIcon.jsx'
import GitHubIcon from './GitHubIcon.jsx'
import LinkedInIcon from './LinkedInIcon.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export const iconRegistry = Object.freeze({
  email: EmailIcon,
  external: ExternalLinkIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
})

export function getIcon(icon) {
  return iconRegistry[icon] ?? null
}
