import TableProducts from "./table/tableProducts";
import { Button, Heading, Stack } from "@chakra-ui/react";
import "./style.css";

export default function Products() {
  return (
    <div className="container">
      <Stack spacing={6} className="title">
        <Heading as="h3" size="lg">
          Manutenção de Produtos
        </Heading>
        <div className="include">
          <a href="/newProduct">
            <Button className="includeButton" colorScheme="teal">
              Incluir
            </Button>
          </a>
        </div>
      </Stack>
      <div className="table">
        <TableProducts />
      </div>
    </div>
  );
}
