// Mock data for Soumi & James Wedding Website

export const coupleInfo = {
  bride: "Soumi",
  groom: "James",
  brideFullName: "Soumi Banerjee",
  groomFullName: "James Adams (James)",
  tagline: "A CROSS-CONTINENTAL LOVE STORY",
  subtitle: "From University of Essex to Forever",
  weddingDate: "2025-06-15",
  monogram: "S & J"
};

export const navigationItems = [
  { id: 'our-story', label: 'OUR STORY', path: '/our-story' },
  { id: 'timeline', label: 'TIMELINE', path: '/timeline' },
  { id: 'events', label: 'EVENTS', path: '/events' },
  { id: 'gallery', label: 'GALLERY', path: '/gallery' },
  { id: 'families', label: 'FAMILIES', path: '/families' },
  { id: 'travel', label: 'TRAVEL', path: '/travel' }
];

export const ourStory = {
  tagline: "Two strangers in a classroom. An unexpected friendship. A love that crossed oceans.",
  meetingDate: "October 2023",
  meetingPlace: "University of Essex",
  narrative: "Soumi, a Bengali professional with an adventurous spirit, and James, a former Army Captain seeking his next chapter, met on MBA induction day. He seemed quiet, serious. She wondered if they'd ever be friends. Then a canceled lunch changed everything."
};

export const brideProfile = {
  name: "Soumi Banerjee",
  origin: "From Kolkata, India",
  description: "A Bengali girl who's called many places home",
  education: "MBA, University of Essex",
  career: "Professional journey across different countries"
};

export const groomProfile = {
  name: "James Adams (James)",
  origin: "From Ohio, United States of America",
  description: "Former Captain, U.S. Army",
  education: "MBA, University of Essex",
  career: "Procurement Manager at HF Sinclair, Wyoming"
};

export const timeline = [
  {
    year: "2023",
    title: "First Meeting",
    description: "We met during MBA induction day at the University of Essex. A chance encounter that changed everything.",
    month: "October"
  },
  {
    year: "2023",
    title: "First Date",
    description: "A canceled lunch led to an unexpected coffee date that neither of us could forget.",
    month: "November"
  },
  {
    year: "2024",
    title: "First Trip Together",
    description: "We explored the English countryside together, creating memories that would last a lifetime.",
    month: "February"
  },
  {
    year: "2024",
    title: "Meeting the Families",
    description: "Soumi met James's family in Ohio, and James traveled to Kolkata to meet Soumi's family.",
    month: "June"
  },
  {
    year: "2024",
    title: "The Proposal",
    description: "Under the stars in London, James proposed. She said yes without hesitation.",
    month: "September"
  },
  {
    year: "2025",
    title: "Wedding Day",
    description: "The day we've been dreaming of. Join us as we celebrate our forever.",
    month: "June"
  }
];

export const events = [
  {
    id: 1,
    name: "Mehendi Ceremony",
    date: "June 13, 2025",
    time: "3:00 PM - 8:00 PM",
    venue: "The Garden Pavilion",
    address: "123 Rose Garden Lane, London",
    description: "Join us for an afternoon of beautiful henna artistry, music, and celebration.",
    dressCode: "Colorful Indian attire encouraged"
  },
  {
    id: 2,
    name: "Sangeet Night",
    date: "June 14, 2025",
    time: "6:00 PM - 11:00 PM",
    venue: "Grand Ballroom, The Mayfair Hotel",
    address: "456 Park Lane, London",
    description: "An evening of music, dance performances, and celebration of our love story.",
    dressCode: "Semi-formal / Indian festive wear"
  },
  {
    id: 3,
    name: "Wedding Ceremony",
    date: "June 15, 2025",
    time: "11:00 AM - 2:00 PM",
    venue: "St. Mary's Church",
    address: "789 Church Road, Essex",
    description: "The sacred ceremony where we officially become one. A blend of traditions.",
    dressCode: "Formal attire"
  },
  {
    id: 4,
    name: "Reception",
    date: "June 15, 2025",
    time: "5:00 PM - 12:00 AM",
    venue: "Hedingham Castle",
    address: "Castle Lane, Essex",
    description: "Join us for an evening of dinner, dancing, and celebration.",
    dressCode: "Black tie / Indian formal"
  }
];

export const gallery = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Couple portrait",
    category: "engagement"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    alt: "Romantic moment",
    category: "engagement"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80",
    alt: "Walking together",
    category: "prewedding"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    alt: "Wedding rings",
    category: "details"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
    alt: "Beautiful venue",
    category: "venue"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    alt: "Sunset moment",
    category: "prewedding"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    alt: "Happy couple",
    category: "engagement"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    alt: "Flowers detail",
    category: "details"
  }
];

export const families = {
  bride: {
    title: "Bride's Family",
    members: [
      {
        name: "Mr. Arun Banerjee",
        relation: "Father of the Bride",
        description: "A retired professor who instilled the love of learning in Soumi."
      },
      {
        name: "Mrs. Priya Banerjee",
        relation: "Mother of the Bride",
        description: "A classical dancer who taught Soumi grace and strength."
      },
      {
        name: "Rahul Banerjee",
        relation: "Brother of the Bride",
        description: "Soumi's protective older brother and best friend."
      }
    ]
  },
  groom: {
    title: "Groom's Family",
    members: [
      {
        name: "Mr. William Adams",
        relation: "Father of the Groom",
        description: "A architect who built the foundation of their family home."
      },
      {
        name: "Mrs. Elizabeth Adams",
        relation: "Mother of the Groom",
        description: "A garden enthusiast who welcomed Soumi with open arms."
      },
      {
        name: "Emily Adams",
        relation: "Sister of the Groom",
        description: "James's younger sister who can't wait to have Soumi as family."
      }
    ]
  }
};

export const travelInfo = {
  venue: {
    name: "Essex & London, UK",
    description: "Our wedding celebrations will take place across two beautiful locations."
  },
  hotels: [
    {
      name: "The Grand Essex Hotel",
      address: "100 High Street, Colchester, Essex",
      phone: "+44 1234 567890",
      website: "www.grandessexhotel.com",
      groupCode: "SOUMIJAMES2025",
      description: "Our recommended hotel with special rates for wedding guests."
    },
    {
      name: "Boutique Inn",
      address: "25 Castle Lane, Essex",
      phone: "+44 1234 567891",
      website: "www.boutiqueinn.co.uk",
      description: "A charming option close to the wedding venue."
    }
  ],
  transportation: {
    airports: [
      "London Heathrow (LHR) - 1.5 hours to venue",
      "London Stansted (STN) - 45 minutes to venue",
      "London City (LCY) - 1 hour to venue"
    ],
    shuttle: "Complimentary shuttle service will be provided between hotels and venues."
  },
  localAttractions: [
    "Colchester Castle - Historic Norman castle",
    "Dedham Vale - Beautiful countryside walks",
    "Beth Chatto Gardens - Stunning gardens",
    "Layer Marney Tower - Tudor architecture"
  ]
};
