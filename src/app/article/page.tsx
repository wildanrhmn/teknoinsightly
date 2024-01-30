import Content from "@/ui/content/Content"
import { fetchPopularList, fetchCategories, fetchArticlePosts } from "@/lib/data"

export default async function Page() {
    const [posts, sidebarData, categories] = await Promise.all([
        fetchArticlePosts(),
        fetchPopularList(),
        fetchCategories()
    ])
    return(
        <>
            <Content posts={posts} sidebarData={sidebarData} categories={categories} />
        </>
    )
}