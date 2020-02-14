import React from 'react';
import MediaForm from './MediaForm';
import TagForm from './TagForm';
import MediaList from './MediaList';
import TagList from './TagList';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import DataComponent from '../poc/DataComponent';

const Main = () => {
   return (
      <div>
         <Header />
         <DataComponent />
         <Container>
            <Grid container spacing={3} style={{ marginTop: '2rem' }}>
               <Grid item xs={12}>
                  <MediaList />
               </Grid>
               <Grid item xs={12}>
                  <MediaForm />
               </Grid>
               <Grid item xs={12}>
                  <TagList />
               </Grid>
               <Grid item xs={12}>
                  <TagForm />
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default Main;
