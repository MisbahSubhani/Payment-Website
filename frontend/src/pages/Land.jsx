import { useState, useEffect } from 'react';
import { Users } from '../components/Users';
import axios from 'axios';
import { Balanceget } from '../components/Balanceget';
import { useNavigate } from 'react-router-dom';
export function Land() {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown visibility
  const [balance, setBalance] = useState(null); // Track balance
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track errors
  const navigate=useNavigate();
  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Fetch balance from the API
  const getBalance = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    try {
      const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      setBalance(response.data.balance.toFixed(2)); // Store the balance in state
      
    } catch (err) {
      setError('Failed to fetch balance.'); // Set error state if API call fails
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="bg-slate-100 h-screen">
      <div className="flex h-screen">
        <section className="justify-between relative mx-auto w-full">
          <nav className="flex items-center justify-between bg-slate-600 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
              <a className="text-3xl font-bold font-heading" href="#">
                <img className="h-9 inline" src="5.png" alt="Logo" />
                <div className="text-white inline italic underline decoration-black">ay Now</div>
              </a>

              <div className="flex items-center space-x-5">
                <button onClick={toggleDropdown}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                <div className="relative inline-block text-left">
                  {isOpen && (
                    <div
                      id="dropdown"
                      className="z-10 mt-2 right-0 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li>
                          <button
                            onClick={getBalance }
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                          
                         
                          <Balanceget balance={balance}/>
                           
                          </button>
                        </li>
                        <li>
                          <button
                             onClick={()=>{
                              navigate("/reset");
                             }} 
                            className="block font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >

                            Change Password
                            
                          </button>
                        </li>
                       
                        <li>
                          <a
                            href="/Contact"
                            className="block font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Contact Us  
                          </a>
                        </li>
                        <li>
                          <a
                            href="/signin"
                            className="block font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          <div className="m-8">
            <Users />
            {/* Display Balance or Loading/Error Messages */}
            {/* <Balanceget balance={balance} /> */}
            {loading && <p>Loading balance...</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </section>
      </div>
    </div>
  );
}
