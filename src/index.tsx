import * as React from 'react';
import * as ReactDom from 'react-dom';

require('./index.css');

import { Hello } from './components/Hello';

ReactDom.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);
