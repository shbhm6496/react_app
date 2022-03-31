import React from "react";
import ChartBar from "./ChartBar";
import "../style/Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((data) => data.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          key={data.label}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};
export default Chart;
