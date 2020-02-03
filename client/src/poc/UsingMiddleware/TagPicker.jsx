import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from './store/StoreContext';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const TagPicker = ({ onChange, name }) => {
   const { state } = useContext(StoreContext);
   const tags = [{ id: '', tag: 'Select tag' }, ...(state.tags || [])];

   const [stateName, setStateName] = useState([]);

   const names2 = [
      { name: 'foo', id: 'foovalue' },
      { name: 'bar', id: 'barvalue' }
   ];

   const handleChange = event => {
      setStateName(event.target.value);
   };

   return (
      <div>
         <FormControl>
            <InputLabel htmlFor="select-multiple-checkbox">
               Select tag
            </InputLabel>
            <Select
               multiple
               value={stateName}
               onChange={handleChange}
               input={<Input id="select-multiple-checkbox" />}
               renderValue={selected =>
                  selected
                     .map(
                        value =>
                           (names2.find(name => name.id === value) || {})
                              .name || ''
                     )
                     .join(', ')
               }
            >
               {names2.map(name => (
                  <MenuItem key={name.id} value={name.id}>
                     <Checkbox checked={stateName.indexOf(name.id) > -1} />
                     <ListItemText primary={name.name} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   );
};

export default TagPicker;
