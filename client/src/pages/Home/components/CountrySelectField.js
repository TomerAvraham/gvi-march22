import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const INPUT_LABEL = "Country";

export default function CountrySelectField({ country, handleCountryChange }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small" fullWidth>
        <InputLabel id="simple-select-label">{INPUT_LABEL}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={country}
          label={INPUT_LABEL}
          onChange={handleCountryChange}
        >
          <MenuItem value={"Israel"}>Israel</MenuItem>
          <MenuItem value={"United States"}>United States</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
