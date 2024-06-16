import { SuggestionType } from 'types/suggestions';
import * as S from './Suggestions.styled';

export interface SuggestionsProps {
  className?: string;
  suggestions: SuggestionType[];
  isLoading: boolean;
}

const Suggestions: React.FunctionComponent<SuggestionsProps> = ({
  className,
  suggestions
}) => {
  return (
    <S.Wrapper className={className}>
      <S.SuggestionsList>
        {suggestions.map((suggestion) => (
          <S.Suggestion key={suggestion.name}>
            <S.SuggestionValue>{suggestion.name}</S.SuggestionValue>
            <S.SuggestionType>{suggestion.type}</S.SuggestionType>
          </S.Suggestion>
        ))}
      </S.SuggestionsList>
    </S.Wrapper>
  );
};

export default Suggestions;
