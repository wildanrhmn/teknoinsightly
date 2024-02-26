import Content from "@/ui/content/Content";
export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  return (
    <Content params={params} />
  );
}
