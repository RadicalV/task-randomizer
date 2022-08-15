import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";
import NiceModal from "@ebay/nice-modal-react";
import { useEffect, useState } from "react";
import userService from "../../services/userService";
import EditUser from "./components/editUser";
import DeleteUser from "./components/deleteUser";
import TablePaginationActions from "../../components/tablePaginationActions";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);

  const rowsPerPage = 9;

  const fetchUsers = async () => {
    const usersData = (await userService.getAllUsers()).data;
    setUsers(usersData);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleDelete = (data: { _id: string; username: string }) => {
    NiceModal.show(DeleteUser, data).then(() => {
      fetchUsers();
    });
  };

  const handleEdit = (data: {
    _id: string;
    username: string;
    role: string;
  }) => {
    NiceModal.show(EditUser, data).then(() => {
      fetchUsers();
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: 18, width: "180px" }}>
                User name
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>
                User role
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? users.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : users
            ).map((user: any) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      handleEdit(user);
                    }}
                    sx={{ mr: "10px" }}
                  >
                    <Edit sx={{ color: "#aa80ff" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDelete(user);
                    }}
                    sx={{ mr: "30px" }}
                  >
                    <DeleteForever sx={{ color: "#f75b5b" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={4}
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                rowsPerPageOptions={[]}
                onPageChange={handleChangePage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
export default DashboardUsers;
