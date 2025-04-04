import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../../components/ui'
import { Carousel } from '../../components/ui/Carousel'

const caseStudies = [
  {
    title: 'Educational Publishing Platform',
    client: 'LearnSmart Education',
    description:
      'Developed comprehensive curriculum materials and interactive content for a leading educational technology platform.',
    metrics: [
      { name: 'Student Engagement', value: '+45%' },
      { name: 'Learning Outcomes', value: '+32%' },
      { name: 'Teacher Satisfaction', value: '98%' },
    ],
    image: '/images/case-study-1.jpg',
  },
  {
    title: 'SEO Content Strategy',
    client: 'TechGrowth Solutions',
    description:
      'Implemented a comprehensive SEO and content strategy that significantly improved organic search visibility.',
    metrics: [
      { name: 'Organic Traffic', value: '+156%' },
      { name: 'Keyword Rankings', value: '+89' },
      { name: 'Conversion Rate', value: '+23%' },
    ],
    image: '/images/case-study-2.jpg',
  },
  {
    title: 'Content Marketing Campaign',
    client: 'HealthCare Connect',
    description:
      'Created and executed a multi-channel content marketing campaign that increased brand awareness and patient engagement.',
    metrics: [
      { name: 'Lead Generation', value: '+78%' },
      { name: 'Social Engagement', value: '+124%' },
      { name: 'Website Traffic', value: '+92%' },
    ],
    image: '/images/case-study-3.jpg',
  },
]

const testimonials = [
  {
    body: 'PearlyWrites transformed our content strategy. Their expertise in SEO and educational content has been invaluable to our growth.',
    author: {
      name: 'Sarah Chen',
      handle: 'CEO at LearnSmart Education',
      imageUrl: '/images/testimonial-1.jpg',
    },
  },
  {
    body: 'The team&apos;s ability to create engaging, technically accurate content that resonates with our audience is remarkable.',
    author: {
      name: 'Michael Rodriguez',
      handle: 'Marketing Director at TechGrowth',
      imageUrl: '/images/testimonial-2.jpg',
    },
  },
  {
    body: 'Working with PearlyWrites has significantly improved our content quality and SEO performance. Highly recommended!',
    author: {
      name: 'Emily Thompson',
      handle: 'Content Manager at HealthCare Connect',
      imageUrl: '/images/testimonial-3.jpg',
    },
  },
]

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Work</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover how we've helped organizations achieve their content goals through strategic planning and exceptional
            execution.
          </p>
        </div>

        <Carousel items={caseStudies} />

        <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
          <div className="relative isolate overflow-hidden bg-brand-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your content strategy?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Let's discuss how we can help you achieve your content goals and drive meaningful results for your
              organization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-brand-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact us
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-brand-200">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 