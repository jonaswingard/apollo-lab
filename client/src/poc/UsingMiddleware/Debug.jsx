import React, { useContext } from 'react';
import { StoreContext } from './store/StoreContext';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Form = () => {
   const { actions } = useContext(StoreContext);

   return (
      <div>
         <ButtonGroup color="secondary" size="small">
            <Button onClick={() => actions.clearItems()}>
               Clear localStorage
            </Button>
            <Button onClick={() => actions.triggerAction('updated something')}>
               Modify state
            </Button>
         </ButtonGroup>
      </div>
   );
};

export default Form;
