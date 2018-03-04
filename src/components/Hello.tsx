import * as React from 'react';

const helloStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif'
};

export interface HelloProps {
  compiler : string;
  framework : string;
}

export const Hello = (props : HelloProps) => (
  <h1 className="app-heading" style={helloStyle}>
    Hello, from {props.compiler} and {props.framework}!
  </h1>
);
