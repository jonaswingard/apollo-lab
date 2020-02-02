import { useMemo, useRef } from 'react';
import types from './types';

const SETTINGS = {
   LOCAL_STORAGE_KEY: 'items'
};

const loadItems = () =>
   JSON.parse(localStorage.getItem(SETTINGS.LOCAL_STORAGE_KEY)) || [];

const saveItems = items => {
   try {
      localStorage.setItem(SETTINGS.LOCAL_STORAGE_KEY, JSON.stringify(items));
   } catch (error) {
      console.error('something went wrong', error);
   }
};

export const useMiddleware = (state, dispatch) => {
   useMemo(() => {
      dispatch({ type: types.LOAD_ITEMS, payload: loadItems() });
   }, [dispatch]);

   const actionRef = useRef();
   useMemo(() => {
      const action = actionRef.current || {};

      if (
         action.type === types.ADD_ITEM ||
         action.type === types.DELETE_ITEM ||
         action.type === types.EDIT_ITEM ||
         action.type === types.CLEAR_ITEMS
      ) {
         saveItems(state.items);
      }
   }, [state]);

   return action => {
      actionRef.current = action;
      dispatch(action);
   };
};
