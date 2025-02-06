import React, { useState } from 'react';

export function Balanceget({ balance }) {
  

 


  return (
    <div >
      <div className="">
        
          

        <h2 className="text-l font-medium">Your Balance</h2>
        <p className="text-l font-medium mr-4 text-green-600">₹{balance}</p>
      </div>
    </div>
  );
}
