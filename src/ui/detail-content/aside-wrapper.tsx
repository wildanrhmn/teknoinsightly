'use client';
import { usePathname } from "next/navigation";

import RelatedContent from './related-content';
import TopArticles from "../content/top_article_aside";
import TopTutorials from "../content/top_tutorial_aside";

import { PopularList } from "@/lib/definiton/definition";

export default function AsideDetail({ related, popularList }: { related: PopularList[], popularList: PopularList[] }) {
    const pathname = usePathname();
    return(
        <>
        <RelatedContent contentData={related} />
        {pathname.includes("tutorial") ? <TopTutorials topTutorialData={popularList} /> : <TopArticles topArticlesData={popularList} />}
        </>
    )
}