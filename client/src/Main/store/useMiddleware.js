import { useMemo, useRef } from 'react';
// import { addFoobar } from '../db/temp';
import { loadTags, deleteTag } from '../db/tags';
import { loadItems, saveTags } from '../db/local';

import types from './types';

export const useMiddleware = (state, dispatch) => {
   useMemo(() => {
      loadTags().then(x =>
         dispatch({ type: types.LOAD_TAGS, payload: x.tags })
      );
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
         // saveItems(state.items);
         // addFoobar(action.payload.title);
      }

      if (action.type === types.ADD_TAG || action.type === types.EDIT_TAG) {
         saveTags(state.tags);
      }

      if (action.type === types.DELETE_TAG) {
         deleteTag(action.payload);
      }
   }, [state]);

   return action => {
      actionRef.current = action;
      dispatch(action);
   };
};
