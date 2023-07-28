import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  const logout = () => {
    fetch('http://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;
  return (
    <header>
      <NavLink to="/" className="logo">
        MyBlog
      </NavLink>
      <nav>
        {username && (
          <>
            <NavLink to="/create">Create Post</NavLink>
            <a href="/" onClick={logout}>
              Logout ({username})
            </a>
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
