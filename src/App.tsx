import { Button } from "@mui/joy";
import { Box } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
