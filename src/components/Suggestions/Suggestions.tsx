import * as S from "./Suggestions.styled";

export interface SuggestionsProps {
  className?: string;
}

const Suggestions: React.FunctionComponent<SuggestionsProps> = ({
  className,
}) => {
  return <S.Wrapper className={className}>Suggestions</S.Wrapper>;
};

export default Suggestions;
