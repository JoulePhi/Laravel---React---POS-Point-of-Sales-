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
                className="flex items-center justify-center bg-orange   p-4 text-center text-white hover:bg-opacity-90  rounded-full shadow-lg "
            >
                <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff" />
                </svg>
                {/* {title} */}
            </Link>
        </>
    );
}