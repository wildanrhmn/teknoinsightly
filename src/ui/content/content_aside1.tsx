import { PopularList } from "@/lib/definiton/definition";

import Link from "next/link";

export type TopArticlesProps = {
  topArticlesData: PopularList[];
};

export default function TopArticles({ topArticlesData }: TopArticlesProps) {
  return (
    <div className="px-[25px]">
      {topArticlesData
        ?.filter((article) => article.category === "article")
        .map((article) => {
          const pathDetail = `/article/${article.id}`;
          return (
            <div key={article.id} className="flex flex-col mb-[10px]">
              <Link
                href={pathDetail}
                className="text-[#203397] text-[17px] overflow-ellipsis overflow-y-hidden line-clamp-2"
              >
                {article.title}
              </Link>
              <span className="text-dark text-opacity-50 text-[13px]">{`Kemarin oleh ${article.author}`}</span>
            </div>
          );
        })}
    </div>
  );
}
