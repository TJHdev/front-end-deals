import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import Button from '../styled-components/Button';

const LoginLayout = styled.div`
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

const LoginLayoutBox = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  text-align: center;
  width: 30rem;
  padding: var(--l-size) var(--m-size);
`;

export default () => (
  <LoginLayout>
    <LoginLayoutBox>
      <Button>Login with Google</Button>
      <hr />
      <Link to="register">
        <button type="button">Not joined yet? Sign up</button>
      </Link>
    </LoginLayoutBox>
  </LoginLayout>
);
