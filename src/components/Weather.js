import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherChart from "./WeatherChart";
import data from "../weather.json";

function Weather() {
	const weatherInfo = data.query.results.channel;
	const forecast = data.query.results.channel.item.forecast;

	return (
		<div className="weather">
			<div className="header">
				<h1 className="header-name">
					Weather App
				</h1>
			</div>
			<WeatherCard info={weatherInfo} />
			<WeatherChart forecast = {forecast}/>
		</div>
	);
}

export default Weather;
