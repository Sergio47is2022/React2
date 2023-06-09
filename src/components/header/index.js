/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={28} />
      </Link>

      <Link to="/register">
        <FaUserAlt size={28} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={28} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={28} />
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
    </Nav>
  );
}
