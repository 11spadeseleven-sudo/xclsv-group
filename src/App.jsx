import { useEffect, useRef, useState } from 'react'
import { isSupabaseConfigured, supabase } from './supabaseClient'

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 6l4 4-4 4" />
  </svg>
)

const ChevronIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m6 8 4 4 4-4" />
  </svg>
)

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.6 6.4C5.2 7.7 4 9.6 4 12.2V18h7v-7H7.1c.2-1.2.9-2.1 2.2-2.8L7.6 6.4Zm9 0C14.2 7.7 13 9.6 13 12.2V18h7v-7h-3.9c.2-1.2.9-2.1 2.2-2.8l-1.7-1.8Z" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.7 2.6 8.3 7 10 4.4-1.7 7-5.3 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-5" />
  </svg>
)

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 21V5l8-3v19M12 8h8v13M7 8h2M7 12h2M7 16h2M15 11h2M15 15h2M15 19h2M2 21h20" />
  </svg>
)

const ToolsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m14.5 6.5 3-3a4 4 0 0 1-5 5l-7.7 7.7a2 2 0 0 0 2.8 2.8l7.7-7.7a4 4 0 0 1 5-5l-3 3" />
    <path d="m4 4 5 5" />
  </svg>
)

const ProjectIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3h10v4H7zM5 5H3v16h18V5h-2M7 12h10M7 16h6" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-221.7 99.6-221.7 222 0 39.1 10.2 77.3 29.6 111L.3 480l117.7-30.9c32.4 17.7 68.9 27 106 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.8l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.1-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
    />
  </svg>
)

const imagery = {
  hero: 'https://images.pexels.com/photos/10610731/pexels-photo-10610731.jpeg?auto=compress&cs=tinysrgb&w=1800',
  showcase: 'https://images.pexels.com/photos/28586202/pexels-photo-28586202.jpeg?auto=compress&cs=tinysrgb&w=1800',
  showcaseVideo: 'https://videos.pexels.com/video-files/37544730/15908990_1920_1080_30fps.mp4',
  partnership: 'https://images.pexels.com/photos/31737860/pexels-photo-31737860.jpeg?auto=compress&cs=tinysrgb&w=1400',
  project: 'https://images.pexels.com/photos/29197533/pexels-photo-29197533.jpeg?auto=compress&cs=tinysrgb&w=1600',
}

const partnershipSteps = [
  {
    number: '01',
    title: 'Assess the property',
    text: 'Understand the condition of the property, current needs, priorities and the practical work required.',
  },
  {
    number: '02',
    title: 'Plan the response',
    text: 'Set clear priorities, responsibilities and a practical plan for maintenance, repairs and improvements.',
  },
  {
    number: '03',
    title: 'Coordinate & improve',
    text: 'Coordinate maintenance, upgrades and project delivery to keep the property functional and well maintained.',
  },
  {
    number: '04',
    title: 'Protect long-term value',
    text: 'Manage ongoing property needs with a long-term view of condition, presentation, usability and value.',
  },
]

const maintenanceServices = [
  {
    slug: 'plumbing',
    title: 'Plumbing',
    image: 'https://images.pexels.com/photos/32588548/pexels-photo-32588548.jpeg?auto=compress&cs=tinysrgb&w=1400',
    position: '52% 50%',
    summary: 'Responsive plumbing repairs, installations and maintenance that help protect the property behind the problem.',
    eyebrow: 'Reliable property plumbing',
    heroTitle: 'Plumbing that protects the property behind the problem.',
    intro: 'From urgent repairs to planned installations and ongoing maintenance, XCLSV provides practical plumbing support for residential and commercial properties.',
    services: [
      'Leak detection & repairs',
      'Toilet installation & repairs',
      'Pipe installation & repairs',
      'Geyser installation, repairs & maintenance',
      'Drain cleaning & unblocking',
      'General plumbing maintenance',
    ],
  },
  {
    slug: 'tiling',
    title: 'Tiling',
    image: 'https://images.pexels.com/photos/29181494/pexels-photo-29181494.jpeg?auto=compress&cs=tinysrgb&w=1400',
    position: '58% 50%',
    summary: 'Clean, durable tiling work for floors, walls, bathrooms, kitchens and outdoor spaces.',
    eyebrow: 'Precision in every finish',
    heroTitle: 'Tiling that adds finish, function and lasting value.',
    intro: 'XCLSV delivers well-prepared, carefully finished tiling work designed to improve both the appearance and usability of a space.',
    services: [
      'Floor tiling',
      'Wall tiling',
      'Outdoor tiling',
      'Bathroom & kitchen tiling',
      'Tile repairs & re-grouting',
      'Surface preparation',
    ],
  },
  {
    slug: 'painting',
    title: 'Painting',
    image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1400',
    position: '56% 50%',
    summary: 'Interior and exterior painting with the preparation and finishing needed for a cleaner, longer-lasting result.',
    eyebrow: 'Colour with a quality finish',
    heroTitle: 'Painting that refreshes spaces and protects value.',
    intro: 'Good painting starts before the first coat. XCLSV combines surface preparation, careful application and tidy delivery across residential and commercial properties.',
    services: [
      'Interior painting',
      'Exterior painting',
      'Wall preparation',
      'Waterproofing support',
      'Feature walls',
      'Touch-ups & maintenance painting',
    ],
  },
  {
    slug: 'welding',
    title: 'Welding',
    image: 'https://images.pexels.com/photos/37442610/pexels-photo-37442610.jpeg?auto=compress&cs=tinysrgb&w=1400',
    position: '50% 50%',
    summary: 'Practical fabrication, repairs and steelwork for property access, safety, structure and improvement.',
    eyebrow: 'Strong work. Solid solutions.',
    heroTitle: 'Welding and fabrication built around practical property needs.',
    intro: 'From repairs and installations to fabricated steel elements, XCLSV supports properties with dependable welding work suited to the job at hand.',
    services: [
      'Gate & fence manufacturing & repairs',
      'Staircases & balustrades',
      'Steel structures & fabrication',
      'General welding & repairs',
      'Maintenance & installations',
      'Custom property steelwork',
    ],
  },
]

function BookingModal({ open, onClose }) {
  if (!open) return null

  const whatsappMessage = encodeURIComponent(
    "Hi XCLSV Group, I'd like to book a consultation. Please let me know your next available time.",
  )
  const emailSubject = encodeURIComponent('XCLSV Group — Consultation Booking Request')
  const emailBody = encodeURIComponent(
    "Hi XCLSV Group,\n\nI'd like to book a consultation. Please contact me with your next available time.\n\nName:\nPhone:\nArea of interest:\nPreferred date/time:\n\nThank you.",
  )

  return (
    <div className="booking-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="booking-modal-close" type="button" onClick={onClose} aria-label="Close booking options">×</button>
        <span className="kicker kicker-gold">Book with XCLSV</span>
        <h2 id="booking-modal-title">How would you like to book?</h2>
        <p>Choose the channel that suits you and we’ll continue the booking conversation there.</p>
        <div className="booking-options">
          <a
            className="booking-option booking-option-whatsapp"
            href={`https://wa.me/27603156018?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="booking-option-icon"><WhatsAppIcon /></span>
            <span><small>Fastest option</small><strong>Book via WhatsApp</strong><em>060 315 6018</em></span>
            <ArrowIcon />
          </a>
          <a
            className="booking-option"
            href={`mailto:info@xclsvgroup.co.za?subject=${emailSubject}&body=${emailBody}`}
          >
            <span className="booking-option-icon"><MailIcon /></span>
            <span><small>Email booking</small><strong>Book via Email</strong><em>info@xclsvgroup.co.za</em></span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  )
}


const SEO_SITE_URL = 'https://xclsvgroup.co.za'
const SEO_DEFAULT_IMAGE = `${SEO_SITE_URL}/assets/xclsv-logo.png`

const seoPages = {
  '/': {
    title: 'XCLSV Group | Property Management & Maintenance Services',
    description: 'XCLSV Group provides property management, maintenance and project support that helps residential and commercial properties stay functional, presentable and protected in South Africa.',
  },
  '/contact': {
    title: 'Contact XCLSV Group | Property Management & Maintenance',
    description: 'Contact XCLSV Group for property management, maintenance services, project support or general property enquiries in South Africa.',
  },
  '/property-maintenance': {
    title: 'Property Maintenance Services | XCLSV Group',
    description: 'Explore XCLSV Group property maintenance services including plumbing, tiling, painting and welding for residential and commercial properties.',
  },
  '/property-maintenance/plumbing': {
    title: 'Plumbing Services | XCLSV Group',
    description: 'Professional plumbing repairs, installations and maintenance for residential and commercial properties from XCLSV Group.',
  },
  '/property-maintenance/tiling': {
    title: 'Tiling Services | XCLSV Group',
    description: 'Professional floor, wall, bathroom, kitchen and outdoor tiling services designed for clean, durable property finishes.',
  },
  '/property-maintenance/painting': {
    title: 'Painting Services | XCLSV Group',
    description: 'Interior and exterior painting, wall preparation, waterproofing support and feature-wall services from XCLSV Group.',
  },
  '/property-maintenance/welding': {
    title: 'Welding & Fabrication Services | XCLSV Group',
    description: 'Welding, steel fabrication, gates, fencing, balustrades, repairs and installations for practical property needs.',
  },
  '/privacy': {
    title: 'Privacy Policy | XCLSV Group',
    description: 'Read how XCLSV Group handles personal information submitted through this website, including enquiries, bookings and customer reviews.',
  },
  '/terms': {
    title: 'Terms & Conditions | XCLSV Group',
    description: 'Read the terms governing use of the XCLSV Group website, property information, enquiries, bookings, reviews and services.',
  },
}

function ensureMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function ensureLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function usePageSeo(path) {
  useEffect(() => {
    const isAdmin = path === '/admin' || path === '/admin/reviews'
    const isKnownPage = Boolean(seoPages[path]) || /^\/property-maintenance\/(plumbing|tiling|painting|welding)$/.test(path)
    const page = seoPages[path] || {
      title: isAdmin ? 'XCLSV Admin' : 'Page Not Found | XCLSV Group',
      description: isAdmin
        ? 'Secure XCLSV Group website administration.'
        : 'The page you requested could not be found on the XCLSV Group website.',
    }

    const canonicalPath = path === '/' ? '' : path
    const canonical = `${SEO_SITE_URL}${canonicalPath}`

    document.title = page.title
    document.documentElement.lang = 'en-ZA'

    ensureMeta('name', 'description', page.description)
    ensureMeta('name', 'robots', isAdmin || !isKnownPage ? 'noindex, nofollow' : 'index, follow')
    ensureMeta('name', 'author', 'XCLSV Group Pty Ltd.')

    ensureMeta('property', 'og:type', 'website')
    ensureMeta('property', 'og:site_name', 'XCLSV Group')
    ensureMeta('property', 'og:title', page.title)
    ensureMeta('property', 'og:description', page.description)
    ensureMeta('property', 'og:url', canonical)
    ensureMeta('property', 'og:image', SEO_DEFAULT_IMAGE)
    ensureMeta('property', 'og:image:alt', 'XCLSV Group')

    ensureMeta('name', 'twitter:card', 'summary_large_image')
    ensureMeta('name', 'twitter:title', page.title)
    ensureMeta('name', 'twitter:description', page.description)
    ensureMeta('name', 'twitter:image', SEO_DEFAULT_IMAGE)

    ensureLink('canonical', canonical)
  }, [path])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [maintenanceOpen, setMaintenanceOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)

  useEffect(() => {
    if (!bookingOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleEscape = (event) => {
      if (event.key === 'Escape') setBookingOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [bookingOpen])

  return (
    <>
      <header className="site-header">
        <div className="header-inner shell">
          <a className="brand" href="/" aria-label="XCLSV Group home">
            <img src="/assets/xclsv-logo.png" alt="XCLSV Group" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${open ? 'is-open' : ''}`}>
            <a href="/">Home</a>
            <a href="/#about">About Us</a>
            <a className="nav-feature" href="/#partnership">Property Management</a>
            <div
              className={`nav-dropdown ${maintenanceOpen ? 'is-open' : ''}`}
              onMouseEnter={() => setMaintenanceOpen(true)}
              onMouseLeave={() => setMaintenanceOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMaintenanceOpen((value) => !value)}
              >
                Property Maintenance <ChevronIcon />
              </button>
              <div className="dropdown-panel">
                <a href="/property-maintenance">Overview</a>
                <a href="/property-maintenance/plumbing">Plumbing</a>
                <a href="/property-maintenance/tiling">Tiling</a>
                <a href="/property-maintenance/painting">Painting</a>
                <a href="/property-maintenance/welding">Welding</a>
              </div>
            </div>
            <a href="/#projects">Project Management</a>
            <a href="/contact">Contact Us</a>
            <button className="mobile-book-button" type="button" onClick={() => { setBookingOpen(true); setOpen(false) }}>
              Book a Consultation <ArrowIcon />
            </button>
          </nav>

          <button className="header-cta header-book-button" type="button" onClick={() => setBookingOpen(true)}>
            Book a Consultation <ArrowIcon />
          </button>
        </div>
      </header>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={imagery.hero}
        aria-hidden="true"
        disablePictureInPicture
      >
        <source src={imagery.showcaseVideo} type="video/mp4" />
      </video>
      <div className="hero-background-overlay" aria-hidden="true" />

      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Property management. Built around the asset.</div>
          <h1>
            Managing property value.
            <em>Properly.</em>
          </h1>
          <p>
            XCLSV Group brings property management, maintenance capability and project delivery into one connected service — helping owners keep properties functional, presentable, protected and performing at their best.
          </p>

          <div className="hero-actions">
            <a className="button button-gold" href="#partnership">Explore Property Management <ArrowIcon /></a>
            <a className="button button-ghost" href="#about">Discover XCLSV</a>
          </div>

          <div className="hero-proof">
            <div>
              <strong>01</strong>
              <span>Property management</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Maintenance & repairs</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Project coordination</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-frame">
            <img
              src={imagery.hero}
              alt="Premium modern residential property representing XCLSV Group property management services"
              fetchPriority="high"
            />
            <div className="visual-overlay" />
            <div className="visual-label">
              <span>Property Management</span>
              <strong>Maintain. Improve. Protect.</strong>
            </div>
          </div>
          <div className="hero-card hero-card-top">
            <span className="mini-icon"><BuildingIcon /></span>
            <div>
              <small>Focus</small>
              <strong>Residential & commercial property care</strong>
            </div>
          </div>
          <div className="hero-card hero-card-bottom">
            <span className="mini-icon"><ShieldIcon /></span>
            <div>
              <small>Built around</small>
              <strong>Reliability, workmanship & long-term value</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom shell">
        <span>Creating Employment</span>
        <span className="hero-bottom-dot" />
        <span>Giving Back</span>
        <span className="hero-bottom-line" />
        <span>South Africa</span>
      </div>
    </section>
  )
}

const STAR_VALUES = [1, 2, 3, 4, 5]


const additionalReviews = [
  {
    id: 'additional-1',
    name: 'Lerato M.',
    rating: 5,
    comment: 'The team was professional, easy to communicate with and kept the work neat from start to finish. The whole process felt well managed.',
  },
  {
    id: 'additional-2',
    name: 'Thabo K.',
    rating: 5,
    comment: 'Clear communication, good coordination and a strong focus on getting the details right. I always knew what stage the work was at.',
  },
  {
    id: 'additional-3',
    name: 'Naledi S.',
    rating: 5,
    comment: 'What stood out was the practical approach to looking after the property and making sure the work supported its long-term value.',
  },
  {
    id: 'additional-4',
    name: 'Sipho D.',
    rating: 4,
    comment: 'Reliable service and a clean finish. The team arrived prepared, communicated well and left the property looking noticeably better.',
  },
  {
    id: 'additional-5',
    name: 'Amanda N.',
    rating: 5,
    comment: 'Quick response, professional workmanship and no unnecessary complications. The issue was explained clearly before the work started.',
  },
  {
    id: 'additional-6',
    name: 'Kabelo P.',
    rating: 5,
    comment: 'The finishing and attention to detail were excellent. The work was neat, the space was respected and the end result felt premium.',
  },
  {
    id: 'additional-7',
    name: 'Zanele T.',
    rating: 5,
    comment: 'XCLSV handled the maintenance work professionally and kept communication clear throughout. Everything was completed neatly and on time.',
  },
  {
    id: 'additional-8',
    name: 'Mpho R.',
    rating: 5,
    comment: 'Very happy with the service. The team understood what needed to be done, worked efficiently and paid attention to the condition of the property.',
  },
  {
    id: 'additional-9',
    name: 'Bongani M.',
    rating: 4,
    comment: 'A dependable team with good workmanship. The process was straightforward and the property was left clean once the work was completed.',
  },
  {
    id: 'additional-10',
    name: 'Nandi L.',
    rating: 5,
    comment: 'Professional from the first conversation through to completion. The quality of the work and the overall service were both excellent.',
  },
  {
    id: 'additional-11',
    name: 'Karabo S.',
    rating: 5,
    comment: 'The team was responsive, organised and easy to work with. The maintenance work was completed neatly and with very little disruption.',
  },
  {
    id: 'additional-12',
    name: 'Neo M.',
    rating: 5,
    comment: 'Good communication from the start and a professional finish. I appreciated how clearly the team explained the work before getting started.',
  },
  {
    id: 'additional-13',
    name: 'Refilwe K.',
    rating: 4,
    comment: 'The service was reliable and the work was handled with care. Everything was completed properly and the property was left clean afterwards.',
  },
  {
    id: 'additional-14',
    name: 'Sibusiso N.',
    rating: 5,
    comment: 'XCLSV made the process simple. The team arrived prepared, worked efficiently and delivered exactly what had been discussed.',
  },
  {
    id: 'additional-15',
    name: 'Lesego P.',
    rating: 5,
    comment: 'I was impressed by the professionalism and attention to detail. The team treated the property with respect and the quality was excellent.',
  },
  {
    id: 'additional-16',
    name: 'Tshepo M.',
    rating: 5,
    comment: 'A very smooth experience from beginning to end. Communication was consistent and the work was completed to a high standard.',
  },
  {
    id: 'additional-17',
    name: 'Palesa R.',
    rating: 4,
    comment: 'Dependable service and good workmanship. The team kept me updated and made sure the job was properly finished before leaving.',
  },
  {
    id: 'additional-18',
    name: 'Lungile D.',
    rating: 5,
    comment: 'Professional, efficient and easy to deal with. The property maintenance was handled well and the result was exactly what we needed.',
  },
  {
    id: 'additional-19',
    name: 'Keitumetse B.',
    rating: 5,
    comment: 'The team paid attention to the small details and kept the whole process organised. I would gladly work with XCLSV again.',
  },
  {
    id: 'additional-20',
    name: 'Mandla S.',
    rating: 5,
    comment: 'Very solid service. The work was done neatly, communication was clear and there were no surprises during the job.',
  },
  {
    id: 'additional-21',
    name: 'Boitumelo T.',
    rating: 4,
    comment: 'The maintenance support was practical and professional. I appreciated the quick response and the care taken with the property.',
  },
  {
    id: 'additional-22',
    name: 'Kagiso L.',
    rating: 5,
    comment: 'Excellent workmanship and a professional approach. The team understood the scope, kept things tidy and delivered a strong result.',
  },
  {
    id: 'additional-23',
    name: 'Nokuthula M.',
    rating: 5,
    comment: 'The experience was straightforward and well managed. XCLSV communicated clearly and completed the work with a high level of care.',
  },
  {
    id: 'additional-24',
    name: 'Tumelo N.',
    rating: 5,
    comment: 'Reliable, professional and detail-focused. The team delivered quality work and made sure everything was in order before wrapping up.',
  },
]

function ReviewStars({ rating = 0, interactive = false, hoverRating = 0, onSelect = undefined, onHover = undefined }) {
  const activeRating = interactive ? (hoverRating || rating) : Math.round(rating)

  return (
    <div
      className={`review-stars ${interactive ? 'is-interactive' : ''}`}
      aria-label={interactive ? 'Choose a star rating' : `${rating.toFixed ? rating.toFixed(1) : rating} out of 5 stars`}
      onMouseLeave={interactive ? () => onHover?.(0) : undefined}
    >
      {STAR_VALUES.map((star) => (
        interactive ? (
          <button
            key={star}
            type="button"
            className={star <= activeRating ? 'is-active' : ''}
            onClick={() => onSelect?.(star)}
            onMouseEnter={() => onHover?.(star)}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          >
            ★
          </button>
        ) : (
          <span key={star} className={star <= activeRating ? 'is-active' : ''}>★</span>
        )
      ))}
    </div>
  )
}

function formatReviewDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-ZA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [currentReview, setCurrentReview] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [carouselPaused, setCarouselPaused] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [reviewNotice, setReviewNotice] = useState('')
  const [reviewError, setReviewError] = useState('')
  const sliderRef = useRef(null)

  const showPreviewReviews =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.endsWith('.vercel.app'))

  const displayReviews = [
    ...reviews,
    ...(showPreviewReviews ? additionalReviews : []),
  ]
  const averageRating = displayReviews.length
    ? displayReviews.reduce((total, review) => total + Number(review.rating || 0), 0) / displayReviews.length
    : 0
  const maxSlide = Math.max(0, displayReviews.length - slidesPerView)

  useEffect(() => {
    let active = true

    const loadApprovedReviews = async () => {
      if (!isSupabaseConfigured) return

      const { data, error } = await supabase
        .from('reviews')
        .select('id,name,rating,review,created_at,status')
        .eq('status', 'approved')
        .order('approved_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false })

      if (!active) return

      if (error) {
        console.error('Could not load reviews:', error.message)
        return
      }

      setReviews(
        (data || []).map((item) => ({
          id: item.id,
          name: item.name,
          rating: Number(item.rating),
          comment: item.review,
        })),
      )
    }

    loadApprovedReviews()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 620) setSlidesPerView(1)
      else if (window.innerWidth <= 900) setSlidesPerView(2)
      else setSlidesPerView(3)
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  useEffect(() => {
    setCurrentReview((current) => Math.min(current, maxSlide))
  }, [maxSlide])

  useEffect(() => {
    const viewport = sliderRef.current
    const target = viewport?.children?.[currentReview]
    if (!viewport || !target) return

    viewport.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
  }, [currentReview, slidesPerView, reviews.length])

  useEffect(() => {
    if (carouselPaused || maxSlide === 0) return undefined

    const timer = window.setInterval(() => {
      setCurrentReview((current) => (current >= maxSlide ? 0 : current + 1))
    }, 4200)

    return () => window.clearInterval(timer)
  }, [carouselPaused, maxSlide])

  useEffect(() => {
    if (!formOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') setFormOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [formOpen])

  const openReviewForm = () => {
    setReviewNotice('')
    setReviewError('')
    setFormOpen(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!name.trim() || !comment.trim()) return

    if (!isSupabaseConfigured) {
      setReviewError('Review storage still needs to be connected before submissions can go live.')
      return
    }

    setSubmitting(true)
    setReviewError('')

    const { error } = await supabase.from('reviews').insert({
      name: name.trim(),
      rating,
      review: comment.trim(),
      status: 'pending',
    })

    setSubmitting(false)

    if (error) {
      setReviewError('We could not submit your review right now. Please try again.')
      console.error('Review submission failed:', error.message)
      return
    }

    setName('')
    setRating(5)
    setHoverRating(0)
    setComment('')
    setFormOpen(false)
    setReviewNotice('Thank you. Your review has been submitted and will appear once XCLSV approves it.')
  }

  const goPrevious = () => {
    setCurrentReview((current) => (current <= 0 ? maxSlide : current - 1))
  }

  const goNext = () => {
    setCurrentReview((current) => (current >= maxSlide ? 0 : current + 1))
  }

  return (
    <section className="reviews-section" id="reviews">
      <div className="shell review-toolbar">
        <div className="review-toolbar-left">
          <div className="review-score-inline">
            <strong>{displayReviews.length ? averageRating.toFixed(1) : '—'}</strong>
            <div>
              <ReviewStars rating={averageRating} />
              <span>{displayReviews.length} client review{displayReviews.length === 1 ? '' : 's'}</span>
            </div>
          </div>

          <button className="button button-dark review-write-button" type="button" onClick={openReviewForm}>
            Leave a review <ArrowIcon />
          </button>
        </div>

        {displayReviews.length > 0 && (
          <div className="review-carousel-controls" aria-label="Review carousel controls">
            <button type="button" onClick={goPrevious} aria-label="Previous reviews">←</button>
            <span>{String(currentReview + 1).padStart(2, '0')} / {String(maxSlide + 1).padStart(2, '0')}</span>
            <button type="button" onClick={goNext} aria-label="Next reviews">→</button>
          </div>
        )}
      </div>

      {reviewNotice && (
        <div className="shell review-inline-notice" role="status">
          <span>✓</span>
          <p>{reviewNotice}</p>
        </div>
      )}

      <div
        className="shell reviews-carousel"
        onMouseEnter={() => setCarouselPaused(true)}
        onMouseLeave={() => setCarouselPaused(false)}
      >
        <div className="reviews-viewport" ref={sliderRef}>
          {displayReviews.length === 0 ? (
            <div className="review-empty-public">
              <strong>No published reviews yet.</strong>
              <span>Be the first to share your experience with XCLSV Group.</span>
            </div>
          ) : displayReviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-card-top">
                <div className="review-avatar" aria-hidden="true">
                  {review.name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part.charAt(0).toUpperCase())
                    .join('')}
                </div>
                <div className="review-person">
                  <strong>{review.name}</strong>
                </div>
              </div>

              <ReviewStars rating={Number(review.rating)} />
              <p>“{review.comment}”</p>
            </article>
          ))}
        </div>
      </div>

      {displayReviews.length > 0 && (
        <div className="shell review-progress" aria-hidden="true">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentReview ? 'is-active' : ''}
              onClick={() => setCurrentReview(index)}
              tabIndex="-1"
            />
          ))}
        </div>
      )}

      {formOpen && (
        <div className="review-modal-backdrop" role="presentation" onMouseDown={() => setFormOpen(false)}>
          <div
            className="review-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="review-form-heading">
                <div>
                  <span className="kicker kicker-gold">Share your experience</span>
                  <h3 id="review-modal-title">Leave XCLSV a review.</h3>
                </div>
                <button className="review-form-close" type="button" onClick={() => setFormOpen(false)} aria-label="Close review form">×</button>
              </div>

              <label>
                <span>Your name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name and surname"
                  autoFocus
                  required
                  maxLength="80"
                />
              </label>

              <div className="review-rating-field">
                <span>Your rating</span>
                <ReviewStars
                  rating={rating}
                  hoverRating={hoverRating}
                  interactive
                  onSelect={setRating}
                  onHover={setHoverRating}
                />
              </div>

              <label className="review-message-field">
                <span>Your review</span>
                <textarea
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Tell us briefly about your experience..."
                  rows="4"
                  required
                  maxLength="800"
                />
              </label>

              {reviewError && <p className="review-form-error" role="alert">{reviewError}</p>}

              <button className="button button-gold review-submit-button" type="submit" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit review'} {!submitting && <ArrowIcon />}
              </button>

              <p className="review-form-note">Reviews are moderated by XCLSV before they are published.</p>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

function About() {
  return (
    <section className="section section-light" id="about">
      <div className="shell about-grid">
        <div className="section-heading">
          <span className="kicker">The XCLSV approach</span>
          <h2>Property management first. <span>Everything supports the asset.</span></h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            XCLSV is centred on managing and maintaining property well — combining day-to-day property care, practical maintenance and coordinated project support to protect and improve each asset.
          </p>
          <p>
            That gives the Group one clear story: understand what a property needs, coordinate the right work, maintain it professionally and protect value for owners, clients and communities.
          </p>
          <a className="text-link" href="#partnership">How our property management approach works <ArrowIcon /></a>
        </div>
      </div>

      <div className="shell pillars-grid">
        <article className="pillar pillar-primary">
          <span className="pillar-icon"><BuildingIcon /></span>
          <div>
            <span className="pillar-number">01</span>
            <h3>Property Management</h3>
            <p>Practical oversight, maintenance coordination and improvement support focused on protecting property value.</p>
          </div>
          <a href="#partnership" aria-label="Explore property partnership"><ArrowIcon /></a>
        </article>
        <article className="pillar">
          <span className="pillar-icon"><ToolsIcon /></span>
          <div>
            <span className="pillar-number">02</span>
            <h3>Property Maintenance</h3>
            <p>Reliable repairs and trade services that keep residential and commercial properties functional, presentable and protected.</p>
          </div>
          <a href="#maintenance" aria-label="Explore property maintenance"><ArrowIcon /></a>
        </article>
        <article className="pillar">
          <span className="pillar-icon"><ProjectIcon /></span>
          <div>
            <span className="pillar-number">03</span>
            <h3>Project Management</h3>
            <p>Planning, coordination and delivery for construction, fit-out, setup and improvement projects.</p>
          </div>
          <a href="#projects" aria-label="Explore project management"><ArrowIcon /></a>
        </article>
      </div>

      <div className="shell property-showcase">
        <img
          className="property-showcase-fallback"
          src={imagery.showcase}
          alt="Contemporary residential property reflecting XCLSV Group's premium property focus"
          loading="lazy"
        />

        <video
          className="property-showcase-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={imagery.showcase}
          aria-hidden="true"
          disablePictureInPicture
        >
          <source src={imagery.showcaseVideo} type="video/mp4" />
        </video>

        <div className="property-showcase-shade" />
        <div className="property-showcase-copy">
          <span>Property at the centre</span>
          <strong>Management. Maintenance. Long-term value.</strong>
        </div>
      </div>
    </section>
  )
}

function Partnership() {
  return (
    <section className="section partnership" id="partnership">
      <div className="shell partnership-intro">
        <div>
          <span className="kicker kicker-gold">Property management</span>
          <h2>Look after the property. <span>Protect the value.</span></h2>
        </div>
        <p>
          XCLSV's property management approach is about understanding what each residential or commercial property needs, coordinating the right maintenance and improvement work, and keeping the asset well managed over the long term.
        </p>
      </div>

      <div className="shell partnership-grid">
        <div className="partnership-image">
          <img src={imagery.partnership} alt="Premium modern residential property at night" loading="lazy" />
          <div className="partnership-image-copy">
            <span>Practical property care</span>
            <strong>Assess. Maintain. Improve. Protect.</strong>
          </div>
        </div>

        <div className="partnership-steps">
          {partnershipSteps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="shell partnership-values">
        <div className="value-intro">
          <QuoteIcon />
          <p>We look after property with people who think beyond the next repair.</p>
        </div>
        <div className="value-list">
          <span>Integrity</span>
          <span>Teamwork</span>
          <span>Commitment</span>
          <span>Property Care</span>
          <span>Long-Term Value</span>
        </div>
      </div>
    </section>
  )
}

function Maintenance() {
  return (
    <section className="section section-light" id="maintenance">
      <div className="shell service-heading">
        <div>
          <span className="kicker">Property maintenance</span>
          <h2>The hands-on support behind <span>well-managed property.</span></h2>
        </div>
        <div>
          <p>
            Our maintenance capability supports residential and commercial properties with practical, dependable workmanship across the key trades needed to keep properties in good condition.
          </p>
          <a className="text-link" href="#contact">Request maintenance support <ArrowIcon /></a>
        </div>
      </div>

      <div className="shell service-grid">
        {maintenanceServices.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={service.image} alt={`${service.title} services`} style={{ objectPosition: service.position }} loading="lazy" />
            <div className="service-shade" />
            <div className="service-card-copy">
              <span>Property Maintenance</span>
              <h3>{service.title}</h3>
              <a href={`/property-maintenance/${service.slug}`}>Explore service <ArrowIcon /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell projects-grid">
        <div className="project-content">
          <span className="kicker kicker-gold">Project management</span>
          <h2>Plan properly. <span>Deliver confidently.</span></h2>
          <p className="lead">
            From renovations and property improvements to larger maintenance programmes, XCLSV coordinates the moving parts required to take work from plan to handover.
          </p>
          <div className="project-list">
            <span>Project planning & scheduling</span>
            <span>Budget & cost control</span>
            <span>Site supervision & coordination</span>
            <span>Procurement management</span>
            <span>Quality assurance</span>
            <span>Project handover & close-out</span>
          </div>
          <a className="button button-gold" href="#contact">Discuss a project <ArrowIcon /></a>
        </div>
        <div className="project-image">
          <img src={imagery.project} alt="Project professionals reviewing work on a live construction site" loading="lazy" />
          <div className="project-badge">
            <small>Project promise</small>
            <strong>We plan it. We manage it. We deliver it.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function Impact() {
  return (
    <section className="impact">
      <div className="shell impact-grid">
        <div className="impact-mark">X</div>
        <div>
          <span className="kicker kicker-gold">Purpose beyond property</span>
          <h2>Creating employment. <span>Giving back.</span></h2>
        </div>
        <p>
          Growth should create opportunity. XCLSV is building a model where property, projects and service delivery can contribute to sustainable work and stronger communities.
        </p>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="shell cta-card">
        <div>
          <span className="kicker">Start a conversation</span>
          <h2>Need a property management and maintenance team that can help deliver?</h2>
        </div>
        <div className="cta-actions">
          <a className="button button-dark" href="tel:+27603156018">060 315 6018 <ArrowIcon /></a>
          <a className="button button-outline-dark" href="mailto:info@xclsvgroup.co.za">info@xclsvgroup.co.za</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/assets/xclsv-logo.png" alt="XCLSV Group" />
          <p>
            Property management, property maintenance and project delivery built around protecting long-term value.
          </p>
          <span>Creating Employment & Giving Back</span>
        </div>

        <div>
          <h4>Company</h4>
          <a href="/#about">About Us</a>
          <a href="/#partnership">Property Management</a>
          <a href="/#projects">Project Management</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div>
          <h4>Property Maintenance</h4>
          <a href="/property-maintenance">Overview</a>
          <a href="/property-maintenance/plumbing">Plumbing</a>
          <a href="/property-maintenance/tiling">Tiling</a>
          <a href="/property-maintenance/painting">Painting</a>
          <a href="/property-maintenance/welding">Welding</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="tel:+27603156018">060 315 6018</a>
          <a href="mailto:info@xclsvgroup.co.za">info@xclsvgroup.co.za</a>
          <span>South Africa</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 XCLSV Group Pty Ltd.</span>
        <div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v12H3z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 3.8 9 8.3 6.8 10a16.7 16.7 0 0 0 7.2 7.2l1.7-2.2 4.5 2.4c.5.3.8.8.7 1.4l-.3 1.7c-.1.8-.8 1.5-1.6 1.5C9.6 22 2 14.4 2 5c0-.8.6-1.5 1.5-1.6l1.7-.3c.6-.1 1.1.2 1.4.7Z" />
    </svg>
  )
}

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Property Management',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [formNotice, setFormNotice] = useState('')
  const [formError, setFormError] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitEnquiry = async (event) => {
    event.preventDefault()
    setFormNotice('')
    setFormError('')

    if (!isSupabaseConfigured) {
      setFormError('The enquiry service is not connected right now. Please email info@xclsvgroup.co.za.')
      return
    }

    setSubmitting(true)

    const { error } = await supabase.from('contact_enquiries').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      interest: form.interest,
      message: form.message.trim(),
      status: 'new',
    })

    setSubmitting(false)

    if (error) {
      console.error('Contact enquiry submission failed:', error.message)
      setFormError('We could not send your enquiry right now. Please try again or email info@xclsvgroup.co.za.')
      return
    }

    setForm({
      name: '',
      email: '',
      phone: '',
      interest: 'Property Management',
      message: '',
    })
    setFormNotice('Thank you. Your enquiry has been sent to XCLSV Group.')
  }

  return (
    <main className="contact-page" id="top">
      <section className="contact-hero">
        <div className="contact-hero-media">
          <img
            src={imagery.showcase}
            alt="Premium residential property representing XCLSV Group"
          />
          <div className="contact-hero-overlay" />
        </div>

        <div className="shell contact-hero-grid">
          <div className="contact-hero-copy">
            <span className="kicker kicker-gold">Contact XCLSV Group</span>
            <h1>Let’s build value <span>together.</span></h1>
            <p>
              Whether you need ongoing property management, maintenance support or a project that needs coordinated delivery, start the conversation with us.
            </p>
          </div>

          <div className="contact-hero-details">
            <span>Direct contact</span>
            <a href="tel:+27603156018">
              <span className="contact-icon"><PhoneIcon /></span>
              <span><small>Call us</small><strong>060 315 6018</strong></span>
            </a>
            <a href="mailto:info@xclsvgroup.co.za">
              <span className="contact-icon"><MailIcon /></span>
              <span><small>Email us</small><strong>info@xclsvgroup.co.za</strong></span>
            </a>
            <div className="contact-location">
              <small>Based in</small>
              <strong>South Africa</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="shell contact-main-grid">
          <div className="contact-intro">
            <span className="kicker">Start a conversation</span>
            <h2>Tell us what you’re looking to <span>build, improve or grow.</span></h2>
            <p>
              Give us a little context and we’ll know which part of the XCLSV Group is best placed to help.
            </p>

            <div className="contact-paths">
              <article>
                <span>01</span>
                <h3>Property Management</h3>
                <p>Discuss ongoing property care, maintenance coordination, improvements and long-term asset value.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Property Maintenance</h3>
                <p>Plumbing, painting, tiling, welding and practical property improvement support.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Project Management</h3>
                <p>Planning, coordination and delivery for property, renovation and commercial projects.</p>
              </article>
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span>Enquiry form</span>
              <h2>How can we help?</h2>
              <p>Complete the form and your enquiry will be sent directly to the XCLSV team.</p>
            </div>

            <form className="contact-form" onSubmit={submitEnquiry}>
              <div className="contact-form-row">
                <label>
                  <span>Name & surname</span>
                  <input name="name" value={form.name} onChange={updateField} type="text" placeholder="Your full name" required />
                </label>
                <label>
                  <span>Email address</span>
                  <input name="email" value={form.email} onChange={updateField} type="email" placeholder="name@email.com" required />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  <span>Phone number</span>
                  <input name="phone" value={form.phone} onChange={updateField} type="tel" placeholder="e.g. 082 000 0000" />
                </label>
                <label>
                  <span>I’m interested in</span>
                  <select name="interest" value={form.interest} onChange={updateField}>
                    <option>Property Management</option>
                    <option>Property Maintenance</option>
                    <option>Plumbing</option>
                    <option>Painting</option>
                    <option>Tiling</option>
                    <option>Welding</option>
                    <option>Project Management</option>
                    <option>General Enquiry</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Tell us about your enquiry</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="6"
                  placeholder="Tell us what you need, the type of property or project, and anything else that will help us understand what support is needed."
                  required
                />
              </label>

              {formNotice && (
                <div className="contact-form-message is-success" role="status">
                  <strong>Enquiry sent.</strong>
                  <span>{formNotice}</span>
                </div>
              )}

              {formError && (
                <div className="contact-form-message is-error" role="alert">
                  <strong>Something went wrong.</strong>
                  <span>{formError}</span>
                </div>
              )}

              <button className="button button-gold contact-submit" type="submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send enquiry'} {!submitting && <ArrowIcon />}
              </button>
              <p className="contact-form-note">
                Your enquiry is stored securely for the XCLSV team. Email notifications will be added during the final production setup.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-response-section">
        <div className="shell contact-response-grid">
          <div>
            <span className="kicker kicker-gold">What happens next</span>
            <h2>A simple, professional <span>next step.</span></h2>
          </div>
          <div className="contact-response-steps">
            <article><strong>01</strong><span>We review your enquiry and understand what you need.</span></article>
            <article><strong>02</strong><span>The right XCLSV capability is matched to the conversation.</span></article>
            <article><strong>03</strong><span>We contact you to discuss scope, opportunity and the way forward.</span></article>
          </div>
        </div>
      </section>
    </main>
  )
}


function MaintenanceOverviewPage() {
  return (
    <main className="maintenance-page" id="top">
      <section className="maintenance-page-hero">
        <div className="shell maintenance-page-hero-grid">
          <div className="maintenance-page-hero-copy">
            <span className="kicker kicker-gold">Property Maintenance</span>
            <h1>Protect the property. <span>Preserve the value.</span></h1>
            <p>
              XCLSV’s maintenance capability supports residential and commercial properties with practical trades, repairs and improvement work — all under one property management and maintenance-focused brand.
            </p>
            <div className="maintenance-page-hero-actions">
              <a className="button button-gold" href="/contact">Request maintenance support <ArrowIcon /></a>
              <a className="button button-ghost" href="#maintenance-services">Explore services</a>
            </div>
          </div>
          <div className="maintenance-overview-visual">
            <img src={imagery.showcase} alt="Modern property representing XCLSV maintenance services" />
            <div className="maintenance-overview-visual-copy">
              <small>Our role</small>
              <strong>Maintain. Improve. Add value.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="maintenance-service-index" id="maintenance-services">
        <div className="shell maintenance-index-heading">
          <div>
            <span className="kicker">Core maintenance services</span>
            <h2>One property team. <span>Four specialist capabilities.</span></h2>
          </div>
          <p>
            Choose the service you need. Each capability has its own page with a clearer breakdown of the work XCLSV can support.
          </p>
        </div>
        <div className="shell maintenance-index-grid">
          {maintenanceServices.map((service, index) => (
            <a className="maintenance-index-card" href={`/property-maintenance/${service.slug}`} key={service.slug}>
              <img src={service.image} alt={`${service.title} property maintenance`} style={{ objectPosition: service.position }} />
              <div className="maintenance-index-card-shade" />
              <div className="maintenance-index-card-copy">
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <strong>View service <ArrowIcon /></strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="maintenance-principles">
        <div className="shell maintenance-principles-grid">
          <div>
            <span className="kicker kicker-gold">How we approach maintenance</span>
            <h2>Good maintenance is part of <span>good property stewardship.</span></h2>
          </div>
          <div className="maintenance-principle-list">
            <article><strong>01</strong><h3>Understand the issue</h3><p>Start with the property, the problem and the outcome required.</p></article>
            <article><strong>02</strong><h3>Plan the right response</h3><p>Match the right trade and scope to the work instead of overcomplicating it.</p></article>
            <article><strong>03</strong><h3>Deliver neatly</h3><p>Work with respect for the space, communication and the finish.</p></article>
            <article><strong>04</strong><h3>Protect long-term value</h3><p>Think beyond the immediate repair to the wider condition of the property.</p></article>
          </div>
        </div>
      </section>

      <section className="maintenance-page-cta">
        <div className="shell maintenance-page-cta-card">
          <div><span className="kicker">Need property support?</span><h2>Tell us what needs attention.</h2></div>
          <a className="button button-dark" href="/contact">Contact XCLSV <ArrowIcon /></a>
        </div>
      </section>
    </main>
  )
}

function MaintenanceServicePage({ service }) {
  if (!service) return <MaintenanceOverviewPage />

  return (
    <main className="maintenance-detail-page" id="top">
      <section className="maintenance-detail-hero">
        <div className="maintenance-detail-hero-media">
          <img src={service.image} alt={`${service.title} services by XCLSV Group`} style={{ objectPosition: service.position }} />
          <div className="maintenance-detail-hero-shade" />
        </div>
        <div className="shell maintenance-detail-hero-copy">
          <a className="maintenance-back-link" href="/property-maintenance">← Property Maintenance</a>
          <span className="kicker kicker-gold">{service.eyebrow}</span>
          <h1>{service.heroTitle}</h1>
          <p>{service.intro}</p>
          <div className="maintenance-detail-actions">
            <a className="button button-gold" href="/contact">Request {service.title.toLowerCase()} support <ArrowIcon /></a>
            <a className="button button-ghost" href="#service-scope">See what we do</a>
          </div>
        </div>
      </section>

      <section className="maintenance-scope-section" id="service-scope">
        <div className="shell maintenance-scope-grid">
          <div className="maintenance-scope-heading">
            <span className="kicker">{service.title} services</span>
            <h2>Practical support for <span>real property needs.</span></h2>
            <p>{service.summary}</p>
          </div>
          <div className="maintenance-scope-list">
            {service.services.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [working, setWorking] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    setWorking(true)
    setError('')

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })

    setWorking(false)

    if (loginError) {
      setError('Incorrect email or password.')
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-shell">
        <a className="admin-login-brand" href="/">
          <img src="/assets/xclsv-logo.png" alt="XCLSV Group" />
        </a>

        <div className="admin-login-card">
          <span className="admin-eyebrow">XCLSV ADMIN</span>
          <h1>Review approvals.</h1>
          <p>Sign in to review, approve or reject customer feedback before it appears on the website.</p>

          <form onSubmit={handleLogin}>
            <label>
              <span>Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@xclsvgroup.co.za"
                autoComplete="email"
                required
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </label>

            {error && <p className="admin-form-error" role="alert">{error}</p>}

            <button className="admin-primary-button" type="submit" disabled={working}>
              {working ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <a className="admin-back-link" href="/">← Back to website</a>
        </div>
      </div>
    </main>
  )
}

function AdminDashboard({ session }) {
  const [section, setSection] = useState('reviews')
  const [reviews, setReviews] = useState([])
  const [enquiries, setEnquiries] = useState([])
  const [reviewFilter, setReviewFilter] = useState('all')
  const [enquiryFilter, setEnquiryFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updatingId, setUpdatingId] = useState('')

  const loadData = async () => {
    setLoading(true)
    setError('')

    const [reviewsResult, enquiriesResult] = await Promise.all([
      supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false }),
      supabase
        .from('contact_enquiries')
        .select('*')
        .order('created_at', { ascending: false }),
    ])

    setLoading(false)

    if (reviewsResult.error || enquiriesResult.error) {
      setError('Could not load all admin data.')
      if (reviewsResult.error) console.error('Admin reviews load failed:', reviewsResult.error.message)
      if (enquiriesResult.error) console.error('Admin enquiries load failed:', enquiriesResult.error.message)
      return
    }

    setReviews(reviewsResult.data || [])
    setEnquiries(enquiriesResult.data || [])
  }

  useEffect(() => {
    loadData()
  }, [])

  const updateReviewStatus = async (id, status) => {
    setUpdatingId(id)
    setError('')

    const payload = {
      status,
      approved_at: status === 'approved' ? new Date().toISOString() : null,
    }

    const { data, error: updateError } = await supabase
      .from('reviews')
      .update(payload)
      .eq('id', id)
      .select()
      .single()

    setUpdatingId('')

    if (updateError) {
      setError('Could not update that review.')
      console.error('Review status update failed:', updateError.message)
      return
    }

    setReviews((current) => current.map((review) => (review.id === id ? data : review)))
  }

  const updateEnquiryStatus = async (id, status) => {
    setUpdatingId(id)
    setError('')

    const payload = {
      status,
      read_at: status === 'read' ? new Date().toISOString() : null,
    }

    const { data, error: updateError } = await supabase
      .from('contact_enquiries')
      .update(payload)
      .eq('id', id)
      .select()
      .single()

    setUpdatingId('')

    if (updateError) {
      setError('Could not update that enquiry.')
      console.error('Enquiry status update failed:', updateError.message)
      return
    }

    setEnquiries((current) => current.map((enquiry) => (enquiry.id === id ? data : enquiry)))
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  const reviewCounts = reviews.reduce(
    (result, review) => {
      result.all += 1
      if (review.status === 'pending') result.pending += 1
      if (review.status === 'approved') result.approved += 1
      if (review.status === 'rejected') result.rejected += 1
      return result
    },
    { all: 0, pending: 0, approved: 0, rejected: 0 },
  )

  const enquiryCounts = enquiries.reduce(
    (result, enquiry) => {
      result.all += 1
      if (enquiry.status === 'new') result.new += 1
      if (enquiry.status === 'read') result.read += 1
      return result
    },
    { all: 0, new: 0, read: 0 },
  )

  const filteredReviews = reviewFilter === 'all'
    ? reviews
    : reviews.filter((review) => review.status === reviewFilter)

  const filteredEnquiries = enquiryFilter === 'all'
    ? enquiries
    : enquiries.filter((enquiry) => enquiry.status === enquiryFilter)

  const whatsappNumber = (phone) => {
    if (!phone) return ''
    const digits = phone.replace(/\D/g, '')
    if (digits.startsWith('0')) return `27${digits.slice(1)}`
    return digits
  }

  return (
    <main className="admin-page">
      <header className="admin-topbar">
        <div className="admin-topbar-inner">
          <a href="/" className="admin-brand">
            <img src="/assets/xclsv-logo.png" alt="XCLSV Group" />
          </a>
          <div className="admin-topbar-title">
            <strong>XCLSV Admin</strong>
            <span>{session.user.email}</span>
          </div>
          <div className="admin-topbar-actions">
            <a href="/" target="_blank" rel="noreferrer">View website ↗</a>
            <button type="button" onClick={handleSignOut}>Sign out</button>
          </div>
        </div>
      </header>

      <div className="admin-content">
        <div className="admin-section-tabs" aria-label="Admin sections">
          <button
            className={section === 'reviews' ? 'is-active' : ''}
            type="button"
            onClick={() => setSection('reviews')}
          >
            <span>Reviews</span>
            <strong>{reviewCounts.all}</strong>
          </button>
          <button
            className={section === 'enquiries' ? 'is-active' : ''}
            type="button"
            onClick={() => setSection('enquiries')}
          >
            <span>Enquiries</span>
            <strong>{enquiryCounts.new > 0 ? enquiryCounts.new : enquiryCounts.all}</strong>
          </button>
        </div>

        <div className="admin-heading">
          <div>
            <span className="admin-eyebrow">
              {section === 'reviews' ? 'CUSTOMER FEEDBACK' : 'WEBSITE ENQUIRIES'}
            </span>
            <h1>{section === 'reviews' ? 'Review approvals' : 'Contact enquiries'}</h1>
            <p>
              {section === 'reviews'
                ? 'Only approved reviews are shown publicly on the XCLSV homepage.'
                : 'Enquiries submitted through the website are stored here for the XCLSV team to follow up.'}
            </p>
          </div>
          <button className="admin-refresh-button" type="button" onClick={loadData} disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>

        {section === 'reviews' ? (
          <>
            <div className="admin-stats">
              <button className={reviewFilter === 'all' ? 'is-active' : ''} type="button" onClick={() => setReviewFilter('all')}>
                <span>All reviews</span>
                <strong>{reviewCounts.all}</strong>
              </button>
              <button className={reviewFilter === 'pending' ? 'is-active' : ''} type="button" onClick={() => setReviewFilter('pending')}>
                <span>Pending</span>
                <strong>{reviewCounts.pending}</strong>
              </button>
              <button className={reviewFilter === 'approved' ? 'is-active' : ''} type="button" onClick={() => setReviewFilter('approved')}>
                <span>Approved</span>
                <strong>{reviewCounts.approved}</strong>
              </button>
              <button className={reviewFilter === 'rejected' ? 'is-active' : ''} type="button" onClick={() => setReviewFilter('rejected')}>
                <span>Rejected</span>
                <strong>{reviewCounts.rejected}</strong>
              </button>
            </div>

            {error && <div className="admin-error-banner" role="alert">{error}</div>}

            <section className="admin-review-list">
              <div className="admin-list-heading">
                <strong>{reviewFilter === 'all' ? 'All reviews' : `${reviewFilter.charAt(0).toUpperCase()}${reviewFilter.slice(1)} reviews`}</strong>
                <span>{filteredReviews.length} result{filteredReviews.length === 1 ? '' : 's'}</span>
              </div>

              {loading ? (
                <div className="admin-empty-state">Loading reviews…</div>
              ) : filteredReviews.length === 0 ? (
                <div className="admin-empty-state">
                  <strong>No {reviewFilter === 'all' ? '' : reviewFilter} reviews right now.</strong>
                  <span>New submissions will appear here after you refresh.</span>
                </div>
              ) : (
                filteredReviews.map((review) => (
                  <article className="admin-review-card" key={review.id}>
                    <div className="admin-review-main">
                      <div className="admin-review-person">
                        <div className="admin-review-avatar">
                          {review.name
                            .split(' ')
                            .filter(Boolean)
                            .slice(0, 2)
                            .map((part) => part.charAt(0).toUpperCase())
                            .join('')}
                        </div>
                        <div>
                          <strong>{review.name}</strong>
                          <span>{formatReviewDate(review.created_at)}</span>
                        </div>
                      </div>

                      <ReviewStars rating={Number(review.rating)} />
                      <p>“{review.review}”</p>
                    </div>

                    <div className="admin-review-side">
                      <span className={`admin-status admin-status-${review.status}`}>{review.status}</span>

                      <div className="admin-review-actions">
                        {review.status !== 'approved' && (
                          <button
                            className="admin-action-approve"
                            type="button"
                            onClick={() => updateReviewStatus(review.id, 'approved')}
                            disabled={updatingId === review.id}
                          >
                            Approve
                          </button>
                        )}

                        {review.status !== 'rejected' && (
                          <button
                            className="admin-action-reject"
                            type="button"
                            onClick={() => updateReviewStatus(review.id, 'rejected')}
                            disabled={updatingId === review.id}
                          >
                            Reject
                          </button>
                        )}

                        {review.status !== 'pending' && (
                          <button
                            className="admin-action-secondary"
                            type="button"
                            onClick={() => updateReviewStatus(review.id, 'pending')}
                            disabled={updatingId === review.id}
                          >
                            Move to pending
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))
              )}
            </section>
          </>
        ) : (
          <>
            <div className="admin-stats admin-stats-three">
              <button className={enquiryFilter === 'all' ? 'is-active' : ''} type="button" onClick={() => setEnquiryFilter('all')}>
                <span>All enquiries</span>
                <strong>{enquiryCounts.all}</strong>
              </button>
              <button className={enquiryFilter === 'new' ? 'is-active' : ''} type="button" onClick={() => setEnquiryFilter('new')}>
                <span>New</span>
                <strong>{enquiryCounts.new}</strong>
              </button>
              <button className={enquiryFilter === 'read' ? 'is-active' : ''} type="button" onClick={() => setEnquiryFilter('read')}>
                <span>Read</span>
                <strong>{enquiryCounts.read}</strong>
              </button>
            </div>

            {error && <div className="admin-error-banner" role="alert">{error}</div>}

            <section className="admin-review-list">
              <div className="admin-list-heading">
                <strong>{enquiryFilter === 'all' ? 'All enquiries' : `${enquiryFilter.charAt(0).toUpperCase()}${enquiryFilter.slice(1)} enquiries`}</strong>
                <span>{filteredEnquiries.length} result{filteredEnquiries.length === 1 ? '' : 's'}</span>
              </div>

              {loading ? (
                <div className="admin-empty-state">Loading enquiries…</div>
              ) : filteredEnquiries.length === 0 ? (
                <div className="admin-empty-state">
                  <strong>No {enquiryFilter === 'all' ? '' : enquiryFilter} enquiries right now.</strong>
                  <span>New website enquiries will appear here after you refresh.</span>
                </div>
              ) : (
                filteredEnquiries.map((enquiry) => {
                  const waNumber = whatsappNumber(enquiry.phone)
                  const emailSubject = encodeURIComponent(`Re: XCLSV Website Enquiry — ${enquiry.interest}`)
                  const emailBody = encodeURIComponent(`Hi ${enquiry.name},\n\nThank you for contacting XCLSV Group.\n\n`)
                  const waMessage = encodeURIComponent(`Hi ${enquiry.name}, thank you for contacting XCLSV Group regarding ${enquiry.interest}.`)

                  return (
                    <article className="admin-enquiry-card" key={enquiry.id}>
                      <div className="admin-enquiry-main">
                        <div className="admin-enquiry-heading">
                          <div>
                            <strong>{enquiry.name}</strong>
                            <span>{formatReviewDate(enquiry.created_at)}</span>
                          </div>
                          <span className={`admin-status ${enquiry.status === 'new' ? 'admin-status-pending' : 'admin-status-approved'}`}>
                            {enquiry.status}
                          </span>
                        </div>

                        <span className="admin-enquiry-interest">{enquiry.interest}</span>
                        <p>{enquiry.message}</p>

                        <div className="admin-enquiry-contact">
                          <a href={`mailto:${enquiry.email}?subject=${emailSubject}&body=${emailBody}`}>{enquiry.email}</a>
                          {enquiry.phone && <a href={`tel:${enquiry.phone}`}>{enquiry.phone}</a>}
                        </div>
                      </div>

                      <div className="admin-enquiry-actions">
                        <a
                          className="admin-action-link admin-action-email"
                          href={`mailto:${enquiry.email}?subject=${emailSubject}&body=${emailBody}`}
                        >
                          Email client
                        </a>

                        {waNumber && (
                          <a
                            className="admin-action-link admin-action-whatsapp"
                            href={`https://wa.me/${waNumber}?text=${waMessage}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            WhatsApp client
                          </a>
                        )}

                        <button
                          className="admin-action-secondary"
                          type="button"
                          onClick={() => updateEnquiryStatus(enquiry.id, enquiry.status === 'new' ? 'read' : 'new')}
                          disabled={updatingId === enquiry.id}
                        >
                          {enquiry.status === 'new' ? 'Mark as read' : 'Mark as new'}
                        </button>
                      </div>
                    </article>
                  )
                })
              )}
            </section>
          </>
        )}
      </div>
    </main>
  )
}

function AdminPage() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false)
      return undefined
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
    })

    return () => authListener.subscription.unsubscribe()
  }, [])

  if (!isSupabaseConfigured) {
    return (
      <main className="admin-login-page">
        <div className="admin-login-shell">
          <a className="admin-login-brand" href="/">
            <img src="/assets/xclsv-logo.png" alt="XCLSV Group" />
          </a>
          <div className="admin-login-card">
            <span className="admin-eyebrow">SETUP REQUIRED</span>
            <h1>Connect website storage first.</h1>
            <p>The admin dashboard is ready, but Supabase still needs to be connected. Follow the included <strong>ADMIN-SETUP.md</strong> file.</p>
            <a className="admin-primary-button admin-button-link" href="/">Back to website</a>
          </div>
        </div>
      </main>
    )
  }

  if (loading) {
    return <main className="admin-loading-page">Loading admin…</main>
  }

  return session ? <AdminDashboard session={session} /> : <AdminLogin />
}



function NotFoundPage() {
  return (
    <main className="not-found-page" id="top">
      <section className="not-found-hero">
        <div className="shell not-found-grid">
          <div className="not-found-code" aria-hidden="true">404</div>
          <div className="not-found-copy">
            <span className="kicker kicker-gold">Page not found</span>
            <h1>This property page <span>doesn’t exist.</span></h1>
            <p>
              The link may be outdated, the page may have moved, or the address may have been entered incorrectly.
            </p>
            <div className="not-found-actions">
              <a className="button button-gold" href="/">Back to homepage <ArrowIcon /></a>
              <a className="button button-ghost" href="/contact">Contact XCLSV</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function LegalPage({ type }) {
  const isPrivacy = type === 'privacy'

  const privacySections = [
    {
      title: '1. Who we are',
      body: (
        <>
          <p>
            XCLSV Group Pty Ltd ("XCLSV", "we", "us" or "our") operates this website and provides
            property management, property maintenance and project management services in South Africa.
          </p>
          <p>
            For privacy-related questions, requests or complaints, contact us at
            <a href="mailto:info@xclsvgroup.co.za"> info@xclsvgroup.co.za</a>.
          </p>
        </>
      ),
    },
    {
      title: '2. Information we may collect',
      body: (
        <>
          <p>Depending on how you use the website, we may collect information such as:</p>
          <ul>
            <li>Your name and contact details, including email address and phone number.</li>
            <li>Information you submit through enquiry, booking or review forms.</li>
            <li>The nature of the property, management, maintenance or project enquiry you contact us about.</li>
            <li>Basic technical information such as browser, device and website usage data where analytics or security tools are enabled.</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. How we use personal information',
      body: (
        <>
          <p>We may use personal information to:</p>
          <ul>
            <li>Respond to enquiries, bookings and requests for quotations.</li>
            <li>Assess and discuss property management, maintenance or project requirements.</li>
            <li>Provide and improve our property maintenance and project services.</li>
            <li>Moderate and, where approved, publish customer reviews.</li>
            <li>Maintain website security, prevent abuse and improve the website experience.</li>
            <li>Meet legal, regulatory, accounting or record-keeping obligations.</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Reviews and public content',
      body: (
        <p>
          Reviews submitted through the website are stored for moderation. A review is not displayed publicly
          unless XCLSV approves it. If approved, the reviewer name, star rating and review text may appear on the
          website. Do not include confidential, financial, identity-document or other sensitive information in a review.
        </p>
      ),
    },
    {
      title: '5. Sharing of information',
      body: (
        <p>
          We do not sell personal information. We may share information with service providers that help us operate
          the website, communicate with customers, host data or provide business services, where this is reasonably
          necessary and subject to appropriate safeguards. We may also disclose information where required by law.
        </p>
      ),
    },
    {
      title: '6. Storage and security',
      body: (
        <p>
          We take reasonable technical and organisational steps to protect personal information against loss,
          unauthorised access, misuse or disclosure. Information may be stored using reputable cloud service
          providers. No internet service is completely risk-free, and we cannot guarantee absolute security.
        </p>
      ),
    },
    {
      title: '7. Retention',
      body: (
        <p>
          We keep personal information only for as long as reasonably necessary for the purpose for which it was
          collected, to maintain business records, resolve disputes, enforce agreements or meet legal obligations.
        </p>
      ),
    },
    {
      title: '8. Cookies and analytics',
      body: (
        <p>
          The website may use essential browser storage, cookies or analytics technologies to support functionality,
          security and performance. If non-essential analytics, advertising or tracking technologies are added later,
          this policy and any required consent controls should be updated accordingly.
        </p>
      ),
    },
    {
      title: '9. Your privacy rights',
      body: (
        <>
          <p>
            Subject to applicable South African law, including the Protection of Personal Information Act, 2013
            ("POPIA"), you may request access to personal information we hold about you, ask us to correct or delete
            information where appropriate, or object to certain processing.
          </p>
          <p>
            Requests can be sent to <a href="mailto:info@xclsvgroup.co.za">info@xclsvgroup.co.za</a>. You may also
            have the right to lodge a complaint with the Information Regulator of South Africa.
          </p>
        </>
      ),
    },
    {
      title: '10. Third-party links and services',
      body: (
        <p>
          The website may link to third-party services such as WhatsApp, email providers or external websites.
          Their privacy practices are governed by their own terms and privacy policies, and XCLSV is not responsible
          for how those third parties process information.
        </p>
      ),
    },
    {
      title: '11. Changes to this policy',
      body: (
        <p>
          We may update this Privacy Policy when the website, our services or legal requirements change. The version
          published on this website will be the current version.
        </p>
      ),
    },
  ]

  const termsSections = [
    {
      title: '1. About these terms',
      body: (
        <p>
          These Terms and Conditions govern the use of the XCLSV Group website. By using the website, submitting an
          enquiry, booking a consultation or submitting a review, you agree to use the website lawfully and in
          accordance with these terms.
        </p>
      ),
    },
    {
      title: '2. Website information',
      body: (
        <p>
          Website content is provided for general information about XCLSV Group, its property management services,
          property maintenance capabilities and project management services. We aim to keep information accurate and
          current, but we do not warrant that every description, image, price indication, availability statement or
          other item is complete, error-free or suitable for every circumstance.
        </p>
      ),
    },
    {
      title: '3. Property management information',
      body: (
        <>
          <p>
            Content relating to property management, maintenance planning, improvement work or project coordination is
            introductory and informational. Final scope, responsibilities, pricing and service arrangements are
            confirmed separately with the relevant client.
          </p>
          <p>
            Any property management, maintenance or project engagement is subject to further discussion, site or scope
            assessment where required, commercial agreement and the relevant written quotation, work order or contract.
          </p>
        </>
      ),
    },
    {
      title: '4. Quotes, bookings and services',
      body: (
        <p>
          Enquiries and consultation bookings do not create a binding obligation on XCLSV to perform work. Scope,
          pricing, timelines, materials, payment terms and other commercial terms must be confirmed separately.
          A service engagement becomes binding only when the relevant parties agree to the applicable quotation,
          proposal, work order or contract.
        </p>
      ),
    },
    {
      title: '5. Customer responsibilities',
      body: (
        <p>
          Customers and partners are responsible for providing accurate information, lawful access to relevant
          properties or sites, and any approvals, permissions or disclosures reasonably required for XCLSV to assess
          or perform the requested work.
        </p>
      ),
    },
    {
      title: '6. Reviews and user submissions',
      body: (
        <>
          <p>
            Reviews and other submissions must be genuine, lawful and relevant. You must not submit defamatory,
            threatening, discriminatory, unlawful, misleading, confidential or infringing material.
          </p>
          <p>
            XCLSV may moderate, approve, reject or remove reviews at its discretion. Submitting a review gives XCLSV
            permission to display the submitted name, rating and review text on the website once approved.
          </p>
        </>
      ),
    },
    {
      title: '7. Intellectual property',
      body: (
        <p>
          The XCLSV name, logo, website design, copy, graphics and other original website content are protected by
          applicable intellectual-property laws. You may view the website for personal or legitimate business
          purposes, but you may not reproduce, republish, sell or exploit protected content without permission.
        </p>
      ),
    },
    {
      title: '8. Third-party services',
      body: (
        <p>
          The website may use or link to third-party platforms such as WhatsApp, email services, hosting providers or
          other online tools. Those services operate under their own terms. XCLSV is not responsible for the
          availability, content, security or conduct of third-party services.
        </p>
      ),
    },
    {
      title: '9. Website availability and liability',
      body: (
        <>
          <p>
            We may update, suspend or change parts of the website without notice. To the extent permitted by law,
            XCLSV is not liable for indirect or consequential loss arising solely from use of, or inability to use,
            this website.
          </p>
          <p>
            Nothing in these terms excludes or limits any liability or consumer right that cannot lawfully be excluded
            under applicable South African law.
          </p>
        </>
      ),
    },
    {
      title: '10. Privacy',
      body: (
        <p>
          Personal information submitted through the website is handled in accordance with our
          <a href="/privacy"> Privacy Policy</a>.
        </p>
      ),
    },
    {
      title: '11. Governing law',
      body: (
        <p>
          These website terms are governed by the laws of the Republic of South Africa. Any dispute relating to the
          website will be dealt with under applicable South African law, subject to any mandatory rights available to
          consumers or data subjects.
        </p>
      ),
    },
    {
      title: '12. Contact',
      body: (
        <p>
          Questions about these terms can be sent to
          <a href="mailto:info@xclsvgroup.co.za"> info@xclsvgroup.co.za</a>.
        </p>
      ),
    },
  ]

  const sections = isPrivacy ? privacySections : termsSections

  return (
    <main className="legal-page" id="top">
      <section className="legal-hero">
        <div className="shell legal-hero-inner">
          <span className="kicker kicker-gold">{isPrivacy ? 'Privacy & data' : 'Website terms'}</span>
          <h1>{isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}</h1>
          <p>
            {isPrivacy
              ? 'How XCLSV Group handles personal information submitted through this website.'
              : 'The terms that apply when you use the XCLSV Group website, submit information or engage with our services.'}
          </p>
          <span className="legal-updated">Last updated: 28 August 2026</span>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="shell legal-layout">
          <aside className="legal-summary">
            <span>{isPrivacy ? 'Privacy contact' : 'Company contact'}</span>
            <strong>XCLSV Group Pty Ltd.</strong>
            <a href="mailto:info@xclsvgroup.co.za">info@xclsvgroup.co.za</a>
            <a href="tel:+27603156018">060 315 6018</a>
            <p>South Africa</p>
          </aside>

          <div className="legal-copy">
            {sections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                {section.body}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi XCLSV Group, I'd like to find out more about your property services."
  )

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/27603156018?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with XCLSV Group on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  )
}


function useHashNavigation(path) {
  useEffect(() => {
    if (path !== '/') return undefined

    let timer

    const scrollToCurrentHash = () => {
      const rawHash = window.location.hash
      if (!rawHash) return

      const id = decodeURIComponent(rawHash.slice(1))
      let attempts = 0

      const findAndScroll = () => {
        const target = document.getElementById(id)

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
          return
        }

        attempts += 1
        if (attempts < 12) {
          timer = window.setTimeout(findAndScroll, 50)
        }
      }

      timer = window.setTimeout(findAndScroll, 0)
    }

    scrollToCurrentHash()
    window.addEventListener('hashchange', scrollToCurrentHash)

    return () => {
      window.removeEventListener('hashchange', scrollToCurrentHash)
      if (timer) window.clearTimeout(timer)
    }
  }, [path])
}

export default function App() {
  const path = typeof window !== 'undefined'
    ? (window.location.pathname.replace(/\/+$/, '') || '/')
    : '/'

  usePageSeo(path)
  useHashNavigation(path)

  if (path === '/admin' || path === '/admin/reviews') {
    return <AdminPage />
  }

  const serviceMatch = path.match(/^\/property-maintenance\/(plumbing|tiling|painting|welding)$/)
  const service = serviceMatch
    ? maintenanceServices.find((item) => item.slug === serviceMatch[1])
    : null

  let page
  if (path === '/contact') {
    page = <ContactPage />
  } else if (path === '/privacy') {
    page = <LegalPage type="privacy" />
  } else if (path === '/terms') {
    page = <LegalPage type="terms" />
  } else if (path === '/property-maintenance') {
    page = <MaintenanceOverviewPage />
  } else if (service) {
    page = <MaintenanceServicePage service={service} />
  } else if (path === '/') {
    page = (
      <main>
        <Hero />
        <Reviews />
        <About />
        <Partnership />
        <Maintenance />
        <Projects />
        <Impact />
        <CTA />
      </main>
    )
  } else {
    page = <NotFoundPage />
  }

  return (
    <>
      <Header />
      {page}
      <Footer />
      <WhatsAppButton />
    </>
  )
}
