"use client"
import { useBlogStore } from '@/states/store'


function BlogIndex() {

    const blogState = useBlogStore((state) => state.blogState);

    return (
        <div className="max-w-full h-full flex relative overflow-y-hidden">
            <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
                <div className="focus:outline-none py-8 w-full">
                    <div className="lg:flex items-center justify-center w-full">
                        {blogState.map((item: any, id: number) => (
                            <div key={id} className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                                <div className="flex items-center border-b border-gray-200 pb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-400 text-white text-xl">
                                        M
                                    </div>

                                    <div className="flex items-start justify-between w-full">
                                        <div className="pl-3 w-full">
                                            <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">
                                                {item.title}
                                            </p>
                                            <p className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">Kaydedilen Sayisi</p>
                                        </div>
                                        <div>
                                            <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BlogIndex