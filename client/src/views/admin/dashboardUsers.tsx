import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userService from "../../services/userService";

const DashboardUsers = () => {
  const auth = useSelector((state: any) => state.auth);
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const getUsersData = async () => {
      const usersData = (await userService.getAllUsers(auth.token)).data;
      setUsers(usersData);
    };
    getUsersData();
  }, []);

  console.log(users[0]);

  return (
    <>
      {users.map((user: any) => (
        <Box>{user.username}</Box>
      ))}
    </>
  );
};
export default DashboardUsers;
