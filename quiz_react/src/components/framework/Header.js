import { AppBar, Toolbar, Typography, CssBaseline, Link } from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={2}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Quizzes
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
