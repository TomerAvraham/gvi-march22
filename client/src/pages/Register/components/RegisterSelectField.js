import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { USER_ROLE } from "../../../constants/constants";

const RegisterSelectField = ({
  label,
  fieldName,
  register,
  errors,
  value,
  handleChange,
}) => {

  // loop through USER_ROLE constant
  const userRoleMap = new Map(Object.entries(USER_ROLE));

  return (
    <FormControl fullWidth size="small" error={Boolean(errors[fieldName])}>
      <InputLabel id={`${fieldName}-label`}>{label}</InputLabel>
      <Select
        labelId={`${fieldName}-label`}
        {...register(fieldName)}
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        {[...userRoleMap].map(([key, value]) => {
          return (
            <MenuItem key={key} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{errors[fieldName]?.message || " "}</FormHelperText>
    </FormControl>
  );
};

export default RegisterSelectField;
