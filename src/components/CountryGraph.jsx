import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
  ],
  datasets: [
    {
      label: "Pakistan",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 45, 100, 120, 90],
    },
  ],
};

const CountryGraph = () => {
  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={450}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default CountryGraph;
