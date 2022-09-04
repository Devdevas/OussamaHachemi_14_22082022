import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee';
import EmployeesList from './pages/EmployeeList';
import { Provider } from 'react-redux';
import store from './utils/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<CreateEmployee />} exact />
          <Route path='/employeesList' element={<EmployeesList />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
