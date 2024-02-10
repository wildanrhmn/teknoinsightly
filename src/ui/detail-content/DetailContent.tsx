import DetailContentHead from "./detail-header";
import RelatedContent from "./related-content";
import TopArticles from "../content/top_article_aside";
import CommentForm from "./comment-form";
import Comments from "./all-comment";
import Image from "next/image";
import AsideDetail from "./aside-wrapper";

import { Comment, PopularList, Post } from "@/lib/definiton/definition";

type Props = {
  detail: Post;
  related: PopularList[];
  popularList: PopularList[];
  comment: Comment[];
};

export default async function DetailContent({
  detail,
  related,
  popularList,
  comment,
}: Props) {
  return (
    <section className="mb-5">
      <DetailContentHead
        title={detail.title}
        date={detail.created_at}
        author={detail.author?.name}
        id={String(detail.id)}
      />
      <div className="container mx-auto mt-1 sm:mt-5">
        <div className="grid grid-cols-8 p-3 gap-10">
          <div className="col-span-8 lg:col-span-5 xl:col-span-6">
            <div className="relative w-[100%] h-[200px] sm:h-[500px]">
              <Image src="/dummy_img4.png" alt="" fill />
            </div>
            <div className="mt-5">
              <p
                className="text-[14px] sm:text-[15px] leading-7"
                dangerouslySetInnerHTML={{ __html: detail.body }}
              />
            </div>
          </div>
          <div className="hidden lg:flex xl:col-span-2 lg:col-span-3 flex-col gap-10">
            <AsideDetail related={related} popularList={popularList} />
          </div>
        </div>
        <hr className="mt-3" />
        <CommentForm id_post={String(detail.id)} />
        <hr className="mt-3" />
        <Comments commentData={comment} />
      </div>
    </section>
  );
}
