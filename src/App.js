import React, { Fragment } from 'react';
import Main from './pages/Main';

import Global from './styles/global';

export default function App() {
  return (
    <Fragment>
      <Global />
      <Main />
    </Fragment>
  );
}
