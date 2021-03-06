import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    "margin-left": "10%",
    width: "80%",
    "margin-top": "5%",
  },
  media: {
    height: 400,
  },
  button: {
    backgroundColor: "green",
  },
  text: {
    textDecoration: "none",
    color: "white",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/Bq89L9K/Project-Green-Way-2-copy.gif"
          title="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Box fontFamily="Bungee Shade">Our Mission</Box>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Here at Project Greenway our mission is to actively encourage the
            patronage and economic support of minority owned restaurants in the
            greater Charlotte community.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          href="#contained-buttons"
          className={classes.button}
        >
          <Link to="/view" className={classes.text}>
            View Businesses
          </Link>
        </Button>
        <Button
          size="small"
          variant="contained"
          href="#contained-buttons"
          className={classes.button}
        >
          <Link to="/add" className={classes.text}>
            Add a Business
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
