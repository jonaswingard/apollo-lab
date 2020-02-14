import types from './types';

export const useActions = (_state, dispatch) => ({
   triggerAction: data =>
      dispatch({ type: types.TRIGGER_ACTION, payload: data }),

   // ITEMS
   addItem: data => dispatch({ type: types.ADD_ITEM, payload: data }),
   editItem: data => dispatch({ type: types.EDIT_ITEM, payload: data }),
   deleteItem: id => dispatch({ type: types.DELETE_ITEM, payload: id }),
   selectItem: id => dispatch({ type: types.SELECT_ITEM, payload: id }),
   loadItems: data => dispatch({ type: types.LOAD_ITEMS, payload: data }),
   clearItems: () => dispatch({ type: types.CLEAR_ITEMS }),

   // TAGS
   addTag: data => dispatch({ type: types.ADD_TAG, payload: data }),
   editTag: data => dispatch({ type: types.EDIT_TAG, payload: data }),
   deleteTag: id => dispatch({ type: types.DELETE_TAG, payload: id }),
   selectTag: id => dispatch({ type: types.SELECT_TAG, payload: id })
});
