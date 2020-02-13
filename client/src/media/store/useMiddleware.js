import { useMemo, useRef } from 'react';
import types from './types';

const SETTINGS = {
   KEY_ITEMS: 'items',
   KEY_TAGS: 'tags'
};

const loadTags = () =>
   JSON.parse(localStorage.getItem(SETTINGS.KEY_TAGS)) || [];

const saveTags = tags => {
   try {
      localStorage.setItem(SETTINGS.KEY_TAGS, JSON.stringify(tags));
   } catch (error) {
      console.error('something went wrong', error);
   }
};

const loadItems = () =>
   JSON.parse(localStorage.getItem(SETTINGS.KEY_ITEMS)) || [];

const saveItems = items => {
   try {
      localStorage.setItem(SETTINGS.KEY_ITEMS, JSON.stringify(items));
   } catch (error) {
      console.error('something went wrong', error);
   }
};

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
         saveItems(state.items);
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
