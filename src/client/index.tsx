import React from 'react';
import { App } from './App';

import { createRoot } from 'react-dom/client';

if (process.env.NODE_ENV !== 'production') {
  const script = document.createElement('script');
  script.src = '/live-reload.js';
  document.body.appendChild(script);
}


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
