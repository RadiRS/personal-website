import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';

// Define the generic Content type
export type Content<T> = {
  metadata: T;
  content: string;
};

// Define the generic Metadata type
export type Metadata = {
  title?: string;
  summary?: string;
  author?: string;
  publishedAt?: string;
  image?: string;
  slug: string;
};

/**
 * Fetches a content item by its slug.
 * @param directory - The root directory where content files are stored.
 * @param slug - The slug of the content item.
 * @returns A promise that resolves to a Content object or null if the content item is not found.
 */
export const getContentById = async <T extends Metadata>(
  directory: string,
  slug: string,
): Promise<Content<T> | null> => {
  try {
    // Construct the file path for the content item
    const filePath = `${slug}.mdx`;

    // Get the file content
    const content = getContentMetadata<T>(directory, filePath);

    // Return the content object
    return content;
  } catch (error) {
    // If an error occurs (e.g., file not found), return null
    console.error(`Error fetching content with slug "${slug}":`, error);
    return null;
  }
};

/**
 * Fetches metadata for all content items, optionally limiting the number of results.
 * @param directory - The root directory where content files are stored.
 * @param limit - Optional limit on the number of content items to return.
 * @returns A promise that resolves to an array of Metadata objects.
 */
export const getContents = async <T extends Metadata>(
  directory: string,
  limit?: number,
): Promise<T[]> => {
  // Read all files in the root directory
  const files = readdirSync(directory);

  // If no files are found, return an empty array
  if (!files.length) return [];

  // Map each file to its metadata and sort by published date in descending order
  const contents = files
    .map(file => getContentMetadata<T>(directory, file).metadata)
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt ?? '');
      const dateB = new Date(b.publishedAt ?? '');
      return dateB.getTime() - dateA.getTime();
    });

  // If a limit is specified, slice the array to return only the limited number of content items
  if (limit) {
    return contents.slice(0, limit);
  }

  // Return the full list of content items
  return contents;
};

/**
 * Fetches metadata for a single content item based on its file path.
 * @param directory - The root directory where content files are stored.
 * @param filepath - The file path of the content item.
 * @returns A Content object containing the content item's metadata and content.
 */
export const getContentMetadata = <T extends Metadata>(
  directory: string,
  filepath: string,
): Content<T> => {
  // Extract the slug from the file path by removing the file extension
  const slug = filepath.replace(/\.mdx$/, '');

  // Construct the full file path
  const filePath = join(directory, filepath);

  // Read the file content
  const fileContent = readFileSync(filePath, { encoding: 'utf8' });

  // Parse the file content using gray-matter to separate metadata and content
  const { data, content } = matter(fileContent);

  // Return the content object
  return {
    content,
    metadata: { ...data, slug } as T,
  };
};
