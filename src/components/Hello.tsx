import * as React from 'react';
import { Counter, ICounterProps } from './Counter';

const helloStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif'
};

export interface IHelloProps {
  compiler : string;
  framework : string;
}

export const Hello = (props : IHelloProps) => {
  const counterProps : ICounterProps = {
    startsFrom: 3
  };

  return (
    <section>
      <h1 className="app-heading" style={helloStyle}>
        Hello, from {props.compiler} and {props.framework}!
      </h1>
      <Counter {...counterProps} />
    </section>
  );
}
