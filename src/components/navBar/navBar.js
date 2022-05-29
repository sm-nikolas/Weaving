import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
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
import { Link, NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../homePage/homePage";
import Products from "../products/products";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "teal" }}>
          <Toolbar>
            <Link to="/" exact>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                ref={btnRef}
                onClick={onOpen}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" style={{ paddingRight: 10 }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2856/2856494.png"
                  style={{ width: "50px", height: "50px" }}
                />
              </Typography>

              <Typography variant="h6" color="inherit">
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
                <NavLink to="/product" exact>
                  <div className="optionsMenu">Produtos</div>
                </NavLink>
              </DrawerContent>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
