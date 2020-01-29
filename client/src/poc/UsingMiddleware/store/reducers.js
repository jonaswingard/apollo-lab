import match from 'conditional-expression';
import types from './types';

export const initialState = {
   // something: 'initial something',
   // somethingElse: 'initial something else',
   items: [],
   selectedItem: {}
};

export const reducer = (state = initialState, action) => {
   return match(action.type)
      .equals(types.ADD_ITEM)
      .then({ ...state, items: [...state.items, action.payload] })
      .equals(types.EDIT_ITEM)
      .then({
         ...state,
         selectedItem: {},
         items: [
            state.items.map(item =>
               item.id === action.payload.id ? action.payload : item
            )
         ]
      })
      .equals(types.DELETE_ITEM)
      .then({
         ...state,
         items: [state.items.filter(item => item.id !== action.payload)]
      })
      .equals(types.SELECT_ITEM)
      .then({
         ...state,
         selectedItem: {
            ...(state.items.find(item => item.id === action.payload) || {})
         }
      })
      .equals(types.LOAD_ITEMS)
      .then({ ...state, items: action.payload })
      .equals(types.CLEAR_ITEMS)
      .then({ ...state, items: [] })
      .else(state);

   // switch (action.type) {
   // case types.TRIGGER_ACTION:
   //    return {
   //       ...state,
   //       something: action.payload
   //    };
   // case types.DIFFERENT_ACTION:
   //    return {
   //       ...state,
   //       somethingElse: action.payload
   //    };
   // case types.ADD_ITEM:
   //    return { ...state, items: [...state.items, action.payload] };
   // case types.EDIT_ITEM:
   //    return {
   //       ...state,
   //       selectedItem: {},
   //       items: [
   //          ...state.items.map(item =>
   //             item.id === action.payload.id ? action.payload : item
   //          )
   //       ]
   //    };
   //    case types.DELETE_ITEM:
   //       return {
   //          ...state,
   //          items: [...state.items.filter(item => item.id !== action.payload)]
   //       };
   //    case types.SELECT_ITEM:
   //       return {
   //          ...state,
   //          selectedItem: {
   //             ...(state.items.find(item => item.id === action.payload) || {})
   //          }
   //       };
   //    case types.LOAD_ITEMS:
   //       return {
   //          ...state,
   //          items: action.payload
   //       };
   //    case types.CLEAR_ITEMS:
   //       return {
   //          ...state,
   //          items: []
   //       };

   //    default:
   //       return state;
   // }
};
