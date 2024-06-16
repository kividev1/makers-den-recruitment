import { styled } from 'styled-components';

import SearchBarComponent from 'components/SearchBar';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const SearchBar = styled(SearchBarComponent)`
  margin-top: 35vh;
`;
