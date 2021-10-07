import { shallow } from "enzyme";
import WeatherCard from "../weatherCard/WeatherCard";
import data from "../../weather.json";

const weatherInfo = data.query.results.channel;

describe("check toggle of weather details", () => {
	it("check toggle click", () => {
		const wrapper = shallow(<WeatherCard info={weatherInfo} />);
		expect(wrapper.find("#arrowId").prop("src")).toEqual("expand.png");

		wrapper.find("#arrowId").simulate("click");
		expect(wrapper.find("#arrowId").prop("src")).toEqual("collapse.png");
	});
	it("check weather details on click toggle", () => {
		const wrapper = shallow(<WeatherCard info={weatherInfo} />);
		expect(wrapper.find("#weatherDetails").exists()).toBeFalsy();
		wrapper.find("#arrowId").simulate("click");
		expect(wrapper.find("#weatherDetails").exists()).toBeTruthy();
	});
});
