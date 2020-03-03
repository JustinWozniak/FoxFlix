import React from 'react';
import { withAuthorization } from '../../SignupLogin/Session';
import Landing from '../Landing'
const HomePage = () => (
  <div>
   <Landing/>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
