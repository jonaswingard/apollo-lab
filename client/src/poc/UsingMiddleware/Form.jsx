import React, { useContext, useRef } from 'react';
import { StoreContext } from './store/StoreContext';
import uniqid from 'uniqid';

const Form = () => {
   const { actions } = useContext(StoreContext);
   const myInput = useRef();

   return (
      <form
         onSubmit={e => {
            e.preventDefault();
            actions.addItem({ value: myInput.current.value, id: uniqid() });
            myInput.current.value = '';
         }}
      >
         <input name="foobar" ref={myInput} autoComplete="off" />
         <button>submit</button>
      </form>
   );
};

export default Form;
