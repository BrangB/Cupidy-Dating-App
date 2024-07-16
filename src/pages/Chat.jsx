import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { motion } from 'framer-motion';

const Chat = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      className='w-full'
    >   
      <motion.div
        initial={{ y: '-100px' }}
        animate={{ y: 0 }}
        transition={{ duration: .5 }}
      className='w-full flex items-center justify-center p-2 font-bold bg-btnbg-primary text-colortext-third italic text-xl'
      >
        Cupidy
      </motion.div>
      <div className="searchName w-full flex items-center justify-center mt-4">
        <div className="input flex items-center justify-start border border-gray-300 rounded-2xl w-[90%] h-10 gap-3 p-3">
          <IoIosSearch className='text-lg'/>
          <input type="text" placeholder='Search Name' className=' h-full bg-transparent border-none outline-none caret-btnbg-primary'/>
        </div>
      </div>
      <p className='uppercase p-4 px-6 font-semibold text-colortext-primary text-sm'>Messages</p>
      <div className="messages w-full flex items-center justify-center mt-4">
        <div className="noData text-gray-700">No Messages Yet!</div>
      </div>
    </motion.div>
  )
}

export default Chat