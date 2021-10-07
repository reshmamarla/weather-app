import React, { useState } from "react";
import weatherImg from '../assets/windy.svg';
import up from '../assets/up.png';
import down from '../assets/down.png'
import collapse from "../assets/collapse.png";
import expand from "../assets/expand.png";


function WeatherCard({ info }) {
	const[showDetails,setShowDetails] = useState(false)

	const weatherCondition = info.item.condition;
	const forecast = info.item.forecast;
	const weatherLocation = info.location.city;
    const weatherDescp = weatherCondition.text;
	const currentTemp = weatherCondition.temp;
	const date = weatherCondition.date;
	const todayForecast = forecast.find((day) => date.includes(day.date));
	const atmosphere = info.atmosphere;
	const wind = info.wind
	const astronomy = info.astronomy;

	return (
		<div className="weather-card">
			<div className="weather-row">
				<div className="weather-col1">
					<h4 className="weather_location">
						{weatherLocation}&nbsp; &nbsp;&nbsp; &nbsp; {todayForecast.date}
					</h4>
					<div className="displayFlex">
						<img src={weatherImg} className="img_size" alt="weather" />
						<span className="currentTemp">
							{currentTemp}
							<sup>&#8457;</sup>
						</span>
					</div>
					<h6 className="currentStatus">{weatherDescp}</h6>
				</div>
				<div className="weather-col2">
					<div className="displayFlex">
						<div className="displayFlex direction temp-color">
							<img src={up} alt="high" />
							<span className="marginLeft">
								{todayForecast["high"]}
								<sup>&#8457;</sup>
							</span>
						</div>
						<div className="displayFlex direction marginLeft2 temp-color">
							<img src={down} alt="high" />
							<span className="marginLeft">
								{todayForecast["low"]}
								<sup>&#8457;</sup>
							</span>
						</div>
						{!showDetails && (
							<div className="displayFlex marginLeft2 temp-color">
								<img
									src={expand}
									alt="expand"
									onClick={() => setShowDetails(true)}
								/>
							</div>
						)}
						{showDetails && (
							<div className="displayFlex marginLeft2 temp-color">
								<img
									src={collapse}
									alt="collapse"
									onClick={() => setShowDetails(false)}
								/>
							</div>
						)}
					</div>
					{showDetails && (
						<div className="marginTop3 center font">
							<div className="displayFlex center ">
								<div className="color-key">Humidty :</div>
								<span className="marginLeft2">{atmosphere["humidity"]}</span>%
							</div>
							<div className="displayFlex center">
								<div className="color-key">Pressure :</div>
								<span className="marginLeft2">{atmosphere["pressure"]}</span>
							</div>
							<div className="displayFlex center">
								<div className="color-key">Wind speed :</div>
								<span className="marginLeft2">{wind["speed"]}</span>
							</div>
							<div className="displayFlex center">
								<div className="color-key">Sunrise :</div>
								<span className="marginLeft2">{astronomy["sunrise"]}</span>
							</div>
							<div className="displayFlex center">
								<div className="color-key">Sunset :</div>
								<span className="marginLeft2">{astronomy["sunset"]}</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default WeatherCard;
