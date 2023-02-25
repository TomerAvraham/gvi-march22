import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const INPUT_LABEL = "Expertise";

export default function CountrySelectField({
  expertises = [],
  expertise = "",
  handleExpertiseChange = () => {},
}) {
  const expertiseItems = React.useMemo(
    () =>
      expertises.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      )),
    [expertises]
  );

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small" fullWidth>
        <InputLabel id="simple-select-label">{INPUT_LABEL}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          label={INPUT_LABEL}
          value={expertise}
          onChange={handleExpertiseChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {expertiseItems}
        </Select>
      </FormControl>
    </Box>
  );
}
