import Main from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import CategoryCard from '@/Components/CategoryCard';
import { useEffect, useRef, useState } from 'react';
import ProductCard from '@/Components/ProductCard';
import soda from '@/Assets/soda.png';
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';
import CartContext from '@/Contexts/CartContext';
export default function Dashboard({ categories }) {

    const [categoriesCard, setCategoriesCard] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    const changeSelected = (id) => {

        setCategoriesCard([])
        const newCategories = [<CategoryCard key={0} img={soda} title={'All'} id={0} isSelected={id} onClick={changeSelected} />]
        categories?.map((e, i) => {
            newCategories.push(<CategoryCard key={i + 1} img={`storage/images/${e.image}`} title={e.name} id={e.id} isSelected={id} onClick={changeSelected} />)
        })
        setCategoriesCard(newCategories)
        setLoading(true)
        axios.get(route('dashboard.products'), {
            params: {
                category_id: id
            }
        })
            .then((result) => {
                console.log(result)
                const newProducts = [];
                result.data.map((e, i) => {
                    newProducts.push(<ProductCard key={i} product={e} addCart={addCart} />);
                    setProducts(newProducts)
                })
                setLoading(false)
            })
    }

    useEffect(() => {



        console.log('bootstrap')
        setCategoriesCard([]);
        const newCategories = [<CategoryCard key={0} img={soda} title={'All'} id={0} isSelected={0} onClick={changeSelected} />]
        categories?.map((e, i) => {
            newCategories.push(<CategoryCard key={i + 1} img={`storage/images/${e.image}`} title={e.name} id={e.id} isSelected={0} onClick={changeSelected} />)
        })
        setCategoriesCard(newCategories)
        axios.get(route('dashboard.products'), {
            params: {
                category_id: 0
            }
        })
            .then((result) => {
                const newProducts = [];
                result.data.map((e, i) => {
                    newProducts.push(<ProductCard key={i} product={e} addCart={addCart} />);
                    setProducts(newProducts)
                })
            })
    }, [])



    const [carts, setCarts] = useState([]);
    const addCart = (product, total) => {
        console.log(total)
        product.total = total
        setCarts(a => [...a, product]);
    }

    return (
        <CartContext.Provider value={{
            carts,
            setCarts,
        }}>
            <Main>
                <Head title="Dashboard" />

                <div className='flex justify-between'>
                    <div className='mt-10'>
                        <h1 className='text-black text-2xl'>Welcome To Coffeehouse</h1>
                        <p className='text-gray'>Choose the category</p>
                    </div>

                </div>
                <div className='my-10 flex justify-between'>
                    {categoriesCard}
                </div>
                <h1 className='text-2xl'>Coffee Menu</h1>
                <div>
                    {

                        loading ? (
                            <div className='w-full h-full flex justify-center'>
                                <ScaleLoader color="#704332" height={20} />

                            </div>
                        ) : (
                            <div className='grid grid-cols-2 justify-between mt-6 gap-6'>

                                {products}

                            </div>
                        )

                    }


                </div>

            </Main>
        </CartContext.Provider>
    );
}
