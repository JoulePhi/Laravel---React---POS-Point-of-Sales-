import Main from '@/Layouts/DashboardLayout';
import { Head } from "@inertiajs/react";
import TextField from '@/Components/Forms/TextField';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScaleLoader } from 'react-spinners';
import File from '@/Components/Forms/File';
export default function Category({ category }) {
    const name = useRef('');
    const image = useRef();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (category !== undefined) {
            name.current.value = category.name;
        }
    }, [])
    const addCategory = () => {
        setIsLoading(true)
        const formData = new FormData();
        formData.append('name', name.current.value);
        formData.append('image', image.current.files[0]);
        axios.post(
            category === undefined ? route('admin.category') : route('admin.category.edit', category.id),
            formData
        ).then(function (response) {
            console.log(response);
            toast.success('Category successfully saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            if (category === undefined) {
                name.current.value = "";
            }
            setIsLoading(false)
        }).catch(function (error) {
            console.log(error);
            toast.error('Category already exist', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            name.current.value = "";
            setIsLoading(false)
        })
    }

    return (
        <>
            <Head title="Add Category" />
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
                    <File data={image} />
                </div>
                <div className='flex justify-end'>
                    <button className='py-4 text-white bg-orange rounded-full w-1/4 mb-10 mt-4 text-base border border-orange hover:bg-lightOrange hover:text-orange' onClick={() => addCategory()} disabled={isLoading}>{isLoading ? <ScaleLoader color="#704332" height={20} /> : (category === undefined ? 'Add' : 'Save')}</button>
                </div>
            </Main>
        </>
    );
}