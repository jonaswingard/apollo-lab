import React, { useContext } from 'react';
import { StoreContext } from './store/StoreContext';

const Form = () => {
   const { actions } = useContext(StoreContext);

   return (
      <div>
         <button
            onClick={() => {
               actions.clearItems();
            }}
         >
            Clear localStorage
         </button>
         <button onClick={() => actions.triggerAction('updated something')}>
            Modify state
         </button>
      </div>
   );
};

export default Form;
