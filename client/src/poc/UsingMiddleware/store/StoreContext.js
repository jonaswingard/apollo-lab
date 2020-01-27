import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';
import { UseMiddleware } from './UseMiddleware';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const enhancedDispatch = UseMiddleware(state, dispatch);
   const actions = useActions(state, enhancedDispatch);

   return (
      <StoreContext.Provider value={{ state, enhancedDispatch, actions }}>
         {children}
      </StoreContext.Provider>
   );
};

export { StoreContext, StoreProvider };
