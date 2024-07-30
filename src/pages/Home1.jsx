import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
import ImageX from '../Images/x logo.jpg';
import { PiTriangleThin } from "react-icons/pi";
import { IoInformationCircleOutline } from 'react-icons/io5';

const Home1 = () => {
  return (
    <>
    <div className='w-[80%] bg-[#070808] flex justify-center '>
    <div className='mt-10 mb-5 w-[55%] bg-[#121414]' >
    <p className='mt-3 pl-4 text-gray-500  text-xs'>Payout volume ~ last 30days</p>
    <p className='pl-4 text-sm text-gray-500 mt-0 flex gap-0 items-center'><MdCurrencyRupee className='text-[10px]' /><span className='text-white text-base'>236,695</span>
            <span className='mt-1 text-xs'>.00</span></p>

    <PiTriangleThin className='text-blue-600 ml-5 text-7xl border-b-transparent'/>
     <p className='-mt-3 h-[1px] bg-blue-600'></p>       
    
    <div className='mt-2 bg-[#070808] h-5'>
       
    </div>

    <div className='flex justify-between px-4'>
    <p className='mt-4 text-gray-200 text-sm flex gap-1 items-center'>Activity feed <IoInformationCircleOutline className='text-[10px] mt-0.5' /> <span className=' text-xs text-gray-500'>updated a few seconds ago</span></p>
    <p className='text-[10px] text-blue-400 flex gap-2 items-center'>Show filters<FaAngleDown /></p>
    </div>
    
    <div className='flex flex-col items-center'>
    <div className='mt-10 py-10 w-[80%] bg-gradient-to-r from-gray-900 to-[#121414] flex items-center gap-8'>
        <div className='ml-20'>
        <p className='text-xs text-white '>23 JUL</p>
        <p className='text-xs text-gray-500'>Tuesday</p>
        </div>
        <p className='bg-gray-700 h-8 w-0.5'>|</p>
        <GoPerson className='text-white'/>
        <p className='text-gray-500 text-xs'><span className='text-white'>1</span> contact created</p>
    </div>
    
    <div className='mt-10 py-10 w-[80%] bg-gradient-to-r from-gray-900 to-[#121414] flex items-center gap-8'>
        <div className='ml-20'>
        <p className='text-xs text-white '>9 JUL</p>
        <p className='text-xs text-gray-500'>Tuesday</p>
        </div>
        <p className='bg-gray-700 h-8 w-0.5'>|</p>
        <img src={ImageX} className='w-5' />
        <p className='text-gray-500 text-xs flex items-center'><MdCurrencyRupee /><span className='text-white'>300</span>.00 credited into the account</p>
    </div>

    <div className='mt-10 py-10 w-[80%] bg-gradient-to-r from-gray-900 to-[#121414] flex items-center gap-8'>
        <div className='ml-20'>
        <p className='text-xs text-white '>1 JUL</p>
        <p className='text-xs text-gray-500'>Monday</p>
        </div>
        <p className='bg-gray-700 h-8 w-0.5'>|</p>
        <img src={ImageX} className='w-5' />
        <p className='text-gray-500 text-xs flex items-center'><span className='text-white'>1</span>payout worth<MdCurrencyRupee/><span className='text-white'>2,36,695</span>.00 created</p>
    </div>

    <div className='mt-10 py-10 w-[80%] bg-gradient-to-r from-gray-900 to-[#121414] flex  items-center gap-8'>
        <div className='ml-20'>
        <p className='text-xs text-white '>24 JUN</p>
        <p className='text-xs text-gray-500'>Monday</p>
        </div>
        <p className='bg-gray-700 h-8 w-0.5'>|</p>
        <img src={ImageX} className='w-5' />
        
    </div>

    <button className='my-5 text-gray-200 text-[10px] font-semibold px-4 py-1 bg-gray-800 flex gap-2 items-center'>LOOK FOR OLDER ACTIVITIES <FaArrowDown className='text-[5px]'/></button>
    


    </div>
    <p className='w-12 h-6 bg-gray-800 ml-[80%]'></p>
    
    </div>
    </div>
    </>
  )
}

export default Home1