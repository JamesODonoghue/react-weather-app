import React, { FunctionComponent } from 'react';
import './Main.css'
import { Search } from './Search/Search';
import { Locations } from './Locations/Locations';
import { Header } from './Header/Header';

export const Main: FunctionComponent = () =>
    <div className="main">
        <Search />
        <Header/>
        <Locations/>
    </div>
