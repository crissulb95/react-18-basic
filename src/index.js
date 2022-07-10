import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from './adapters/react-router-dom';
import App from './modules/app/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
