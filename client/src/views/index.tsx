import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
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
    </Box>
  );
};

export default MainPage;
