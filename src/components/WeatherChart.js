import React from 'react';
import WeatherLineChart from "./WeatherLineChart";

function WeatherChart({ forecast }) {
  
	return (
		<div>
			<h2 className="chartName">Temperatures in next 7 days</h2>
			<WeatherLineChart forecastData={forecast} />
		</div>
	);
}

export default WeatherChart
