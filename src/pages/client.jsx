import React from 'react';
import { UserCircle, Star } from "@phosphor-icons/react";
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Client = () => {
    return (
        <>
            <Header />
            <main className="p-6 space-y-6">
                <section className="text-center">
                    <h1 className="text-3xl font-bold mb-2">Welcome to Biscato</h1>
                    <p className="text-lg mb-4">Get started</p>
                    <button 
    type="submit" 
    className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-900"
>
    Post Job
</button>

                </section>

                <section className="flex flex-col items-center text-center space-y-4">
                    <UserCircle size={64} className="text-gray-700" />
                    <h2 className="text-2xl font-semibold">Name</h2>
                    <p className="text-lg">Phone: 842567840</p>
                    <p className="text-lg">Serviços: 999</p>
                    <p className="text-lg">Avaliação: 
                        <Star size={22} className="inline text-yellow-500" />
                        <Star size={22} className="inline text-yellow-500" />
                        <Star size={22} className="inline text-yellow-500" />
                        <Star size={22} className="inline text-yellow-500" />
                        <Star size={22} className="inline text-yellow-500" />
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Comments:</h2>
                    <ul className="space-y-4">
                        <li className="bg-gray-100 p-4 rounded shadow-sm">
                            <p className="font-bold">Name - Time</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus corporis neque ipsum facere aut, assumenda voluptas eligendi qui dolores molestias provident numquam deleniti eaque ea facilis sequi ut et? Laboriosam.</p>
                        </li>
                        <li className="bg-gray-100 p-4 rounded shadow-sm">
                            <p className="font-bold">Name - Time</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus corporis neque ipsum facere aut, assumenda voluptas eligendi qui dolores molestias provident numquam deleniti eaque ea facilis sequi ut et? Laboriosam.</p>
                        </li>
                        <li className="bg-gray-100 p-4 rounded shadow-sm">
                            <p className="font-bold">Name - Time</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus corporis neque ipsum facere aut, assumenda voluptas eligendi qui dolores molestias provident numquam deleniti eaque ea facilis sequi ut et? Laboriosam.</p>
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Client;
