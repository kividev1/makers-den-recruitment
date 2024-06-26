import { useState } from 'react';
import { useKeyboardSelect, useUpDownArrowNav } from 'hooks';
import { SuggestionType } from 'types/suggestions';
import * as S from './Suggestions.styled';
import copies from 'copies';

export interface SuggestionsProps {
  className?: string;
  suggestions: SuggestionType[];
  isLoading: boolean;
  showSuggestions: boolean;
  activeIndex: number;
  onChangeActive: (index: number) => void;
  onSelect: (index: number) => void;
}

const Suggestions: React.FunctionComponent<SuggestionsProps> = ({
  className,
  suggestions,
  activeIndex,
  onChangeActive,
  onSelect,
  showSuggestions,
  isLoading
}) => {
  const [isSelectable, setSelectable] = useState(true);

  const handleKeyboardSelection = (index: number) => {
    setSelectable(false);
    onChangeActive(index);
    document
      .getElementById(suggestions[index]?.name)
      ?.scrollIntoView({ block: 'center' });
  };

  useUpDownArrowNav(activeIndex, handleKeyboardSelection, suggestions);
  useKeyboardSelect(activeIndex, onSelect);

  const handleMouseSelection = (index: number) => () => {
    if (isSelectable) onChangeActive(index);
  };

  return (
    <S.Wrapper
      className={className}
      $isVisible={showSuggestions}
      onMouseMove={() => {
        setSelectable(true);
      }}
    >
      {!isLoading && (
        <S.SuggestionsList
          id="suggestions"
          role="listbox"
          data-testid="suggestions"
        >
          {suggestions.length ? (
            suggestions.map((suggestion, idx) => (
              <S.Suggestion
                $isActive={activeIndex === idx}
                aria-selected={activeIndex === idx}
                onMouseEnter={handleMouseSelection(idx)}
                onMouseDown={() => onSelect(idx)}
                key={suggestion.name}
                id={suggestion.name}
                role="option"
                tabIndex={idx}
                data-testid={suggestion.name}
              >
                <S.SuggestionValue>{suggestion.name}</S.SuggestionValue>
                <S.SuggestionType>{suggestion.type}</S.SuggestionType>
              </S.Suggestion>
            ))
          ) : (
            <S.Message role="option" aria-disabled="true">
              {copies.search['searchbox.noResults']}
            </S.Message>
          )}
        </S.SuggestionsList>
      )}
      {isLoading && <S.Spinner />}
    </S.Wrapper>
  );
};

export default Suggestions;
