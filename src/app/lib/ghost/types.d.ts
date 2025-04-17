declare module '@tryghost/content-api' {
  export interface GhostAPI {
    posts: PostsAPI;
    pages: PagesAPI;
    authors: AuthorsAPI;
    tags: TagsAPI;
    settings: SettingsAPI;
  }

  interface PostsAPI {
    browse(options?: BrowseOptions): Promise<Post[]>;
    read(options: ReadOptions): Promise<Post>;
  }

  interface PagesAPI {
    browse(options?: BrowseOptions): Promise<Page[]>;
    read(options: ReadOptions): Promise<Page>;
  }

  interface AuthorsAPI {
    browse(options?: BrowseOptions): Promise<Author[]>;
    read(options: ReadOptions): Promise<Author>;
  }

  interface TagsAPI {
    browse(options?: BrowseOptions): Promise<Tag[]>;
    read(options: ReadOptions): Promise<Tag>;
  }

  interface SettingsAPI {
    browse(): Promise<Settings>;
  }

  interface BrowseOptions {
    limit?: number | 'all';
    page?: number;
    order?: string;
    fields?: string | string[];
    filter?: string;
    formats?: string | string[];
    include?: string | string[];
  }

  interface ReadOptions {
    id?: string;
    slug?: string;
    include?: string | string[];
  }

  interface ContentAPIOptions {
    url: string;
    key: string;
    version: string;
  }

  export default class GhostContentAPI {
    constructor(options: ContentAPIOptions);
    posts: PostsAPI;
    pages: PagesAPI;
    authors: AuthorsAPI;
    tags: TagsAPI;
    settings: SettingsAPI;
  }
} 