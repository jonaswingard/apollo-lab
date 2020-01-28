import { types } from './reducers';

export const useActions = (_state, dispatch) => ({
   triggerAction: data =>
      dispatch({ type: types.TRIGGER_ACTION, payload: data }),
   addItem: data => dispatch({ type: types.ADD_ITEM, payload: data }),
   editItem: data => dispatch({ type: types.EDIT_ITEM, payload: data }),
   deleteItem: id => dispatch({ type: types.DELETE_ITEM, payload: id }),
   selectItem: id => dispatch({ type: types.SELECT_ITEM, payload: id }),
   loadItems: data => dispatch({ type: types.LOAD_ITEMS, payload: data }),
   clearItems: () => dispatch({ type: types.CLEAR_ITEMS })
});
