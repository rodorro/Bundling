import React from 'react';
const classes = require('./helloWorldComponent.scss');

export const HelloWorldComponent: React.FunctionComponent  = () => {

  return (
    <div>
      <span className={classes.resultBackground}>Hello World!!!</span>
    </div>
  );
};