import BlogIndex from '@/components/blogIndex';
import HeaderLeftIndex from '@/components/headerLeftIndex';

function HeaderBlogIndex() {
    return (
        <div className="h-screen w-full bg-white relative flex overflow-hidden">
            <HeaderLeftIndex />
            <BlogIndex />
        </div>
    )
}

export default HeaderBlogIndex;