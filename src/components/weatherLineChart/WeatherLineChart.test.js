 import data from "../../weather.json";
 import WeatherLineChart from "../weatherLineChart/WeatherLineChart";
 import { LineChart } from "recharts";
 import { shallow } from "enzyme";

 describe('line chart component', () => {
      it.only("check line chart data displays only data for 7 days", () => {
				const forecast = data.query.results.channel.item.forecast;
				const wrapper = shallow(<WeatherLineChart forecastData={forecast} />);
				const lineChartData = wrapper.find(LineChart).props().data;
				expect(lineChartData.length).toEqual(7);
	});
 });
