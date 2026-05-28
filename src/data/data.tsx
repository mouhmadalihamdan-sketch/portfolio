import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohammad Hamdan',
  description: "Mohammad Hamdan Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi I'm Mohammad Hamdan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Syria based <strong className="text-stone-100">Network Engineering and Mobile app developer </strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a high-performance mobile application 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me practicing a  <strong className="text-stone-100">new skill</strong>,
        playing <strong className="text-stone-100">FootBall</strong>, or learn{' '}
        <strong className="text-stone-100"> German</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/MY-CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Syria, Tartous', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Syrian', Icon: FlagIcon},
    {label: 'Interests', text: 'Car, FootBall', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Homs', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, FreeLance.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'German',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 4,
      },
      {
        name: 'Typescript',
        level: 2,
      },
      {
        name: 'GraphQL',
        level: 3,
      },
    ],
  },
  
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Dart',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'Swift',
        level: 3,
      },

      {name:'React Native' ,
        level: 2 ,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-Teast',
    description: 'Application for Electronic exams.',
    image: porfolioImage1,
  },
  {
    title: 'Focal X community',
    description: 'Give a short description of your project here.',
    image: porfolioImage10 ,
  },
  {
    title: 'Map',
    description: 'Google map app with a simple design.',
    image: porfolioImage5,
  },
  {
    title: 'Focal X community',
    description: 'Give a short description of your project here.',
    image: porfolioImage6,
  },
  {
    title: 'SYJOB',
    description: 'An application designed to simplify the recruitment process and enhance its efficiency by providing advanced tools for filtering resumes .',
    image: porfolioImage2,
  },
  {
    title: 'Map',
    description: 'Google map app with a simple design.',
    image: porfolioImage4,
  },
  {
    title: 'Focal X community',
    description: 'Give a short description of your project here.',
    image: porfolioImage7,
  },
  {
    title: 'SYJOB',
    description: ' offering diverse job opportunities, and enabling users to create their own job postings.',
    image: porfolioImage3,
  },

  {
    title: 'Focal X community',
    description: 'Give a short description of your project here.',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'SEP 2025',
    location: 'Homs University',
    title: 'Bachelor of Informatics Engineering',
    content: <p>Network and Computer system.</p>,
  },
  {
    date: 'JUNE 2024',
    location: 'Focal X Agency',
    title: 'Flutter Development Course',
    content: <p> Completed intensive training in Flutter & Dart. 
• Recommendation letter is avaliable upon request. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'JUNE 2025 - SEP 2025',
    location: 'Graduation Project',
    title: 'E-Hiring platform (SYJOB)',
    content: (
      <p>
        • I designed an SQLite database and implemented interactive interfaces. 
• Building and training an AI model to filter CV according to job requirements.the project received an Excellent 
rating. 
      </p>
    ),
  },
  {
    date: 'APRIL 2024 - JULY 2024',
    location: 'Freelance app developer (External Project) ',
    title: 'E-Test Application',
    content: (
      <p>
• This project aims to develop an integrated application for managing and conducting online exams.   
• Strong background in mechanical and electrical. 
      </p>
    ),
  },
];



/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
  items: [
    {
      type: ContactType.Email,
      text: 'mouhmadalihamdan@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Tartous, Syria',
      href: 'https://maps.app.goo.gl/DvAaRbUo4wMYDTXm7',
    },
    {
      type: ContactType.Instagram,
      text: '@mohmad_homdan',
      href: 'https://www.instagram.com/mohmad_homdan?igsh=MW1qaG9qM3I4cDV2aA==',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Mohmad',
      href: 'https://www.linkedin.com/in/mouhmad-hamdan-12b755395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mohmad_homdan?igsh=MW1qaG9qM3I4cDV2aA=='},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/share/1BXTwZ3N1K/'},
];
