import React, { useState, useCallback } from 'react';
import throttle from 'lodash.throttle';

import * as S from './SearchBar.styled';
import { SuggestionType } from 'types/suggestions';
import { useGithubSearch } from 'hooks';

export interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ className }) => {
  const [userInput, setUserInput] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);

  const { fetchReposAndUsersByQuery, error, isLoading } = useGithubSearch();

  const updateSuggestions = useCallback(
    throttle(
      async (query: string) => {
        const suggestions = await fetchReposAndUsersByQuery(query);
        setSuggestions(suggestions);
      },
      500,
      { trailing: false }
    ),
    []
  );

  const onSearchInputChange = (value: string) => {
    setUserInput(value);
    updateSuggestions(value);
  };

  const onSearchInputFocusChange = (state: boolean) => {
    setIsInputFocused(state);
  };

  return (
    <S.Wrapper className={className}>
      <S.SearchInput
        value={userInput}
        onChange={onSearchInputChange}
        onFocusChange={onSearchInputFocusChange}
      />
      <S.SearchSuggestions suggestions={suggestions} isLoading={false} />
    </S.Wrapper>
  );
};

export default SearchBar;
