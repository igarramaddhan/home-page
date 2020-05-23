// @flow
import React from 'react';
import {Link} from 'react-router-dom';

const Generate = () => {
  const [name, setName] = React.useState('');
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      {name !== '' && (
        <Link to={btoa(name)}>
          {window.location.hostname}/{btoa(name)}
        </Link>
      )}
    </div>
  );
};

export default Generate;
