
import { useEffect, useRef, useState } from 'react';
import Dialog from '@/Components/Dialog';


export default function ProductCard({ product, addCart }) {

    const [selectedSugar, setSelectedSugar] = useState(3)
    const [selectedIce, setSelectedIce] = useState(3)
    const [showDialog, setShowDialog] = useState(false)
    const total = useRef(1)
    const closeDialog = () => {
        setShowDialog(false)
    }

    const triggerDialog = () => {
        setShowDialog(true)
    }
    return (
        <>
            {showDialog ? <Dialog closeDialog={closeDialog} data={total} onSave={() => { closeDialog(); addCart(product, total.current.value) }} /> : null}
            <div className='bg-white flex justify-center rounded-2xl flex-col p-6 shadow-md grow-0'>
                <div className='flex '>
                    <img src={`storage/images/${product.image}`} alt="" className='h-36 w-36 object-cover  rounded-2xl mr-6' />
                    <div className='flex-col flex justify-between'>
                        <h4 className='text-black text-lg'>{product.name}</h4>
                        <p className='text-grayText text-base line-clamp-2'>{product.description}</p>
                        <h1 className='text-2xl'>$ {product.price}</h1>
                    </div>
                </div>
                <div className='flex mt-6 justify-between'>
                    <div className='flex flex-col flex-1'>
                        <h4>Sugar</h4>
                        <div className='flex mt-4 justify-evenly items-start'>
                            <div className={`rounded-full  w-10 h-10 flex justify-center items-center p-4 cursor-pointer ${selectedSugar == 1 ? 'border border-brown bg-lightBrown' : 'bg-grayButton'}`} onClick={() => setSelectedSugar(1)}>
                                <h4 className='text-xs'>20%</h4>
                            </div>
                            <div className={`rounded-full  w-10 h-10 flex justify-center items-center p-4 cursor-pointer ${selectedSugar == 2 ? 'border border-brown bg-lightBrown' : 'bg-grayButton'}`} onClick={() => setSelectedSugar(2)} >
                                <h4 className='text-xs'>40%</h4>
                            </div>
                            <div className={`rounded-full  w-10 h-10 flex justify-center items-center p-4 cursor-pointer ${selectedSugar == 3 ? 'border border-brown bg-lightBrown' : 'bg-grayButton'}`} onClick={() => setSelectedSugar(3)}>
                                <h4 className='text-xs'>60%</h4>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <h4>Ice</h4>
                        <div className='flex mt-4 justify-evenly items-start'>
                            <div className={`rounded-full  w-10 h-10 flex justify-center items-center p-4 cursor-pointer ${selectedIce == 1 ? 'border border-brown bg-lightBrown' : 'bg-grayButton'}`} onClick={() => setSelectedIce(1)}>
                                <h4 className='text-xs'>20%</h4>
                            </div>
                            <div className={`rounded-full  w-10 h-10 flex justify-center items-center p-4 cursor-pointer ${selectedIce == 2 ? 'border border-brown bg-lightBrown' : 'bg-grayButton'}`} onClick={() => setSelectedIce(2)} >
                                <h4 className='text-xs'>40%</h4>
                            </div>
                            <div className={`rounded-full  w-10 h-10 flex justify-center items-center p-4 cursor-pointer ${selectedIce == 3 ? 'border border-brown bg-lightBrown' : 'bg-grayButton'}`} onClick={() => setSelectedIce(3)}>
                                <h4 className='text-xs'>60%</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='mt-9 text-base bg-orange py-4 rounded-full font-poppins border border-orange text-white hover:bg-lightOrange  hover:border-orange hover:text-orange' onClick={() => triggerDialog()}>Add To Billing</button>
            </div>
        </>
    );
}