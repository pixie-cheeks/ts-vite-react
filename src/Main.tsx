import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.tsx';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Root element was not found');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
