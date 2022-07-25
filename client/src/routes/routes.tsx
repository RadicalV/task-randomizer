import List from "@views/listDraw";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "../views";
import Dashboard from "../views/admin/dashboard";
import Login from "../views/login/login";

const Router = () => {
  const auth = useSelector((state: any) => state.auth);
  return (
    <Routes>
      {!auth.token ? (
        <Route path="/" element={<Login />} />
      ) : (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="/list/:type" element={<List />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
