import React, { useContext, useState } from 'react';
import { StoreContext } from './store/StoreContext';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect, useRef } from 'react';

const TagPicker = ({ onChange, name, value }) => {
   const { state } = useContext(StoreContext);
   const tags = state.tags || [];
   const [selectedTag, setSelectedTag] = useState(value);

   const handleChange = event => {
      setSelectedTag(event.target.value);
      onChange(event);
   };

   const runEffect = useRef(false);
   useEffect(() => {
      if (runEffect) {
         setSelectedTag(value);
      } else {
         runEffect.current = true;
      }
   }, [value]);

   return (
      <div>
         <FormControl>
            <InputLabel htmlFor="select-multiple-checkbox">
               Select tag
            </InputLabel>
            <Select
               multiple
               value={selectedTag}
               onChange={handleChange}
               input={<Input id="select-multiple-checkbox" />}
               style={{ minWidth: '10rem' }}
               name={name}
               renderValue={selected =>
                  selected
                     .map(
                        value =>
                           (tags.find(name => name.id === value) || {}).title ||
                           ''
                     )
                     .join(', ')
               }
            >
               {tags.map(name => (
                  <MenuItem key={name.id} value={name.id}>
                     <Checkbox checked={selectedTag.indexOf(name.id) > -1} />
                     <ListItemText primary={name.title} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   );
};

export default TagPicker;
