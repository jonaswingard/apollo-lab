import React, { useContext } from 'react';
import { StoreContext } from './store/StoreContext';

const Item = ({ item = '' }) => {
   const { actions } = useContext(StoreContext);

   return (
      <div>
         {item.value}
         <button onClick={() => actions.deleteItem(item.id)}>delete</button>
      </div>
   );
};

const List = () => {
   const { state } = useContext(StoreContext);

   const items = state.items || [];

   return (
      <div>
         {items.map(item => (
            <Item item={item} key={item.id} />
         ))}
      </div>
   );
};

export default List;
