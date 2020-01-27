import { types } from './reducers';

export const applyMiddleware = dispatch => {
   return action => {
      dispatch(action);

      if (action.type === types.LOAD_ITEMS) {
         try {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            action.payload = items;
         } catch (error) {
            console.error('something went wrong', error);
            action.payload = [];
         }
      }
      if (action.type === types.CLEAR_ITEMS) {
         try {
            localStorage.setItem('items', JSON.stringify([]));
         } catch (error) {
            console.error('something went wrong', error);
         }
      }
      // if (action.type === types.ADD_ITEM) {
      //    try {
      //       const items = [...state.items, action.payload];
      //       localStorage.setItem('items', JSON.stringify(items));
      //    } catch (error) {
      //       console.error('something went wrong', error);
      //    }
      // }
      if (action.type === types.DELETE_ITEM) {
         // console.log(state.items);
      }
   };
};

// export const applyMiddleware = (state, dispatch) => {
//    return action => {
//       dispatch(action) ||
//          match(action.type)
//             .equals(types.LOAD_ITEMS)
//             .then(() => {
//                try {
//                   const items = JSON.parse(localStorage.getItem('items')) || [];
//                   action.payload = items;
//                } catch (error) {
//                   console.error('something went wrong', error);
//                   action.payload = [];
//                }
//             })
//             .equals(types.DELETE_ITEM)
//             .then(() => {
//                console.log(state.items);
//             })
//             .else(null);
//    };
// };
