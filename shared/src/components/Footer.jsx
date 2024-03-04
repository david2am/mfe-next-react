import * as React from 'react';

const Nav = () => {
  return (
    <footer>
      <nav
        style={{
          backgroundColor: 'ThreeDHighlight',
          padding: '0.2em'
        }}
      >
        <ul
          style={{
            listStyleType: 'none'
          }}
        >
          <li>
            <a href='#'>Twitter</a>
          </li>
          <li>
            <a href='#'>Instagram</a>
          </li>
        </ul>
        <p style={{ color: 'white' }}>From Shared</p>
      </nav>
    </footer>
    
  );
};

export default Nav;