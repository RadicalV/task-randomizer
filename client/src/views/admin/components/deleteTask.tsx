import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import taskService from "../../../services/taskService";

const DeleteTask = NiceModal.create(({ _id }: { _id: string }) => {
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
          Do you want to delete this task?
        </Typography>
      </DialogTitle>
      <DialogActions
        sx={{ justifyContent: "center", display: "flex", pb: "15px" }}
      >
        <Button
          onClick={async () => {
            modal.resolve(await taskService.deleteTask(_id));
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
});

export default DeleteTask;
