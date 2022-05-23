import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
