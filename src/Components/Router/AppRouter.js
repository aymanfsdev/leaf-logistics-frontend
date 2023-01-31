import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import NewsList from '../../pages/NewsList';
import HomePage from '../../pages/HomePage';

const AppRouter = ({country}) => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/:category" element={<NewsList  country={country}/>}/>
          <Route exact path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};

export default AppRouter;
