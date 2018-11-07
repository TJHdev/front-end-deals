import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ContentContainer from '../styled-components/ContentContainer';

const NavbarHeader = styled.header`
  background-color: var(--blue);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0; /* was $s-sizeS */
`;

const HeaderTitle = styled(Link)`
  color: white;
  text-decoration: none;
`;

const HeaderText = styled.h1`
  margin: 0;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchContainer = styled.div``;

const SearchField = styled.input``;

const NavSearch = styled.button``;

const NavAnchor = styled(Link)``;

export default () => (
  <NavbarHeader>
    <ContentContainer>
      <HeaderContent>
        <HeaderTitle to="/">
          <HeaderText>Bargain Republic</HeaderText>
        </HeaderTitle>
        <NavContent>
          <SearchContainer>
            <SearchField />
            <NavSearch>Search</NavSearch>
          </SearchContainer>
          <NavAnchor to="submit">
            <button type="button">Submit Deal</button>
          </NavAnchor>
          <NavAnchor to="register">
            <button type="button">Join</button>
          </NavAnchor>
        </NavContent>
      </HeaderContent>
    </ContentContainer>
  </NavbarHeader>
);

// <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
// <NavLink to="/help" activeClassName="is-active">Help</NavLink>
