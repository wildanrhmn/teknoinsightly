import Content from "@/ui/content/Content"
import { fetchPostsByType, fetchAllPopularList, fetchCategories } from "@/lib/data"

export default async function Page() {
    const [posts, sidebarData, categories] = await Promise.all([
        fetchPostsByType('article'),
        fetchAllPopularList(),
        fetchCategories()
    ])
    return(
        <>
            <Content posts={posts} sidebarData={sidebarData} categories={categories} />
        </>
    )
}