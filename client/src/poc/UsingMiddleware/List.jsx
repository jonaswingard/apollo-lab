import React, { useContext } from 'react';
import { StoreContext } from './store/StoreContext';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ item = '' }) => {
   const { actions } = useContext(StoreContext);

   return (
      <div>
         {item.title}|{item.tag}
         <Button
            color="secondary"
            aria-label="edit"
            onClick={() => actions.selectItem(item.id)}
         >
            <Icon>edit_icon</Icon>
         </Button>
         <Button
            aria-label="delete"
            onClick={() => actions.deleteItem(item.id)}
         >
            <DeleteIcon />
         </Button>
      </div>
   );
};

const List = () => {
   const { state } = useContext(StoreContext);
   const items = state.items || [];

   return (
      <div>
         <h3>Items</h3>
         {items.map(item => (
            <Item item={item} key={item.id} />
         ))}
      </div>
   );
};

export default List;
