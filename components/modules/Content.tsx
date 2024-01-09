"use client";

//react utils
import { FunctionComponent, useState } from "react";
import { Icon } from "@iconify/react";

//next utils
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

//import assets
import DummyImage from "../../assets/images/dummy_img2.png";
import "../../assets/css/home.css";

//import components
import CategorySelection from "@/utils/select/Select";

//types
import { CategoryItem, ContentItem, AsidebarItem } from "@/types/interface";

interface ContentProps {
  categoryData?: CategoryItem[];
  contentData: ContentItem[];
  sidebarData: AsidebarItem[];
}

const Content: FunctionComponent<ContentProps> = ({ categoryData, contentData, sidebarData }) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const pathname = usePathname();

  const handleCategoryChange = (selected: number | number[]) => {
    if (typeof selected === 'number') {
      setSelectedCategories([selected]);
    } else {
      setSelectedCategories(selected);
    }
  };

  const handleSearchArticlePerCategory = () => {
    console.log(selectedCategories);
  };

  return (
    <section className="home__section">
      <div className="container">
        <div className="home__header">
          <Icon
            icon="iconamoon:home"
            color="#2aa8da"
            className="home__header__icon"
          />
          <Link href={"/home"}>Beranda</Link>
          {pathname === "/articles" && <> <span>&gt;&gt;</span> <Link href={"/articles"}>Artikel</Link> </>}
          {pathname === "/tutorials" && <> <span>&gt;&gt;</span> <Link href={"/articles"}>Tutorials</Link> </>}
        </div>
        <div className="row">
          <div className="col-12 col-md-8 col-xl-9">
            <div className="row">
              {categoryData && (
                <div className="category__selection mt-2 pe-5">
                  <CategorySelection onCategoryChange={handleCategoryChange} categoryData={categoryData} />
                  <button onClick={handleSearchArticlePerCategory}>
                    <Icon icon="ic:baseline-search" fontSize={30} />
                    </button>
                </div>
              )}
            </div>
            {/* For every content map */}
            {contentData?.map((content) => {
              return (
                  <div className="content__card" key={content.id}>
                    <div className="content__card__header">
                      <h3>{content.title}</h3>
                      <span>{`Dipublish ${content.published} oleh ${content.author}`}</span>
                    </div>
                    <div className="content__card__body mt-2">
                      <Image
                        src={DummyImage}
                        alt="dummy image"
                        className="content__card__image"
                      />
                      <p>{content.body}</p>
                    </div>
                    <hr />
                  </div>
              )
            })}
          </div>
          <div className="d-none d-md-flex flex-column gap-3 col-md-4 col-xl-3">           
              <div className="asidebar">
                  <div className="asidebar__header">
                    <h3>Artikel Populer</h3>
                  </div>
                  <div className="asidebar__content">
                    {sidebarData.filter(data => data.category === "article").map((data) => (  
                      <div className="asidebar__content__item" key={data.id}>
                        <h5>{data.title}</h5>
                        <span>{`Dipublish ${data.published} oleh ${data.author}`}</span>
                      </div>
                    ))}
                  </div>
              </div>                 
              <div className="asidebar">
                  <div className="asidebar__header">
                    <h3>Tutorial Terbaru</h3>
                  </div>
                  <div className="asidebar__content">
                    {sidebarData.filter(data => data.category === "tutorial").map((data) => (                      
                      <div className="asidebar__content__item d-flex align-items-center gap-3" key={data.id}>
                        <div className="asidebar__content__image" />
                        <h5>{data.title}</h5>
                      </div>
                    ))}
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
