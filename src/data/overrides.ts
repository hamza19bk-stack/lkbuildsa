/**
 * LK Constructions SA — lkbuildsa.shop
 * LK CONSTRUCTIONS SA LTD, company no. 16865852, London.
 * SIC: 41100 Development of building projects; 41202 Construction of domestic
 *      buildings; 46342 Wholesale of wine, beer, spirits and other alcoholic
 *      beverages; 47250 Retail sale of beverages in specialised stores.
 *
 * IMPORTANT: the register carries two alcohol codes. Selling alcohol in
 * England and Wales requires a premises licence and a designated premises
 * supervisor holding a personal licence under the Licensing Act 2003. None of
 * that can be verified from here, so this site does NOT advertise, price or
 * offer alcohol. It leads on the two construction codes and acknowledges the
 * beverage codes only as a statement of what is filed. If the company trades
 * in drink, that needs its own site built against the actual licence.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Property development and domestic construction in London',
      description:
        'LK Constructions SA Ltd, registered in England and Wales (company no. 16865852). Development of building projects and construction of domestic buildings.',
    },
    hero: {
      eyebrow: 'Development and construction, London',
      titleLead: 'A site is worth',
      titleMark: 'what you can actually build on it',
      lead:
        'Development goes wrong at the appraisal, not on site. We would rather spend a week establishing what a plot genuinely supports than a year discovering the scheme was never viable.',
      secondaryCta: 'What we do',
      visualLabel: 'On the register since 2025',
    },
    highlights: {
      eyebrow: 'How we work',
      title: 'What decides whether a scheme works',
      subtitle: 'Four things settled before anyone commits serious money.',
      items: [
        {
          icon: 'compass',
          title: 'Appraise honestly',
          text: 'What the site supports, what consent is realistic, and what it costs to build. An optimistic appraisal is the costliest document in development.',
        },
        {
          icon: 'building',
          title: 'Consent before commitment',
          text: 'Planning and building regulations are granted by the authority, never by us. We plan the programme around their timescales rather than hoping.',
        },
        {
          icon: 'check-doc',
          title: 'Costed properly',
          text: 'Build cost, professional fees, finance and contingency, separated out so you can see what is firm and what is an allowance.',
        },
        {
          icon: 'users',
          title: 'Neighbours matter',
          text: 'Party wall, access and construction impact handled early. These derail more small schemes than structural problems do.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Development and construction',
      subtitle: 'From appraising a site to finishing the homes on it.',
      moreLabel: 'All services',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'The process',
      title: 'From plot to finished home',
      subtitle: 'Four stages, in the order that protects your money.',
      steps: [
        {
          title: 'Appraise the site',
          text: 'Constraints, likely consent, build cost and an honest view of whether it stacks up. Sometimes the answer is that it does not.',
        },
        {
          title: 'Consents and design',
          text: 'Working alongside the designers and the authority, with the programme built around their actual timescales.',
        },
        {
          title: 'Build',
          text: 'A written scope, a programme with dates, and variations priced and agreed before they are carried out.',
        },
        {
          title: 'Complete and hand over',
          text: 'Inspections passed, snagging closed, and the paperwork a buyer or a lender will ask for assembled properly.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who you are dealing with',
      subtitle: 'Every code filed at Companies House, including the ones this site does not trade on.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'Including the obvious one about the register.',
      items: [
        {
          q: 'Why does your Companies House record list alcoholic drinks?',
          a: 'Because two beverage codes were filed alongside the construction ones, and we would rather show the whole record than quietly hide part of it. This website does not advertise, price or offer alcohol. Selling alcohol in England and Wales requires a premises licence and a designated premises supervisor holding a personal licence under the Licensing Act 2003, and nothing on this site should be read as an offer to supply drink.',
        },
        {
          q: 'Do you develop your own schemes or build for others?',
          a: 'Both are on the register: development of building projects, and construction of domestic buildings. Tell us which side you are approaching us about and you will get a direct answer about whether it is something we take on.',
        },
        {
          q: 'Will you tell me if a site is not worth developing?',
          a: 'Yes, and that is the most valuable thing an appraisal produces. A firm that only ever finds viable schemes is not appraising, it is selling.',
        },
        {
          q: 'Who obtains planning permission?',
          a: 'Permission is granted by the local planning authority on an application prepared by a designer. We coordinate with both and plan around their timescales, but no consent is granted by us and we will not imply otherwise.',
        },
        {
          q: 'How long has the company been registered?',
          a: 'Since 20 November 2025. That is recent and we would rather state it plainly. The number, registered office and incorporation date are all on the public register, linked below.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Got a site in mind?',
      lead: 'Tell us where it is and what you think it supports. We will give you an honest first view.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About LK Constructions SA',
      description:
        'A development and construction company registered in England and Wales, based on City Road, London. Registered details as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Development is decided',
      titleMark: 'before the first delivery',
      lead:
        'By the time there is machinery on site, almost every decision that determines whether a scheme works has already been made.',
    },
    story: {
      title: 'How we work',
      subtitle: 'The appraisal is the product.',
      paragraphs: [
        'A development appraisal is not a formality before the interesting part. It is the part. Get the build cost, the consent risk and the programme wrong at that stage and no amount of good work on site recovers it.',
        'So we would rather be the firm that tells someone a plot does not stack up. It costs us a job and saves them considerably more, and it is the only way an appraisal means anything when we do say a scheme works.',
        'One thing we are explicit about: the public register carries two beverage codes alongside our construction ones. This site is about the construction side. Alcohol sale is licensed activity and we do not advertise it here.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'compass', title: 'Honest appraisals', text: 'Including when the answer is that it does not work.' },
        { icon: 'check-doc', title: 'Allowances named', text: 'What is firm and what is an estimate, kept separate.' },
        { icon: 'building', title: 'Consents respected', text: 'Granted by the authority, never implied by us.' },
        { icon: 'eye', title: 'Whole record shown', text: 'Every filed code, including the ones we do not trade on.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Want a view on a site?',
      lead: 'An early conversation is the least costly part of any development.',
      secondaryCta: 'What we do',
    },
  },

  servicesPage: {
    seo: {
      title: 'Site appraisal, development and domestic construction',
      description:
        'Development and construction services from LK Constructions SA Ltd, London: site appraisal, development management, domestic construction and completion.',
    },
    hero: {
      eyebrow: 'Services',
      titleLead: 'Four stages,',
      titleMark: 'and the earliest matters most',
      lead: 'The services below follow the construction codes on our register. This site does not offer licensed activity.',
    },
    quoteNote:
      'Everything is quoted against the specific site and scheme after a visit. Nothing on this page is a fixed price or a binding offer, and nothing here is an offer to supply alcohol.',
    cta: {
      eyebrow: 'Next step',
      title: 'Start with the appraisal',
      lead: 'Tell us about the site and we will tell you what is realistic.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact LK Constructions SA, London',
      description:
        'Get in touch about a site or a build. Registered office: 128 City Road, London, EC1V 2NX. Company no. 16865852.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us about the site,',
      titleMark: 'and what you hope it holds',
      lead: 'Even a postcode and a rough idea is enough for a useful first answer.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'Where the site is, and whether you already own or control it.',
        'What you think it supports, in units or floor area.',
        'Any planning history, pre-application advice or refusals.',
        'Your timescale, and whether finance is already arranged.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the details and we will come back with an honest first view.',
      secondaryCta: 'What we do',
    },
  },

  services: [
    {
      id: 'appraisal',
      icon: 'compass',
      title: 'Site appraisal',
      summary: 'Whether a plot supports the scheme you have in mind, before you commit.',
      points: [
        'Constraints, access and likely consent assessed up front.',
        'Build cost and professional fees estimated with allowances named.',
        'A clear answer when a scheme does not stack up.',
        'Written so it can go to a lender or a partner.',
      ],
    },
    {
      id: 'development',
      icon: 'building',
      title: 'Development of building projects',
      summary: 'Taking a scheme from consent through to a finished, saleable building.',
      points: [
        'Programme built around the authority’s real timescales.',
        'Design team and contractor coordination.',
        'Cost tracked against the appraisal, with variances explained.',
        'Party wall, access and neighbour matters handled early.',
      ],
    },
    {
      id: 'domestic-construction',
      icon: 'ruler',
      title: 'Construction of domestic buildings',
      summary: 'Building the homes themselves, to an agreed scope and programme.',
      points: [
        'A written scope with inclusions, exclusions and what counts as an extra.',
        'Variations priced and agreed before they are carried out.',
        'Building control inspections sequenced from the start.',
        'The site left safe and tidy at the end of each day.',
      ],
    },
    {
      id: 'completion',
      icon: 'key',
      title: 'Completion and handover',
      summary: 'The paperwork a buyer, a lender or a surveyor will ask for.',
      points: [
        'Inspections completed and certificates collected as they are issued.',
        'Snagging walked and closed before completion, not after.',
        'Manufacturer and supplier documentation passed on to you.',
        'A handover pack assembled rather than reconstructed later.',
      ],
    },
  ],
};
