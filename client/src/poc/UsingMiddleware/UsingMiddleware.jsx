import React from 'react';
import { StoreProvider } from './store/StoreContext';
import MyComponent from './MyComponent';

// https://medium.com/front-end-weekly/writing-redux-like-simple-middleware-for-react-hooks-b163724a7058

const UsingMiddleware = () => (
   <StoreProvider>
      <MyComponent />
   </StoreProvider>
);

export default UsingMiddleware;
