import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Add, DeleteForever } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import taskService from "../../../services/taskService";
import teamService from "../../../services/teamService";

interface TeamSelection {
  _id: string;
  name: string;
}

interface Props {
  _id: string;
  description: string;
  type: string;
  done: boolean;
  teams: string[];
}

const EditTask = NiceModal.create(
  ({ _id, description, type, done, teams }: Props) => {
    const modal = useModal();
    const [loading, setLoading] = useState(false);
    const [allTeams, setAllTeams] = useState<TeamSelection[]>([]);

    const fetchTeams = async () => {
      const teamsData = (await teamService.getAllTeams()).data;
      setAllTeams(teamsData);
    };

    useEffect(() => {
      (async () => {
        setLoading(true);
        await fetchTeams();
        setLoading(false);
      })();
    }, []);

    const handleClose = () => {
      modal.remove();
    };

    return (
      <>
        <Dialog open={modal.visible} onClose={handleClose}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Formik
              initialValues={{ description, type, done, teams }}
              onSubmit={async (values) => {
                try {
                  console.log(values);
                  // modal.resolve(
                  //   await taskService.editTask(_id, {
                  //     description: values.description,
                  //     type: values.type,
                  //     done: values.done,
                  //     teams: values.teams,
                  //   })
                  // );
                  // handleClose();
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              {({ values, handleChange, setFieldValue }) => (
                <Form>
                  <DialogTitle
                    sx={{ justifyContent: "center", display: "flex" }}
                  >
                    <Typography variant="h5" component="div">
                      Edit Task Info
                    </Typography>
                  </DialogTitle>
                  <DialogContent sx={{ pt: 2, minWidth: "500px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "start",
                          flexDirection: "column",
                          gap: "20px",
                          mt: "20px",
                        }}
                      >
                        <TextField
                          label="Description"
                          name="description"
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
                          onChange={handleChange}
                          value={values.description}
                        ></TextField>
                        <TextField
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
                          name="type"
                          value={values.type}
                          onChange={handleChange}
                          select
                          label="Task Type"
                        >
                          <MenuItem value={"Punishment"}>Punishment</MenuItem>
                          <MenuItem value={"Lottery"}>Lottery</MenuItem>
                        </TextField>
                        <TextField
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
                          name="done"
                          label="Task status"
                          onChange={(e) => {
                            setFieldValue(
                              "done",
                              e.target.value === "Done" ? true : false
                            );
                          }}
                          value={values.done ? "Done" : "Not Done"}
                        >
                          <MenuItem value={"Done"}>Done</MenuItem>
                          <MenuItem value={"Not Done"}>Not Done</MenuItem>
                        </TextField>
                        <Typography variant="h6" component="div">
                          Completed by teams
                        </Typography>
                        <FieldArray name="teams">
                          {({ push, remove }) => (
                            <>
                              {values.teams.map((_, index) => (
                                <Box
                                  key={index}
                                  sx={{ display: "flex", flexDirection: "row" }}
                                >
                                  <TextField
                                    select
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
                                    name={`teams.${index}`}
                                    id={values.teams[index]}
                                    value={values.teams[index]}
                                    onChange={handleChange}
                                  >
                                    {allTeams.map((val, index) => (
                                      <MenuItem key={index} value={val._id}>
                                        {val.name}
                                      </MenuItem>
                                    ))}
                                  </TextField>
                                  <IconButton
                                    onClick={() => {
                                      remove(index);
                                    }}
                                  >
                                    <DeleteForever sx={{ color: "#f75b5b" }} />
                                  </IconButton>
                                </Box>
                              ))}
                              {values.teams.length < allTeams.length && (
                                <IconButton
                                  onClick={(event) => {
                                    event.preventDefault();
                                    push("");
                                  }}
                                >
                                  <Add
                                    sx={{
                                      borderRadius: "50%",
                                      background: "#aa80ff",
                                      "&:hover": {
                                        background: "#906ed3",
                                      },

                                      color: "white",
                                    }}
                                  />
                                </IconButton>
                              )}
                            </>
                          )}
                        </FieldArray>
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
                    </Box>
                  </DialogContent>
                </Form>
              )}
            </Formik>
          )}
        </Dialog>
      </>
    );
  }
);
export default EditTask;
