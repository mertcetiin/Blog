import { create } from "zustand";

type BlogStateItem = {
    title: string;
    content: string;
    uid: any;
}

type BlogStore = {
    title: string;
    setTitle: (value: string) => void;
    content: string;
    setContent: (value: string) => void;

    blogState: BlogStateItem[],
    setBlogState: (newBlogState: any) => void;

    savedBlog: BlogStateItem[],
    setSavedBlog: (newBlogSave: any) => void;
};


export const useBlogStore = create<BlogStore>((set) => ({
    title: '',
    setTitle: (value) => set({ title: value }),
    content: '',
    setContent: (value) => set({ content: value }),

    blogState: [],
    setBlogState: (newBlogState) => set({ blogState: newBlogState }),

    savedBlog: [],
    setSavedBlog: (newBlogSave) => set({ savedBlog: newBlogSave }),
}));
