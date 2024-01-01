import { useContext } from "react";
import CartContext from "@/Contexts/CartContext";

export default function DetailCard({ product }) {

    const carts = useContext(CartContext)

    const deleteCart = () => {
        const filteredCarts = carts.carts.filter((e) => e.id != product.id)
        carts.setCarts(filteredCarts)
    }

    return (
        <>
            <div className='flex items-center w-full '>
                <img src={`storage/images/${product.image}`} alt="" className='w-20 h-20 object-cover rounded-2xl mr-6' />
                <div className='w-full'>
                    <div className="flex justify-between">
                        <h4>{product.name}</h4>
                        <span className="cursor-pointer" onClick={() => deleteCart()}>
                            <svg fill="#707278" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
                            </svg>
                        </span>
                    </div>
                    <div className='flex mt-2 justify-between'>
                        <h4>x {product.total}</h4>
                        <h4 className='text-grayText'>$ {product.price}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}