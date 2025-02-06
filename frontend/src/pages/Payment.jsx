import { useSearchParams } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';




export  function Payment() {
    const [searchParams] = useSearchParams();
   
    const [currentDate, setCurrentDate] = useState('');
    const name = searchParams.get("name");
    const trans=searchParams.get("id");
    const amount=searchParams.get("amount");

    useEffect(() => {
      const today = new Date();
      const formattedDate = 
        String(today.getDate()).padStart(2, '0') + '-' + 
        String(today.getMonth() + 1).padStart(2, '0') + '-' + 
        today.getFullYear();
      setCurrentDate(formattedDate);
    }, []);
  return (
 <div    >
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 ">

  <div class=" mx-auto max-w-2xl px-4 2xl:px-0">
  <div className='flex '>
  <svg   xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#c8e6c9" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#4caf50" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
</svg>
      <h2 class="flex-inline mt-2 mx-2 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Payment SuccessFull!</h2>
      </div>
      <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Your payment <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline"></a> is processed Successfully. We have send email with attached Invoice.</p>
      <div class=" space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <dl class="sm:flex  items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
           
      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{currentDate}</dd>
      
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Pay-Now Gateway</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Receiver</dt>
              <dd  class="font-medium text-gray-900 dark:text-white sm:text-end">{name}</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Transcation Id</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{trans} </dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Amount</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end "> ₹ {amount} </dd>
          </dl>
     
      </div>
      <div class="flex items-center space-x-4">
          <a href="/land" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Go To Dashboard</a>
          <a href="/" class="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
    <span  className='font-bold'>
       Logout
    </span>
    <svg  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" class="w-6 h-6 ml-2">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</a>
      </div>
  </div>
</section>
</div>
  )
}
