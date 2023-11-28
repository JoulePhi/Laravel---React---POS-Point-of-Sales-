



export default function CategoryCard({ img, title, isSelected, id, onClick }) {

    if (isSelected == id) {
        return (
            <>
                <div className='container p-6 bg-lightOrange rounded-2xl w-32 flex flex-col justify-center items-center border border-orange hover:cursor-pointer shadow-md' >
                    <img src={img} alt="" />
                    <p className='text-brown mt-4'>{title}</p>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='container p-6 bg-white rounded-2xl w-32 flex flex-col justify-center items-center border border-gray hover:cursor-pointer shadow-md' onClick={() => onClick(id)}>
                <img src={img} alt="" />
                <p className='text-grayText mt-4'>{title}</p>
            </div>
        </>
    );
}