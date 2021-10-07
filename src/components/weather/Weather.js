import React from "react";
import WeatherCard from "../weatherCard/WeatherCard";
import data from "../../weather.json";
import WeatherLineChart from "../weatherLineChart/WeatherLineChart";

function Weather() {
	const weatherInfo = data.query.results.channel;
	const forecast = data.query.results.channel.item.forecast;

	return (
		<div className="weather">
			<div className="header">
				<h1 className="header-name">Weather App</h1>
			</div>
			<WeatherCard info={weatherInfo} />
			<WeatherLineChart forecastData={forecast} />
		</div>
	);
}

export default Weather;
