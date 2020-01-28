import React from 'react';
import Form from './Form';
import List from './List';
import Debug from './Debug';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   root: { flexGrow: 1 },
   menuButton: { marginRight: theme.spacing(2) },
   title: { flexGrow: 1 }
}));

const MyComponent = () => {
   const classes = useStyles();

   return (
      <div>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  Title
               </Typography>
               <Button color="inherit">A Button</Button>
            </Toolbar>
         </AppBar>

         <Container>
            <Grid container spacing={3} style={{ marginTop: '2rem' }}>
               <Grid item xs={12}>
                  <List />
               </Grid>
               <Grid item xs={12}>
                  <Form />
               </Grid>
               <Grid item xs={12}>
                  <Debug />
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default MyComponent;
