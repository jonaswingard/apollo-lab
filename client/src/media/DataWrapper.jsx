import React from 'react';
import { StoreProvider } from './store/StoreContext';
import Main from './Main';

// https://medium.com/front-end-weekly/writing-redux-like-simple-middleware-for-react-hooks-b163724a7058

const DataWrapper = () => (
   <StoreProvider>
      <Main />
   </StoreProvider>
);

export default DataWrapper;
