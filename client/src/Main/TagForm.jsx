import React, { useContext, useState, useEffect, useRef } from 'react';
import { StoreContext } from './store/StoreContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const TagForm = () => {
   const { actions, state } = useContext(StoreContext);
   const [value, setValue] = useState({ title: '' });
   const firstInput = useRef();

   const focusFirstInput = () => {
      const input = firstInput.current.querySelector('input');
      input.focus();
      input.select();
   };

   const handleChange = e =>
      setValue({
         ...value,
         [e.currentTarget.name]: e.currentTarget.value
      });

   useEffect(() => {
      const { title } = state.selectedTag;
      if (title) {
         setValue({ title });

         // TODO - this should be handled in a better way
         // setTimeout(() => {
         //    focusFirstInput();
         // });
      }
   }, [state.selectedTag]);

   return (
      <form
         onSubmit={e => {
            e.preventDefault();
            const { title } = state.selectedTag;
            if (title) {
               actions.editTag({
                  ...state.selectedTag,
                  ...value
               });
            } else {
               actions.addTag({
                  ...value
               });
            }

            setValue({ title: '' });
            focusFirstInput();
         }}
      >
         <Grid container spacing={3} justify="center">
            <Grid item xs={4}>
               <TextField
                  label="Tag"
                  name="title"
                  value={value.title}
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
                  ref={firstInput}
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

export default TagForm;
