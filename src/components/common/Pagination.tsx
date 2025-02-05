import React, { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { basePagination } from "@/libs/pagination";
import SelectPageSizeDropDown from "./SelectPageSizeDropDown";

function Pagination({
  className = "",
  totalItems,
  currentPage = 1,
  setCurrentPage,
  pageSize,
  setPageSize = null,
  listPageSize = [10, 20, 30, 40, 50],
}) {
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    if (totalItems % pageSize == 0) {
      setTotalPage(Math.floor(totalItems / pageSize));
    } else if (totalItems % pageSize > 0) {
      setTotalPage(Math.ceil(totalItems / pageSize));
    }
  }, [totalItems, pageSize]);

  const pageRange = basePagination(currentPage, totalPage);

  const startList = pageSize * (currentPage - 1) + 1;
  const endList = pageSize * (currentPage - 1) + pageSize;

  useEffect(() => {
    if (totalItems === null || totalItems === undefined) return;
    if (
      pageSize &&
      new BigNumber(totalItems).isLessThanOrEqualTo(
        pageSize * (currentPage - 1)
      )
    ) {
      setCurrentPage(1);
    }
  }, [pageSize, totalItems]);

  return (
    <div
      className={`flex md:flex-row flex-col items-center justify-center md:gap-8 gap-4 mt-4 text-sm md:justify-start ${className}`}
    >
      <SelectPageSizeDropDown
        listPageSize={listPageSize}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />

      <div className="flex items-center gap-[6px]">
        {pageRange?.map((i, index) => (
          <PageBtn
            currentPage={currentPage}
            value={i}
            key={index}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </div>

      <div className="flex items-center justify-center h-8 px-2 text-textBlack font-semibold border rounded border-gray/20 hover:border-primary bg-textWhite">
        {startList} -&nbsp;
        {endList > totalItems ? totalItems : endList}
        &nbsp; of {totalItems}
      </div>
    </div>
  );
}

export default Pagination;

function PageBtn({ value, currentPage, setCurrentPage }) {
  const isActive = value == currentPage;
  return (
    <button
      onClick={() => (value === "..." ? null : setCurrentPage(value))}
      className={`px-2 font-semibold flex items-center justify-center min-w-8 h-8 text-sm border rounded cursor-pointer whitespace-nowrap ${
        isActive
          ? "border-primary bg-primary text-textWhite"
          : "bg-textWhite border-gray/20 text-textBlack"
      }`}
    >
      {value}
    </button>
  );
}
