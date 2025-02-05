import React from "react";
import { usePagination, useTable } from "react-table";

function Table({
  columns,
  data = [],
  // loading = false,
  pageCount: controlledPageCount = 1,
  pageSizePagination,
  headerTextAlignRight = [],
  headerTextAlignCenter = [],
  className = "",
}) {
  const { getTableProps, headerGroups, rows, prepareRow, page } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: pageSizePagination },
      manualPagination: true,
      pageCount: controlledPageCount,
      autoResetPage: false,
    },
    // useSortBy,
    usePagination
  );

  const firstPageRows = rows.slice(0, pageSizePagination);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <table className="w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => {
                return (
                  <td
                    className={`${
                      headerTextAlignRight.includes(column?.Header)
                        ? "text-right"
                        : headerTextAlignCenter.includes(column?.Header)
                        ? "text-center"
                        : ""
                    }`}
                    key={index}
                    // {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                  </td>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {firstPageRows.map((row, i) => {
            let className = "odd";
            if (i % 2 === 0) {
              className = "even";
            }
            return (
              prepareRow(row) || (
                <tr
                  className={className}
                  {...row.getRowProps()}
                  key={row?._id || row?.id}
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        key={`${cell.column.Header}-${index}`}
                        className={`${
                          headerTextAlignRight.includes(cell.column.Header)
                            ? "text-right"
                            : headerTextAlignCenter.includes(cell.column.Header)
                            ? "text-center"
                            : ""
                        }`}
                        data-label={cell.column.Header}
                        // {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              )
            );
          })}

          {page.length < 1 && (
            <tr className="odd">
              <td colSpan={100}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
