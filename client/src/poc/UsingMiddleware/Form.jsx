import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from './store/StoreContext';
import uniqid from 'uniqid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Form = () => {
   const { actions, state } = useContext(StoreContext);
   const [value, setValue] = useState({ title: '', tag: '' });

   const handleChange = e =>
      setValue({
         ...value,
         [e.currentTarget.name]: e.currentTarget.value
      });

   useEffect(() => {
      const { title, tag } = state.selectedItem;
      if (title || tag) {
         setValue({ title, tag });
      }
   }, [state.selectedItem]);

   return (
      <form
         onSubmit={e => {
            e.preventDefault();

            const { title, tag } = state.selectedItem;
            if (title || tag) {
               actions.editItem({
                  ...state.selectedItem,
                  title: value.title,
                  tag: value.tag
               });
            } else {
               actions.addItem({
                  title: value.title,
                  tag: value.tag,
                  id: uniqid()
               });
            }

            setValue({ title: '', tag: '' });
         }}
      >
         <Grid container spacing={3} justify="center">
            <Grid item xs={4}>
               <TextField
                  label="Title"
                  name="title"
                  value={value.title}
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
               />
            </Grid>
            <Grid item xs={3}>
               <TextField
                  label="Tag"
                  name="tag"
                  value={value.tag}
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
               />
            </Grid>
            <Grid item xs={12}>
               <Button
                  type="submit"
                  variant="outlined"
                  size="small"
                  color="primary"
               >
                  Submit
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default Form;
