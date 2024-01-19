import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CustomDatePicker() {
  return (
    <>
      <div className="w-1/2">
        <h2 className="font-medium text-xl">Kadaluarsa</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker sx={{ width: "100%", filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"  }} views={["month", "year"]} />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </>
  );
}
