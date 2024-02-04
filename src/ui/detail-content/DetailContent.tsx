import DetailContentHead from "./detail-header";
import CommentForm from "./comment-form";
import Comments from "./all-comment";
import Image from "next/image";

export default function DetailContent() {
  return (
    <section className="mb-5">
      <DetailContentHead />
      <div className="container mx-auto mt-1 sm:mt-5">
        <div className="grid grid-cols-8 p-3">
          <div className="col-span-8 lg:col-span-6">
            <div className="relative w-[100%] h-[200px] sm:h-[500px]">
              <Image src="/dummy_img4.png" alt="" fill />
            </div>
            <div className="mt-5">
              <p className="text-[14px] sm:text-[15px] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tristique senectus et netus. Semper quis lectus nulla at
                volutpat diam ut venenatis. Nulla facilisi morbi tempus iaculis
                urna id volutpat lacus laoreet. Nibh venenatis cras sed felis
                eget velit aliquet sagittis id. Id diam vel quam elementum
                pulvinar etiam non quam lacus. Id aliquet lectus proin nibh
                nisl. Pellentesque diam volutpat commodo sed egestas egestas
                fringilla. Mauris in aliquam sem fringilla ut. Non diam
                phasellus vestibulum lorem. Enim nulla aliquet porttitor lacus
                luctus. Ultrices dui sapien eget mi proin sed libero enim sed.
              </p>
              <h1 className="text-[24px] font-extrabold my-3">
                1. Performance
              </h1>
              <p className="text-[14px] sm:text-[15px] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tristique senectus et netus. Semper quis lectus nulla at
                volutpat diam ut venenatis. Nulla facilisi morbi tempus iaculis
                urna id volutpat lacus laoreet. Nibh venenatis cras sed felis
                eget velit aliquet sagittis id. Id diam vel quam elementum
                pulvinar etiam non quam lacus. Id aliquet lectus proin nibh
                nisl. Pellentesque diam volutpat commodo sed egestas egestas
                fringilla. Mauris in aliquam sem fringilla ut. Non diam
                phasellus vestibulum lorem. Enim nulla aliquet porttitor lacus
                luctus. Ultrices dui sapien eget mi proin sed libero enim sed.
              </p>
              <h1 className="text-[24px] font-extrabold my-3">2. Security</h1>
              <p className="text-[15px] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tristique senectus et netus. Semper quis lectus nulla at
                volutpat diam ut venenatis. Nulla facilisi morbi tempus iaculis
                urna id volutpat lacus laoreet. Nibh venenatis cras sed felis
                eget velit aliquet sagittis id. Id diam vel quam elementum
                pulvinar etiam non quam lacus. Id aliquet lectus proin nibh
                nisl. Pellentesque diam volutpat commodo sed egestas egestas
                fringilla. Mauris in aliquam sem fringilla ut. Non diam
                phasellus vestibulum lorem. Enim nulla aliquet porttitor lacus
                luctus. Ultrices dui sapien eget mi proin sed libero enim sed.
              </p>
            </div>
          </div>
          <div className="col-span-8 lg:col-span-2"></div>
        </div>
        <hr className="mt-3" />
        <CommentForm />
        <hr className="mt-3" />
        <Comments />
      </div>
    </section>
  );
}
