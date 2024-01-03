function JobFilter() {
    return (
        <div className="w-1/3 h-[50vh] border border-colorBorder rounded-xl p-[28px]">
            <div className="flex w-full justify-between items-center">
                <h1 className="font-bold text-[24px] text-textPrimary">Filter</h1>
                <h3 className="font-medium text-base text-[#537FE7]">Reset All</h3>
            </div>
            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>
            <h1 className="font-bold text-[20px] text-textPrimary">Berdasarkan dari</h1>
            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>
            <h1 className="font-bold text-[20px] text-textPrimary">Kisaran Gaji</h1>
            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>
            <h1 className="font-bold text-[20px] text-textPrimary">Tipe Pekerjaan</h1>
            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>
            <h1 className="font-bold text-[20px] text-textPrimary">Position</h1>
            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

        </div>
    );
}

export default JobFilter;