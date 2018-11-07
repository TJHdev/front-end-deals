import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../styled-components/Button';

const RegisterLayout = styled.div`
  background: url('/images/bg.jpg');
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

const RegisterLayoutBox = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  text-align: center;
  width: 30rem;
  padding: var(--l-size) var(--m-size);
`;

export default () => (
  <RegisterLayout>
    <RegisterLayoutBox>
      <Button>Sign up with Google</Button>
      <Button>Sign up with Facebook</Button>
      <p>or</p>

      <hr />
      <Link to="login">
        <button type="button">Already a member?</button>
      </Link>
    </RegisterLayoutBox>
  </RegisterLayout>
);
