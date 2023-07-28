import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);
  return (
    <header>
      <NavLink to="/" className="logo">
        MyBlog
      </NavLink>
      <nav>
        {username && (
          <>
            <NavLink to="/">Create Post</NavLink>
            <a href="/">Logout</a>
          </>
        )}

        {!username && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
