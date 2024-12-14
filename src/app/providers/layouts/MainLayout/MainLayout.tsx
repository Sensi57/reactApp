import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from '../../../../widgets/Header/Header';

const MainLayout: React.FC = () => {
  return (
          <div >
            <Header />
            <div><Outlet /></div>
          </div>
        )
}

export default MainLayout;
