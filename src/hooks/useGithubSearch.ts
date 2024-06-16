import { useState } from 'react';

import { SuggestionType } from 'types/suggestions';
import { fetchRepositories, fetchUsers } from 'utils/api';
import copies from 'copies';

export const useGithubSearch = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReposAndUsersByQuery = async (
    query: string
  ): Promise<SuggestionType[]> => {
    const results: SuggestionType[] = [];

    try {
      setIsLoading(true);
      const repositories = await fetchRepositories(query);
      const users = await fetchUsers(query);

      results.concat(repositories).concat(users);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setError(copies.errors['github.fetchError']);
    }

    setIsLoading(false);
    return results;
  };

  return { error, isLoading, fetchReposAndUsersByQuery };
};
