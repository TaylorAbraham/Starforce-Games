import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import StarBorder from '@material-ui/icons/StarBorder';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import AviansImage from './img/attack-of-the-avians.png';
import CorneriaImage from './img/chaos-in-corneria.png';
import ButtonUpgradeImage from './img/button-upgrade.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.taylorabraham.com/">
        Taylor Abraham
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  linkButton: {
    textDecoration: 'none',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StarBorder className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Starforce Games
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Starforce Games
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome to my personal game portfolio! This is a collection of games I've made along the way as I've explored game development.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <a href="http://taylorabraham.com/" target="_blank" rel="noreferrer" className={classes.linkButton}>
                  <Button variant="contained" color="primary">
                    Check Out My Main Website <OpenInNewIcon className={classes.rightIcon} />
                  </Button>
                </a>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={AviansImage}
                  title="Attack of the Avians"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    Attack of the Avians
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h6">
                    February 2021
                  </Typography>
                  <Typography>
                    A tutorial project (thanks to the wonderful Jason Weimann) that I completed & expanded upon to begin learning Unity.
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="/avians" className={classes.linkButton}>
                    <Button variant="contained" size="small" color="primary" target="_blank" rel="noreferrer" className={classes.linkButton}>
                      View <OpenInNewIcon className={classes.rightIcon} />
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={CorneriaImage}
                  title="Chaos in Corneria"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    Chaos in Corneria
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h6">
                    June 2014
                  </Typography>
                  <Typography>
                    A simple Java trading card game I made for my high school computing course. Watching my friends play against each other on my game sparked my interest in making multiplayer content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={ButtonUpgradeImage}
                  title="Button Upgrade"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    Button Upgrade
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h6">
                    October 2011
                  </Typography>
                  <Typography>
                    My first public game. Even though it was a very simple one, it helped me learn ActionScript 2 and started my passion for game development.
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="https://www.kongregate.com/games/olimar72/button-upgrade" target="_blank" rel="noreferrer" className={classes.linkButton}>
                    <Button variant="contained" size="small" color="primary">
                      View <OpenInNewIcon className={classes.rightIcon} />
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thanks for visiting!
        </Typography>
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
