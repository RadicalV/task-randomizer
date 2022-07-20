import List from "@views/listDraw";
import { Route, Routes } from "react-router-dom";
import MainPage from "../views";
import Login from "../views/login/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list/:type" element={<List />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
