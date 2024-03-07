import Image from "next/image";
import Link from "next/link";
import Pagination from "@/ui/paginations";
import { Post } from "@/lib/definiton/definition";
import {
  fetchAllPosts,
  fetchPostsByCategory,
  fetchPostsByType,
} from "@/lib/data";

export type ContentCardProps = {
  posts: Post[];
};
async function fetchPosts(
  currentPage: number,
  category: string | undefined,
  type?: string,
  query?: string,
) {
  // function body remains the same
  if (category) {
    const data = await fetchPostsByCategory(category, currentPage);
    return data;
  }
  if (type) {
    const data = await fetchPostsByType(type, currentPage);
    return data;
  }
  const data = await fetchAllPosts(currentPage, query);
  return data;
}

export default async function ContentCard({
  category,
  type,
  currentPage,
  query,
  totalPages,
}: {
  category?: string;
  type?: string;
  query?: string;
  currentPage: number;
  totalPages: number;
}) {
  const posts = await fetchPosts(currentPage, category, type, query);
  return (
    <>
      <div>
        {posts.length > 0 &&
          posts.map((post, index) => {
            const path = post.type === "article" ? "/article" : "/tutorial";
            const pathDetail = `${path}/${path}-detail/${post.id}`;
            return (
              <div key={index} className="mt-3">
                <div className="flex flex-col">
                  <Link
                    href={pathDetail}
                    className="text-secondary lg:text-[24px] text-[18px] md:text-[22px] font-bold w-max"
                  >
                    {post.title}
                  </Link>
                  <span className="text-dark lg:text-[14px] md:text-[12px] text-[12px] mb-1">{`Diposting ${post.created_at} oleh ${post.author.name}`}</span>
                  <div className="flex items-center justify-end sm:justify-start gap-1 mt-1">
                    <Link
                      className="bg-dark text-primary px-3 py-1 text-xs rounded-md"
                      href={path}
                    >
                      {post.type}
                    </Link>
                    <Link
                      className="bg-dark text-primary px-3 py-1 text-xs rounded-md"
                      href={`${path}/${post.category.slug}`}
                    >
                      {post.category?.slug.replace("-", " ")}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-1 md:mt-1">
                  <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] relative flex-shrink-0">
                    <Image
                      src={post.image[1]}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="w-[100%] lg:w-[75%] text-[14px] lg:text-[15px] text-dark overflow-ellipsis overflow-y-hidden leading-[25px] lg:leading-[27px] line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
                    {post.body}
                  </p>
                </div>
                <hr className="mt-3 border-t-2 border-dotted border-black opacity-10 h-1 w-[90%]" />
              </div>
            );
          })}
        {posts.length > 0 && (
          <div className="mt-11 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        )}
      </div>
      {posts.length === 0 && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-secondary">
            Tidak dapat menemukan artikel atau tutorial.
          </p>
        </div>
      )}
    </>
  );
}
