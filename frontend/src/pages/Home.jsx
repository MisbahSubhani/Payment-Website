
import { BottomWarning } from "../components/BottomWarning"


import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const gotologin=()=>{
        navigate("/signin");
    };
    return (
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/3.png')" }}
      >
    
    
        <div className="flex items-center justify-center min-h-screen">
  
          <section className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 p-8 rounded-lg shadow-lg  border-2 border-zinc-400 border">
         
            <div className="w-full max-w-md">
              <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          
              </a>
             
              <div className="p-6 space-y-4 md:space-y-6">
           
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Welcome To Pay-Now
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                
                   <div>
                   <button type="submit" onClick={gotologin} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                   </div>
                 
                  
                
                  <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                 
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  