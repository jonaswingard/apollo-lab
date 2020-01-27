import React, { useContext, useRef } from 'react';
import { StoreContext } from './store/StoreContext';

const MyComponent = () => {
   const { state, actions } = useContext(StoreContext);
   const myInput = useRef();

   return (
      <div>
         <pre>{JSON.stringify(state.items)}</pre>
         <form
            onSubmit={e => {
               e.preventDefault();
               actions.addItem(myInput.current.value);
               myInput.current.value = '';
            }}
         >
            <input name="foobar" ref={myInput} autoComplete="off" />
            <button>submit</button>
         </form>
         <br />
         <pre>{state.something}</pre>
         <button onClick={() => actions.triggerAction('updated something')}>
            Click me
         </button>
      </div>
   );
};

export default MyComponent;
