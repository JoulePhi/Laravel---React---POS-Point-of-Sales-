import PP from '@/Assets/pp.jpg';
import bell from '@/Assets/bell.png';
import DetailCard from '@/Components/DetailCard';

export default function DetailBar() {
    return (
        <>
            <div className='w-1/4 bg-white h-full flex-shrink-0 overflow-y-auto px-10 py-6 scrollbar-hide shadow-lg'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center mb-12'>
                        <div className='flex'>
                            <img src={PP} alt="" className='w-16 h-16 object-cover rounded-2xl mr-6' />
                            <div className='flex flex-col justify-center'>
                                <p className='text-gray'>Admin</p>
                                <h1>John Doe</h1>
                            </div>
                        </div>
                        <img src={bell} alt="" className='w-6 h-6' />
                    </div>
                    <h1 className='text-2xl mb-6'>Bills</h1>

                    <div className='flex flex-col gap-6 '>
                        <DetailCard />
                        <DetailCard />
                        <DetailCard />
                    </div>
                    <div className='flex justify-between mb-4 mt-10'>
                        <h4>Subtotal</h4>
                        <h4>$ 19,79</h4>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <h4>Discount</h4>
                        <h4>$ 2,9</h4>
                    </div>
                    <hr className="border-dashed border-gray-400 w-full " />
                    <div className='flex justify-between mb-4 mt-4'>
                        <h4>Total</h4>
                        <h4>$ 22,29</h4>
                    </div>
                    <button className='py-4 text-white bg-orange rounded-full w-full mb-10 mt-4 text-base border border-orange hover:bg-lightOrange hover:text-orange'>Checkout</button>
                </div>
            </div>
        </>
    );
}