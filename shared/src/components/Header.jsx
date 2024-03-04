import * as React from 'react';

const Nav = () => {
  return (
    <header>
      <nav
        style={{
          backgroundColor: 'Highlight',
          padding: '0.4em'
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '2em',
            listStyleType: 'none'
          }}
        >
          <li>
            <a href='#'>home</a>
          </li>
          <li>
            <a href='#'>login</a>
          </li>
        </ul>
        <p style={{ color: 'white' }}>From Shared</p>
      </nav>
    </header>
    
  );
};

export default Nav;