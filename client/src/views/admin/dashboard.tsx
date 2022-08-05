import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardDrawer from "../../components/dashboardDrawer";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
