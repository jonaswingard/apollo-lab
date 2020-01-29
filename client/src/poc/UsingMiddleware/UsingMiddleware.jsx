import React from 'react';
import { StoreProvider } from './store/StoreContext';
import MainComponent from './MainComponent';

// https://medium.com/front-end-weekly/writing-redux-like-simple-middleware-for-react-hooks-b163724a7058

const UsingMiddleware = () => (
   <StoreProvider>
      <MainComponent />
   </StoreProvider>
);

export default UsingMiddleware;
