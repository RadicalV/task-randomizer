import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import userService from "../../../services/userService";

const EditUser = NiceModal.create(
  ({
    _id,
    username,
    role,
  }: {
    _id: string;
    username: string;
    role: string;
  }) => {
    const modal = useModal();

    const handleClose = () => {
      modal.hide();
    };

    return (
      <>
        <Dialog open={modal.visible} onClose={handleClose}>
          <Formik
            initialValues={{ username, role }}
            onSubmit={async () => {
              try {
                modal.resolve(
                  await userService.editUser(_id, { username, role })
                );
                handleClose();
              } catch (error) {
                console.error(error);
              }
            }}
          >
            <Form>
              <DialogTitle sx={{ justifyContent: "center", display: "flex" }}>
                <Typography variant="h5" component="div">
                  Edit User Info
                </Typography>
              </DialogTitle>
              <DialogContent sx={{ pt: 2, minWidth: "500px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    mt: "20px",
                  }}
                >
                  <TextField
                    label="Username"
                    name="username"
                    defaultValue={username}
                    type="text"
                    variant="outlined"
                    focused
                    autoComplete="off"
                    sx={{
                      width: "250px",
                      "& label.Mui-focused": {
                        color: "#8936b3",
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#8936b3",
                        },
                      },
                    }}
                    onChange={(e) => {
                      username = e.target.value;
                    }}
                  />
                  <TextField
                    defaultValue={role}
                    sx={{
                      width: "250px",
                      "& label.Mui-focused": {
                        color: "#8936b3",
                      },
                      "& label": {
                        color: "#8936b3",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#8936b3",
                          borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                          borderColor: "#8936b3",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#8936b3",
                        },
                      },
                    }}
                    onChange={(e) => {
                      role = e.target.value;
                    }}
                    select
                    label="User role"
                  >
                    <MenuItem value={"User"}>User</MenuItem>
                    <MenuItem value={"Administrator"}>Administrator</MenuItem>
                  </TextField>
                  <Button
                    sx={{
                      width: "150px",
                      fontWeight: "bold",
                      backgroundColor: "#ff4dff",
                      "&:hover": {
                        backgroundColor: "#cc00cc",
                      },
                    }}
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </DialogContent>
            </Form>
          </Formik>
        </Dialog>
      </>
    );
  }
);
export default EditUser;
