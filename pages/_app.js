import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

_App.propTypes = {
  Component: PropTypes.elementType.isRequired
};

function _App({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps}/>
    </>
  );
}

export default _App;