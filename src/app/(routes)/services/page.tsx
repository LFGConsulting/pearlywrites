import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Container } from '../../components/ui'
import { Button } from '../../components/ui/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SEO Marketing, Content Strategy, Educational Publishing & Digital PR Services",
  description: "Choose the right service for your needs: SEO strategy, content creation, educational publishing, or digital PR. PearlyWrites offers expert solutions to enhance your digital presence and impact.",
  openGraph: {
    title: "SEO Marketing, Content Strategy, Educational Publishing & Digital PR Services",
    description: "Choose the right service for your needs: SEO strategy, content creation, educational publishing, or digital PR. PearlyWrites offers expert solutions to enhance your digital presence and impact.",
    type: 'website',
  },
};

const tiers = [
  {
    name: 'SEO Marketing',
    id: 'seo-marketing',
    href: '/contact',
    description: 'Strategic SEO and marketing services to enhance your digital presence and drive results.',
    features: [
      'Comprehensive SEO strategy',
      'Keyword research and optimization',
      'Content strategy development',
      'Performance tracking and analytics',
      'Competitor analysis',
      'Monthly progress reports',
    ],
  },
  {
    name: 'Content Strategy',
    id: 'content-strategy',
    href: '/contact',
    description: 'End-to-end content strategy and development services aligned with your business goals.',
    features: [
      'Content planning and calendars',
      'Brand voice development',
      'Content creation and editing',
      'Content performance analysis',
      'Content marketing strategy',
      'Content optimization',
    ],
  },
  {
    name: 'Educational Publishing',
    id: 'edu-publishing',
    href: '/contact',
    description: 'Expert educational content development for publishers and institutions.',
    features: [
      'Curriculum development',
      'Textbook writing',
      'Educational materials',
      'Assessment creation',
      'Teacher resources',
      'Student workbooks',
    ],
  },
  {
    name: 'Digital PR',
    id: 'digital-pr',
    href: '/contact',
    description: 'A strategic marketing approach that leverages public relations tactics like creating newsworthy content and outreach to gain visibility for a brand across online platforms. The primary goal is to build citations, brand authority, increase awareness, and enhance reputation.',
    features: [
      'Earned Media Coverage',
      'Brand Authority',
      'Citable Linkable Assets',
      'Targeted Outreach',
      'Improved AI SEO',
      'Increased Traffic',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-brand-500 dark:text-brand-400">Services</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Choose the right service for your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Specialized in SEO marketing, content strategy, educational publishing, and digital PR, we deliver expert solutions
            to help you achieve measurable results and lasting impact.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <Link key={tier.id} href={tier.href} className="block group relative flex flex-col rounded-3xl p-8 ring-1 xl:p-10
                         transition-colors duration-300 ease-in-out 
                         bg-white ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 
                         hover:bg-brand-900 hover:ring-brand-900 
                         dark:hover:bg-brand-800 dark:hover:ring-brand-700">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className="text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100 group-hover:text-white"
                  >
                    {tier.name}
                  </h3>
                </div>
                <p 
                  className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-100 flex-grow"
                >
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-100"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-brand-500 dark:text-brand-400 group-hover:text-brand-200"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 group-hover:border-brand-700 dark:group-hover:border-brand-600 transition-colors duration-300 ease-in-out">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-white">Learn More &rarr;</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-32 max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Custom Solutions Available
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Need a customized solution? Contact us to discuss your specific requirements and how we can help you achieve
            your content goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/contact" size="lg">
              Contact us
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View our work
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 