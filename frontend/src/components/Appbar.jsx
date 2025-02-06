
export const Appbar = () => {
    return (<div className="shadow h-14 flex justify-between bg-gray-500">
        
        <div className="flex flex-col justify-left h-full ml-4  ">
         
        {/* <div  className="text-3xl pt-2 justify-between text-black-600 font-extrabold ">
        Pay-Now
        </div> */}
        <span class="text-3xl pt-2 justify-between text-black-600 font-extrabold before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-gray-800 relative inline-block">
    <span class="relative text-white">Pay-Now</span>
  </span>
        </div>
        <div className="flex">
            <div className=" font-medium flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div >
                <button  class="font-medium   rounded-full flex flex-col justify-center h-full text-xl...">U</button>
                </div>
            </div>
        </div>
    </div>
    )
}