// import match from 'conditional-expression';

export const initialState = {
   something: 'initial something',
   somethingElse: 'initial something else',
   items: [],
   selectedItem: {}
};

export const types = {
   TRIGGER_ACTION: 'TRIGGER_ACTION',
   DIFFERENT_ACTION: 'DIFFERENT_ACTION',
   ADD_ITEM: 'ADD_ITEM',
   EDIT_ITEM: 'EDIT_ITEM',
   DELETE_ITEM: 'DELETE_ITEM',
   SELECT_ITEM: 'SELECT_ITEM',
   LOAD_ITEMS: 'LOAD_ITEMS',
   CLEAR_ITEMS: 'CLEAR_ITEMS'
};

export const reducer = (state = initialState, action) => {
   // match(action.type)
   //  .equals(types.TRIGGER_ACTION)
   //    .then({...state, something: action.payload})
   //  .equals(types.DIFFERENT_ACTION)
   //    .then({...state, somethingElse: action.payload}
   //  .else(state);

   switch (action.type) {
      case types.TRIGGER_ACTION:
         return {
            ...state,
            something: action.payload
         };
      case types.DIFFERENT_ACTION:
         return {
            ...state,
            somethingElse: action.payload
         };
      case types.ADD_ITEM:
         return {
            ...state,
            items: [...state.items, action.payload]
         };
      case types.EDIT_ITEM:
         return {
            ...state,
            selectedItem: {},
            items: [
               ...state.items.map(item =>
                  item.id === action.payload.id ? action.payload : item
               )
            ]
         };
      case types.DELETE_ITEM:
         return {
            ...state,
            items: [...state.items.filter(item => item.id !== action.payload)]
         };
      case types.SELECT_ITEM:
         return {
            ...state,
            selectedItem: {
               ...(state.items.find(item => item.id === action.payload) || {})
            }
         };
      case types.LOAD_ITEMS:
         return {
            ...state,
            items: action.payload
         };
      case types.CLEAR_ITEMS:
         return {
            ...state,
            items: []
         };

      default:
         return state;
   }
};
