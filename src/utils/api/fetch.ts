import githubAPIClient from './github';

import { SuggestionType } from 'types/suggestions';

export const fetchRepositories = async (
  query: string
): Promise<SuggestionType[]> => {
  const { data: repositoriesResults } = await githubAPIClient.rest.search.repos(
    {
      q: query,
      per_page: 50,
      page: 1
    }
  );

  return repositoriesResults.items.map((repo: any) => ({
    name: repo.full_name,
    type: 'repository'
  }));
};
