import React, { useContext, useState, useEffect, useRef } from 'react';
import { StoreContext } from './store/StoreContext';
import uniqid from 'uniqid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const TagForm = () => {
   const { actions, state } = useContext(StoreContext);
   const [value, setValue] = useState({ tag: '' });
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
      const { tag } = state.selectedTag;
      if (tag) {
         setValue({ tag });

         // TODO - this shouuld be handled in a better way
         setTimeout(() => {
            focusFirstInput();
         });
      }
   }, [state.selectedTag]);

   return (
      <form
         onSubmit={e => {
            e.preventDefault();
            const { tag } = state.selectedTag;
            if (tag) {
               actions.editTag({
                  ...state.selectedTag,
                  ...value
               });
            } else {
               actions.addTag({
                  ...value,
                  id: uniqid()
               });
            }

            setValue({ tag: '' });
            focusFirstInput();
         }}
      >
         <Grid container spacing={3} justify="center">
            <Grid item xs={4}>
               <TextField
                  label="Tag"
                  name="tag"
                  value={value.tag}
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
