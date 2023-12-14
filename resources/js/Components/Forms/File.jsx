



export default function File({ data }) {
    return (
        <>
            <div>
                <label className="mb-3 block text-black">
                    Attach file
                </label>
                <input
                    type="file"
                    ref={data}
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-lightOrange file:py-3 file:px-5 file:hover:bg-orange file:hover:bg-opacity-10 focus:border-orange active:border-orange disabled:cursor-default disabled:bg-lightOrange "
                />
            </div>
        </>
    );
}