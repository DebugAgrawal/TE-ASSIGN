import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#eeebdd",
    letterSpacing: 3,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        boxShadow={10}
        paddingY={1}
        width="100%"
        justifyContent="center"
        textAlign="center"
        fontSize="18px"
      >
        Made with ❤ by @debugagrawal
      </Box>
    </div>
  );
}

export default Footer;
