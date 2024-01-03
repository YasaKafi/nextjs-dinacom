import FormEdit from "./form-edit";
import ComboBoxEdit from "./combo-box";

export default function FormBirthDate() {
    const month = [
        { id: 1, name: "Januari" },
        { id: 2, name: "Februari" },
        { id: 3, name: "Maret" },
        { id: 4, name: "April" },
        { id: 5, name: "Mei" },
        { id: 6, name: "Juni" },
        { id: 7, name: "Juli" },
        { id: 8, name: "Agustus" },
        { id: 9, name: "September" },
        { id: 10, name: "Oktober" },
        { id: 11, name: "November" },
        { id: 12, name: "Desember" },
    
      ];
    return(
        <div className="w-full h-16 flex flex-col sm:flex-row gap-4 mt-12">
            <div className="w-1/5">
              <FormEdit defaultValue="5" label="Tanggal" />
            </div>
            <div className="w-1/2">
              <ComboBoxEdit domicile={month} label="Bulan" />
            </div>
            <div className="w-[30%]">
              <FormEdit defaultValue="1945" label="Tahun" />
            </div>
          </div>
    );
}