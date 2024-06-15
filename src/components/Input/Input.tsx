import * as S from './Input.styled';

export interface InputProps {
  className?: string;
};

const Input: React.FunctionComponent<InputProps> = ({ className }) => {
  return <S.Wrapper className={className}>Input</S.Wrapper>;
}

export default Input;
