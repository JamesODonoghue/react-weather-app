import React, { FunctionComponent } from 'react';
import { LocationCard } from './LocationCard/LocationCard';
import './Locations.css';

export const Locations: FunctionComponent = () =>
    <div className="locations">
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
    </div>