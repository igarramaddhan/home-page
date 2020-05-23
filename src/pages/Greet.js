// @flow
import React from 'react';
import {useParams} from 'react-router-dom';

const Greet = () => {
  const {name} = useParams<{name: string}>();
  return <div>Hellow {atob(name)}</div>;
};

export default Greet;
