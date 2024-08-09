import React, { useState, useRef } from 'react';
import { Footer } from '../components/footer';
import HeaderClient from '../components/header/headerClient';

const backgroundImageUrl = '/imagem 111.jpg';

export const OtpPage = () => {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {

        if (e.key === 'Backspace' && index > 0 && !otp[index]) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <>
            <HeaderClient />

            <div
                className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Código de Confirmação</h2>
                    <p className="text-gray-600 mb-4">Insira o código de 6 dígitos enviado para seu e-mail ou telefone.</p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-6 gap-4">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={value}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => inputRefs.current[index] = el}
                                    className="w-full h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Confirmar
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default OtpPage;
