import ContentBreadcrumbs from "./content_breadcrumbs"
import ContentCard from "./content_card"
import TopArticles from "./content_aside1"

import { posts, sidebarData } from "@/utils/Dummy"

export default function Content(){
    return(
        <section className="lg:mt-[25px] mt-[0]">
            <div className="container mx-auto p-3 lg:p-0">
               <ContentBreadcrumbs />  
                <div className="mt-5 grid grid-cols-8">
                    <div className="col-span-8 lg:col-span-6">
                        <ContentCard posts={posts} />
                    </div>
                    <div className="hidden lg:flex flex-col col-span-2">
                        <div className="asidebar-articles">
                            <div className='flex items-center w-full h-[50px] flex-shrink-0 border-2 border-solid border-secondary relative rounded-[6px] mb-[7px] after:absolute after:w-[5%] after:h-full after:content-[" "] after:left-0 after:top-0 after:bg-secondary'>
                                <h3 className="text-[24px] font-bold ml-[35px]">
                                    Artikel Populer
                                </h3>
                            </div>
                                <TopArticles topArticlesData={sidebarData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}