import React from 'react'
import BlogIndex from './blogIndex';

function headerTopIndex() {
    return (
        <div className="w-full h-full flex flex-col justify-between">

            <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
                <div className="flex flex-shrink-0 items-center space-x-4 text-white">
                    <div className="flex flex-col items-end ">
                        <div className="text-md font-medium ">Name</div>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-400 text-white text-xl">
                        M
                    </div>
                </div>
            </header>


            <BlogIndex />
        </div>
    )
}

export default headerTopIndex;