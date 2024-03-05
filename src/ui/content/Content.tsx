import ContentBreadcrumbs from "./content_breadcrumbs";
import ContentCard from "./content_card";
import { Suspense } from "react";
import { ContentSkeletons, AsideBarSkeleton } from "../skeletons";
import AsideWrapper from "./aside_wrapper";
export default async function Content({
  params,
  type,
  currentPage,
  totalPages,
}: {
  params?: { category?: string; term?: string };
  type?: string;
  currentPage: number;
  totalPages: number;
}) {
  return (
    <section className="lg:mt-[25px] mt-[0] mb-[75px]">
      <div className="container mx-auto p-3 lg:p-0">
        <ContentBreadcrumbs params={params?.category} term={params?.term} />
        <div className="grid grid-cols-8">
          <div className="col-span-8 lg:col-span-6">
            <Suspense fallback={<ContentSkeletons />}>
              <ContentCard
                category={params?.category}
                type={type}
                currentPage={currentPage}
                query={params?.term}
                totalPages={totalPages}
              />
            </Suspense>
          </div>
          <div className="hidden lg:flex flex-col col-span-2 gap-5 mt-5">
            <Suspense fallback={<AsideBarSkeleton />}>
              <AsideWrapper />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
