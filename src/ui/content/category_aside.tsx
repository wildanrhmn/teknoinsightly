import { Category } from "@/lib/definiton/definition";
import { fetchCategories } from "@/lib/data";

import Link from "next/link";

export async function ArticleCategories({ categories }: { categories: Category[] }) {
  return (
    <div className="asidebar-categories">
      <div className='flex items-center w-full h-[50px] flex-shrink-0 border-2 border-solid border-secondary relative rounded-[6px] mb-[7px] after:absolute after:w-[5%] after:h-full after:content-[" "] after:left-0 after:top-0 after:bg-secondary'>
        <h3 className="text-[24px] font-bold ml-[35px] text-dark">Kategori Artikel</h3>
      </div>
      <div className="ps-[25px] flex flex-wrap gap-5 mt-5 ">
        {categories?.map((category) => {
          const pathDetail = `${category.type}/${category.slug}`;
          return (
            <div key={category.id} className="mb-[10px] flex-2">
              <Link
                href={pathDetail}
                className="text-[#203397] hover:underline text-[17px]"
              >
                {category.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function TutorialCategories({ categories }: { categories: Category[] }) {
  return (
    <div className="asidebar-categories">
      <div className='flex items-center w-full h-[50px] flex-shrink-0 border-2 border-solid border-secondary relative rounded-[6px] mb-[7px] after:absolute after:w-[5%] after:h-full after:content-[" "] after:left-0 after:top-0 after:bg-secondary'>
        <h3 className="text-[24px] font-bold ml-[35px] text-dark">Kategori Tutorial</h3>
      </div>
      <div className="ps-[25px] flex flex-wrap gap-5 mt-5 ">
        {categories?.map((category) => {
          const pathDetail = `${category.type}/${category.slug}`;
          return (
            <div key={category.id} className="mb-[10px] flex-2">
              <Link
                href={pathDetail}
                className="text-[#203397] hover:underline text-[17px]"
              >
                {category.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
