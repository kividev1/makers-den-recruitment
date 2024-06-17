import * as S from './Spinner.styled';

export interface SpinnerProps {
  className?: string;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ className }) => {
  return <S.Spinner role="status" className={className} />;
};

export default Spinner;
