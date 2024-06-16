import { styled, css } from 'styled-components';

export const Wrapper = styled.div<{ $isVisible: boolean }>`
  height: 30vh;
  overflow-y: auto;

  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      display: none;
    `}
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

export const Message = styled.div``;
