"use client";
import HeaderTopIndex from '@/components/headerTopIndex';
import { useEffect, useState } from 'react';
import BlogIndex from '@/components/blogIndex';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "@/lib/firebase";
import WriteIndex from './writeIndex/page';
import { useBlogStore } from '@/states/store';


export default function Home() {

  const [user, setUser] = useState(auth.currentUser || null);
  const [shouldRenderWriteIndex] = useState(false);

  const title = useBlogStore((state) => state.title);
  const setTitle = useBlogStore((state) => state.setTitle);
  const handleBlog = useBlogStore((state) => state.handleBlog);

  const [blogState, setBlogState] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, [])

  const blogStateRef = collection(db, 'blogState');

  useEffect(() => {
    if (!auth.currentUser) {
      return;
    }

    const queryMessages = query(blogStateRef, orderBy('createdAt'))

    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let blogState: any = [];
      snapshot.forEach((doc) => {
        blogState.push({ ...doc.data(), id: doc.id })
      });
      setBlogState(blogState)
    });

    return () => unsuscribe()
  }, [auth.currentUser, blogState])


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleBlog();

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

  return (
    <div>
      <HeaderTopIndex user={user} />
      <BlogIndex blogState={blogState} />
      {shouldRenderWriteIndex && <WriteIndex handleSubmit={handleSubmit} />}
    </div>
  )
}