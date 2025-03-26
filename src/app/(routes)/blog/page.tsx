import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'The Future of SEO: AI and Content Strategy',
    description:
      'Explore how artificial intelligence is reshaping SEO practices and what it means for content creators.',
    date: 'Mar 16, 2024',
    category: { name: 'SEO', href: '#' },
    author: {
      name: 'Lisa Weinberger',
      role: 'Founder & CEO',
      imageUrl: '/images/lisa.jpg',
    },
    imageUrl: '/images/blog-1.jpg',
  },
  {
    id: 2,
    title: 'Creating Educational Content That Engages',
    description:
      'Learn the key principles of developing educational content that captures attention and promotes learning.',
    date: 'Mar 10, 2024',
    category: { name: 'Educational Publishing', href: '#' },
    author: {
      name: 'Lisa Weinberger',
      role: 'Founder & CEO',
      imageUrl: '/images/lisa.jpg',
    },
    imageUrl: '/images/blog-2.jpg',
  },
  {
    id: 3,
    title: 'Content Strategy for B2B Companies',
    description:
      'Discover effective content strategies specifically tailored for B2B companies looking to grow their online presence.',
    date: 'Mar 5, 2024',
    category: { name: 'Content Strategy', href: '#' },
    author: {
      name: 'Lisa Weinberger',
      role: 'Founder & CEO',
      imageUrl: '/images/lisa.jpg',
    },
    imageUrl: '/images/blog-3.jpg',
  },
]

const categories = [
  { name: 'All', href: '#', current: true },
  { name: 'SEO', href: '#', current: false },
  { name: 'Content Strategy', href: '#', current: false },
  { name: 'Educational Publishing', href: '#', current: false },
  { name: 'Digital Marketing', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Industry insights, expert tips, and thought leadership from our team.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="mb-12 flex justify-center space-x-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={classNames(
                  category.current
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100',
                  'rounded-full px-4 py-1.5 text-sm font-semibold'
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={800}
                    height={400}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <Link
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.name}
                    </Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      className="h-10 w-10 rounded-full bg-gray-100"
                      width={40}
                      height={40}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <Link href="#">
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </Link>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-32 flex justify-center">
            <Link
              href="#"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              View all posts <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 