import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import * as S from './SearchBar.styled';

import { SuggestionType } from 'types/suggestions';
import { useGithubSearch } from 'hooks';

import { MIN_NUM_CHARS_TO_QUERY_GH, GB_SEARCH_DEBOUNCE_TIMEOUT } from 'config';
import copies from 'copies';

export interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ className }) => {
  const [userInput, setUserInput] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const {
    fetchReposAndUsersByQuery,
    error: searchError,
    isLoading: isSearchLoading
  } = useGithubSearch();

  const updateSuggestions = useCallback(
    debounce(async (query: string) => {
      if (query.length >= MIN_NUM_CHARS_TO_QUERY_GH) {
        setShowSuggestions(true);
        const suggestions = await fetchReposAndUsersByQuery(query);
        setSuggestions(suggestions);
      } else {
        setShowSuggestions(false);
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

  const handleSelectSuggestion = (index: number) => {
    window.open(suggestions[index].url, '_blank');
  };

  return (
    <S.Wrapper className={className}>
      <S.SearchInput
        value={userInput}
        placeholder={copies.search['searchbox.label']}
        onChange={onSearchInputChange}
        onFocusChange={onSearchInputFocusChange}
      />
      <S.SearchSuggestions
        suggestions={suggestions}
        isLoading={isSearchLoading}
        activeIndex={activeSuggestion}
        onChangeActive={setActiveSuggestion}
        onSelect={handleSelectSuggestion}
        showSuggestions={showSuggestions && isInputFocused}
      />
    </S.Wrapper>
  );
};

export default SearchBar;
