import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router';


const MainLayou = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayou;