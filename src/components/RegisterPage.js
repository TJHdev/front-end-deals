import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Modal from 'react-modal';

import Button from '../styled-components/Button';

// const RegisterLayout = styled.div`
//   background: url('/images/bg.jpg');
//   background-size: cover;

//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   height: 100vh;
//   width: 100vw;
// `;

// const RegisterLayoutBox = styled.div`
//   background: rgba(255, 255, 255, 0.8);
//   border-radius: 3px;
//   text-align: center;
//   width: 30rem;
//   padding: var(--l-size) var(--m-size);
// `;

const ModalContainer = styled.div`
  background-color: greenyellow;
  color: white;
  width: 30rem;
  outline: none;
  padding: var(--l-size);
  text-align: center;
`;

export default props => (
  <Modal
    isOpen
    contentLabel="Confirm Remove Expense"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <ModalContainer>
      <Button>Sign up with Google</Button>
      <p>or</p>
      <hr />
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('E-mail is not valid!')
            .required('E-mail is required!'),
          username: yup
            .string()
            .min(4, 'Must be at least 4 characters long')
            .required('Username is required!'),
          password: yup
            .string()
            .min(6, 'Password has to be longer than 6 characters!')
            .required('Password is required!')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <hr />
      <Link to="login">
        <button type="button">Already a member?</button>
      </Link>
    </ModalContainer>
  </Modal>
);
