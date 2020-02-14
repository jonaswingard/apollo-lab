import match from 'conditional-expression';
import types from './types';

export const initialState = {
   items: [],
   tags: [],
   selectedItem: {},
   selectedTag: {}
};

export const reducer = (state = initialState, action) => {
   return (
      match(action.type)
         // ITEMS
         .equals(types.ADD_ITEM)
         .then(() => ({ ...state, items: [...state.items, action.payload] }))
         .equals(types.EDIT_ITEM)
         .then(() => ({
            ...state,
            selectedItem: {},
            items: [
               ...state.items.map(item =>
                  item.id === action.payload.id ? action.payload : item
               )
            ]
         }))
         .equals(types.DELETE_ITEM)
         .then(() => ({
            ...state,
            items: [...state.items.filter(item => item.id !== action.payload)]
         }))
         .equals(types.SELECT_ITEM)
         .then(() => ({
            ...state,
            selectedItem: {
               ...(state.items.find(item => item.id === action.payload) || {})
            }
         }))
         .equals(types.LOAD_ITEMS)
         .then(() => ({ ...state, items: action.payload }))
         .equals(types.CLEAR_ITEMS)
         .then(() => ({ ...state, items: [] }))

         // TAGS
         .equals(types.ADD_TAG)
         .then(() => ({
            ...state,
            tags: [...state.tags, action.payload]
         }))
         .equals(types.EDIT_TAG)
         .then(() => ({
            ...state,
            selectedTag: {},
            tags: [
               ...state.tags.map(tag =>
                  tag.id === action.payload.id ? action.payload : tag
               )
            ]
         }))
         .equals(types.DELETE_TAG)
         .then(() => ({
            ...state,
            tags: [...state.tags.filter(tag => tag.id !== action.payload)]
         }))
         .equals(types.SELECT_TAG)
         .then(() => ({
            ...state,
            selectedTag: {
               ...(state.tags.find(tag => tag.id === action.payload) || {})
            }
         }))
         .equals(types.LOAD_TAGS)
         .then(() => ({ ...state, tags: action.payload }))

         // OTHER
         .else(state)
   );
};
