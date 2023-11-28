

import coffee from '@/Assets/coffee.jpg';

export default function DetailCard() {
    return (
        <>
            <div className='flex items-center w-full '>
                <img src={coffee} alt="" className='w-20 h-20 object-cover rounded-2xl mr-6' />
                <div className='w-full'>
                    <h4>Americano Passion Coffee</h4>
                    <div className='flex mt-2 justify-between'>
                        <h4>x 1</h4>
                        <h4 className='text-grayText'>$ 5,30</h4>
                    </div>
                </div>
            </div>
        </>
    );
}