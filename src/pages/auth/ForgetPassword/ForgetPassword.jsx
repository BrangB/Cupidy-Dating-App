import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoSendSharp } from 'react-icons/io5';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../providers/AuthProvider';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [otpCode, setOtpCode] = useState('');

    const { setResetPassword } = useAuth();

    const validateEmail = (email) => {
        // Regular expression to validate email format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const navigate = useNavigate();
    const location = useLocation();

    const getOTPCode = () => {
        if (email) {
            if (validateEmail(email)) {
                toast.promise(
                    axios.get('https://fakestoreapi.com/products'),
                    {
                        loading: 'Sending OTP...',
                        success: 'OTP code sent to your email!',
                        error: 'Failed to send OTP, please try again.',
                    }
                )
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            } else {
                toast.error('Please enter a valid email address.');
            }
        } else {
            toast.error('Email address is required.');
        }
    };

    useEffect(() => {
        if (otpCode.length === 4) {
            toast.promise(
                axios.post('https://fakestoreapi.com/products', { otp: otpCode }),
                {
                    loading: 'Verifying OTP...',
                    success: 'OTP verified successfully!',
                    error: 'Invalid OTP, please try again.',
                }
            )
            .then(response => {
                console.log(response.data);
                setResetPassword(true)
                navigate('/resetpassword', { state: { from: location.pathname } })
            })
            .catch(error => {
                console.error(error);
            });
        }
    }, [otpCode]);

    const handleOtpChange = (e) => {
        const { value } = e.target;
        if (value.length <= 4) {
            setOtpCode(value);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .9 }}
            className='w-screen h-screen flex items-center justify-center'
        >
            <div className="card shadow-lg bg-white p-12 flex flex-col gap-6 items-center justify-between">
                <h1 className='text-2xl'>Get <span className='text-colortext-primary font-semibold'>OTP</span> code</h1>
                <div className="getcode flex flex-col gap-6 items-center justify-center">
                    <div className='flex gap-2'>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='bg-transparent border-btnbg-primary border w-[300px] h-[45px] outline-none p-2' 
                            placeholder='Enter your email' 
                        />
                        <button className='text-white bg-btnbg-primary px-4' onClick={getOTPCode}>
                            <IoSendSharp className='text-lg' />
                        </button>
                    </div>
                    <input 
                        type="number" 
                        value={otpCode}
                        onChange={handleOtpChange} 
                        className='bg-transparent border-btnbg-primary border w-[170px] h-[45px] outline-none p-2' 
                        placeholder='OTP code' 
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default ForgetPassword;
