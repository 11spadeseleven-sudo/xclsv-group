import React from 'react'

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 6l4 4-4 4" />
  </svg>
)

const businessServices = {
  '/business-investments': {
    label: 'Business Investments',
    title: <>Building opportunities with <span>long-term potential.</span></>,
    intro: 'XCLSV Group explores and supports business opportunities with a practical focus on growth, sustainability and value creation.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
    items: [
      ['01', 'Opportunity Assessment', 'We consider the opportunity, its objectives, practical requirements and potential for sustainable growth.'],
      ['02', 'Strategic Growth', 'We look at ways businesses can strengthen operations, improve value and position themselves for future growth.'],
      ['03', 'Partnership & Collaboration', 'Where appropriate, we connect people, resources and capabilities around clearly defined business objectives.'],
      ['04', 'Long-Term Value', 'Our approach is centred on building businesses and opportunities that can create lasting value.'],
    ],
  },
  '/business-management': {
    label: 'Business Management',
    title: <>Practical management for <span>businesses that want to grow.</span></>,
    intro: 'XCLSV provides practical business management support focused on organisation, coordination, performance and sustainable growth.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    items: [
      ['01', 'Business Operations', 'Support with organising day-to-day activities, priorities and processes so the business can operate effectively.'],
      ['02', 'Planning & Coordination', 'Bring people, tasks and resources together around clear objectives and practical plans.'],
      ['03', 'Performance Focus', 'Identify areas for improvement and help keep business activities aligned with wider goals.'],
      ['04', 'Growth Support', 'Create a stronger operational foundation for businesses looking to improve and expand.'],
    ],
  },
  '/project-management': {
    label: 'Project Management',
    title: <>From planning to completion, <span>keep the project moving.</span></>,
    intro: 'XCLSV coordinates projects with a clear focus on planning, communication, timelines, resources and delivery.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1600',
    items: [
      ['01', 'Project Planning', 'Define the scope, priorities, requirements and practical steps needed to move the project forward.'],
      ['02', 'Coordination', 'Coordinate people, suppliers, activities and information throughout the project lifecycle.'],
      ['03', 'Progress Management', 'Keep work aligned with agreed objectives, timelines and quality expectations.'],
      ['04', 'Project Completion', 'Bring the final stages together and ensure the agreed work is properly concluded.'],
    ],
  },
  '/real-estates': {
    label: 'Real Estates',
    title: <>Property opportunities with a focus on <span>practical value.</span></>,
    intro: 'XCLSV supports real estate activities with a practical understanding of property condition, improvement, management and long-term value.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
    items: [
      ['01', 'Property Opportunities', 'Explore residential and commercial property opportunities based on practical requirements and potential.'],
      ['02', 'Property Improvement', 'Identify maintenance, upgrades and improvements that can strengthen the usability and presentation of a property.'],
      ['03', 'Property Support', 'Connect property needs with XCLSV management, maintenance and project capabilities.'],
      ['04', 'Long-Term Value', 'Approach property decisions with an emphasis on responsible stewardship and sustainable value.'],
    ],
  },
  '/events': {
    label: 'Events',
    title: <>Events planned with <span>purpose and precision.</span></>,
    intro: 'XCLSV supports events through practical planning, coordination and delivery, helping bring the right people, services and details together.',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600',
    items: [
      ['01', 'Event Planning', 'Establish the purpose, requirements, programme and practical needs of the event.'],
      ['02', 'Coordination', 'Coordinate venues, suppliers, schedules and people to keep the event organised.'],
      ['03', 'Set-Up & Delivery', 'Support the practical preparation and execution of the event from set-up through completion.'],
      ['04', 'Guest Experience', 'Pay attention to the details that help create a professional, welcoming and well-managed event.'],
    ],
  },
  '/catering-services': {
    label: 'Catering Services',
    title: <>Food and service that make <span>every occasion count.</span></>,
    intro: 'XCLSV provides catering support for business functions, private occasions and events, with a focus on reliable service and a professional presentation.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600',
    items: [
      ['01', 'Event Catering', 'Catering support for meetings, functions, celebrations and other organised events.'],
      ['02', 'Menu Support', 'Practical menu planning around the type of occasion, guest requirements and service format.'],
      ['03', 'Food Presentation', 'Professional presentation designed to complement the occasion and create a positive guest experience.'],
      ['04', 'Service Coordination', 'Coordinate preparation, delivery and serving requirements to keep catering running smoothly.'],
    ],
  },
}

function BusinessServicePage({ service }) {
  return (
    <main className="business-service-page" id="top">
      <section className="business-service-hero">
        <div className="business-service-hero-media">
          <img src={service.image} alt={`${service.label} by XCLSV Group`} />
          <div className="business-service-hero-shade" />
        </div>
        <div className="shell business-service-hero-copy">
          <a className="business-service-back" href="/">← XCLSV Group</a>
          <span className="kicker kicker-gold">{service.kicker}</span>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <div className="business-service-actions">
            <a className="button button-gold" href="/contact">Enquire about this service <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="business-service-scope">
        <div className="shell business-service-heading">
          <div>
            <span className="kicker">{service.label}</span>
            <h2>What we can <span>help with.</span></h2>
          </div>
          <p>
            Our approach is practical and flexible. The final scope is shaped around your specific business, property,
            event or project requirements.
          </p>
        </div>
        <div className="shell business-service-grid">
          {service.items.map(([number, title, text]) => (
            <article className="business-service-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="business-service-cta">
        <div className="shell business-service-cta-inner">
          <div>
            <span className="kicker kicker-gold">Start a conversation</span>
            <h2>Have a requirement in mind?</h2>
            <p>Tell XCLSV what you need and we can discuss the right approach.</p>
          </div>
          <a className="button button-gold" href="/contact">Contact XCLSV <ArrowIcon /></a>
        </div>
      </section>
    </main>
  )
}

export { businessServices, BusinessServicePage }