import DetailContent from "@/ui/detail-content/DetailContent";
import {
  fetchComment,
  fetchPostsById,
} from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const [detail, comment] = await Promise.all([
    fetchPostsById(params.id),
    fetchComment(params.id),
  ]);

  return (
    <DetailContent
      comment={comment}
      detail={detail}
    />
  );
}
