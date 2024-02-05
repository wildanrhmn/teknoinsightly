import { PopularList } from "@/lib/definiton/definition";

import Link from "next/link";

type Props = {
  contentData: PopularList[];
};

export default function RelatedContent({ contentData }: Props) {
  return (
    <div className="asidebar-articles">
      <div className='flex items-center w-full h-[50px] flex-shrink-0 border-2 border-solid border-secondary relative rounded-[6px] mb-[7px] after:absolute after:w-[5%] after:h-full after:content-[" "] after:left-0 after:top-0 after:bg-secondary'>
        <h3 className="text-[24px] font-bold ml-[35px]">Konten Terkait</h3>
      </div>
      <div className="ps-[25px]">
        {contentData?.map((content) => {
          const path = content.type === "article" ? "/article" : "/tutorial";
          const pathDetail = `${path}/${path.replace(/-/g, " ")}-detail/${content.id}`;
          return (
            <div key={content.id} className="flex flex-col mb-[10px]">
              <Link
                href={pathDetail}
                className="text-[#203397] text-[17px] overflow-ellipsis overflow-y-hidden line-clamp-1"
              >
                {content.title}
              </Link>
              <span className="text-dark text-opacity-50 text-[13px]">{`Dibuat ${content.created_at} oleh ${content.author.name}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
