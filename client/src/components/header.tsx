import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <ShuffleIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, ml: 2 }}
            />
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                fontFamily: "Arial",
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TaskRandomizer
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {user.role === "Administrator" && (
              <Button
                sx={{ fontWeight: "bold", mr: 5, fontFamily: "Arial" }}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                DASHBOARD
              </Button>
            )}
            {user.username !== null && (
              <>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    fontFamily: "Arial",
                    color: "inherit",
                    textDecoration: "none",
                    mr: 1,
                  }}
                >
                  {user.username}
                </Typography>
                <AccountCircle sx={{ mr: 2 }} />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default Header;
