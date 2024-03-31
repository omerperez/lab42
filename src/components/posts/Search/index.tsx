import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {
  FlexContainer,
  SearchButton,
  SearchIconWrapper,
  SearchInputBase,
  SearchInputWrapper,
} from "./styles";

interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [search, setSearch] = useState<string>("");

  return (
    <FlexContainer>
      <SearchInputWrapper>
        <SearchIconWrapper>
          <SearchIcon fontSize="small" />
        </SearchIconWrapper>
        <SearchInputBase
          fullWidth
          placeholder="Search…"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </SearchInputWrapper>
      <SearchButton variant="contained" onClick={() => onSearch(search)}>
        Search
      </SearchButton>
      <SearchButton
        color="error"
        variant="contained"
        onClick={() => onSearch("")}
      >
        Clear
      </SearchButton>
    </FlexContainer>
  );
};
