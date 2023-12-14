import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function ButtonIcon({ link, title }) {

    useEffect(() => {
        console.log(link);
    }, [])
    return (
        <>
            <Link
                href={link}
                className="inline-flex items-center justify-center gap-2.5 bg-orange  px-5 text-center text-white hover:bg-opacity-90 lg:px-4 xl:px-5 rounded-full shadow-lg "
            >
                <span>
                    <svg
                        className="fill-white"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff" />
                    </svg>
                </span>
                {title}
            </Link>
        </>
    );
}