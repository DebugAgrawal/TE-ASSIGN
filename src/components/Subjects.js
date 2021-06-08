import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import esiot from "../assets/data/esiot.json";
import wt from "../assets/data/wt.json";
import smd from "../assets/data/smd.json";
import daa from "../assets/data/daa.json";
import spos from "../assets/data/spos.json";

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
    fontSize: 24,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
    paddingTop: 40,
    marginBottom: 10,
    background: "#eeebdd",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  containerHeadline: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    marginLeft: "10px",
    paddingBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    background: "#eeebdd",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  chip: {
    margin: 15,
    fontSize: 24,
    width: "300px",
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 30,
  },
  footer: {
    background: "#eeebdd",
    letterSpacing: 3,
    fontSize: 20,
  },
}));




function Subjects() {
  const [subject,setSubject]=useState(wt);
  const [subjectName,setSubjectName]=useState("Web Technology");
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
          <Button style={{ padding: "20px" }} onClick={()=>{return(setSubject(wt),setSubjectName("Web Technology"))}}>
          Web Technology
          </Button>
          <Button style={{ padding: "20px"}} onClick={()=>{return(setSubject(esiot),setSubjectName("Embeded Systems and IOT"))}}>
            Embeded Systems and Internet Of Things
          </Button>
          <Button style={{ padding: "20px" }} onClick={()=>{return(setSubject(smd),setSubjectName("Software Modeling and Design"))}}>
            Software Modeling and Design
          </Button>
          <Button style={{ padding: "20px" }} onClick={()=>{return(setSubject(daa),setSubjectName("Design and Analysis of Algorithms"))}} >
            Design and Analysis of Algorithms
          </Button>
          <Button style={{ padding: "20px" }} onClick={()=>{return(setSubject(spos),setSubjectName("System Programming and OS"))}}>
            System Programming and Operating Systems
          </Button>
        </ButtonGroup>
      </Box>
      <Box className={classes.containerHeadline} boxShadow={10}>
      <h1>{subjectName}</h1>
      <Box className={classes.container} boxShadow={10}>
        {subject.map((assignment) => (
          <Link href={assignment.link} target="_blank">
            <Chip
              key={assignment.id}
              label={assignment.title}
              className={classes.chip}
              icon={<AssignmentTurnedInOutlinedIcon />}
            />
          </Link>
        ))}
      </Box>
      </Box>
    </div>
  );
}

export default Subjects;
