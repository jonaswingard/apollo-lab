import React, { useContext } from 'react';
import { StoreContext } from './store/StoreContext';

const TagItem = ({ tag = '' }) => {
   const { actions } = useContext(StoreContext);

   return (
      <tr>
         <td style={{ textAlign: 'left', paddingRight: '2rem' }}>
            {tag.title}
         </td>
         <td>
            <button onClick={() => actions.selectTag(tag.id)}>edit</button>
            <button onClick={() => actions.deleteTag(tag.id)}>delete</button>
         </td>
      </tr>
   );
};

const TagList = () => {
   const { state } = useContext(StoreContext);
   const tags = [...state.tags] || [];

   const sortCompare = (a, b) => {
      if (a.title < b.title) {
         return -1;
      }

      if (a.title > b.title) {
         return 1;
      }

      return 0;
   };

   return (
      <div>
         <h3>Tags</h3>
         <table style={{ margin: '0 auto' }}>
            <tbody>
               {tags.sort(sortCompare).map(item => (
                  <TagItem tag={item} key={item.id} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default TagList;
