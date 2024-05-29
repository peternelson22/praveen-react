import './style/dark.scss';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import List from './pages/list/List';
import New from './pages/new/New';
import { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/darkModeContext';
import Sellers from './pages/sellers/Sellers';
import Category from './pages/category/Category';
import ProtectedRoute from './pages/home/ProtectedRoute';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='admin'>
            <Route index element={<List path='admin' />} />
            <Route path=':adminId' element={<Single />} />
          </Route>
          <Route path='users'>
            <Route index element={<List path='users' />} />
            <Route path=':userId' element={<Single />} />
          </Route>
          <Route path='sellers'>
            <Route index element={<List path='sellers' />} />
            {/* <Route path=':sellerId' element={<Single />} />
            <Route
              path='new'
              element={<New inputs={userInputs} title='Add New Seller' />}
            /> */}
          </Route>
          <Route path='category'>
            <Route index element={<List path='category' />} />
            {/* <Route path=':categoryId' element={<Single />} />
            <Route
              path='new'
              element={<New inputs={productInputs} title='Add New Category' />}
            /> */}
          </Route>
          <Route path='catalog'>
            <Route index element={<List path='catalog' />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
