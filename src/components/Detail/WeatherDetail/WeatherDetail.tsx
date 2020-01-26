import React, { FunctionComponent } from 'react'
import './WeatherDetail.css';

export const TemperatureCard: FunctionComponent = () =>
	<div className="temp-card">
		<div className="temp-card__header">Today</div>
		<div className="temp-card__main">65</div>
		<div className="temp-card__footer">San Francisco, CA</div>
	</div>

export const RainCard: FunctionComponent = () =>
	<div className="rain-card">

	</div>