import SwiperCarousel from "@/ui/swiper/Swiper";
import Content from "@/ui/content/Content";

import { fetchAllPosts, fetchAllPopularList } from "@/lib/data";

export default async function Home() {
  const [posts, sidebarData] = await Promise.all([fetchAllPosts(), fetchAllPopularList()]);
  return (
    <div>
      <SwiperCarousel />
      <Content posts={posts} sidebarData={sidebarData} />
    </div>
  );
}
