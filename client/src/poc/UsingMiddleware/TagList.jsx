import React, { useContext } from 'react';
import { StoreContext } from './store/StoreContext';

const Item = ({ tag = '' }) => {
   const { actions } = useContext(StoreContext);

   return (
      <div>
         {tag.tag}
         <button onClick={() => actions.selectTag(tag.id)}>edit</button>
         <button onClick={() => actions.deleteTag(tag.id)}>delete</button>
      </div>
   );
};

const List = () => {
   const { state } = useContext(StoreContext);
   const tags = state.tags || [];

   const sortCompare = (a, b) => {
      if (a.tag < b.tag) {
         return -1;
      }

      if (a.tag > b.tag) {
         return 1;
      }

      return 0;
   };

   return (
      <div>
         <h3>Tags</h3>
         {tags.sort(sortCompare).map(tag => (
            <Item tag={tag} key={tag.id} />
         ))}
      </div>
   );
};

export default List;
