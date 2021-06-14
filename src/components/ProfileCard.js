import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import headshot from "../assets/img/Headshot.jpg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#eeebdd",
    boxShadow: 3,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
      paddingTop: 2,
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
  details: {
    paddingLeft: 30,
    marginTop: 10,
    alignText: "bottom",
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    color: "black",
  },
  pos: {
    fontSize: 18,
  },
  icon: {
    paddingTop: 10,
  },
}));

function ProfileCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <Avatar alt="Deepak Agrawal" src={headshot} className={classes.large} />
        <CardContent className={classes.details}>
          <Typography className={classes.title} color="textSecondary">
            Deepak Agrawal
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Full Stack Engineer [TE A 03]
          </Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
            gutterBottom
          >
            R. H. Sapat college of Engineering, Nashik, Maharashtra
          </Typography>
          <Typography variant="subtitle" component="p">
            A self-taught web developer who loves building stuff <br />
            and converting ideas, imaginations into reality
          </Typography>
          <div className={classes.icon}>
            <Link
              href="https://github.com/DebugAgrawal"
              target="_blank"
              color="inherit"
            >
              <GitHubIcon fontSize="large" />{" "}
            </Link>
            <Link
              href="https://www.linkedin.com/in/your-network-is-your-net-worth/"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon color="primary" fontSize="large" />
            </Link>{" "}
            <Link
              href="https://twitter.com/debugagrawal"
              target="_blank"
              color="inherit"
            >
              <TwitterIcon color="primary" fontSize="large" />
            </Link>
          </div>
        </CardContent>
      </Card>
      <Box
        boxShadow={20}
        paddingY={1}
        width="100%"
        justifyContent="center"
        textAlign="center"
        fontSize="20px"
      >
        Web Technology Gap Lecture Assignment Submission
      </Box>
    </>
  );
}

export default ProfileCard;
