// import match from 'conditional-expression';
import { types } from './reducers';

export const applyMiddleware = (state, dispatch) => {
   return action => {
      if (action.type === types.LOAD_ITEMS) {
         try {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            action.payload = items;
         } catch (error) {
            console.error('something went wrong');
            action.payload = [];
         }
      }

      if (action.type === types.ADD_ITEM) {
         const items = [...state.items, action.payload];

         // const items = JSON.parse(localStorage.getItem('items')) || [];
         // console.log(items);

         localStorage.setItem('items', JSON.stringify(items));
      }

      dispatch(action);
   };
};

// export const applyMiddleware = dispatch => {
//   return action => {
//     dispatch(action) ||
//       match(action.type)
//         .equals(types.TRIGGER_ACTION)
//         .then(() => {
//           //    axios.get('api/v1/query')
//           //      .then(serverResponse => dispatch({type: types.DIFFERENT_ACTION, payload: serverResponse.data.response}))
//           //      .catch(error => console.log('hups');
//           console.log('the middleware is working');
//         })
//         .else(null);
//   };
// };
