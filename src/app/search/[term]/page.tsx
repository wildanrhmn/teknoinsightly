import Content from "@/ui/content/Content";
import { fetchAllPages } from "@/lib/data";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { term: string };
}): Promise<Metadata> {
  return {
    title: `Search - ${params.term}`,
    description: `List of the latest post about ${params.term}`,
  };
}

export default async function Page({
  params,
}: {
  params?: {
    page?: string;
    term?: string;
  };
}) {
  const currentPage = Number(params?.page) || 1;
  const totalPages = await fetchAllPages({ query: params?.term });
  return (
    <Content
      params={params}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
