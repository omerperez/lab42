import { Box } from "@mui/material";
import { LoadCommentsButton } from "./styles";

interface ShowMoreCommentsButtonProps {
  fetchNextComments: () => void;
  disabled: boolean;
}

export const ShowMoreCommentsButton = ({
  disabled,
  fetchNextComments,
}: ShowMoreCommentsButtonProps) => (
  <Box textAlign="end">
    <LoadCommentsButton
      disabled={disabled}
      color="info"
      onClick={() => fetchNextComments()}
    >
      Show More Comments
    </LoadCommentsButton>
  </Box>
);
