import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const INPUT_LABEL = "Country";

export default function CountrySelectField({
  countries = [],
  country = "",
  handleCountryChange = () => {},
}) {
  const countryItems = React.useMemo(
    () =>
      countries.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      )),
    [countries]
  );

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small" fullWidth>
        <InputLabel id="simple-select-label">{INPUT_LABEL}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          label={INPUT_LABEL}
          value={country}
          onChange={handleCountryChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {countryItems}
        </Select>
      </FormControl>
    </Box>
  );
}
