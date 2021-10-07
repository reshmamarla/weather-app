import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
  ResponsiveContainer,
} from "recharts";




function WeatherLineChart({ forecastData }) {
	const data = forecastData.slice(0, 7);
 

	function CustomTooltip({ payload, label, active }) {
		if (active) {
			return (
				<div className="custom-tooltip">
					<p className="label">Day{`: ${payload[0].payload.day}`}</p>
					<p className="label">
						High{`: ${payload[0].payload.low}`}
						<sup>&#8457;</sup>
					</p>
					<p className="label">
						Low{`: ${payload[0].payload.high}`}
						<sup>&#8457;</sup>
					</p>
					<p className="desc">{payload[0].payload.text}</p>
				</div>
			);
		}

		return null;
	}

	return (
		<ResponsiveContainer width="100%" aspect={3}>
			<LineChart
				width={500}
				height={500}
				data={data}
				margin={{
					top: 3,
					right: 30,
					left: 0,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip content={<CustomTooltip />} />
				<Legend />
				<Line
					type="monotone"
					dataKey="high"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="low" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>
	);
}

export default WeatherLineChart;
