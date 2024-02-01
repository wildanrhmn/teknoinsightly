import {
  fetchPostsByCategory,
  fetchAllPopularList,
  fetchCategories,
} from "@/lib/data";
import Content from "@/ui/content/Content";
export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  const [posts, sidebarData, categories] = await Promise.all([
    fetchPostsByCategory(category, "tutorial"),
    fetchAllPopularList(),
    fetchCategories(),
  ]);
  return (
    <Content
      posts={posts}
      sidebarData={sidebarData}
      categories={categories}
      params={category}
    />
  );
}
