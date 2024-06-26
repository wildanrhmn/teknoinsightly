const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ContentSkeleton() {
  return (
    <div className={`relative ${shimmer} overflow-hidden bg-gray-100 p-2 mb-5`}>
      <div className="flex flex-col">
        <div className="h-6 w-[55%] mb-2 rounded-md bg-gray-200" />
        <div className="h-3 w-[15%] mb-2 rounded-md bg-gray-200" />
        <div className="flex gap-5">
          <div className="h-40 w-[15%] rounded-md bg-gray-200" />
          <div className="flex justify-center flex-col flex-grow">
            {" "}
            {/* Added flex-grow */}
            <div className="h-4 w-[35%] mb-2 rounded-md bg-gray-200" />
            <div className="h-4 w-[20%] mb-2 rounded-md bg-gray-200" />
            <div className="h-4 w-[30%] mb-2 rounded-md bg-gray-200" />
            <div className="h-4 w-[50%] mb-2 rounded-md bg-gray-200" />
            <div className="h-4 w-[30%] mb-2 rounded-md bg-gray-200" />
            <div className="h-4 w-[50%] mb-2 rounded-md bg-gray-200" />
            <div className="h-4 w-[20%] mb-2 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentSkeletons() {
  return (
    <>
      <ContentSkeleton />
      <ContentSkeleton />
      <ContentSkeleton />
    </>
  );
}

export function DetailContentSkeleton() {
  return (
    <div className={`relative ${shimmer} overflow-hidden bg-gray-100 p-2 mb-5`}>
      <div className="w-full bg-[#D9D9D9] bg-opacity-20 py-6 sm:py-14">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="h-3 w-96 rounded-md bg-gray-200" />
          <div className="h-8 w-[600px] rounded-md bg-gray-200" />
          <div className="h-3 w-64 rounded-md bg-gray-200" />
        </div>
        <div className="container mx-auto mt-1 sm:mt-5">
          <div className="grid grid-cols-8 p-3 gap-10">
            <div className="col-span-8 lg:col-span-5 xl:col-span-6">
              <div className="h-[500px] w-full mb-2 rounded-md bg-gray-200" />
              <div className="mt-5">
                <div className="h-3 w-full mb-2 rounded-md bg-gray-200" />
                <div className="h-3 w-[75%] mb-2 rounded-md bg-gray-200" />
                <div className="h-3 w-[full%] mb-2 rounded-md bg-gray-200" />
                <div className="h-3 w-[50%] mb-2 rounded-md bg-gray-200" />
                <div className="h-3 w-full mb-2 rounded-md bg-gray-200" />
                <div className="h-3 w-[75%] mb-2 rounded-md bg-gray-200" />
                <div className="h-3 w-[full%] mb-2 rounded-md bg-gray-200" />
                <div className="h-3 w-[50%] mb-2 rounded-md bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SwiperSkeleton() {
  return (
    <div className={`relative ${shimmer} overflow-hidden bg-gray-100 p-2 mb-5`}>
      <div className="flex container mx-auto">
        <div className="flex flex-col flex-grow">
          <div className="h-56 w-full mb-2 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function AsideBarSkeleton() {
  return (
    <div className={`relative ${shimmer} overflow-hidden bg-gray-100 p-2 mb-5`}>
      <div className="h-10 w-full mb-2 rounded-md bg-gray-200" />
      <div className="h-6 w-full mb-2 rounded-md bg-gray-200" />
      <div className="h-3 w-16 mb-2 rounded-md bg-gray-200" />
      <div className="h-6 w-full mb-2 rounded-md bg-gray-200" />
      <div className="h-3 w-16 mb-2 rounded-md bg-gray-200" />
      <div className="h-6 w-full mb-2 rounded-md bg-gray-200" />
      <div className="h-3 w-16 mb-2 rounded-md bg-gray-200" />
      <div className="h-10 w-full mt-10 mb-2 rounded-md bg-gray-200" />
      <div className="flex gap-3 items-center">
        <div className="h-10 w-16 mb-2 rounded-md bg-gray-200" />
        <div className="flex flex-col flex-grow">
          <div className="h-3 w-full mb-2 rounded-md bg-gray-200" />
          <div className="h-3 w-16 mb-2 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="h-10 w-16 mb-2 rounded-md bg-gray-200" />
        <div className="flex flex-col flex-grow">
          <div className="h-3 w-full mb-2 rounded-md bg-gray-200" />
          <div className="h-3 w-16 mb-2 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="h-10 w-16 mb-2 rounded-md bg-gray-200" />
        <div className="flex flex-col flex-grow">
          <div className="h-3 w-full mb-2 rounded-md bg-gray-200" />
          <div className="h-3 w-16 mb-2 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
