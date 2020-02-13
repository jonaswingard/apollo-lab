import React from 'react';
import Form from './Form';
import TagForm from './TagForm';
import List from './List';
import TagList from './TagList';
import Debug from './Debug';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';

const Main = () => {
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
                  <TagList />
               </Grid>
               <Grid item xs={12}>
                  <TagForm />
               </Grid>
               <Grid item xs={12}>
                  <Debug />
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default Main;
