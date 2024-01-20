import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/esm/Container.js';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <RouterProvider router={router}></RouterProvider>
    </Container>
  
  </React.StrictMode>,
)
