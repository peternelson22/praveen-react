import './style/dark.scss';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import List from './pages/list/List';
import New from './pages/new/New';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/darkModeContext';
import Sellers from './pages/sellers/Sellers';
import Category from './pages/category/Category';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={userInputs} title='Add New User' />}
              />
            </Route>
            <Route path='sellers'>
              <Route index element={<Sellers />} />
              <Route path=':sellerId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={productInputs} title='Add New Seller' />}
              />
            </Route>
            <Route path='category'>
              <Route index element={<Category />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
