import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "../app-resources/MOCK_DATA.json";
import "../app-styling//table.css";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  //   const tableInstance = useTable({ columns, data },usePagination);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount
    
  } = useTable({ columns, data }, usePagination);

  const {pageIndex}=state
  return (
      <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div>
        <span>
            Page{' '}
            <strong>
                {pageIndex+1} of {pageOptions.length}
            </strong>{' '}
        </span>
        <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
    </>
  );
};

export default PaginationTable;
