import * as S from './Input.styled';

export interface InputProps {
  className?: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onFocusChange: (state: boolean) => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  className,
  value,
  placeholder,
  onChange,
  onFocusChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleFocusChange = (state: boolean) => () => {
    onFocusChange(state);
  };

  return (
    <S.Input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={handleFocusChange(true)}
      onBlur={handleFocusChange(false)}
      className={className}
    />
  );
};

export default Input;
