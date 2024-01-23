"use client";
import { useBlogStore } from '@/states/store';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "@/lib/firebase";
import { useEffect, useState } from 'react';



//const [user, setUser] = useState(auth.currentUser || null);

// const title = useBlogStore((state) => state.title);
// const setTitle = useBlogStore((state) => state.setTitle);

// const blogState = useBlogStore((state) => state.blogState);
// const setBlogState = useBlogStore((state) => state.setBlogState);

// const handleBlog = useBlogStore((state) => state.handleBlog);



// const blogStateRef = collection(db, 'blogState');

export const handleSubmit: any = async (title: any, handleBlog: any, setTitle: any, blogStateRef: any) => {
    // handleBlog();

    const { uid } = auth.currentUser || {}
    try {
        await addDoc(blogStateRef, {
            text: title,
            createdAt: serverTimestamp(),
            uid,
        });
        console.log('Message added successfully.');
        setTitle('')
    } catch (error) {
        console.error('Message could not be added:', error)
    }

}