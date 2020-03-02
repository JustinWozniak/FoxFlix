import React from 'react';
import { PasswordForgetForm } from './SignupLogin/PasswordForget';
import PasswordChangeForm from './PasswordChange';
import { AuthUserContext, withAuthorization } from './SignupLogin/Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1 className="whiteText">Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
