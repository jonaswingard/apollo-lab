import React from 'react';

const Example = () => {
   return (
      <div>
         <pre>{state.something}</pre>
         <button onClick={() => actions.triggerAction('updated something')}>
            Click me
         </button>
      </div>
   );
};

export default Example;
