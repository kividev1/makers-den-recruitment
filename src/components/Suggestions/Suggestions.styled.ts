import { styled, css } from 'styled-components';

export const Wrapper = styled.div`
  height: 30vh;
  overflow-y: auto;
`;

export const SuggestionsList = styled.ul``;

export const Suggestion = styled.li<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: blue;
      color: white;
    `}
`;

export const SuggestionValue = styled.span``;

export const SuggestionType = styled.span``;
