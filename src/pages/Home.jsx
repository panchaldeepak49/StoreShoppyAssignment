import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { PiConfettiThin } from "react-icons/pi";
import ImageX from '../Images/x logo.jpg';
import { FaCircleCheck } from "react-icons/fa6";
import Image from '../Images/bank.jpg'
import { RxCross2 } from "react-icons/rx";


const Home = () => {
  return (
    <>
    <div className='w-[80%] bg-[#070808] flex justify-center '>
        <div className='mt-20 w-[55%] bg-[#070808]' >
            <div className='flex gap-2'>
            <img src={ImageX} className='w-5' />
            <p className='flex gap-2 items-center text-xs font-semibold text-gray-400'>RazorpayX Lite <span className='text-[10px] text-gray-600'>as of a few seconds ago</span><FcProcess className='text-gray-400'/> </p>
            </div>
            <div className='flex gap-48 items-center'>
            <p className='text-sm text-gray-500 mt-2 flex gap-0 items-center'><MdCurrencyRupee className='mt-1' /><span className='text-white font-semibold text-xl'>100</span>
            <span className='mt-1.5 font-semibold'>.09</span></p>
            <p className='mt-3 text-blue-500 text-xs'>+ Add balance</p>
            </div>

            <div className='mt-6 px-4 py-2 border border-gray-500 rounded-md text-gray-500 text-sm flex gap-2 items-center'>
              <PiConfettiThin className='text-orange-400' />  You're all caught up.<span className='text-xs'>There are no more items pending on you.</span> 
            </div>
           
           <p className='mt-4 text-xs text-gray-300 font-semibold'>Onboarding updates<span className='text-gray-600 text-[10px] ml-1'>(1)</span></p>
            <div className='mt-1 bg-[#121414] rounded-md border border-transparent flex gap-2 '>
                <img src={Image} alt='image' className='h-28' />
                <div>
                <p className='text-gray-100 font-semibold mt-2'>Open your RazorpayX account.</p>
                <p className='text-[8px] text-gray-500'>Don't let branch come in the way of your growth.Apply for your RazorpayX account with a few basic details.</p>
                <div className='flex gap-1 mt-2'>
                <p className='h-0.5 w-[25%] bg-[#5ee6d8]'></p>
                <p className='h-0.5 w-[25%] bg-green-100'></p>
                <p className='h-0.5 w-[25%] bg-green-100'></p>
                <p className='h-0.5 w-[25%] bg-green-100'></p>
                </div>
                <div className='flex justify-between items-center px-2'>
                <button className='mt-2 flex gap-1 items-center bg-blue-500 px-3 py-1 rounded-sm text-xs text-gray-300'>Start application
                    <FaArrowRight className='text-[10px] mt-0.5'/>
                </button>
                <p className='text-xs text-gray-500'>0/4</p>
                </div>
                </div>
            </div>

            <div className='bg-[#121414] mt-4 border-t-2 border-t-green-800 h-28 flex gap-10'>
                <div className='ml-4 mt-2'>
                <p className='text-gray-200 font-semibold'>Amazon Instant</p>
                <p className='text-gray-200 font-semibold'>Settlements</p>
                </div>
                <div className='mt-3 flex gap-3'>
                    <div>
                    <input type='radio' className='bg-red-400' checked={true}></input>
                    </div>
                    <div>
                    <p className='text-gray-400 text-xs'>Let's get you started </p>
                    <p className='text-gray-400 text-xs'>Complete your application and get instant access to your Amazon payout  </p>
                    <button className='mt-1 text-[10px] text-gray-200 px-3 py-1.5 bg-blue-500'>APPLY NOW</button>
                    </div>
                </div>
            </div>

            <div className='bg-[#121414] border-t-2 border-t-green-800  flex gap-10'>
                <div className='ml-4 mt-2'>
                <p className='text-gray-200 font-semibold'>Creating payouts </p>
                <p className='text-gray-200 font-semibold'>in Live mode</p>
                </div>
                <div className='my-3 flex gap-3'>
                    <div className='mt-1 flex flex-col gap-2'>
                    {/* <p className='w-4 h-4 bg-gray-700 rounded-full'></p>     */}
                    <FaCircleCheck className='text-gray-700'/>
                   <input type='radio' className='bg-red-400' checked={true}></input>
                   </div>
                   <div>
                    <p className='text-gray-400 font-semibold text-sm'>Add balance <span className='text-xs'>to create payouts in Live mode</span> </p>
                    <p className='h-[1px] bg-gray-700'></p>
                    <p className='text-gray-200 font-semibold text-sm'>Create payout</p>
                    <p className='text-gray-400 text-xs'>There are multiple ways in which you can create the first payout:  </p>
                    <div className='flex gap-2'>
                    <button className='mt-1 text-[10px] font-semibold text-gray-200 px-3 py-1 bg-blue-500'>MAKE A PAYOUT</button>
                    <button className='mt-1 text-[10px] font-semibold text-gray-200 px-3 py-1 bg-[#2c3030]'>SHOW APPS FOR ME</button>
                    <button className='mt-1 text-[10px] font-semibold text-gray-200 px-3 py-1 bg-[#2c3030]'>API PAYOUTS</button>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className='my-4 bg-[#121414]  border-[1.5px] border-blue-700 flex items-center gap-9'>
                <div className=' w-[15%]'>
                <img src='' />
                
                </div>
                <div className='my-3 ml-4'>
                    <div className='flex gap-2'>
                    <p className='w-1 h-3 bg-green-400 transform rotate-[150deg]'></p>
                    <p className='text-white font-semibold text-xs'>Automate Bookkeeping For Payouts </p>
                    </div>
                    <p className='text-gray-500 font-semibold text-[9px]'>Close your books 60% faster and with better accuracy by  </p>
                    <p className='text-gray-500 font-semibold text-[9px]'>automating bookkeeping for your Payouts.</p>
                </div>
                <div>
                <button className='flex gap-2 items-center mt-1 text-[10px] text-blue-700 px-3 py-1 border border-blue-700 rounded-md'>Connect Zoho Books
                    <FaArrowRight />
                </button>
                
                </div>
                <RxCross2 className=' text-gray-700 text-[10px] -mt-12'/>
            </div>
       
        </div>
    </div>
    </>
  )
}

export default Home