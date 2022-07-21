import { Button } from "@mui/joy";
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
        size="lg"
        variant="solid"
        color="danger"
        onClick={() => {
          navigate("/list/bad");
        }}
      >
        Punishment Draw List
      </Button>
      <Button
        size="lg"
        variant="solid"
        color="success"
        onClick={() => {
          navigate("/list/good");
        }}
      >
        Lottery Draw List
      </Button>
      <Button
        size="lg"
        variant="solid"
        color="warning"
        onClick={() => {
          navigate("/login");
        }}
      >
        Lottery Draw List
      </Button>
    </Box>
  );
};

export default MainPage;
