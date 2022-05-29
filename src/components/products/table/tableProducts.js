import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "./style.css";
import api from "../../../services/api";
import { useToast } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const columns = [
  { id: "name", label: "ID" },
  { id: "code", label: "SKU" },
  {
    id: "population",
    label: "Descrição",
  },
  {
    id: "size",
    label: "Valor Custo",
  },
  {
    id: "buttonDelete",
    label: "",
  },
];

export default function TableProducts() {
  const [data, setData] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const toast = useToast();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/produto");
      setData(response.data);
    }
    loadProducts();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`/produto/${id}`);
      setData(data.filter((product) => product.id !== id));
      toast({
        title: "Produto deletado com sucesso!",
        description: "",
        status: "success",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Erro ao deletar produto!",
        description: "",
        status: "error",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper className="table">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={product.id}
                    >
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.sku}</TableCell>
                      <TableCell>{product.descricao}</TableCell>
                      <TableCell>R$ {product.valorCusto}</TableCell>

                      <TableCell>
                        <DeleteIcon
                          w={4}
                          h={5}
                          color="red.500"
                          onClick={() => handleDelete(product.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component="div"
          count={5}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="tableHeader"
          style={{ color: "white" }}
        />
      </Paper>
    </div>
  );
}
