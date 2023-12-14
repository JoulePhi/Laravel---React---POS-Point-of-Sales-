import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Implement your registration logic here
        // e.g., send data to server API

        console.log("Registering user...");
    };

    return (
        <>
            <Head title="Register" />
            <div className="min-h-screen bg-orange flex items-center justify-center">
                <div className="bg-white p-10 rounded shadow-lg w-full max-w-md">
                    <h1 className="text-center text-2xl font-bold mb-10 ">
                        Create Your Account
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                className="bg-gray-100 rounded border focus:border-orange focus:ring focus:ring-orange focus:ring-opacity-50 w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-100 rounded border focus:border-orange focus:ring focus:ring-orange focus:ring-opacity-50 w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-100 rounded border focus:border-orange focus:ring focus:ring-orange focus:ring-opacity-50 w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="bg-gray-100 rounded border focus:border-orange focus:ring focus:ring-orange focus:ring-opacity-50 w-full p-2"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-orange text-white font-bold py-2 px-4 rounded shadow-md hover:bg-orange-700 w-full border hover:border-orange hover:bg-lightOrange hover:text-orange"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center mt-6 text-gray-500">
                        Already have an account?{" "}
                        <a href="/login" className="text-orange hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
