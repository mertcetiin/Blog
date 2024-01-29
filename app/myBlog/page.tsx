"use client";
import { auth } from '@/lib/firebase';
import { useBlogStore } from '@/states/store';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

function MyBlogIndex() {

    const currentUser = auth.currentUser;

    const router = useRouter();

    const handleMainPageRouter = () => {
        router.push('/')
    }

    const handleSavedPageRouter = () => {
        router.push('/saved')
    }

    const blogState = useBlogStore((state) => state.blogState);
    const savedBlog = useBlogStore((state) => state.savedBlog);

    const [filterBlog, setFilterBlog]: any = useState([]);

    useEffect(() => {
        if (currentUser) {
            const filteredBlogState = blogState.filter((item) => item.uid === currentUser.uid)
            setFilterBlog(filteredBlogState)
        }
    }, [currentUser, blogState])

    return (
        <div className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h1 onClick={handleMainPageRouter} className="text-3xl font-semibold text-gray-900 capitalize lg:text-4xl cursor-pointer">m blog</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-12 md:grid-cols-2">
                    {currentUser ? filterBlog.map((item: any) => (
                        <div className="lg:flex" key={item.uid}>
                            <img
                                src={item.imageUrl}
                                className="object-cover w-full h-56 rounded-lg lg:w-64"
                                alt={item.title} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    {item.title}
                                </a>
                                <span className="text-sm text-gray-500">{item.content}</span>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </div>

            <div className="container px-6 py-10 mx-auto">
                <h1 onClick={handleSavedPageRouter} className="text-3xl font-semibold text-gray-900 capitalize lg:text-4xl cursor-pointer">Kaydedilenler</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-2 md:grid-cols-2">
                    {currentUser ? savedBlog.map((item: any) => (
                        <div className="lg:flex" key={item.uid}>
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64"
                                src={item.imageUrl}
                                alt={item.title} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    {item.title}
                                </a>
                                <span className="text-sm text-gray-500">{item.content}</span>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </div>

        </div>
    )
}

export default MyBlogIndex