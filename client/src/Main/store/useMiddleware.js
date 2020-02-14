import { useMemo, useRef } from 'react';
import { addFoobar } from '../db/foobar';
import { loadItems, loadTags, saveTags } from '../db/local';

import types from './types';

export const useMiddleware = (state, dispatch) => {
   useMemo(() => {
      dispatch({ type: types.LOAD_ITEMS, payload: loadItems() });
      dispatch({ type: types.LOAD_TAGS, payload: loadTags() });
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
         // saveItems(state.items);
         addFoobar(action.payload.title);
      }

      if (
         action.type === types.ADD_TAG ||
         action.type === types.DELETE_TAG ||
         action.type === types.EDIT_TAG
      ) {
         saveTags(state.tags);
      }
   }, [state]);

   return action => {
      actionRef.current = action;
      dispatch(action);
   };
};
