import { create } from "zustand";

type BlogStore = {
    title: string;
    setTitle: (value: string) => void;
    content: string;
    setContent: (value: string) => void;
    blogState: any[];
    handleBlog: () => void;
    counter: number;
    setBlogState: (value: any[]) => void;
};

export const useBlogStore = create<BlogStore>((set) => ({
    title: '',
    setTitle: (value) => set({ title: value }),
    content: '',
    setContent: (value) => set({ content: value }),
    counter: 0,
    blogState: [],
    setBlogState: (value) => set({ blogState: value }),


    handleBlog: () => set((state) => ({
        blogState: [...state.blogState, { title: state.title, content: state.content }],
        title: '',
        content: '',
    })),

}));
