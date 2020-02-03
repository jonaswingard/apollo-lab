import React, { useContext, useState } from 'react';
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

   const names = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder'
   ];

   const handleChange = event => {
      setStateName(event.target.value);
   };

   return (
      <div>
         <FormControl>
            <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
            <Select
               multiple
               value={stateName}
               onChange={handleChange}
               input={<Input id="select-multiple-checkbox" />}
               renderValue={selected => selected.join(', ')}
            >
               {names.map(name => (
                  <MenuItem key={name} value={name}>
                     <Checkbox checked={stateName.indexOf(name) > -1} />
                     <ListItemText primary={name} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>

         {/* <select onChange={onChange} name={name} defaultValue={''}>
            {tags.map((tag, index) => (
               <option key={tag.id} value={tag.id} disabled={index === 0}>
                  {tag.tag}
               </option>
            ))}
         </select> */}
      </div>
   );
};

export default TagPicker;
