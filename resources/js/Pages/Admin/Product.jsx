
import Main from '@/Layouts/Main';
import { Head } from "@inertiajs/react";
import TextField from '@/Components/Forms/TextField';
import Dropdown from '@/Components/Forms/Dropdown';
import NumberField from '@/Components/Forms/NumberField';
import TextArea from '@/Components/Forms/TextArea';
import File from '@/Components/Forms/File';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScaleLoader } from 'react-spinners';
export default function Product({ categories, product }) {
    const name = useRef();
    const category = useRef();
    const quantity = useRef();
    const price = useRef();
    const description = useRef();
    const image = useRef();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (product !== undefined) {
            name.current.value = product.name;
            category.current.value = product.category_id;
            quantity.current.value = product.quantity;
            price.current.value = product.price;
            description.current.value = product.description;
        }
    }, [])

    const addProducts = () => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('name', name.current.value);
        formData.append('category_id', category.current.value);
        formData.append('price', price.current.value);
        formData.append('quantity', quantity.current.value);
        formData.append('description', description.current.value);
        formData.append('image', image.current.files[0]);
        axios.post(
            product !== undefined ? route('admin.product.edit', product.id) : route('admin.product'),
            formData
        ).then(function (response) {
            console.log(response)
            toast.success('Product successfully saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            if (product === undefined) {
                name.current.value = "";
                price.current.value = "";
                quantity.current.value = "";
                description.current.value = "";
            }
            setIsLoading(false)
        }).catch(function (error) {
            toast.error(error, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsLoading(false)
        })
    }

    return (
        <>
            <Head title="Add Product" />
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
            <Main>
                <h1 className='text-2xl mb-6'>Add Product</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <TextField data={name} label='Name' />
                    <Dropdown list={categories} label='Category' data={category} />
                    <NumberField data={quantity} label='Quantity' />
                    <NumberField data={price} label='Price' />
                    <TextArea label='Description' data={description} />
                    <File data={image} />
                </div>
                <div className='flex justify-end'>
                    <button className='py-4 text-white bg-orange rounded-full w-1/4 mb-10 mt-4 text-base border border-orange hover:bg-lightOrange hover:text-orange' onClick={() => addProducts()} disabled={isLoading}>{isLoading ? <ScaleLoader color="#704332" height={20} /> : (product === undefined ? 'Add' : 'Save')}</button>
                </div>
            </Main>
        </>
    );
}