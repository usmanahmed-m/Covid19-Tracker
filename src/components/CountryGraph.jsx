import React from "react";
import { Bar } from "react-chartjs-2";


const CountryGraph = ({value, data}) => {


  const countries = {...data[0]}

  const selectedCountry = Object.values(countries).filter((country) => country.title === value)

  const filteredCountry = {...selectedCountry[0]};

  if(filteredCountry){
    delete filteredCountry.code;  
    delete filteredCountry.ourid;  
    delete filteredCountry.source;  
    delete filteredCountry.title;  
  }
  
  const newLabels = Object.keys(filteredCountry)

  const newData = Object.values(filteredCountry)

  const labelData = {
    labels: newLabels,
    datasets: [
      {
        label: value === null ? 'Select Country': value,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: newData,
      },
    ],
  };
  return (
    <div style={{marginTop: '6%'}}>
      <Bar
        data={labelData}
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