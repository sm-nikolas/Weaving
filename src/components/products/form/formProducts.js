import { Button, Heading, Stack, useToast } from "@chakra-ui/react";
import { Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../../services/api";
import "./style.css";

export default function FormProducts() {
  const [data, setData] = useState();
  const toast = useToast();

  const handleChangeValues = (value) => {
    setData((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const showButton = (boolean) => {
    boolean = false;
    return boolean;
  };

  async function handleAdd(e) {
    try {
      e.preventDefault();
      await api.post("/produto", data);
      setData({});
      showButton(true);
      toast({
        title: "Produto cadastrado com sucesso!",
        description: "",
        status: "success",
        duration: 9000,
        position: "top-right",
        isClosable: true,
        returnToast: true,
      });
    } catch (err) {
      if (!data) {
        toast({
          title: "Preencha todos os campos!",
          description: "",
          status: "error",
          duration: 9000,
          position: "top-right",
          isClosable: true,
          returnToast: true,
        });
      } else {
        for (let i = 0; i < err.response.data.length; i++) {
          toast({
            title: err.response.data[i].userMessage,
            description: "",
            status: "error",
            duration: 9000,
            position: "top-right",
            isClosable: true,
            returnToast: true,
          });
        }
      }
    }
  }

  return (
    <div className="container">
      <Stack spacing={6} className="title">
        <Heading as="h3" size="lg">
          Inclusão de Produtos
        </Heading>
      </Stack>
      <div className="form">
        <Grid container className="onForm" spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="description"
              name="descricao"
              label="Descrição"
              onChange={handleChangeValues}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ paddingTop: 30 }}>
            <TextField
              id="sku"
              name="sku"
              onChange={handleChangeValues}
              label="SKU"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <label style={{ color: "gray" }}>Data Referêncial</label>

            <input
              type="date"
              id="referencialDate"
              name="dataReferencia"
              label="Data Referêncial"
              onChange={handleChangeValues}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="referencialValue"
              name="valorCusto"
              label="Valor Referêncial"
              type="number"
              onChange={handleChangeValues}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item className="include" xs={12}>
          <Button
            className="includeButton"
            colorScheme="teal"
            onClick={handleAdd}
          >
            Incluir
          </Button>
          <Button
            className="includeButton"
            style={{ marginLeft: "10px", backgroundColor: "gray" }}
            onClick={() => (window.location.href = "/products")}
          >
            Voltar
          </Button>
        </Grid>
      </div>
    </div>
  );
}
