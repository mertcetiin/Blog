"use client"
import { auth } from '@/lib/firebase';
import { useBlogStore } from '@/states/store'

function BlogIndex() {

    const currentUser = auth.currentUser;

    const blogState = useBlogStore((state) => state.blogState);
    const savedBlog = useBlogStore((state) => state.savedBlog);
    const setSavedBlog = useBlogStore((state) => state.setSavedBlog);


    const handleBlogSaved = (uid: any) => {
        if (currentUser) {
            const alreadySaved = savedBlog.some((item) => item.uid === uid);

            if (!alreadySaved) {
                const savedBlogIndex = blogState.find((item) => item.uid === uid);
                if (savedBlogIndex) {
                    setSavedBlog([...savedBlog, savedBlogIndex]);
                }
            }
        }
    }


    return (
        <div className="py-16 bg-gradient-to-br bg-green-50 to-cyan-100">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    {blogState.map((item: any) => (
                        <div key={item.uid} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img
                                src={item.imageUrl}
                                className="h-56 sm:h-200 w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                                alt={item.title}
                            />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-2xl font-semibold text-cyan-900">{item.title.toUpperCase()}</h4>
                                            <button onClick={() => handleBlogSaved(item.uid)}>
                                                <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-gray-600">
                                            {`${item.content.slice(0, 20)}...`}
                                            <a href='/movieDetail' className="text-cyan-600">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogIndex;