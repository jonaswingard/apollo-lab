import React from 'react';
import Form from './Form';
import List from './List';
import Debug from './Debug';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';

const MainComponent = () => {
   return (
      <div>
         <Header />
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

export default MainComponent;
