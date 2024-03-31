import { Avatar } from "@mui/material";
import { useId } from "react";
import { TagChip, TagsContainer } from "./styles";

interface TagsProps {
  tags: string[];
}

export const Tags = ({ tags }: TagsProps) => {
  const id = useId();

  return (
    <TagsContainer>
      {tags.map((tag) => (
        <TagChip
          key={`${id}-${tag}`}
          size="small"
          avatar={<Avatar>#</Avatar>}
          label={tag}
        />
      ))}
    </TagsContainer>
  );
};
