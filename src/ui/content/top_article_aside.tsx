import { PopularList } from "@/lib/definiton/definition";

import Link from "next/link";

export default async function TopArticles({
  topArticleData,
}: {
  topArticleData: PopularList[];
}) {
  return (
    <div className="asidebar-articles">
      <div className='flex items-center w-full h-[50px] flex-shrink-0 border-2 border-solid border-secondary relative rounded-[6px] mb-[7px] after:absolute after:w-[5%] after:h-full after:content-[" "] after:left-0 after:top-0 after:bg-secondary'>
        <h3 className="text-[24px] font-bold ml-[35px] text-dark">
          Artikel Populer
        </h3>
      </div>
      <div className="ps-[25px]">
        {topArticleData
          ?.filter((article: PopularList) => article.Post?.type === "article")
          .map((article) => {
            const pathDetail = `/article/article-detail/${article.Post?.id}`;
            return (
              <div key={article.Post?.id} className="flex flex-col mb-[10px]">
                <Link
                  href={pathDetail}
                  className="text-[#203397] text-[17px] overflow-ellipsis overflow-y-hidden line-clamp-1"
                >
                  {article.Post?.title}
                </Link>
                <span className="text-dark text-[13px]">{`Dibuat ${article.created_at} oleh ${article.Post?.author?.name}`}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
