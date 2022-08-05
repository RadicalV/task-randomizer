import List from "@views/listDraw";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "../views";
import Dashboard from "../views/admin/dashboard";
import Login from "../views/login/login";
import DashboardUsers from "../views/admin/dashboardUsers";
import DashboardTeams from "../views/admin/dashboardTeams";
import DashboardTasks from "../views/admin/dashboardTasks";

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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<DashboardUsers />} />
            <Route path="teams" element={<DashboardTeams />} />
            <Route path="tasks" element={<DashboardTasks />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default Router;
