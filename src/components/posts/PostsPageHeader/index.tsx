import { Header, PageTitle } from "@/components/common";
import { PAGES_TITLES } from "@/constants";
import { SelectedPostsText } from "./SelectedPostsText";
import { FlexContainer } from "./styles";

export const PostsPageHeader = () => (
  <Header>
    <FlexContainer>
      <PageTitle>{PAGES_TITLES.HOME}</PageTitle>
      <SelectedPostsText />
    </FlexContainer>
  </Header>
);
