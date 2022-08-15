import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import taskService from "../../../services/taskService";

const AddTask = NiceModal.create(() => {
  const modal = useModal();

  const handleClose = () => {
    modal.hide();
  };

  return (
    <>
      <Dialog open={modal.visible} onClose={handleClose}>
        <Formik
          initialValues={{ description: "", type: "" }}
          onSubmit={async (values) => {
            try {
              modal.resolve(
                await taskService.addTask({
                  description: values.description,
                  type: values.type,
                })
              );
              handleClose();
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ handleChange, values, ...rest }) => (
            <Form>
              <DialogTitle sx={{ justifyContent: "center", display: "flex" }}>
                <Typography variant="h5" component="div">
                  Create a new task
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
                    label="Description"
                    name="description"
                    placeholder={"Enter Description"}
                    type="text"
                    variant="outlined"
                    focused
                    autoComplete="off"
                    value={values.description}
                    onChange={handleChange}
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
                  />
                  <TextField
                    name="type"
                    value={values.type}
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
                    select
                    label="Task Type"
                    onChange={(e) => {
                      values.type = e.target.value;
                    }}
                  >
                    <MenuItem value={"Punishment"}>Punishment</MenuItem>
                    <MenuItem value={"Lottery"}>Lottery</MenuItem>
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
          )}
        </Formik>
      </Dialog>
    </>
  );
});
export default AddTask;
