import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';
import CategoryCard from '@/Components/CategoryCard';
import { useEffect, useRef, useState } from 'react';
import ProductCard from '@/Components/ProductCard';
import coffee from '@/Assets/coffee-cup.png';
import soda from '@/Assets/soda.png';
import milk from '@/Assets/milk.png';
import boba from '@/Assets/boba.png';
import ice from '@/Assets/icecream.png';
import dessert from '@/Assets/dessert.png';
export default function Dashboard({ auth, categories }) {

    const [isSelected, setIsSelected] = useState(categories[0].id)
    const [categoriesCard, setCategoriesCard] = useState([])
    const changeSelected = (id) => {
        setIsSelected(id)
        console.log({ id: id })
        console.log({ isSelected: isSelected })

    }

    useEffect(() => {
        setCategoriesCard([]);
        categories?.map((e, i) => {
            setCategoriesCard((state) => [...state, <CategoryCard key={i} img={`storage/images/${e.image}`} title={e.name} id={e.id} isSelected={isSelected} onClick={changeSelected} />])
        })
    }, [])


    return (
        <Main>
            <Head title="Dashboard" />

            <div className='flex justify-between'>
                <div className='mt-10'>
                    <h1 className='text-black text-2xl'>Welcome To Coffeehouse</h1>
                    <p className='text-gray'>Choose the category</p>
                </div>

            </div>
            <div className='my-10 flex justify-between'>
                <CategoryCard img={soda} title='All' id='1' isSelected={isSelected} onClick={changeSelected} />
                <CategoryCard img={coffee} title='Coffee' id='2' isSelected={isSelected} onClick={changeSelected} />
                <CategoryCard img={milk} title='Milky' id='3' isSelected={isSelected} onClick={changeSelected} />
                <CategoryCard img={boba} title='Boba' id='4' isSelected={isSelected} onClick={changeSelected} />
                <CategoryCard img={ice} title='Ice Cream' id='5' isSelected={isSelected} onClick={changeSelected} />
                <CategoryCard img={dessert} title='Dessert' id='6' isSelected={isSelected} onClick={changeSelected} />
            </div>
            <h1 className='text-2xl'>Coffee Menu</h1>
            <div className='grid grid-cols-2 justify-between mt-6 gap-6'>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>


        </Main>
    );
}
