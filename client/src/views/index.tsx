import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

const MainPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "50px",
      }}
    >
      <Button
        sx={{ fontWeight: "bold" }}
        variant="contained"
        color="error"
        size="large"
        onClick={() => {
          navigate("/list/bad");
        }}
      >
        Punishment Draw List
      </Button>
      <Button
        sx={{ fontWeight: "bold" }}
        variant="contained"
        color="success"
        size="large"
        onClick={() => {
          navigate("/list/good");
        }}
      >
        Lottery Draw List
      </Button>
      {user.role === "Administrator" && (
        <Button
          sx={{ fontWeight: "bold" }}
          variant="contained"
          color="success"
          size="large"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          DASHBOARD
        </Button>
      )}
    </Box>
  );
};

export default MainPage;
