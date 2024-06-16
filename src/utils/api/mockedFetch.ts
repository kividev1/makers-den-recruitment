import { SuggestionType } from 'types/suggestions';

export const fetchRepositories = (query: string): Promise<SuggestionType[]> => {
  return new Promise((resolve) => {
    resolve([]);
  });
};

export const fetchUsers = (query: string): Promise<SuggestionType[]> => {
  return new Promise((resolve) => {
    resolve([]);
  });
};
