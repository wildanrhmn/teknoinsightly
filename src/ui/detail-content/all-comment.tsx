import Image from "next/image";

import { Comment } from "@/lib/definiton/definition";

type Props = {
  commentData: Comment[];
};

export default function Comments({ commentData }: Props) {
  return (
    <div className="mt-3 p-3 text-dark">
      <h1 className="text-[18px] font-bold">Semua Komentar</h1>
      <div className="grid grid-cols-8 my-5 gap-1">
        {commentData?.map((comment) => {
          return (
            <div className="col-span-8" key={comment.id}>
              <div className="flex gap-3">
                <div className="relative w-[65px] h-[65px] flex-shrink-0">
                  <Image
                    src="/dummy_img4.png"
                    alt=""
                    fill
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col sm:gap-1 gap-3 w-full sm:w-[75%]">
                  <div className="flex flex-col md:flex-row justify-between">
                    <h5 className="text-[15px] font-bold">{comment.name}</h5>
                    <span className="text-[12px] opacity-55">
                      {comment.created_at}
                    </span>
                  </div>
                  <p className="text-[15px] leading-7">{comment.message}</p>
                </div>
              </div>
              <hr className="my-3" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
