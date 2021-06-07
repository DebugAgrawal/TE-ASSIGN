import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import esiot from "../esiot.json"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: 3,
    width: "100%",
    background: "#eeeeee",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
      paddingTop: 2,
    },
  },
  subjects: {
    left: 0,
    width: "20%",
    height: "120%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    background: "#eeebdd",
    position: "relative",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginLeft: "10px",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
    paddingTop: 50,
    marginTop: 10,
    marginBottom: 10,
    background: "#eeebdd",
    flexWrap: "wrap",
  },
  chip: {
    margin: 15,
    fontSize: 24,
    width:"300px",
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 30,
  },
  footer: {
    background: "#eeebdd",
    letterSpacing: 3,
  },
}));

function Subjects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.subjects} boxShadow={10}>
        <ButtonGroup
          orientation="vertical"
          className={classes.buttons}
          fullWidth
          style={{ height: "600px", padding: "20px" }}
          aria-label="outlined primary button group"
        >
          <Button style={{ padding: "20px" }}>
            Web Technology
          </Button>
          <Button style={{ padding: "20px",background: "#dcdcdc" }}>
            Embeded Systems and Internet Of Things
          </Button>
          <Button style={{ padding: "20px" }}>
            Software Modeling and Design
          </Button>
          <Button style={{ padding: "20px" }}>
            Design and Analysis of Algorithms
          </Button>
          <Button style={{ padding: "20px" }}>
            System Programming and Operating Systems
          </Button>
        </ButtonGroup>
      </Box>
      <Box className={classes.container} boxShadow={10}>
        {esiot.map((assignment) => (
            <Link href={assignment.link} target="_blank">
          <Chip
            key={assignment.id}
            size="large"
            label={assignment.title}
            className={classes.chip}
            icon={<AssignmentTurnedInOutlinedIcon />}
          />
          </Link>
        ))}
      </Box>
    </div>
  );
}

export default Subjects;
