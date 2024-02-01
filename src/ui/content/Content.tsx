"use client";

import { usePathname } from "next/navigation";

import ContentBreadcrumbs from "./content_breadcrumbs";
import ContentCard from "./content_card";
import TopArticles from "./top_article_aside";
import TopTutorials from "./top_tutorial_aside";
import Categories from "./category_aside";

import { Post, PopularList, Category } from "@/lib/definiton/definition";

type ContentProps = {
  posts: Post[];
  sidebarData: PopularList[];
  categories?: Category[];
  params?: string;
};

export default function Content({
  posts,
  sidebarData,
  categories,
  params,
}: ContentProps) {
  const pathname = usePathname();
  return (
    <section className="lg:mt-[25px] mt-[0]">
      <div className="container mx-auto p-3 lg:p-0">
        <ContentBreadcrumbs params={params} />
        <div className="mt-5 grid grid-cols-8">
          <div className="col-span-8 lg:col-span-6">
            <ContentCard posts={posts} />
          </div>
          <div className="hidden lg:flex flex-col col-span-2 gap-5">
            {pathname.includes("article") ? (
              <>
                <Categories categories={categories as Category[]} />
                <TopArticles topArticlesData={sidebarData} />
              </>
            ) : pathname.includes("tutorial") ? (
              <>
                <Categories categories={categories as Category[]} />
                <TopTutorials topTutorialData={sidebarData} />
              </>
            ) : (
              <>
                <TopArticles topArticlesData={sidebarData} />
                <TopTutorials topTutorialData={sidebarData} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
