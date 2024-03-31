import { Header, PageTitle } from "@/components/common";
import { PAGES_TITLES } from "@/constants";
import { RemoveAllFavoriteButton } from "./RemoveAllFavoriteButton";
import { HeaderContainer } from "./styles";

export const FavoritePageHeader = () => (
  <Header>
    <HeaderContainer>
      <PageTitle>{PAGES_TITLES.FAVORITE}</PageTitle>
      <RemoveAllFavoriteButton />
    </HeaderContainer>
  </Header>
);
