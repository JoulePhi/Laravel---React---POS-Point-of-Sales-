import { usePage, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Login({ errors }) {

    const { csrf } = usePage().props;

    return (
        <>
            <Head title="Login" />
            <div className="min-h-screen bg-orange flex items-center justify-center">
                <div className="bg-white p-10 rounded shadow-lg w-full max-w-md">
                    <h1 className="text-center text-2xl font-bold mb-10">Login</h1>
                    <form action='/login' method='POST'>
                        <input type="hidden" name="_token" value={csrf} />
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-100 rounded-xl border focus:border-orange  focus:ring-orange focus:ring-1 w-full p-2"
                                name='email'
                                required
                            />
                            <span className="text-red-600" v-if="errors?.user">{errors.email}</span>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-100 rounded-xl border focus:border-orange focus:ring-orange focus:ring-1 w-full p-2"
                                name='password'
                                required
                            />
                            <span className="text-red-600" v-if="errors?.user">{errors.password}</span>
                        </div>
                        <button type="submit" className="bg-orange text-white font-bold py-2 px-4 rounded-xl shadow-md hover:bg-orange-700 w-full hover:bg-lightOrange border border-orange hover:text-orange">
                            Login
                        </button>
                        <div className="flex justify-between items-center mt-6">
                            <a href="#" className="text-orange hover:underline">
                                Forgot password?
                            </a>
                            <a href="/register" className="text-orange hover:underline">
                                Register here
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
