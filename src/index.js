import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter, Routes,
  Route
} from 'react-router-dom';
import { Todo } from './components/Todo';
import Navigation from './components/Navbar';
import Invoices from './components/Invoices';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />


    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="todo" element={<Todo />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
