import Content from "@/ui/content/Content";
import { fetchAllPages } from "@/lib/data";
export default async function Page({
  params,
}: {
  params?: {
    category: string;
    page?: string;
    query?: string;
  };
}) {
  const query = params?.query;
  const currentPage = Number(params?.page) || 1;
  const totalPages = await fetchAllPages({ category: params?.category });

  return (
    <Content
      params={params}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
