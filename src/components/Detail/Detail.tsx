import React, { FunctionComponent } from 'react'
import { TemperatureCard, RainCard } from './WeatherDetail/WeatherDetail';
import './Detail.css'
export const Detail: FunctionComponent = () =>
	<div className="detail">
		<TemperatureCard />
		<RainCard />
	</div>