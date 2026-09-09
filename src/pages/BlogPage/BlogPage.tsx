import BlogHeader from "../../components/sections/BlogHeader/BlogHeader"
import BlogPosts from "../../components/sections/BlogPosts/BlogPosts"
import Categorues from "../../components/sections/Categories/Categories"
import JoinUs from "../../components/sections/JoinUs/JoinUs"

function BlogPage() {
    return (
        <>
        <BlogHeader></BlogHeader>
        <BlogPosts></BlogPosts>
        <Categorues></Categorues>
        <JoinUs></JoinUs>    
        </>
    )
}

export default BlogPage