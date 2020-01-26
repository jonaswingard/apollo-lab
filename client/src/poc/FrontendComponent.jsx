import React, { useReducer, useEffect } from 'react';
import { globalReducer } from './reducer';

const initialState = {
  tag: '',
  title: '',
  titles: [
    { title: 'title 1', tag: 'tag 1' },
    { title: 'title 2', tag: 'tag 1' }
  ],
  error: ''
};

const FrontendComponent = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const { tag, title, titles } = state;

  const handleChange = e => {
    dispatch({
      type: 'field',
      fieldName: e.currentTarget.name,
      payload: e.currentTarget.value
    });
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <ul style={{ width: '150px', margin: '0 auto' }}>
        {titles.map(({ title, tag }, index) => (
          <li key={index}>
            {title} | {tag}
          </li>
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'submit' });
        }}
        style={{ marginTop: '4rem' }}
        onReset={() => dispatch({ type: 'reset' })}
      >
        {/* {error && <p className="error">{error}</p>} */}
        <div>
          <input
            placeholder="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="tag"
            name="tag"
            value={tag}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>submit</button>
          <button type="reset">clear</button>
        </div>
      </form>
    </div>
  );
};

export default FrontendComponent;
