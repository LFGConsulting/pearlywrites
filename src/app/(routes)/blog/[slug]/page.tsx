import Image from 'next/image'
import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/ghost/utils'
import { formatDate } from '@/lib/utils'
import GhostContent from '@/components/GhostContent'
import ResponsiveImage from '@/components/ResponsiveImage'

type PageProps = {
  params: Promise<{ slug: string }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - PearlyWrites',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} - PearlyWrites`,
    description: post.excerpt || post.custom_excerpt || post.meta_description || '',
    openGraph: {
      title: post.title,
      description: post.excerpt || post.custom_excerpt || post.meta_description || '',
      type: 'article',
      images: post.feature_image ? [{ url: post.feature_image }] : [],
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return (
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Post Not Found
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              The blog post you're looking for could not be found.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Ensure image URLs are absolute
  const featureImage = post.feature_image?.startsWith('http') 
    ? post.feature_image 
    : `https://seo-and-content-strategy.ghost.io${post.feature_image}`;
    
  const authorImage = post.primary_author?.profile_image?.startsWith('http')
    ? post.primary_author.profile_image
    : post.primary_author?.profile_image 
      ? `https://seo-and-content-strategy.ghost.io${post.primary_author.profile_image}`
      : null;

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <article className="mx-auto max-w-3xl py-24 sm:py-32">
          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-x-4 text-xs mb-6">
              <time dateTime={post.published_at} className="text-gray-500 dark:text-gray-400">
                {formatDate(post.published_at)}
              </time>
              {post.primary_tag && (
                <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                  {post.primary_tag.name}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {post.title}
            </h1>
            
            {post.custom_excerpt && (
              <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
                {post.custom_excerpt}
              </p>
            )}

            {post.primary_author && (
              <div className="mt-8 flex items-center gap-x-4">
                {authorImage && (
                  <ResponsiveImage
                    src={authorImage}
                    alt={post.primary_author.name}
                    variant="author"
                  />
                )}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {post.primary_author.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.primary_author.bio?.split('.')[0]}
                  </p>
                </div>
              </div>
            )}
          </header>

          {/* Feature Image */}
          {featureImage && (
            <ResponsiveImage
              src={featureImage}
              alt={post.feature_image_alt || post.title}
              variant="feature"
              priority
            />
          )}

          {/* Content */}
          <GhostContent 
            html={post.html || ''} 
            className="mt-8"
          />
        </article>
      </div>
    </div>
  )
} 