import search from '@/Assets/search.png'


export default function SearchBar() {
    return (
        <div className="mb-3 xl:w-96 flex bg-white p-2">
            <img src={search} alt="" className='aspect-square w-6 h-6' />
            <input
                type="search"
                className="relative m-0 block w-full min-w-0 flex-auto rounded-xl border-none bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search" />
        </div>
    );
}