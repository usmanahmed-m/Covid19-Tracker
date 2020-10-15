import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SelectCountry({data, value, setValue}) {


  const countries = {...data[0]}

  const newCountries = Object.values(countries).map((country) => country.title)

  newCountries.pop()

  const [inputValue, setInputValue] = useState("");

  
    return (
      <div style={{ color: "#112d4e" }}>
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
          options={newCountries}
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