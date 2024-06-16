import githubAPIClient from './github';

import { SuggestionType } from 'types/suggestions';

export const fetchRepositories = async (
  query: string,
  page: number = 1,
  limit: number = 50
): Promise<SuggestionType[]> => {
  const { data: repositoriesResults } = await githubAPIClient.rest.search.repos(
    {
      q: query,
      per_page: limit,
      page: page
    }
  );

  return repositoriesResults.items.map((repo: any) => ({
    name: repo.full_name,
    type: 'repository'
  }));
};

export const fetchUsers = async (
  query: string,
  page: number = 1,
  limit: number = 50
): Promise<SuggestionType[]> => {
  const { data: repositoriesResults } = await githubAPIClient.rest.search.users(
    {
      q: query,
      per_page: limit,
      page: page
    }
  );

  return repositoriesResults.items.map((repo: any) => ({
    name: repo.full_name,
    type: 'repository'
  }));
};
