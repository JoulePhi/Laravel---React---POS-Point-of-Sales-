import { Link } from "@inertiajs/react";
import icon from '@/Assets/icon.png'
import home from '@/Assets/home.png'
import note from '@/Assets/note.png'
import love from '@/Assets/love.png'
import gear from '@/Assets/gear.png'
import homeS from '@/Assets/home-selected.png'
import noteS from '@/Assets/note-selected.png'
import loveS from '@/Assets/love-selected.png'
import gearS from '@/Assets/gear-selected.png'

export default function SideBar() {
    return (
        <>

            <div className="flex-shrink-0 h-full w-24 bg-white p-4">
                <div className="flex items-center justify-between h-16">
                    <div className="mx-auto bg-lightOrange p-4 mt-10 rounded-2xl">
                        <img src={icon} alt="" />
                    </div>
                </div>
                <div className="mx-auto mt-28 w-8">
                    <Link href="/dashboard"><img src={route().current('dashboard') ? homeS : home} alt="" /></Link>
                </div>
                <div className="mx-auto mt-20 w-8">
                    <Link href="/reports"><img src={route().current('reports') ? noteS : note} alt="" /></Link>
                </div>
                <div className="mx-auto mt-20 w-8">
                    <Link href="/likes"><img src={love} alt="" /></Link>
                </div>
                <div className="mx-auto mt-20 w-8">
                    <Link href="/settings"><img src={route().current('settings') ? gearS : gear} alt="" /></Link>
                </div>
            </div>
        </>
    );
}