import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigate = useNavigate()
  const { setResetPassword } = useAuth();

  const validatePassword = () => {
    // Check if the passwords meet the criteria
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleChangePassword = () => {
    if (validatePassword()) {
      // Call the API to change the password
      toast.promise(
        axios.get('https://fakestoreapi.com/products'),
        {
          loading: 'Changing password...',
          success: 'Password changed successfully!',
          error: 'Failed to change password, please try again.',
        }
      )
      .then(response => {
        console.log(response.data);
        setResetPassword(false)
        navigate('/login')
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div className="card shadow-lg bg-white p-12 flex flex-col gap-6 items-center justify-between">
        <h1 className="text-2xl">
          Change <span className="text-colortext-primary font-semibold">Password</span>
        </h1>
        <div className="getcode flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-6">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-transparent border-btnbg-primary border w-[300px] h-[45px] outline-none p-2"
              placeholder="New Password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-transparent border-btnbg-primary border w-[300px] h-[45px] outline-none p-2"
              placeholder="Confirm Password"
            />
            <button
              className="bg-btnbg-primary text-white p-2"
              onClick={handleChangePassword}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
