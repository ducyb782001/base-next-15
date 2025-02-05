import React from "react";

function TableSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-8 mt-5 md:hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <MobileBannerRowSkeleton key={i} />
        ))}
      </div>
      <div className="hidden mt-5 md:block">
        <div className="grid w-full grid-cols-6 px-5">
          <div className="w-[30px] h-6 skeleton-loading" />
          <div className="w-[80px] h-6 skeleton-loading" />
          <div className="w-[60px] h-6 skeleton-loading" />
          <div className="w-[100px] h-6 skeleton-loading" />
          <div className="w-[80px] h-6 skeleton-loading" />
          <div className="w-[50px] h-6 skeleton-loading" />
        </div>
        <div className="gap-3 px-5 mt-5 md:flex md:flex-col">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <BannerRowSkeleton key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TableSkeleton;

function BannerRowSkeleton() {
  return (
    <div className="w-full h-[48px] grid grid-cols-6 py-2 items-center">
      <div className="w-[20px] h-6 skeleton-loading" />
      <div className="w-32 h-6 skeleton-loading" />
      <div className="w-32 h-6 skeleton-loading" />
      <div className="w-48 h-6 skeleton-loading" />
      <div className="w-48 h-6 ml-20 skeleton-loading" />
    </div>
  );
}

function MobileBannerRowSkeleton() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-[60px] h-[60px] rounded-xl skeleton-loading" />
        <div className="h-6 w-52 skeleton-loading" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="h-6 w-[40px] skeleton-loading" />
        <div className="w-[80px] h-6 skeleton-loading" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="h-6 w-[50px] skeleton-loading" />
        <div className="w-[60px] h-6 skeleton-loading" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="h-6 w-[60px] skeleton-loading" />
        <div className="w-[200px] h-6 skeleton-loading" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="h-6 w-[40px] skeleton-loading" />
        <div className="w-[200px] h-6 skeleton-loading" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="h-6 w-[60px] skeleton-loading" />
        <div className="w-[160px] h-6 skeleton-loading" />
      </div>
    </div>
  );
}
