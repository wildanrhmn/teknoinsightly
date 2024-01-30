import { fetchArticlePostsByCategory, fetchPopularList, fetchCategories } from "@/lib/data";
import Content from "@/ui/content/Content";
export default async function Page({ params }: { params: { category: string } }){
    const category = params.category;
    const [posts, sidebarData, categories] = await Promise.all([
        fetchArticlePostsByCategory(category),
        fetchPopularList(),
        fetchCategories(),
    ])

    return(
        <Content posts={posts} sidebarData={sidebarData} categories={categories} params={category} />
    )
}