import { create } from "zustand";

type BlogStore = {
    title: string;
    setTitle: (value: string) => void;
    content: string;
    setContent: (value: string) => void;
    blogState: [],
    setBlogState: (newBlogState: any) => void;

};

export const useBlogStore = create<BlogStore>((set) => ({
    title: '',
    setTitle: (value) => set({ title: value }),
    content: '',
    setContent: (value) => set({ content: value }),

    blogState: [],
    setBlogState: (newBlogState) => set({ blogState: newBlogState }),
}));
