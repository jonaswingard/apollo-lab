import React, { useState } from 'react';

const FrontendComponent = () => {
  const [item, setItem] = useState({ title: '', tag: '' });
  const [values, setValues] = useState([
    { title: 'title one', tag: 'tag one' },
    { title: 'title two', tag: 'tag one' }
  ]);

  const handleChange = ({ target }) => {
    setItem({ [target.name]: target.value });
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <ul style={{ width: '150px', margin: '0 auto' }}>
        {values.map(({ title, tag }, index) => (
          <li key={index}>
            {title} | {tag}
          </li>
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          setValues([...values, item]);
          setItem({ title: '', tag: '' });
        }}
        style={{ marginTop: '4rem' }}
      >
        <div>
          <input
            placeholder="title"
            name="title"
            value={item.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="tag"
            name="tag"
            value={item.tag}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>submit</button>
          <button>clear</button>
        </div>
      </form>
    </div>
  );
};

export default FrontendComponent;
