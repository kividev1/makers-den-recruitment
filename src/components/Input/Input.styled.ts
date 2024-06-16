import { styled, css } from 'styled-components';

export const Input = styled.input`
  padding: 1vw;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};

    &:focus,
    &:hover {
      border: 1px solid ${theme.colors.secondary};
      border-radius: 0;
    }
  `}
`;
