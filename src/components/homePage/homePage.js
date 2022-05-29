import "./style.css";
import { Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <>
      <div className="homePage">
        <div className="info">
          <Heading as="h4" size="md" style={{ textAlign: "center" }}>
            Bem vido à página inicial!
          </Heading>
          <Text
            style={{
              paddingTop: 15,
              textAlign: "center",
            }}
          >
            Clique no botão abaixo para acessar todos produtos cadastrados.
          </Text>
          <div className="products">
            <a href="/products">
              <Button colorScheme="whiteAlpha">Produtos</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
