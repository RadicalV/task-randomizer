import { Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCredentials } from "@store/authSlice";
import authService from "../../services/authService";
import { Box } from "@mui/system";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  return (
    <>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={async () => {
          try {
            authService.login(username).then((res) => {
              dispatch(
                setCredentials({
                  user: username,
                  accessToken: res.data.token,
                })
              );
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              gap: "20px",
            }}
          >
            <TextField
              name="username"
              placeholder="username"
              type="text"
              variant="outlined"
              hiddenLabel
              color="secondary"
              focused
              autoComplete="off"
              sx={{ width: "250px" }}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Button
              sx={{ width: "150px", fontWeight: "bold" }}
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
