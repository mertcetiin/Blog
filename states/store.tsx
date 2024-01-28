import { create } from "zustand";

type BlogStore = {
    title: string;
    setTitle: (value: string) => void;
    content: string;
    setContent: (value: string) => void;
    counter: number;
    blogState: [],
    setBlogState: (newBlogState: any) => void;

};

export const useBlogStore = create<BlogStore>((set) => ({
    title: '',
    setTitle: (value) => set({ title: value }),
    content: '',
    setContent: (value) => set({ content: value }),
    counter: 0,

    blogState: [],
    setBlogState: (newBlogState) => set({ blogState: newBlogState }),
}));
