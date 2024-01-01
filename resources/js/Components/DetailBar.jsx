import PP from '@/Assets/pp.jpg';
import bell from '@/Assets/bell.png';
import DetailCard from '@/Components/DetailCard';
import { usePage } from '@inertiajs/react';
import { useContext, useEffect, useRef, useState } from 'react';
import CartContext from '@/Contexts/CartContext';
import PaymentDialog from './PaymentDialog';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function DetailBar() {
    const page = usePage().props;
    const user = page.auth.user;
    const carts = useContext(CartContext)
    const [detailCards, setDetailsCard] = useState([])
    const [subTotalPrice, setSubTotalPrice] = useState(0)
    const [discountPrice, setDiscountPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [paymentDialog, showPaymentDialog] = useState(false)
    const [loading, setLoading] = useState(false)
    const name = useRef(0)

    useEffect(() => {
        console.log(carts.carts)
        setDetailsCard([])
        setSubTotalPrice(0)
        carts.carts.map((e, i) => {
            setDetailsCard(a => [...a, <DetailCard key={i} product={e} />])
            setSubTotalPrice(a => a + (e.price * e.total))
        })
    }, [carts.carts])


    const closeDialog = () => {
        showPaymentDialog(false)
    }

    const onSave = (payment) => {
        // setLoading(true)
        if (payment.name == 'Midtrans') {
            axios.post(route('midtrans.pay'), {
                name: name.current.value,
                items: carts.carts
            }).then(data => {
                console.log(data.data)
                setLoading(false)
                window.open(data.data.url)
            })
        } else {
            axios.post(route('order.create'), {
                name: name.current.value,
                items: carts.carts
            })
                .then((e) => {
                    console.log(e.data)
                    setLoading(false)
                    toast.success('Checkout complete!!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    showPaymentDialog(false)
                    carts.carts = []
                })
                .catch(
                    (error) => {
                        setLoading(false)
                        toast.error('Checkout error!!', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                )
        }




    }


    return (
        <>
            {paymentDialog ? <PaymentDialog closeDialog={closeDialog} total={subTotalPrice - discountPrice} onSave={onSave} name={name} loading={loading} /> : null}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='w-1/4 bg-white h-full flex-shrink-0 overflow-y-auto px-10 py-6 scrollbar-hide shadow-lg'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center mb-12'>
                        <div className='flex'>
                            <img src={PP} alt="" className='w-16 h-16 object-cover rounded-2xl mr-6' />
                            <div className='flex flex-col justify-center'>
                                <p className='text-gray'>Admin</p>
                                <h1>{user.name}</h1>
                            </div>
                        </div>
                        <img src={bell} alt="" className='w-6 h-6' />
                    </div>
                    <h1 className='text-2xl mb-6'>Bills</h1>

                    <div className='flex flex-col gap-6 '>
                        {detailCards}
                    </div>
                    <div className='flex justify-between mb-4 mt-10'>
                        <h4>Subtotal</h4>
                        <h4>$ {subTotalPrice}</h4>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <h4>Discount</h4>
                        <h4>$ {discountPrice}</h4>
                    </div>
                    <hr className="border-dashed border-gray-400 w-full " />
                    <div className='flex justify-between mb-4 mt-4'>
                        <h4>Total</h4>
                        <h4>$ {subTotalPrice - discountPrice}</h4>
                    </div>
                    <button className='py-4 text-white bg-orange rounded-full w-full mb-10 mt-4 text-base border border-orange hover:bg-lightOrange hover:text-orange' onClick={
                        () => showPaymentDialog(true)
                    }>Checkout</button>
                </div>
            </div>
        </>
    );
}