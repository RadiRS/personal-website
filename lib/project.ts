import { join } from 'path';
import { readFileSync } from 'fs';
import matter from 'gray-matter';

// Define the root directory where project files are stored
const rootDirectory = join(process.cwd(), 'content', 'projects');

// Define the Project type
export type Project = {
  metadata: ProjectMetaData;
  content: string;
};

// Define the ProjectMetaData type
export type ProjectMetaData = {
  title?: string;
  summary?: string;
  author?: string;
  publishedAt?: string;
  image?: string;
  slug: string;
};

/**
 * Fetches a project by its slug.
 * @param slug - The slug of the project.
 * @returns A promise that resolves to a Project object or null if the project is not found.
 */
export const getProjectById = async (slug: string): Promise<Project | null> => {
  try {
    // Construct the file path for the project
    const filePath = join(rootDirectory, `${slug}.mdx`);

    // Read the file content
    const fileContent = readFileSync(filePath, 'utf-8');

    // Parse the file content using gray-matter to separate metadata and content
    const { data, content } = matter(fileContent);

    // Return the project object
    return {
      content,
      metadata: { ...data, slug },
    };
  } catch (error) {
    // If an error occurs (e.g., file not found), return null
    console.error(`Error fetching project with slug "${slug}":`, error);
    return null;
  }
};
