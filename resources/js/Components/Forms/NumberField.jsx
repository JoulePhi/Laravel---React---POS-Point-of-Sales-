


export default function NumberField({ label, data, onChange }) {
    return (
        <>
            <div>
                <label className="mb-3 block text-black font-poppins">
                    {label}
                </label>
                <input
                    type="number"
                    placeholder={label}
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-orange  focus:ring-orange focus:ring-1 disabled:cursor-default  "
                    ref={data}
                    defaultValue={1}
                    onChange={onChange}
                />
            </div>
        </>
    );
}