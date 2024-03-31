import { useDialog } from "@/hooks";
import { Dialog } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { PostDetailsDialog } from "./PostDetailsDialog";
import { ViewMoreButton } from "./styles";

interface ViewMoreProps {
  postId: number;
  userId: number;
}

export const ViewMore = ({ postId, userId }: ViewMoreProps) => {
  const { open, onOpen, onClose } = useDialog();

  return (
    <Fragment>
      <ViewMoreButton onClick={onOpen}>View More</ViewMoreButton>
      <Dialog onClose={onClose} open={open} fullWidth maxWidth="md">
        <PostDetailsDialog onClose={onClose} postId={postId} userId={userId} />
      </Dialog>
    </Fragment>
  );
};
