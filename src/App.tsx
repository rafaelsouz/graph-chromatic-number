import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import SideMenu from './components/SideMenu';
import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <SideMenu />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
