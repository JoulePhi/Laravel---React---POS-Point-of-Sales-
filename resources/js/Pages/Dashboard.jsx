import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';
import SearchBar from '@/Components/SearchBar';
import coffee from '@/Assets/coffee-cup.png';
import soda from '@/Assets/soda.png';
import milk from '@/Assets/milk.png';
import boba from '@/Assets/boba.png';
import ice from '@/Assets/icecream.png';
import dessert from '@/Assets/dessert.png';
import CategoryCard from '@/Components/CategoryCard';
import { useRef, useState } from 'react';
import ProductCard from '@/Components/ProductCard';
import DetailBar from '@/Components/DetailBar';

export default function Dashboard({ auth }) {

    const [isSelected, setIsSelected] = useState(1)

    const changeSelected = (id) => {
        setIsSelected(id)
    }

    return (
        <Main>
            <Head title="Dashboard" />

            <div className='flex relative'>
                <div className='w-8/12 overflow-y-auto'>
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
                </div>
                <DetailBar />
            </div>
        </Main>
    );
}
