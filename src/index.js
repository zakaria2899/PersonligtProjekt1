import React from 'react';
import ReactDOM from 'react-dom';
import './root.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './app/App';
import { ThemeProvider } from './store/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
