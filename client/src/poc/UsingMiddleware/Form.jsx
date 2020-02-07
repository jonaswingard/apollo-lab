import React, { useContext, useState, useEffect, useRef } from 'react';
import { StoreContext } from './store/StoreContext';
import uniqid from 'uniqid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TagPicker from './TagPicker';

const Form = () => {
   const { actions, state } = useContext(StoreContext);
   const [value, setValue] = useState({ title: '', tag: '' });
   const firstInput = useRef();

   const focusFirstInput = () => {
      const input = firstInput.current.querySelector('input');
      input.focus();
      input.select();
   };

   const handleChange = e => {
      setValue({
         ...value,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = e => {
      e.preventDefault();
      console.log('submit', value);

      // const { title, tag } = state.selectedItem;
      // if (title || tag) {
      //    actions.editItem({
      //       ...state.selectedItem,
      //       ...value
      //    });
      // } else {
      actions.addItem({
         ...value,
         id: uniqid()
      });
      // }

      // setValue({ title: '', tag: '' });
      // focusFirstInput();
   };

   useEffect(() => {
      const { title, tag } = state.selectedItem;
      if (title || tag) {
         setValue({ title, tag });

         // TODO - this shouuld be handled in a better way
         setTimeout(() => {
            focusFirstInput();
         });
      }
   }, [state.selectedItem]);

   return (
      <form onSubmit={handleSubmit}>
         <Grid container spacing={3} justify="center">
            <Grid item xs={4}>
               <TextField
                  label="Title"
                  name="title"
                  value={value.title}
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
                  ref={firstInput}
               />
            </Grid>
            {/* <Grid item xs={3}>
               <TextField
                  label="Tag"
                  name="tag"
                  value={value.tag}
                  onChange={handleChange}
                  autoComplete="off"
                  fullWidth
               />
            </Grid> */}
            <Grid item xs={3}>
               <TagPicker
                  name="tag"
                  value={value.tag}
                  onChange={handleChange}
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
