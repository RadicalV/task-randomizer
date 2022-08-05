import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const List = () => {
  const { type } = useParams();
  return (
    <Box>
      <h1 style={{ color: "#000", margin: 0 }}>{type}</h1>
    </Box>
  );
};

export default List;
