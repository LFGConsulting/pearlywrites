import Link from 'next/link'
import { Metadata } from 'next'
import { getAllPosts, getAllTags } from '@/lib/ghost/utils'
import { GhostTag, GhostPost } from '@/lib/ghost/client'
import { formatDate } from '@/lib/utils'
import ResponsiveImage from '@/components/ResponsiveImage'

// Define props type including params
type PageProps = {
  params: { slug: string }
}

// Generate dynamic metadata based on the tag
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params
  const tags = await getAllTags()
  const currentTag = tags.find((tag: GhostTag) => tag.slug === slug)

  const title = currentTag ? `${currentTag.name} Posts - PearlyWrites` : 'Tag Not Found - PearlyWrites'
  const description = currentTag ? `Blog posts tagged with "${currentTag.name}"` : 'The requested tag could not be found.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

// Main page component
export default async function TagPage({ params }: PageProps) {
  const { slug } = params
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()])

  // Find the current tag object
  const currentTag = tags.find((tag: GhostTag) => tag.slug === slug)

  // Filter posts that include the current tag
  const filteredPosts = currentTag
    ? posts.filter((post: GhostPost) => 
        post.tags?.some((tag: GhostTag) => tag.slug === slug)
      )
    : []

  // Handle case where tag doesn't exist
  if (!currentTag) {
    return (
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Tag Not Found
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              The blog tag "{slug}" you're looking for could not be found.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Render the page with filtered posts (similar structure to main blog page)
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Posts Tagged: {currentTag.name}
          </h1>
          {currentTag.description && (
             <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {currentTag.description}
             </p>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
              {filteredPosts.map((post: GhostPost) => (
                 // Re-use the article rendering logic from your main blog page
                 // Ensure all necessary props are passed
                <article key={post.id} className="flex flex-col items-start">
                  {post.feature_image ? (
                    <ResponsiveImage
                      src={post.feature_image}
                      alt={post.feature_image_alt || post.title}
                      variant="card"
                    />
                  ) : (
                    <div className="relative w-full aspect-[16/9] mb-4 bg-gray-100 rounded-lg" />
                  )}
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime={post.published_at} className="text-gray-500 dark:text-gray-400">
                        {formatDate(post.published_at)}
                      </time>
                      {/* Display primary tag if different from current tag */}
                      {post.primary_tag && post.primary_tag.slug !== slug && (
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
                        <ResponsiveImage
                          src={post.primary_author.profile_image || '/images/placeholder-author.jpg'}
                          alt={post.primary_author.name}
                          variant="author"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {post.primary_author.slug === 'lisa-weinberger' ? (
                              <Link href="/about#lisa-weinberger">
                                <span className="absolute inset-0" />
                                {post.primary_author.name}
                              </Link>
                            ) : (
                              <span className="text-gray-900 dark:text-white">
                                {post.primary_author.name}
                              </span>
                            )}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">{post.primary_author.bio?.split('.')[0]}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
             <p className="mt-12 text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
                No posts found for this tag yet.
             </p>
          )}
        </div>
      </div>
    </div>
  )
} 