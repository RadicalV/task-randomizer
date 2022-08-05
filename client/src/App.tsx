import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
