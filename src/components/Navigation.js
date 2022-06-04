import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/list">리스트</Link>
      </li>
    </ul>
  );
};

export default Navigation;
