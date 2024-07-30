import React,{ useState } from 'react';
import { LuHome } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCopy } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiPrinterDuotone } from "react-icons/pi";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineTextSnippet } from "react-icons/md";
import Image from "../Images/logo.webp";
import RzxImage from "../Images/rzx logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {

     const [selectedButton,setSelectedButton] = useState('home');

     const handleSelect =(value)=>{
      setSelectedButton(value)
     }
  return (
    <>
    <div className='w-[20%] bg-[#121414]'>
    <img src={RzxImage} alt="logo" className='h-28 w-full'/> 
    <Link to='/' className={`${selectedButton === 'home' ? 'bg-[#827f7a]' : " "} w-[90%] h-7 mt-2 ml-6 pl-4 text-xs text-gray-300 flex gap-2 items-center rounded-lg`}
      onClick={()=>handleSelect('home')}><LuHome />Home
      </Link>

      <Link to='/home' className={`${selectedButton === 'payout' ? 'bg-[#827f7a]' : " "} w-[90%] h-7 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2  items-center rounded-lg`}
      onClick={()=>handleSelect('payout')} >
      <GoArrowUpRight />Payouts  
      </Link>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2  items-center rounded-lg'>
        <IoMdCopy />Account Statement
      </div>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <MdOutlinePersonOutline />Contacts
      </div>

      <div className='w-[90%] h-5 mt-6 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <MdCurrencyRupee  />Loans<span className='text-[10px] text-white ml-1 bg-green-600 px-3 rounded-xl'>New</span>
      </div>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <MdOutlineContactPage />Vendor Payment
      </div>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <span className='text-xs text-white ml-4 bg-green-600 px-2 rounded-md'>New</span>Invoice Approval
      </div>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <MdOutlineTextSnippet  />Tax Payment
      </div>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <FaLocationArrow  />Payout Links
      </div>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <PiPrinterDuotone  />Payroll
      </div>

      <div className='w-[90%] h-5 mt-2 ml-6 pl-4 text-xs text-gray-400 flex gap-2 items-center rounded-lg'>
      <HiOutlineDocumentReport  />Reports
      </div>

    </div>
    </>
  )
}

export default Navbar