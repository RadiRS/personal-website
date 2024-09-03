import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
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
    const filePath = `${slug}.mdx`;

    // Get the file content
    const project = getProjectMetadata(filePath);

    // Return the project object
    return project;
  } catch (error) {
    // If an error occurs (e.g., file not found), return null
    console.error(`Error fetching project with slug "${slug}":`, error);
    return null;
  }
};

/**
 * Fetches metadata for all projects, optionally limiting the number of results.
 * @param limit - Optional limit on the number of projects to return.
 * @returns A promise that resolves to an array of ProjectMetaData objects.
 */
export const getProjects = async (
  limit?: number,
): Promise<ProjectMetaData[]> => {
  // Read all files in the root directory
  const files = readdirSync(rootDirectory);

  // If no files are found, return an empty array
  if (!files.length) return [];

  // Map each file to its metadata and sort by published date in descending order
  const projects = files
    .map(file => getProjectMetadata(file).metadata)
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt ?? '');
      const dateB = new Date(b.publishedAt ?? '');
      return dateB.getTime() - dateA.getTime();
    });

  // If a limit is specified, slice the array to return only the limited number of projects
  if (limit) {
    return projects.slice(0, limit);
  }

  // Return the full list of projects
  return projects;
};

/**
 * Fetches metadata for a single project based on its file path.
 * @param filepath - The file path of the project.
 * @returns A ProjectMetaData object containing the project's metadata.
 */
export const getProjectMetadata = (filepath: string): Project => {
  // Extract the slug from the file path by removing the file extension
  const slug = filepath.replace(/\.mdx$/, '');

  // Construct the full file path
  const filePath = join(rootDirectory, filepath);

  // Read the file content
  const fileContent = readFileSync(filePath, { encoding: 'utf8' });

  // Parse the file content using gray-matter to separate metadata and content
  const { data, content } = matter(fileContent);

  // Return the project object
  return {
    content,
    metadata: { ...data, slug },
  };
};
