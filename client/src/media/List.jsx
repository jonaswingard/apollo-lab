import React, { useContext } from 'react';
import { StoreContext } from './store/StoreContext';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const PrettyTagList = ({ tag = [], tags = [] }) =>
   tag
      .map(tagId => tags.find(({ id }) => id === tagId)?.tag || 'tag removed')
      .sort()
      .join(', ');

const Item = ({ item = '' }) => {
   const { actions, state } = useContext(StoreContext);
   const { tags } = state;

   return (
      <tr>
         <td style={{ textAlign: 'left', paddingRight: '2rem' }}>
            {item.title}
         </td>
         <td style={{ textAlign: 'left', paddingRight: '2rem' }}>
            {item.tag.length > 0 && (
               <PrettyTagList tag={item.tag} tags={tags} />
            )}
         </td>
         <td>
            <Button
               color="secondary"
               aria-label="edit"
               style={{ minWidth: '1rem' }}
               onClick={() => actions.selectItem(item.id)}
            >
               <Icon>edit_icon</Icon>
            </Button>
            <Button
               aria-label="delete"
               style={{ minWidth: '1rem' }}
               onClick={() => actions.deleteItem(item.id)}
            >
               <DeleteIcon />
            </Button>
         </td>
      </tr>
   );
};

const List = () => {
   const { state } = useContext(StoreContext);
   const items = state.items || [];

   return (
      <div>
         <h3>Items</h3>
         <table style={{ margin: '0 auto' }}>
            <tbody>
               {items.map(item => (
                  <Item item={item} key={item.id} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default List;
