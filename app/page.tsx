"use client";
import HeaderTopIndex from '@/components/headerTopIndex';
import BlogIndex from '@/components/blogIndex';

import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from "@/lib/firebase";


export default function Home() {

  const [user, setUser] = useState(auth.currentUser || null);
  const [blogState, setBlogState] = useState([]);

  const blogStateRef = collection(db, 'blogState');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, [])


  useEffect(() => {
    const queryMessages = query(blogStateRef, orderBy('createdAt'))

    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      console.log('Snapshot Changes:', snapshot.docChanges());
      let blogState: any = [];
      snapshot.forEach((doc) => {
        blogState.push({ ...doc.data(), id: doc.id })
      });
      setBlogState(blogState)
    });

    return () => unsuscribe()
  }, [])

  return (
    <div>
      <HeaderTopIndex user={user} />
      <BlogIndex blogState={blogState} />
    </div>
  )
}