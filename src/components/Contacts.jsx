import Table from "@mui/material/Table";
import { useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TablePagination } from "@mui/material";

function Contacts(props) {
  const imgStyle = {
    height: "80px",
  };

  const { list } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <h1>IronContacts</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Picture</strong>
            </TableCell>

            <TableCell>
              <strong>Name</strong>
            </TableCell>

            <TableCell>
              <strong>Popularity</strong>
            </TableCell>

            <TableCell>
              <strong>Won Oscar</strong>
            </TableCell>

            <TableCell>
              <strong>Won Emmy</strong>
            </TableCell>
            <TableCell>
              <strong>Delete</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((element, index) => {
              return (
                <TableRow>
                  <TableCell>
                    <img src={element.pictureUrl} alt="img" style={imgStyle} />
                  </TableCell>
                  <TableCell>{element.name}</TableCell>
                  <TableCell>{element.popularity}</TableCell>
                  <TableCell>{element.wonOscar ? "🏆" : ""}</TableCell>
                  <TableCell>{element.wonEmmy ? "🏆" : ""}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={(event) => {
                        props.deleteCB(list, index);
                      }}
                    >
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default Contacts;
