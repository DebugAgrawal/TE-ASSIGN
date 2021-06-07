import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

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
        Made with ❤ by
        <Link
          href="https://www.google.com/search?q=debugagrawal&rlz=1C1EKKP_enIN839IN841&oq=debugagrawal&aqs=chrome..69i57j0i10i433j0i10j0i10i433j0i10j0i10i433j69i60l2.3398j0j7&sourceid=chrome&ie=UTF-8"
          target="_blank"
          color="inherit"
        >
          @debugagrawal
        </Link>
      </Box>
    </div>
  );
}

export default Footer;
