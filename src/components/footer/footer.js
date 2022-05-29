import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Text } from "@chakra-ui/layout";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Text color="inherit">Copyright © Tecidos Diversos LTDA</Text>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
  },
  footer: {
    color: "white",
    marginTop: "auto",
    backgroundColor: "#80cbc4",

    padding: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
