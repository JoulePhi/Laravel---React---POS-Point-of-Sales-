import { useState, useRef } from "react";
import NumberField from "./Forms/NumberField";
import PaymentCard from "./PaymentCard";
import TextField from "./Forms/TextField";
import cashImage from '@/Assets/cash.svg'
import midtrans from '@/Assets/midtrans.svg'

import { ScaleLoader } from 'react-spinners';
export default function PaymentDialog({ closeDialog, onSave, total, name, loading }) {
    const [selectedPayment, setSelectedPayment] = useState(0)
    const cash = useRef(0)
    const change = useRef(0)

    const paymentMethods = [
        {
            name: 'Cash',
            image: cashImage
        },
        {
            name: 'Midtrans',
            image: midtrans
        },
    ]

    const changeSelected = (id) => {
        setSelectedPayment(id)
    }

    const calculateChange = () => {
        change.current.value = cash.current.value > 0 ? cash.current.value - total : 0
    }
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray rounded-t">
                            <h4 className="text-3xl font-semibold">
                                Payment Methods
                            </h4>
                            <h4 className="text-3xl font-semibold text-grayText">
                                {total}
                            </h4>
                        </div>
                        {/*body*/}

                        <div className="relative p-6 ">
                            <div className="flex justify-around">
                                <PaymentCard id={0} selected={selectedPayment} payment={paymentMethods[0]} onClick={changeSelected} />
                                <PaymentCard id={1} selected={selectedPayment} payment={paymentMethods[1]} onClick={changeSelected} />
                            </div>
                            <div className="mb-2">
                                <TextField label={'Name'} data={name} />
                            </div>
                            {
                                selectedPayment == 0 ? <>
                                    <NumberField label={'Cash'} data={cash} onChange={calculateChange} />
                                    <NumberField label={'Change'} data={change} />
                                </> : null
                            }
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => closeDialog()}
                            >
                                Close
                            </button>
                            <button
                                className="bg-orange text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-lightOrange hover:text-orange border border-orange"
                                type="button"
                                onClick={() => onSave(paymentMethods[selectedPayment])}
                                disabled={loading}
                            >
                                {loading ? <ScaleLoader color="#704332" height={20} /> : 'Pay'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );

}