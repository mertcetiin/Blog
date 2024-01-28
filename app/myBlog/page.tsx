"use client";
import { auth } from '@/lib/firebase';
import { useBlogStore } from '@/states/store';
import { useRouter } from 'next/navigation'

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

    return (
        <div className="bg-white">

            <div className="container px-6 py-10 mx-auto">
                <h1 onClick={handleMainPageRouter} className="text-3xl font-semibold text-gray-900 capitalize lg:text-4xl cursor-pointer">m blog</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-12 md:grid-cols-2">
                    {currentUser ? blogState.map((item: any, id: number) => (
                        <div className="lg:flex" key={id}>
                            <img
                                src={item.imageUrl}
                                className="object-cover w-full h-56 rounded-lg lg:w-64"
                                alt="" />

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
                    {currentUser ? blogState.map((item: any, id: number) => (
                        <div className="lg:flex" key={id}>
                            {/* <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    {item.title}
                                </a>
                                <span className="text-sm text-gray-500">{item.content}</span>
                            </div> */}
                        </div>
                    )) : ''}
                </div>
            </div>

        </div>
    )
}

export default MyBlogIndex