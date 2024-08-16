// src/ExpandableTableExample.js
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useTable, useExpanded, useSortBy, useFilters } from 'react-table';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';

// Custom filter UI component
const DefaultColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
        <span>
            <input
                type="text"
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter"
                className="border rounded p-1"
            />
        </span>

    );
};


const Table = ({ columns, data }) => {

    const [extra, setExtra] = useState([]);
    const [status, setStatus] = useState(true);
    const [countRender, setCountRender] = useState(1);
    const [allow, setAllow] = useState(false);
    const [flag, setFlag] = useState(0);


    const setTempExtra = (row) => {


        // row.cells.map((item,key) => {

        //     if (!item.value){
        //        row.values.extra_profile = "ass";
        //     }
        //     console.log(row);
        // })
        // console.log(row)
        // extra.forEach((item1, key) => {
        //     setX(key);

        // })
        row.cells.forEach(function (part, index) {
            // this[index] = "hello world";
            if (!part.value) {
                part.value=extra[0];
                console.log(part)
                console.log(index)
            }
        }, row.cells); // use arr as this


    }
    // const setX = (key)=>{

    // }

    const defaultColumn = useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { expanded, pageIndex },
        toggleRowExpanded,
    } = useTable({
        columns,
        data,
        defaultColumn
    },

        useFilters,
        useSortBy,
        useExpanded,

    );

    useEffect(() => {

        if (status) {
            setStatus(false);
            setCountRender(countRender + 1);
            return;
        }
        else if (!status && countRender < 3) {


            headerGroups.map(headerGroup => {

                headerGroup.headers.map(culumn => {

                    setStatus(true);

                    if (culumn.id.split("extra_")[1]) {

                        setExtra(oldArray => [...oldArray, culumn.id.split("extra_")[1]])
                    }
                })


            })
        }
        if (extra)
            setAllow(true);

    }, [status]);

    return (
        <>

            {allow && (<table {...getTableProps()} className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.sortable && (column.getSortByToggleProps()))}
                                    className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <span>
                                        {column.sortable && (
                                            <>
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <BsCaretDownFill className="w-4 h-4 inline-block" />
                                                    ) : (
                                                        <BsCaretUpFill className="w-4 h-4 inline-block" />
                                                    )
                                                ) : (
                                                    ''
                                                )}
                                            </>
                                        )}
                                    </span>
                                    {column.render('Header')}
                                </th>
                            ))}

                        </tr>
                    ))}
                    {headerGroups.map(headerGroup => (
                        <tr  {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <>

                                    <th
                                        {...column.getHeaderProps()}
                                        className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-full"
                                    >
                                        {column.filter && (<div>{column.canFilter ? column.render('Filter') : null}</div>)}
                                    </th>

                                </>
                            ))}

                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        const tempExtra = setTempExtra(row);

                        const isExpanded = !!expanded[row.id];

                        return (
                            <React.Fragment key={row.id}>

                                <tr
                                    {...row.getRowProps()}
                                    className="cursor-pointer"
                                    onClick={() => toggleRowExpanded(row.id)}
                                >
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="py-2 px-4 whitespace-nowrap">
                                            {cell.render('Cell')}


                                            {/* {cell.render('Cell')} */}
                                        </td>
                                    ))}
                                </tr>
                                {isExpanded && (
                                    <tr>
                                        <td colSpan={columns.length} className="p-0">
                                            {/* Your expandable content goes here */}
                                            <div className="p-4 bg-gray-100">
                                                Expanded Content for {row.original.name}
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>

                        );
                        flagExtra = flagExtra + 1;
                    })}
                </tbody>
            </table>
            )}

        </>

    );
};

export default Table;
