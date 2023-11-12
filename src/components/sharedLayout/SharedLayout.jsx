import React, { Suspense } from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

import Loader from 'components/loader/Loader';

import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: #3e8e41;
  }
`;

function SharedLayout() {
  return (
    <div>
      <nav className={css.navigation}>
        <StyledLink to="/" className={css.navigation__item}>
          Home
        </StyledLink>
        <StyledLink to="/movies" className={css.navigation__item}>
          Movies
        </StyledLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
