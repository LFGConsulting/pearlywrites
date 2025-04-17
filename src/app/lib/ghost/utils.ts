import { ghostClient, GhostPost, GhostPage, GhostAuthor, GhostTag } from './client';

type BrowseOptions = {
  limit?: number | 'all';
  page?: number;
  order?: string;
  filter?: string;
  include?: string[];
};

export async function getAllPosts(options: BrowseOptions = {}): Promise<GhostPost[]> {
  return await ghostClient.posts
    .browse({
      limit: 'all',
      include: ['tags', 'authors'],
      ...options,
    })
    .catch((err) => {
      console.error('Error fetching all posts:', err);
      return [];
    });
}

export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  try {
    const post = await ghostClient.posts.read({
      slug,
      include: ['tags', 'authors'],
    });
    console.log('Post data from Ghost:', {
      slug,
      title: post.title,
      feature_image: post.feature_image,
      feature_image_alt: post.feature_image_alt,
      html: post.html?.substring(0, 100) + '...' // First 100 chars of content
    });
    return post;
  } catch (err) {
    console.error('Error fetching post by slug:', err);
    return null;
  }
}

export async function getAllPages(options: BrowseOptions = {}): Promise<GhostPage[]> {
  return await ghostClient.pages
    .browse({
      limit: 'all',
      include: ['tags', 'authors'],
      ...options,
    })
    .catch((err) => {
      console.error('Error fetching all pages:', err);
      return [];
    });
}

export async function getPageBySlug(slug: string): Promise<GhostPage | null> {
  try {
    return await ghostClient.pages.read({
      slug,
      include: ['tags', 'authors'],
    });
  } catch (err) {
    console.error('Error fetching page by slug:', err);
    return null;
  }
}

export async function getAllAuthors(): Promise<GhostAuthor[]> {
  return await ghostClient.authors
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error('Error fetching all authors:', err);
      return [];
    });
}

export async function getFeaturedPosts(limit = 3): Promise<GhostPost[]> {
  return await ghostClient.posts
    .browse({
      limit,
      filter: 'featured:true',
      include: ['tags', 'authors'],
    })
    .catch((err) => {
      console.error('Error fetching featured posts:', err);
      return [];
    });
}

export async function getPostsByTag(tag: string, limit = 10): Promise<GhostPost[]> {
  return await ghostClient.posts
    .browse({
      limit,
      filter: `tag:${tag}`,
      include: ['tags', 'authors'],
    })
    .catch((err) => {
      console.error('Error fetching posts by tag:', err);
      return [];
    });
}

export async function getAllTags(): Promise<GhostTag[]> {
  return await ghostClient.tags
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error('Error fetching all tags:', err);
      return [];
    });
} 