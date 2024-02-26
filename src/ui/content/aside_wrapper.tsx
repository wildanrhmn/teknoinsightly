import { ArticleCategories, TutorialCategories } from "./category_aside";
import TopArticles from "./top_article_aside";
import TopTutorials from "./top_tutorial_aside";

import { fetchAllPopularList, fetchCategories } from "@/lib/data";

export default async function AsideWrapper() {
  const [popularList, articleCategories, tutorialCategories] =
    await Promise.all([
      fetchAllPopularList(),
      fetchCategories("article"),
      fetchCategories("tutorial"),
    ]);
  return (
    <>
      <TopArticles topArticleData={popularList} />
      <TopTutorials topTutorialData={popularList} />
      <ArticleCategories categories={articleCategories} />
      <TutorialCategories categories={tutorialCategories} />
    </>
  );
}
