import Content from "@/ui/content/Content";
import { fetchAllPages } from "@/lib/data";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  return {
    title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)}`,
    description: `List of the latest post about category ${params.category.charAt(0).toUpperCase() + params.category.slice(1)}`,
  };
}
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
