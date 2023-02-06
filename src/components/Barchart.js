import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Barchart = (props) => {
  return <Bar options={props.options} data={props.data} />;
};

export default Barchart;
