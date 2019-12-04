import React from 'react';
const classes = require('./helloWorldComponent.scss');
import { getEnvironmentMode, getApiBase } from './helloworld';

export const HelloWorldComponent: React.FunctionComponent = () => {
  return (
    <div className={classes.helloWorldDiv}>
      <span className={classes.helloWorldTitle}>Hello World!!!</span>
      <div className={classes.helloWorldEnvironment}>
        <span>ENVIRONMENT MODE: {getEnvironmentMode()}</span>
        <span>API BASE: {getApiBase()}</span>
      </div>
    </div>
  );
};
