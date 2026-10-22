import { Link } from 'react-router'
import Icon from '../Icon/Icon.jsx'
import Image from '../Image/Image.jsx'
import { footerContact, footerResources, footerSocialLinks } from '../../data/footer.js'
import './Footer.css'

function FooterLink({ href, label, download, children, className = '' }) {
  const Component = href ? 'a' : 'button'
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer', download: download || undefined }
    : { type: 'button', disabled: true }

  return (
    <Component
      {...linkProps}
      className={className}
      aria-label={href ? label : `${label}: Segera tersedia`}
      title={href ? label : `${label}: Segera tersedia`}
    >
      {children}
    </Component>
  )
}

export default function Footer({
  brand = 'Medina Insan Qurani',
  logo = `${import.meta.env.BASE_URL}img/logo.png`,
  contact = footerContact,
  resources = footerResources,
  socialLinks = footerSocialLinks,
  year = new Date().getFullYear(),
  className = '',
  style,
  ...props
}) {
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`

  return (
    <footer className={`footer ${className}`.trim()} style={style} {...props}>
      <div className="footer__container footer__main">
        <div className="footer__details">
          <Link to="/" className="footer__brand" aria-label={`${brand} - Beranda`}>
            <Image src={logo} alt={`Logo ${brand}`} width={40} height={40} fit="contain" />
          </Link>
          <address className="footer__address">
            <Icon name="mapPin" size={28} className="footer__contact-icon" />
            <div>
              <span className="footer__address-title">Address</span>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                {contact.address}
              </a>
            </div>
          </address>
          <div className="footer__contacts">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={24} className="footer__contact-icon" />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`}>
              <Icon name="mail" size={24} className="footer__contact-icon" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
        <nav aria-label="Dokumen sekolah">
          <ul className="footer__resources">
            {resources.map((item) => (
              <li key={item.label}>
                <FooterLink {...item} className="footer__resource">
                  <span className="footer__resource-icon">
                    <Icon name={item.icon} size={28} />
                  </span>
                  <span>{item.label}</span>
                  {!item.href && <span className="footer__availability">Segera tersedia</span>}
                </FooterLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer__bottom">
        <div className="footer__container footer__bottom-content">
          <p className="footer__copyright">© {year} {brand}. All rights reserved.</p>
          <nav className="footer__socials" aria-label="Media sosial">
            <span>Follow us</span>
            <ul className="footer__social-list">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink {...item} className="footer__social-link">
                    <Icon name={item.icon} size={22} />
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
