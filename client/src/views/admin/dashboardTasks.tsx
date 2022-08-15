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
import { Add, DeleteForever, Edit } from "@mui/icons-material";
import NiceModal from "@ebay/nice-modal-react";
import { useEffect, useState } from "react";
import taskService from "../../services/taskService";
import EditTask from "./components/editTask";
import DeleteTask from "./components/deleteTask";
import AddTask from "./components/addTask";
import TablePaginationActions from "../../components/tablePaginationActions";

const DashboardTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(0);

  const rowsPerPage = 9;

  const fetchTasks = async () => {
    const tasksData = (await taskService.getAllTasks()).data;
    setTasks(tasksData);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleDelete = (_id: string) => {
    NiceModal.show(DeleteTask, { _id }).then(() => {
      fetchTasks();
    });
  };

  const handleEdit = (data: {
    _id: string;
    description: string;
    type: string;
    done: boolean;
    teams: [];
  }) => {
    NiceModal.show(EditTask, data).then(() => {
      fetchTasks();
    });
  };

  const handleAdd = () => {
    NiceModal.show(AddTask).then(() => {
      fetchTasks();
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <IconButton
        onClick={() => {
          handleAdd();
        }}
        sx={{
          mr: "10px",
          fontSize: 16,
          borderRadius: "10px",
          background: "#aa80ff",
          "&:hover": {
            background: "#906ed3",
          },
          mb: "15px",
          color: "white",
        }}
      >
        <Add sx={{ color: "#8936b3" }} />
        Add Task
      </IconButton>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: 18, width: "200px" }}>
                Task Description
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, fontSize: 18, width: " 160px" }}
              >
                Task Type
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, fontSize: 18, width: " 160px" }}
              >
                Task Status
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>
                Teams
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? tasks.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tasks
            ).map((task: any) => (
              <TableRow
                key={task._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {task.description}
                </TableCell>
                <TableCell>{task.type}</TableCell>
                <TableCell>
                  {task.done === true ? "Done" : "Not Done"}
                </TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      handleEdit(task);
                    }}
                    sx={{ mr: "10px" }}
                  >
                    <Edit sx={{ color: "#aa80ff" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDelete(task._id);
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
                count={tasks.length}
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
export default DashboardTasks;
