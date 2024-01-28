"use client"
import { useBlogStore } from '@/states/store';
import { auth, db } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


function WriteIndex() {

    const { title, setTitle } = useBlogStore((state) => ({
        title: state.title,
        setTitle: state.setTitle,
    }));

    const { content, setContent } = useBlogStore((state) => ({
        content: state.content,
        setContent: state.setContent,
    }));

    const counter = useBlogStore((state) => state.counter);

    const blogStateRef = collection(db, 'blogState');

    const handleSubmit: any = async (e: any) => {
        e.preventDefault();

        if (!auth.currentUser) {
            console.error('User is not authenticated.');
            return;
        }
        if (title === '' || content === '') {
            console.error('Title is required.');
            return;
        }

        const { uid } = auth.currentUser || {}
        try {
            await addDoc(blogStateRef, {
                title: title,
                content: content,
                createdAt: serverTimestamp(),
                uid,
                counter: counter,
            });
            console.log('Message added successfully.');
            setTitle('')
            setContent('')
        } catch (error) {
            console.error('Message could not be added:', error)
        }

    }

    return (
        <div className="max-w-md mx-auto mt-32">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="mt-1 p-2 w-full rounded-md shadow-md outline-none"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-1 p-2 w-full h-48 rounded-md shadow-md outline-none"
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className="bg-gray-800 text-white px-4 py-2 rounded-md w-full hover:bg-gray-900 focus:outline-none focus:ring outline-none"
                >Add
                </button>
            </form>
        </div>
    )
}

export default WriteIndex;