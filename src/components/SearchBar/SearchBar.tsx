import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import * as S from './SearchBar.styled';

import { SuggestionType } from 'types/suggestions';
import { useGithubSearch } from 'hooks';

import { MIN_NUM_CHARS_TO_QUERY_GH, GB_SEARCH_DEBOUNCE_TIMEOUT } from 'config';

export interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ className }) => {
  const [userInput, setUserInput] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const {
    fetchReposAndUsersByQuery,
    error: searchError,
    isLoading: isSearchLoading
  } = useGithubSearch();

  const updateSuggestions = useCallback(
    debounce(async (query: string) => {
      if (query.length >= MIN_NUM_CHARS_TO_QUERY_GH) {
        const suggestions = await fetchReposAndUsersByQuery(query);
        setSuggestions(suggestions);
      }
    }, GB_SEARCH_DEBOUNCE_TIMEOUT),
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
      <S.SearchSuggestions
        suggestions={suggestions}
        isLoading={isSearchLoading}
        activeIndex={activeSuggestion}
        onChangeActive={setActiveSuggestion}
      />
    </S.Wrapper>
  );
};

export default SearchBar;
