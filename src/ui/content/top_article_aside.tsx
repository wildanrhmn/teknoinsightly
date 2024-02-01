import { PopularList } from "@/lib/definiton/definition";

import Link from "next/link";

export type TopArticlesProps = {
  topArticlesData: PopularList[];
};

export default function TopArticles({ topArticlesData }: TopArticlesProps) {
  return (
    <div className="asidebar-articles">
      <div className='flex items-center w-full h-[50px] flex-shrink-0 border-2 border-solid border-secondary relative rounded-[6px] mb-[7px] after:absolute after:w-[5%] after:h-full after:content-[" "] after:left-0 after:top-0 after:bg-secondary'>
        <h3 className="text-[24px] font-bold ml-[35px]">Artikel Populer</h3>
      </div>
      <div className="ps-[25px]">
        {topArticlesData
          ?.filter((article) => article.type === "article")
          .map((article) => {
            const pathDetail = `/article/article-detail/${article.id}`;
            return (
              <div key={article.id} className="flex flex-col mb-[10px]">
                <Link
                  href={pathDetail}
                  className="text-[#203397] text-[17px] overflow-ellipsis overflow-y-hidden line-clamp-2"
                >
                  {article.title}
                </Link>
                <span className="text-dark text-opacity-50 text-[13px]">{`${article.created_at} oleh ${article.author.name}`}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
