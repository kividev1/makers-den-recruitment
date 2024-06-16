import { useKeyboardSelect, useUpDownArrowNav } from 'hooks';
import { SuggestionType } from 'types/suggestions';
import * as S from './Suggestions.styled';

export interface SuggestionsProps {
  className?: string;
  suggestions: SuggestionType[];
  isLoading: boolean;
  activeIndex: number;
  onChangeActive: (index: number) => void;
  onSelect: (index: number) => void;
}

const Suggestions: React.FunctionComponent<SuggestionsProps> = ({
  className,
  suggestions,
  activeIndex,
  onChangeActive,
  onSelect
}) => {
  useUpDownArrowNav(activeIndex, onChangeActive, suggestions);
  useKeyboardSelect(activeIndex, onSelect);

  return (
    <S.Wrapper className={className}>
      <S.SuggestionsList>
        {suggestions.map((suggestion, idx) => (
          <S.Suggestion
            $isActive={activeIndex === idx}
            onMouseEnter={() => onChangeActive(idx)}
            onClick={() => onSelect(idx)}
            key={suggestion.name}
          >
            <S.SuggestionValue>{suggestion.name}</S.SuggestionValue>
            <S.SuggestionType>{suggestion.type}</S.SuggestionType>
          </S.Suggestion>
        ))}
      </S.SuggestionsList>
    </S.Wrapper>
  );
};

export default Suggestions;
