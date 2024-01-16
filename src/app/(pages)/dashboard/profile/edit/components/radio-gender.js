import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default  function RadioGender({value, onChange}) {
  
  return (
    <FormControl>
      <FormLabel
        className="text-xl font-montserrat text-textPrimary font-medium"
        id="demo-row-radio-buttons-group-label"
      >
        Jenis Kelamin
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="mt-4 gap-3 lg:gap-16"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Perempuan"
          className="text-base font-montserrat text-textPrimary font-medium"
        />

        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Laki-Laki"
          className="text-base font-montserrat text-textPrimary font-medium"
        />
      </RadioGroup>
    </FormControl>
  );
}

//  const dataUser = await getUser();
// const gender = dataUser.gender === 0 ? "Laki-Laki" : "Perempuan";