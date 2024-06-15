import React, { useState } from "react";

import * as S from "./SearchBar.styled";

export interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ className }) => {
  const [userInput, setUserInput] = useState("");

  const onSearchInputChange = (value: string) => {
    setUserInput(value);
  };

  const onSearchInputFocusChange = (state: boolean) => {
    console.log(state);
  };

  return (
    <S.Wrapper className={className}>
      <S.SearchInput
        value={userInput}
        onChange={onSearchInputChange}
        onFocusChange={onSearchInputFocusChange}
      />
    </S.Wrapper>
  );
};

export default SearchBar;
