import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../../components/ui'
import { Carousel } from '../../components/ui/Carousel'
import { Button } from '../../components/ui/Button'

const caseStudies = [
  {
    title: 'SEO Strategy',
    client: 'State University',
    description:
      'Developed site-wide SEO strategy for all academic program pages and blog for a state University, resulting in significant organic traffic growth and improved content marketing performance.',
    metrics: [
      { name: 'YOY Organic Traffic', value: '+20%' },
      { name: 'Non-brand Clicks', value: '+18%' },
      { name: 'Content Marketing Response', value: '10%' },
    ],
    image: '/images/university-classroom.jpg',
  },
  {
    title: 'SEO Content Strategy',
    client: 'Fortune 500 Personal Finance',
    description:
      'Implemented a localized, geo-targeted SEO strategy as digital marketing subject matter expert, delivering best practice learning series on content publishing, social media, and SEO.',
    metrics: [
      { name: 'Company Valuation', value: '$1.8B' },
      { name: 'Organic Traffic', value: '75%' },
      { name: 'Monthly Revenue', value: '$5M+' },
    ],
    image: '/images/personal-finance-website.jpg',
  },
  {
    title: 'Content & Social Strategy',
    client: 'IvyandZo.com',
    description:
      'Led comprehensive social media strategy in the dog niche, building a significant following from scratch and establishing successful brand partnerships and collaborations.',
    metrics: [
      { name: 'TikTok Following', value: '70K+' },
      { name: 'Brand Partnerships', value: 'Multiple' },
      { name: 'Product Lines', value: 'Created' },
    ],
    image: '/images/ivy-zo-1.jpg',
  },
  {
    title: 'SEO, Branding, & Content Marketing',
    client: 'MarijuanaRates.com',
    description:
      'Developed comprehensive SEO and content strategy for cannabis market pricing platform, achieving dominant market position through organic search and unique data offerings.',
    metrics: [
      { name: '#1 Organic Rankings', value: '55+' },
      { name: 'Monthly Views', value: '50K' },
      { name: 'Email Leads', value: '1.5K' },
    ],
    image: '/images/Mrates-logo.jpg',
  },
]

const testimonials = [
  {
    body: 'The SEO strategy implemented by PearlyWrites transformed our online presence, significantly improving our organic reach and student engagement.',
    author: {
      name: 'Dr. James Mitchell',
      handle: 'Digital Strategy Director, State University',
      imageUrl: '/images/testimonial-1.jpg',
    },
  },
  {
    body: 'Their expertise in geo-targeted SEO and content strategy helped us achieve remarkable growth in both traffic and revenue.',
    author: {
      name: 'Jennifer Adams',
      handle: 'VP of Digital, Fortune 500 Finance',
      imageUrl: '/images/testimonial-2.jpg',
    },
  },
  {
    body: 'PearlyWrites helped us build a powerful social media presence from scratch, leading to valuable partnerships and brand growth.',
    author: {
      name: 'Alex Rivera',
      handle: 'Founder, IvyandZo.com',
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
            Discover how we've helped organizations achieve remarkable growth through strategic SEO, content marketing, and digital strategy.
          </p>
        </div>

        <Carousel items={caseStudies} />

        <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
          <div className="relative isolate overflow-hidden bg-brand-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your digital presence?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Let's discuss how our proven SEO and content strategies can drive meaningful results for your organization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                href="/contact"
                variant="default"
                size="lg"
              >
                Contact us
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="text-white hover:text-brand-200"
              >
                Learn more <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 