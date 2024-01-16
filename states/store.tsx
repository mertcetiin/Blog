import { create } from "zustand";

type BlogStore = {
    title: (value: string) => void;
    setTitle: any;
    content: (value: string) => void;
    setContent: any;
    blogState: any;
    handleBlog: () => void;
    counter: number;
}

export const useBlogStore = create<BlogStore>()((set) => ({
    setTitle: '',
    setContent: '',
    blogState: [],
    counter: 0,

    title: (value => set({ setTitle: value })),
    content: (value => set({ setContent: value })),

    handleBlog: () => set((state) => ({
        blogState: [...state.blogState, { title: state.setTitle, content: state.setContent }],
        setTitle: '',
        setContent: '',
    })),

}))