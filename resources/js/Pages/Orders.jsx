
import Main from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import coffee from '@/Assets/coffee.jpg';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {

    const [queues, setQueues] = useState([])

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

    const changeStatus = (e, state) => {
        axios.post(route('order.status'), {
            id: e.id,
            status: state
        });
    }

    return (
        <>
            <Main>
                <Head title="Orders" />
                <div className='flex justify-between mb-10'>
                    <div className='mt-10'>
                        <h1 className='text-black text-2xl'>Orders</h1>
                        <p className='text-gray'>Wait until your turn</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {
                        queues.map((e, i) => (

                            <div className={`bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col justify-between`} key={e.id}>
                                <h3 className="text-lg font-medium mb-2">#{e.id}</h3>
                                <div>
                                    <p className="text-gray-500 mb-2">{e.name}</p>

                                    <ul className="list-disc list-inside">
                                        {e.order_items.map((item, i) => (
                                            <li key={i} className="mb-1">
                                                {item.product.name} x {item.quantity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex mt-4 justify-between">
                                    <button
                                        className={`rounded-lg px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white bg-brown hover:bg-opacity-80 disabled:bg-gray`} onClick={() => changeStatus(e, 'process')} disabled={e.order_status == 'process'}>
                                        Process
                                    </button>
                                    <button
                                        className={`rounded-lg px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white bg-orange hover:bg-opacity-80 disabled:bg-gray`} onClick={() => changeStatus(e, 'take')} disabled={e.order_status == 'take'}>
                                        Take
                                    </button>
                                    <button
                                        className={`rounded-lg px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white bg-emerald-600 hover:bg-opacity-80 disabled:bg-gray`} onClick={() => changeStatus(e, 'completed')} disabled={e.order_status == 'completed'}>
                                        Complete
                                    </button>
                                    <button
                                        className={`rounded-lg px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white bg-red-600 hover:bg-opacity-80 disabled:bg-gray`} onClick={() => changeStatus(e, 'canceled')} disabled={e.order_status == 'canceled'}>
                                        Cancle
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </Main>
        </>
    );
}