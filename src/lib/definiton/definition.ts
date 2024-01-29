export type Post = {
    id: number
    title: string
    published: string
    author: string
    body: string
    type: string
}

export type PopularList = {
    id: number
    title: string
    published: string
    author: string
    category: string
}

export type Category = {
    id: number
    name: string
}

export type SidebarData = {
    categories: Category[]
    posts: Post[]
}

export type NavSubLinks = {
    name: string
    href: string
}