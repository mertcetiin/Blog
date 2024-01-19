"use client";
import { useState, useEffect } from 'react'
import BlogIndex from './blogIndex';
import { auth } from '@/lib/firebase';

function headerTopIndex() {

    const [user, setUser] = useState(auth.currentUser || null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, [])

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
                <div className="flex flex-shrink-0 items-center space-x-4 text-white">
                    <div className="flex flex-col items-end ">
                        <div className="text-base">{user?.displayName}</div>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-400 text-white text-sm">
                        {user ? user.displayName?.charAt(0).toUpperCase() : null}
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <g id="Interface / Log_Out">
                                <path id="Vector" d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </header>

            <BlogIndex />
        </div>
    )
}

export default headerTopIndex;