import React from "react";
import Footer from "./components/footer/footer";
import HomePage from "./components/homePage/homePage";
import "./components/navBar/style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./components/products/products";
import FormProducts from "./components/products/form/formProducts";
import "./App.css";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="cont">
      <BrowserRouter>
        <div className={"root"}>
          <AppBar position="static" style={{ backgroundColor: "teal" }}>
            <Toolbar>
              <IconButton
                edge="start"
                className={"menuButton"}
                color="inherit"
                aria-label="menu"
                ref={btnRef}
                onClick={onOpen}
              >
                <MenuIcon />
              </IconButton>

              <Link to="/" exact style={{ display: "flex" }}>
                <Typography
                  variant="h6"
                  style={{ paddingRight: 10, paddingLeft: 15 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2856/2856494.png"
                    style={{ width: "50px", height: "50px" }}
                  />
                </Typography>

                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ paddingTop: 10 }}
                >
                  Tecidos Diversos LTDA
                </Typography>
              </Link>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton style={{ color: "white" }} />
                  <DrawerHeader className="menu">Menu</DrawerHeader>
                  <Link to="/products" exact>
                    <div className="optionsMenu">Produtos</div>
                  </Link>
                </DrawerContent>
              </Drawer>
            </Toolbar>
          </AppBar>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/newProduct" element={<FormProducts />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
