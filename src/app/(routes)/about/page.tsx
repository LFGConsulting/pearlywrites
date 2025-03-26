import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-blue-600">About Us</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Story</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                PearlyWrites was founded with a clear vision: to help businesses and organizations communicate their message
                effectively through exceptional content. What started as a freelance writing service has grown into a
                comprehensive content strategy and development agency.
              </p>
              <p className="mt-8">
                Our approach combines deep industry knowledge with creative storytelling, ensuring that every piece of
                content we create not only reaches its intended audience but also drives meaningful engagement and results.
              </p>
            </div>
            <div>
              <p>
                We specialize in creating content that educates, inspires, and converts. From SEO-optimized web copy to
                comprehensive educational materials, our team brings expertise and creativity to every project.
              </p>
              <p className="mt-8">
                Today, we're proud to work with clients across various industries, helping them achieve their content goals
                and establish strong digital presences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          src="/images/office.jpg"
          alt="PearlyWrites office"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          width={1920}
          height={768}
        />
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the visionary behind PearlyWrites and learn about our commitment to excellence in content creation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lisa Weinberger</h3>
                <p className="text-base leading-7 text-blue-600">Founder & CEO</p>
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
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                Lisa Weinberger brings over 15 years of experience in content strategy, SEO, and educational publishing to
                PearlyWrites. Her journey began in educational publishing, where she developed a deep understanding of how
                to create content that effectively educates and engages readers.
              </p>
              <p className="mt-8">
                As the digital landscape evolved, Lisa recognized the growing need for high-quality, strategic content that
                could help businesses stand out online. This insight led to the founding of PearlyWrites, where she has
                helped numerous organizations achieve their content goals through strategic planning and exceptional
                execution.
              </p>
              <p className="mt-8">
                Lisa holds a Master's degree in Education and has been featured in various industry publications for her
                innovative approaches to content strategy and SEO. She regularly speaks at industry conferences and
                contributes to leading digital marketing publications.
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Expertise</h3>
            <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900">Content Strategy</h4>
                <p className="mt-2">
                  Developing comprehensive content strategies that align with business goals and drive measurable results.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">SEO & Digital Marketing</h4>
                <p className="mt-2">
                  Creating SEO-optimized content that ranks well and engages target audiences effectively.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Educational Publishing</h4>
                <p className="mt-2">
                  Producing educational materials that make complex topics accessible and engaging for learners.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Content Development</h4>
                <p className="mt-2">
                  Writing and editing high-quality content across various formats and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 