import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import FastfoodIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function AddBusiness() {
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [review, setReview] = React.useState("");
  const [bname, setBName] = React.useState("");
  const [blocation, setBLocation] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleReviewChange = (event) => setReview(event.target.value);
  const handleBNameChange = (event) => setBName(event.target.value);
  const handleBLocationChange = (event) => setBLocation(event.target.value);
  const handleLinkChange = (event) => setLink(event.target.value);

  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/business", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput), // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.id);
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

  const handleSubmit = (variables) => {
    // if error check field original below
    // const toInput = { name, location, link, dob: selectedDate };
    const toInput = { bname, blocation, link, review };
    sampleFunc(toInput);
    setBName("");
    setBLocation("");
    setLink("");
    // if error check field
    setReview("");
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FastfoodIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <Box fontFamily="Bungee Shade">Project Greenway</Box>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Box fontStyle="italic" m={1}>
            Explore local minority owned businesses!
          </Box>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bname"
                value={bname}
                label="Add a minority owned business"
                name="bname"
                autoComplete="bname"
                onChange={handleBNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="location"
                name="blocation"
                variant="outlined"
                required
                fullWidth
                value={blocation}
                id="blocation"
                label="BLocation"
                onChange={handleBLocationChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="link"
                value={link}
                // if error check field
                label="Link"
                name="link"
                autoComplete="link"
                onChange={handleLinkChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="review"
                label="Review"
                defaultValue="The ice cream was bomb"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleReviewChange}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={handleSubmit}
          >
            Save
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/view">View Business Directory</Link>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Link to="/"> Return Home</Link>
            </Grid>
          </Grid>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </Container>
  );
}
