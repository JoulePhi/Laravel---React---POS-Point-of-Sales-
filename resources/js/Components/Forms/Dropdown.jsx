



export default function Dropdown({ list, data, label }) {

    const lists = list?.map((e) => {
        return (
            <option value={e.id}>{e.name}</option>
        );
    })

    return (
        <>
            <div className="relative z-20 bg-transparent">
                <label className="mb-3 block text-black font-poppins">
                    {label}
                </label>
                <select className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-orange  focus:ring-orange focus:ring-1 active:border-orange" ref={data}>
                    {lists}
                </select>

            </div>
        </>
    );
}