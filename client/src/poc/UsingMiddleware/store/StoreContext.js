import React, { createContext, useReducer, useMemo } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';
import { applyMiddleware } from './middleware';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const enhancedDispatch = applyMiddleware(state, dispatch);
   const actions = useActions(state, enhancedDispatch);

   useMemo(() => {
      actions.loadItems();
   }, []);

   return (
      <StoreContext.Provider value={{ state, enhancedDispatch, actions }}>
         {children}
      </StoreContext.Provider>
   );
};

export { StoreContext, StoreProvider };
