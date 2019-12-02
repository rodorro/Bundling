import React from 'react';
const classes = require('./helloWorldComponent.scss');
import { getEnvironmentMode, getApiBase } from './helloworld';

export const HelloWorldComponent: React.FunctionComponent = () => {
  return (
    <div>
      <span className={classes.resultBackground}>Hello World!!!</span>
      <span>ENVIRONMENT MODE: {getEnvironmentMode()}</span>
      <span>API BASE: {getApiBase()}</span>
    </div>
  );
};
