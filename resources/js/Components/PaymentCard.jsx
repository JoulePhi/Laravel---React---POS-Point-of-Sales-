


export default function PaymentCard({ id, selected, payment, onClick }) {


    if (id === selected) {
        return (
            <>
                <div className="bg-lightOrange border-4 border-orange p-2 rounded-2xl w-32 h-32 flex flex-col justify-center items-center cursor-pointer" onClick={() => onClick(id)}>
                    <img src={payment.image} alt="" className='h-12' />
                    <h4>{payment.name}</h4>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="bg-grayButton border-4 border-gray p-2 rounded-2xl w-32 h-32 flex flex-col justify-center items-center cursor-pointer" onClick={() => onClick(id)}>
                <img src={payment.image} alt="" className='h-12' />
                <h4>{payment.name}</h4>
            </div>

        </>
    )
}