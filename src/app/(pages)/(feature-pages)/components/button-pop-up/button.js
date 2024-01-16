"use client";

export default function ButtonPopUp() {
    return(
        <div className="flex flex-row gap-4 mt-4">
            <a href="/">
              <button className="border border-primary text-primary rounded-xl px-6 py-3">
                Nanti dulu
              </button>
            </a>
            <a
              href="/dashboard/profile/edit"
            >
              <button className="bg-primary text-white rounded-xl px-6 py-3">
                Lengkapi Sekarang
              </button>
            </a>
          </div>
    )
}