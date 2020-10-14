import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// const options = ["Global", "Country", "Country1"];

export default function SelectCountry({data}) {


  const countries = {...data[0]}

  const newCountries = Object.values(countries).map((country) => country.title)

  console.log('NewCountries', newCountries);

  const options = ['Option 1', 'Option 2'];

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

    return (
      <div style={{ color: "#112d4e" }}>
        <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              style={{ color: "#112d4e" }}
              {...params}
              label="Select Country"
              variant="outlined"
            />
          )}
        />
      </div>
    );
}