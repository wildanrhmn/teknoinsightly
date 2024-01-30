import { posts, sidebarData, categories } from "@/utils/Dummy"

import { Category, Post } from "./definiton/definition"

export async function fetchAllPosts(): Promise<Post[]> {
    return posts
}

export async function fetchArticlePosts(): Promise<Post[]> {
    return posts.filter(post => post.type === 'article')
}

export async function fetchTutorialPosts(): Promise<Post[]> {
    return posts.filter(post => post.type === 'tutorial')
}

export async function fetchArticlePostsByCategory(category: string): Promise<Post[]> {
    return posts.filter(post => post.type === 'article' && post.category === category)
}

export async function fetchPopularList(){
    return sidebarData
}

export async function fetchCategories(): Promise<Category[]> {
    return categories.filter(category => category.type === 'article')
}
