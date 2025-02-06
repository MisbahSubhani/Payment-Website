import React  from "react";



export function Contact(){



    return(
     <div >
        <section className="bg-gray-300">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a className="text-3xl font-bold font-heading pb-4" href="#">
                    <img className="h-9 inline" src="5.png" alt="Logo" />
                    <div className="inline italic underline decoration-black">ay Now</div>
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Feed-Back
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" >
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                               Your Query
                                <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </label>
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
                    </form>
                </div>
            </div>
        </section>
     </div>
    )
}