import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function PayCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginTop: "50px" }}>
      <CardContent>
        <Typography variant="h5" component="h1">
          $400
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Remaining Statement Balance
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          PAY NOW
        </Button>
      </CardActions>
    </Card>
  );
}
