import { Field, Form, Formik } from "formik";
import { Button } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "@store/authSlice";
import authService from "../../services/authService";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useSelector((state: any) => state.auth);

  return (
    <>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={async (values) => {
          try {
            authService.login(values.username).then((res) => {
              //dispatch(setCredentials({ user, accessToken }));
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: "20px",
          }}
        >
          <Field
            style={{
              height: "25px",
              width: "350px",
              border: "3px solid",
              borderRadius: "10px",
              padding: "10px",
            }}
            name="username"
            placeholder="username"
            type="text"
          />
          <Button
            style={{ height: "35px", width: "150px" }}
            type="submit"
            variant="solid"
            color="info"
            size="lg"
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
