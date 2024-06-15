import * as S from './SearchBar.styled';

export interface SearchBarProps {
	className?: string;
};

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ className }) => {
	return <S.Wrapper className={className}>Search bar</S.Wrapper>;
}

export default SearchBar;
