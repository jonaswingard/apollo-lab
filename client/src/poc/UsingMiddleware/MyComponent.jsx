import React from 'react';
import Form from './Form';
import List from './List';
import Debug from './Debug';

const MyComponent = () => {
   return (
      <div>
         <List />
         <br />
         <Form />
         <Debug />
      </div>
   );
};

export default MyComponent;
