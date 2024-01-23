"use client"
import { useBlogStore } from '@/states/store';
import { useEffect } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "@/lib/firebase";
import { handleSubmit } from '@/components/blogActions';

function WriteIndex() {

    const title = useBlogStore((state) => state.title);
    const setTitle = useBlogStore((state) => state.setTitle);

    const blogState = useBlogStore((state) => state.blogState);
    const setBlogState = useBlogStore((state) => state.setBlogState);

    // const content = useBlogStore((state) => state.content);
    // const setContent = useBlogStore((state) => state.setContent);

    const handleBlog = useBlogStore((state) => state.handleBlog);


    // const blogStateRef = collection(db, 'blogState');

    // useEffect(() => {
    //     if (!auth.currentUser) {
    //         return;
    //     }

    //     const queryMessages = query(blogStateRef, orderBy('createdAt'))

    //     const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
    //         let blogState: any = [];
    //         snapshot.forEach((doc) => {
    //             blogState.push({ ...doc.data(), id: doc.id })
    //         });
    //         setBlogState(blogState)
    //     });

    //     return () => unsuscribe()
    // }, [auth.currentUser, blogState])


    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     handleBlog();

    //     const { uid } = auth.currentUser || {}
    //     try {
    //         await addDoc(blogStateRef, {
    //             text: title,
    //             createdAt: serverTimestamp(),
    //             uid,
    //         });
    //         console.log('Message added successfully.');
    //         setTitle('')
    //     } catch (error) {
    //         console.error('Message could not be added:', error)
    //     }

    // }

    const blogStateRef = collection(db, 'blogState');

    const onSubmit = (e: any) => {
        e.preventDefault();
        handleSubmit(title, handleBlog, setTitle, blogStateRef);
    };

    return (
        <div className="max-w-md mx-auto mt-32">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <form onSubmit={onSubmit} >
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
                {/* <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={setContent}
                        onChange={(e) => content(e.target.value)}
                        className="mt-1 p-2 w-full h-48 rounded-md shadow-md outline-none"
                    ></textarea>
                </div> */}
                <button
                    type='submit'
                    className="bg-gray-800 text-white px-4 py-2 rounded-md w-full hover:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300"
                >Add
                </button>
            </form>
        </div>
    )
}

export default WriteIndex;