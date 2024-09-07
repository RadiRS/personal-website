import { join } from 'path';

import { getContentById, getContents } from './content';

// Define the root directory where project files are stored
const rootDirectory = join(process.cwd(), 'content', 'projects');

/**
 * Fetches a project by its slug.
 * @param slug - The slug of the project.
 * @returns A promise that resolves to a Project object or null if the project is not found.
 */
export const getProjectById = async (slug: string) => {
  // Get the file content
  const project = await getContentById(rootDirectory, slug);

  // Return the project object
  return project;
};

/**
 * Fetches metadata for all projects, optionally limiting the number of results.
 * @param limit - Optional limit on the number of projects to return.
 * @returns A promise that resolves to an array of ProjectMetaData objects.
 */
export const getProjects = async (limit?: number) => {
  // Get the files content
  const projects = await getContents(rootDirectory, limit);

  // Return the full list of projects
  return projects;
};
