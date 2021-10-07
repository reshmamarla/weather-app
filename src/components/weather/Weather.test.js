import { shallow } from "enzyme";
import Weather from "./Weather";
import React from "react";
import WeatherCard from '../weatherCard/WeatherCard';
import data from "../../weather.json";
import WeatherLineChart from "../weatherLineChart/WeatherLineChart";

const weatherInfo = data.query.results.channel;
const weatherChartInfo = data.query.results.channel.item.forecast;

describe("Rendering of Weather Component", () => {
	it("check if Weather component renders without crashing", () => {
		shallow(<Weather />);
	});

	it("check if header is rendered", () => {
		const wrapper = shallow(<Weather />);
		expect(wrapper.find(".header-name").exists()).toBeTruthy();
	});
});

 describe("check of passing props from weather component", () => {
		it("passing data to component", () => {
			const wrapper = shallow(<Weather />);
			expect(wrapper.find(WeatherCard).props().info).toEqual(weatherInfo);
		});
		it("passing data to weather line chart component", () => {
			const wrapper = shallow(<Weather />);
			expect(wrapper.find(WeatherLineChart).props().forecastData).toEqual(weatherChartInfo);
		});
 });



  
  
