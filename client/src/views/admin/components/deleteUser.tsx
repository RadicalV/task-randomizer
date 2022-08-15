import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import userService from "../../../services/userService";

const DeleteUser = NiceModal.create(
  ({ _id, username }: { _id: string; username: string }) => {
    const modal = useModal();
    return (
      <Dialog
        open={modal.visible}
        onClose={() => modal.hide()}
        TransitionProps={{
          onExited: () => modal.remove(),
        }}
      >
        <DialogTitle>
          <Typography variant="h5" component="div">
            Do you want to delete user {username}?
          </Typography>
        </DialogTitle>
        <DialogActions
          sx={{ justifyContent: "center", display: "flex", pb: "15px" }}
        >
          <Button
            onClick={async () => {
              modal.resolve(await userService.deleteUser(_id));
              modal.hide();
            }}
            size="medium"
            sx={{ fontWeight: 600, color: "#38b64d" }}
          >
            Yes
          </Button>
          <Button
            onClick={() => modal.hide()}
            size="medium"
            sx={{ fontWeight: 600, color: "#f75b5b" }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default DeleteUser;
