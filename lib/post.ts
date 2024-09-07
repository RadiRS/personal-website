import { join } from 'path';

import { getContentById, getContents } from './content';

// Define the root directory where post files are stored
const rootDirectory = join(process.cwd(), 'content', 'posts');

/**
 * Fetches a post by its slug.
 * @param slug - The slug of the post.
 * @returns A promise that resolves to a Post object or null if the project is not found.
 */
export const getPostById = async (slug: string) => {
  // Get the file content
  const post = await getContentById(rootDirectory, slug);

  // Return the post object
  return post;
};

/**
 * Fetches metadata for all posts, optionally limiting the number of results.
 * @param limit - Optional limit on the number of posts to return.
 * @returns A promise that resolves to an array of PostMetaData objects.
 */
export const getPosts = async (limit?: number) => {
  // Get the files content
  const posts = await getContents(rootDirectory, limit);

  // Return the full list of posts
  return posts;
};
