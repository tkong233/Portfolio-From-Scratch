import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Tong Kong '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Tong Kong
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#41B3A3'
    },
  },
});

const useStyles = makeStyles({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    color: theme.palette.primary.main
  },
});

export default function Hero() {

  const classes = useStyles();

  return (
    <React.Fragment>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Tong Kong
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hi there! I'm Tong, a software engineer & musician.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              I build useful stuff!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    View my resume
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Email me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    </React.Fragment>
  );
}