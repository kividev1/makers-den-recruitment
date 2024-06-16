import { styled } from 'styled-components';
import Input from 'components/Input';
import Suggestions from 'components/Suggestions';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
`;

export const SearchInput = styled(Input)`
  width: 100%;
`;

export const SearchSuggestions = styled(Suggestions)`
  width: 100%;
`;
