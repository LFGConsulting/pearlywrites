import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { getAllPosts, getAllTags } from '@/lib/ghost/utils'
import { GhostTag, GhostPost } from '@/lib/ghost/client'
import { formatDate } from '@/lib/utils'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const metadata: Metadata = {
  title: 'Blog - PearlyWrites',
  description: 'Industry insights, expert tips, and thought leadership from our team.',
  openGraph: {
    title: 'Blog - PearlyWrites',
    description: 'Industry insights, expert tips, and thought leadership from our team.',
    type: 'website',
  },
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()])

  // Filter out internal tags (those starting with #) and get unique tags
  const categories = [
    { name: 'All', href: '/blog', current: true },
    ...tags
      .filter(tag => !tag.name.startsWith('#'))
      .map((tag: GhostTag) => ({
        name: tag.name,
        href: `/blog/tag/${tag.slug}`,
        current: false
      }))
  ]

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From the Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Industry insights, expert tips, and thought leadership from our team.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="mb-12 flex justify-center space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={classNames(
                  category.current
                    ? 'bg-brand-600 text-white dark:bg-brand-500'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
                  'rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap'
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            {posts.map((post: GhostPost, index: number) => (
              <article key={post.id} className="flex flex-col items-start">
                {post.feature_image ? (
                  <div className="relative w-full aspect-[16/9] mb-4">
                    <Image
                      src={post.feature_image}
                      alt={post.feature_image_alt || post.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        console.error('Blog listing - Image failed to load:', {
                          src: post.feature_image,
                          error: e
                        });
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[16/9] mb-4 bg-gray-100 rounded-lg" />
                )}
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.published_at} className="text-gray-500 dark:text-gray-400">
                      {formatDate(post.published_at)}
                    </time>
                    {post.primary_tag && (
                      <Link
                        href={`/blog/tag/${post.primary_tag.slug}`}
                        className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {post.primary_tag.name}
                      </Link>
                    )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {post.excerpt || post.custom_excerpt}
                    </p>
                  </div>
                  {post.primary_author && (
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image
                        src={post.primary_author.profile_image || '/images/placeholder-author.jpg'}
                        alt={post.primary_author.name}
                        className="h-10 w-10 rounded-full bg-gray-100"
                        width={40}
                        height={40}
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          <Link href={`/blog/author/${post.primary_author.slug}`}>
                            <span className="absolute inset-0" />
                            {post.primary_author.name}
                          </Link>
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">{post.primary_author.bio?.split('.')[0]}</p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 