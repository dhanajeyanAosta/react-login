import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

var port = process.env.port || 3000

render(
    <App />,
    document.getElementById('app')
);