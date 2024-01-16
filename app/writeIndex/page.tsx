"use client"
import { useBlogStore } from '@/states/store';


function WriteIndex() {

    const title = useBlogStore((state) => state.title);
    const setTitle = useBlogStore((state) => state.setTitle);
    const content = useBlogStore((state) => state.content);
    const setContent = useBlogStore((state) => state.setContent);
    const handleBlog = useBlogStore((state) => state.handleBlog);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleBlog();
    }

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Title girin</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={setTitle}
                        onChange={(e) => title(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Content girin</label>
                    <input
                        type="text"
                        id="content"
                        name="content"
                        value={setContent}
                        onChange={(e) => content(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <button
                    type='submit'
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >Add</button>
            </form>
        </div>

    )
}

export default WriteIndex;