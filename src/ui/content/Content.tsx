import ContentBreadcrumbs from "./content_breadcrumbs";
import ContentCard from "./content_card";
import { Suspense } from "react";
import { ContentSkeletons, AsideBarSkeleton } from "../skeletons";
import AsideWrapper from "./aside_wrapper";


export default async function Content({
  params,
}: {
  params?: { category: string };
}) {
  return (
    <section className="lg:mt-[25px] mt-[0]">
      <div className="container mx-auto p-3 lg:p-0">
        <ContentBreadcrumbs params={params?.category} />
        <div className="mt-5 grid grid-cols-8">
          <div className="col-span-8 lg:col-span-6">
            <Suspense fallback={<ContentSkeletons />}>
              <ContentCard category={params?.category} />
            </Suspense>
          </div>
          <div className="hidden lg:flex flex-col col-span-2 gap-5">
            <Suspense fallback={<AsideBarSkeleton />}>
              <AsideWrapper />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
