import Image from "next/image";
import Link from "next/link";

import { Post } from "@/lib/definiton/definition";

export type ContentCardProps = {
    posts: Post[];
}

export default function ContentCard({ posts } : ContentCardProps){
    return(
        <>
            {posts.map((post, index) => {
                const path = post.type === 'article' ? '/article' : '/tutorial'
                const pathDetail = `${path}/${post.id}`
                return(
                    <div key={index}>
                        <div className="flex flex-col">
                            <Link href={pathDetail} className="text-secondary lg:text-[24px] text-[18px] md:text-[22px] font-bold">{post.title}</Link>
                            <span className="text-dark opacity-50 lg:text-[14px] md:text-[12px] text-[12px]">{`Dipublish ${post.published} oleh ${post.author}`}</span>
                            <div className="flex items-center gap-1 mt-1">
                                <Link className="bg-dark text-primary px-3 py-1 text-xs rounded-md" href={path}>{post.type}</Link>
                                <Link className="bg-dark text-primary px-3 py-1 text-xs rounded-md" href={`${path}/${post.category}`}>{post.category}</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-1 md:mt-1">
                            <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] relative flex-shrink-0">
                                <Image src="/dummy_img2.png" alt={post.title} fill />
                            </div>
                            <p className="w-[100%] lg:w-[75%] text-[14px] lg:text-[15px] text-dark overflow-ellipsis overflow-y-hidden leading-[25px] lg:leading-[27px] line-clamp-4 md:line-clamp-5 lg:line-clamp-6">{post.body}</p>
                        </div>
                        <hr className="mt-3 border-t-2 border-dotted border-black opacity-10 h-1 w-[90%]" />
                    </div>
                )
})}
        </>
    )
}