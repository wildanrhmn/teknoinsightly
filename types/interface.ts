export interface ContentItem {
    id: number,
    title: string,
    published: string,
    author: string,
    body: string
}

export interface CategoryItem {
    id: number,
    name: string,
}

export interface AsidebarItem {
    id: number,
    title: string,
    published: string,
    author: string,
    category: string,
}