import { PopularList } from "@/lib/definiton/definition";

import Link from "next/link";
import Image from "next/image";

export type TopTutorialsProps = {
    topTutorialData: PopularList[];
}

export default function TopTutorials({ topTutorialData }: TopTutorialsProps){
    return (
        <div className="px-[25px]">
          {topTutorialData
            ?.filter((tutorial) => tutorial.category === "tutorial")
            .map((tutorial) => {
              const pathDetail = `/tutorial/${tutorial.id}`;
              return (
                <div key={tutorial.id} className="flex items-center mb-[10px] gap-3">
                    <div className="relative w-[47px] h-[47px] flex-shrink-0">
                        <Image src="/dummy_img3.png" alt={tutorial.title} fill />
                    </div>
                  <Link
                    href={pathDetail}
                    className="text-[#203397] text-[18px] overflow-ellipsis overflow-y-hidden line-clamp-2"
                  >
                    {tutorial.title}
                  </Link>
                </div>
              );
            })}
        </div>
      );
}