import { styled } from 'styled-components';

import SearchBarComponent from 'components/SearchBar';
import LogoComponent from 'components/Logo';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  padding-top: 30vh;
  width: 100%;
  height: 100vh;
`;

export const SearchBar = styled(SearchBarComponent)``;

export const Logo = styled(LogoComponent)`
  width: 20vw;
  margin-bottom: 5vh;
`;
