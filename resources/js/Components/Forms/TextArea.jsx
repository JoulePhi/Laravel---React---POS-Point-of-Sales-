



export default function TextArea({ label, data }) {
    return (
        <>
            <div>
                <label className="mb-3 block text-black">
                    {label}
                </label>
                <textarea
                    rows={1}
                    ref={data}
                    placeholder={label}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-orange  focus:ring-orange focus:ring-1 active:border-orange disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-orange"
                ></textarea>
            </div>
        </>
    );
}