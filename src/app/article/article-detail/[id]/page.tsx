import DetailContent from "@/ui/detail-content/DetailContent";
import {
  fetchComment,
  fetchPostsById,
  fetchRelatedList,
  fetchAllPopularList,
} from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const [detail, comment, popularList] = await Promise.all([
    fetchPostsById(params.id),
    fetchComment(params.id),
    fetchAllPopularList(),
  ]);

  const related = await fetchRelatedList(detail.id_category);
  return (
    <DetailContent
      comment={comment}
      detail={detail}
      related={related}
      popularList={popularList}
    />
  );
}
