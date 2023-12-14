


export default function TextField({ label, data }) {
    return (
        <>
            <div>
                <label className="mb-3 block text-black font-poppins">
                    {label}
                </label>
                <input
                    type="text"
                    placeholder={label}
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-orange  focus:ring-orange focus:ring-1 disabled:cursor-default"
                    ref={data}
                />
            </div>
        </>
    );
}