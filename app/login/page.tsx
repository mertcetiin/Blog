import React from 'react'

function LoginIndex() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Welcom Back!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please sign in to your account
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-3">
                    <button className="w-14 h-14 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-200 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                        <svg className='w-8 h-8' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="none"></path>
                                <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"></path>
                                <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"></path>
                                <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"></path>
                                <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"></path>
                                <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"></path>
                                <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"></path>
                                <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4">
                                </path>
                            </g>
                        </svg>
                    </button>
                </div>

                <form className="mt-8 space-y-6" >
                    <input type="hidden" name="remember" />
                    <div className="relative">
                        <label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                        <input
                            type="email"
                            className="text-sm w-full py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            placeholder="x@gmail.com"
                            required
                        />
                    </div>
                    <div className="mt-8 content-center">
                        <label className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                        </label>
                        <input type="password"
                            className="w-full content-center text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                            Sign in
                        </button>
                    </div>
                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                        <span>Don't have an account?</span>
                        <a href="#" className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginIndex;