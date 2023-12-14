import Main from '@/Layouts/Main';
import { Head } from "@inertiajs/react";
import TextField from '@/Components/Forms/TextField';
import { useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScaleLoader } from 'react-spinners';
export default function Category() {
    const name = useRef('');
    const [isLoading, setIsLoading] = useState(false);
    const [buttonText, setButtonText] = useState("Add");
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    const addCategory = () => {
        setIsLoading(true)
        axios.post(
            route('admin.category'),
            {
                name: name.current.value
            }
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
            name.current.value = "";
            setIsLoading(false)
        }).catch(function (error) {
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
                <TextField data={name} label='Name' />
                <div className='flex justify-end'>
                    <button className='py-4 text-white bg-orange rounded-full w-1/4 mb-10 mt-4 text-base border border-orange hover:bg-lightOrange hover:text-orange' onClick={() => addCategory()} disabled={isLoading}>{isLoading ? <ScaleLoader color="#704332" height={20} /> : 'Add'}</button>
                </div>
            </Main>
        </>
    );
}