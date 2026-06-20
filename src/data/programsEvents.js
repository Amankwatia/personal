import debate3 from '../assets/images/events/debate3.webp'
import prst from '../assets/images/events/prst.webp'
import radio from '../assets/images/events/radio.webp'
import sles from '../assets/images/events/sles.webp'

export const programAreas = [
  {
    title: 'ICT & Computing Workshops',
    icon: 'bi-pc-display',
    description:
      'Practical training sessions for students, teachers, and school communities on ICT, computing, programming basics, digital tools, and responsible technology use.'
  },
  {
    title: 'Digital Literacy Programs',
    icon: 'bi-keyboard',
    description:
      'Programs designed to help learners, educators, and community members build confidence in using technology for learning, work, communication, and productivity.'
  },
  {
    title: 'Cybersecurity Awareness Sessions',
    icon: 'bi-shield-lock',
    description:
      'Training and awareness programs on safe internet use, data protection, online behaviour, phishing, password safety, and responsible digital citizenship.'
  },
  {
    title: 'AI in Education Programs',
    icon: 'bi-stars',
    description:
      'Introductory programs on how artificial intelligence can support teaching, learning, lesson planning, assessment preparation, and school administration.'
  },
  {
    title: 'Educational Technology Support',
    icon: 'bi-easel',
    description:
      'Programs that help schools adopt digital tools, learning management systems, websites, registration systems, and other school-based technology solutions.'
  },
  {
    title: 'Community Technology Engagements',
    icon: 'bi-people',
    description:
      'Technology-related community service, public education, and training activities that support digital inclusion and practical ICT use.'
  }
]

export const engagements = [
  {
    title: 'Chairperson, Inter-House Debate Competition, PRESEC, Berekum',
    type: 'School Program',
    icon: 'bi bi-laptop',
    image: debate3,
    imageAlt: 'Students taking part in the Inter-House Debate Competition',
    description:
      'Chaired the Inter-House Debate Competition, overseeing the event and ensuring smooth proceedings.',
    role: 'Chairperson',
    audience: 'Senior High School students',
    status: 'completed / periodic' // Ongoing involvement in future editions of the competition
  },
  {
    title: 'Presentation of Awards, Inter-House Debate Competition, PRESEC, Berekum',
    type: 'School Program',
    icon: 'bi bi-person-vcard',
    image: prst,
    imageAlt: 'Students receiving awards at the Inter-House Debate Competition',
    description:
      'Involved in the presentation of awards to winners and participants of the Inter-House Debate Competition, recognizing their efforts and achievements.',
    role: 'Presenter',
    audience: 'Students and school staff',
    status: 'Completed / Periodic'
  },
  {
    title: 'Students Legal Society General Meeting, AAMUSTED.',
    type: 'Student Association Engagement',
    icon: 'bi bi-building-gear',
    image: sles,
    imageAlt: 'Panel members preparing materials during a Students Legal Society General Meeting',
    description:
      'Chaired Students Legal Society General Meeting, contributing to discussions, planning activities, and supporting the association\'s initiatives.',
    role: 'Chairperson / President',
    audience: 'Students and association members',
    status: 'Completed'
  },
  {
    title: 'Discussion on Cybersecurity, Data Protection and Digital Literacy, Shalom Radio Berekum 100.3 FM',
    type: 'EdTech Outreach',
    icon: 'bi bi-easel2',
    image: radio,
    imageAlt: 'Radio studio session connected to education and technology outreach',
    description:
      'Contributed to a radio discussion on cybersecurity, data protection, and digital literacy, providing insights and practical advice to the public on safe and responsible technology use.',
    role: 'Resource Person / Guest Speaker',
    audience: 'Educators, students, and the general public',
    status: 'completed'
  }
]

export const futurePrograms = [
  {
    title: 'AI Tools for Teachers Workshop',
    description:
      'A practical workshop to help teachers use AI responsibly for lesson planning, notes preparation, assessment items, and teaching support.'
  },
  {
    title: 'Cybersecurity Awareness for Schools',
    description:
      'A school-focused program on password safety, phishing, online privacy, data protection, and responsible internet use.'
  },
  {
    title: 'Website Development for Beginners',
    description:
      'An introductory program for students and young professionals on HTML, CSS, Bootstrap, Vue, and building simple portfolio websites.'
  },
  {
    title: 'Digital Skills for Students',
    description:
      'A practical student-focused program covering productivity tools, internet research, online safety, programming basics, and responsible technology use.'
  },
  {
    title: 'School Digital Transformation Seminar',
    description:
      'A program for school leaders and educators on websites, LMS platforms, student registration systems, report systems, and digital administration.'
  }
]
