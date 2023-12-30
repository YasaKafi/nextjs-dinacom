'use client'

function ContactForm() {
    return (
        <div className="w-full h-full bg-white border border-[#DDDDDD] rounded-xl p-[50px] shadow-md">
            <h1 className="font-bold text-textPrimary text-xl ">Kontak Kami</h1>
            <input
                required
                type="text"
                placeholder="Nama"
                className="contact-form h-[50px] rounded-full"
                value={""}
                onChange={null}
            />
            <input
                required
                type="text"
                placeholder="Email"
                className="contact-form h-[50px] rounded-full"
                value={""}
                onChange={null}
            />
            <textarea
                required
                placeholder="Pesan"
                className="contact-form h-[200px] rounded-xl"
                value={""}
                onChange={null}
            />
            <button
                className="bg-primary w-full h-[50px] rounded-full  text-white">
                Send
            </button>
        </div>
    );
}

export default ContactForm;