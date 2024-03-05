import { Metadata } from "next";
import { fetchPostsById } from "@/lib/data";
import { Post } from "@/lib/definiton/definition";

import DetailContent from "@/ui/detail-content/DetailContent";
import { Suspense } from "react";
import { DetailContentSkeleton } from "@/ui/skeletons";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data: Post = await fetchPostsById(params.id);
  return {
    title: `Article - ${data.title}`,
    description: data.summary,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Suspense fallback={<DetailContentSkeleton />}>
        <DetailContent content_id={params.id} />
      </Suspense>
    </>
  );
}
