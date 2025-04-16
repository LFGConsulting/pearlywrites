import Image from 'next/image'
import { Container } from '../../components/ui'

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-brand-500 dark:text-brand-400">About Us</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Our Story</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                PearlyWrites was founded with a clear vision: to help businesses and organizations communicate their message
                effectively through exceptional content and answer searchers' queries. What started as a freelance writing service has grown into a
                comprehensive SEO marketing and content strategy agency.
              </p>
              <p className="mt-8">
                Our approach combines deep SEO industry knowledge with creative storytelling, ensuring that every piece of content, 
                social media post, and web page we create not only reaches its intended audience but also drives meaningful engagement and results.
              </p>
            </div>
            <div>
              <p>
                We specialize in creating content that educates, inspires, and converts. From SEO marketing to web copy to
                comprehensive educational materials, our team brings expertise and creativity to every project.
              </p>
              <p className="mt-8">
                Today, we're proud to work with clients across various industries, helping them achieve their SEO and content goals
                and establish strong digital presences.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          src="/images/office.jpg"
          alt="PearlyWrites office"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          width={1920}
          height={768}
        />
      </div>

      <Container className="mt-32 sm:mt-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Meet the visionary behind PearlyWrites and learn about our commitment to excellence in SEO and content strategy.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 dark:lg:border-gray-800 lg:pr-8">
            <div className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lisa Weinberger</h3>
                <p className="text-base leading-7 text-brand-500 dark:text-brand-400">Founder & CEO</p>
              </div>
              <div className="aspect-[3/2]">
                <Image
                  src="/images/lisa.jpg"
                  alt="Lisa Weinberger"
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  width={800}
                  height={533}
                />
              </div>
            </div>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300">
              <p>
                Lisa Weinberger brings over 15 years of experience in SEO, content strategy, and digital marketing to
                PearlyWrites. Her journey began in digital marketing, where she developed a deep understanding of how
                to create content that not only educates and engages readers but also ranks well in search engines.
              </p>
              <p className="mt-8">
                As search algorithms evolved, Lisa recognized the growing need for high-quality, strategic content that
                could help businesses stand out in search results. This insight led to the founding of PearlyWrites, where she has
                helped numerous organizations achieve their SEO goals through strategic content planning and exceptional
                execution.
              </p>
              <p>
                Lisa holds certifications in Advanced SEO and Digital Marketing, and has been featured in various industry publications for her
                innovative approaches to content strategy and search optimization. She regularly speaks at SEO conferences and
                contributes to leading digital marketing publications.
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">Expertise</h3>
            <div className="mt-10 space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">SEO Strategy</h4>
                <p className="mt-2">
                  Developing comprehensive search optimization strategies that improve visibility and drive organic traffic.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Content Marketing</h4>
                <p className="mt-2">
                  Creating strategic content that ranks well in search results while engaging target audiences effectively.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Technical SEO</h4>
                <p className="mt-2">
                  Optimizing website structure, performance, and content to maximize search engine visibility.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketing</h4>
                <p className="mt-2">
                  Implementing comprehensive digital strategies across content, social media, and search marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 