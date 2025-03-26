import Image from 'next/image'
import Link from 'next/link'

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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover how we've helped organizations achieve their content goals through strategic planning and exceptional
            execution.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.client} className="flex flex-col">
                <dt className="flex flex-col items-start">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-col">
                    <p className="text-lg font-semibold leading-7 text-gray-900">{study.title}</p>
                    <p className="text-base leading-7 text-blue-600">{study.client}</p>
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col">
                  <p className="flex-auto text-base leading-7 text-gray-600">{study.description}</p>
                  <div className="mt-6">
                    <div className="isolate flex -space-x-2">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.name}
                          className="relative w-28 overflow-hidden rounded-lg bg-gray-50 px-4 py-3 text-center"
                        >
                          <p className="text-sm font-semibold text-gray-900">{metric.value}</p>
                          <p className="text-xs text-gray-600">{metric.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with PearlyWrites.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col">
                <div className="flex flex-1 flex-col justify-between bg-white">
                  <div className="flex-1">
                    <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                      &ldquo;{testimonial.body}&rdquo;
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.handle}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your content strategy?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Let&apos;s discuss how we can help you achieve your content goals and drive meaningful results for your
              organization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact us
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 