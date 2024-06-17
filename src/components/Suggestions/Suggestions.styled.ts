import { styled, css } from 'styled-components';

import SpinnerComponent from 'components/Spinner';

export const Wrapper = styled.div<{ $isVisible: boolean }>`
  display: flex;
  justify-content: center;

  max-height: 30vh;
  overflow-y: auto;
  padding: 1vw;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: none;

  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      display: none;
    `};
`;

export const SuggestionsList = styled.ul``;

export const Suggestion = styled.li<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0.5vw 0;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      background-color: ${theme.colors.primary};
      color: white;
    `}
`;

export const SuggestionValue = styled.span``;

export const SuggestionType = styled.span`
  opacity: 0.6;
`;

export const Message = styled.li`
  width: 100%;
`;

export const Spinner = styled(SpinnerComponent)``;
