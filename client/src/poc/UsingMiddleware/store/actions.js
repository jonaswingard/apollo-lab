import { types } from './reducers';

export const useActions = (_state, dispatch) => ({
   triggerAction: data =>
      dispatch({ type: types.TRIGGER_ACTION, payload: data }),
   addItem: data => dispatch({ type: types.ADD_ITEM, payload: data }),
   loadItems: data => dispatch({ type: types.LOAD_ITEMS, payload: data })
});
