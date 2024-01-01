
import Main from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import coffee from '@/Assets/coffee.jpg';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Queues() {

    const [queues, setQueues] = useState([])
    const backgroundColor = {
        pending: 'bg-white',
        process: 'bg-brown',
        take: 'bg-emerald-600',
        completed: 'bg-lightOrange',
        canceled: 'bg-red-600'
    };

    useEffect(() => {
        axios.get(route('queues.lists'))
            .then(e => {
                console.log(e.data);
                setQueues(Object.values(e.data))
            })

        window.Echo.channel("order").listen(".order-created", (data) => {
            axios.get(route('queues.lists'))
                .then(e => {
                    console.log(e.data);
                    setQueues(Object.values(e.data))
                })
        });

    }, [])



    return (
        <>
            <Main>
                <Head title="Queues" />
                <div className='flex justify-between mb-10'>
                    <div className='mt-10'>
                        <h1 className='text-black text-2xl'>Queues</h1>
                        <p className='text-gray'>Wait until your turn</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {
                        queues.map((e, i) => (
                            // { e }
                            <div className={`${backgroundColor[e.order_status]} p-4 rounded-lg shadow-md mb-4`} key={e.id}>
                                <h3 className="text-lg font-medium mb-2">#{e.id}</h3>
                                <p className="text-gray-500 mb-2">{e.name}</p>

                                <ul className="list-disc list-inside">
                                    {e.order_items.map((item, i) => (
                                        <li key={i} className="mb-1">
                                            {item.product.name} x {item.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </Main>
        </>
    );
}