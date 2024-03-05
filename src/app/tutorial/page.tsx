import { Metadata } from "next";

import Content from "@/ui/content/Content";
import { fetchAllPages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tutorial",
  description:
    "Find the latest tutorials of hardware and software on TeknoInsightly!",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query;
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchAllPages({ type: "tutorial" });

  return (
    <Content
      type="tutorial"
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
