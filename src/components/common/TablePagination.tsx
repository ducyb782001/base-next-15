import React from "react";
import TableSkeleton from "../skeleton/TableSkeleton";
import Table from "./Table";
import Pagination from "./Pagination";

function TablePagination({
  columns,
  data,
  totalItems = null,
  limit,
  page,
  setPage,
  setLimit,
  headerTextAlignCenter = [],
  headerTextAlignRight = [],
  className = "",
  isLoading = false,
}) {
  return (
    <div className={`flex flex-col justify-between w-full ${className}`}>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className="table-style">
          <Table
            pageSizePagination={limit}
            columns={columns}
            data={data}
            headerTextAlignCenter={headerTextAlignCenter}
            headerTextAlignRight={headerTextAlignRight}
          />
        </div>
      )}
      <Pagination
        pageSize={limit}
        setPageSize={setLimit}
        currentPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
      />
    </div>
  );
}

export default TablePagination;
