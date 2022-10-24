import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftSide from '../components/LeftSideBar/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div class="grid grid-cols-4">

                <div class="">
                    <LeftSide></LeftSide>
                </div>

                <div class="col-span-3">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Main;