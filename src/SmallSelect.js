import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const SmallSelect = ({ name, value, onChange }) => {
  return (
    <Box sx={{ minWidth: 180, maxWidth: 200, margin: 3 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor={name}>
          Amount
        </InputLabel>
        <NativeSelect
          name={name}
          value={value}
          onChange={onChange}
          inputProps={{ id: name }}
          sx={{ height: "100%", fontSize: "2vh" }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default SmallSelect;
