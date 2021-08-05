import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import MOCK_DATA from "../app-resources/MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { GlobalFilter } from './GlobalFilter'
import "../app-styling/table.css";

export const FilteringTableGlobal = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  //const tableInstance = useTable({ columns, data },useGlobalFilter);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({ columns, data },useGlobalFilter,useSortBy);
  const{globalFilter}=state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps}>{column.render("Header")}
              <span>
                    {column.isSorted? column.isSortedDesc? ' desc': ' asc': ''}
              </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
    </table>
  )
  </>
  )}
export default FilteringTableGlobal;
