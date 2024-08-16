import React, { useState } from 'react'
import AddressesTable from './AddressesTable';

const ProfileTable = ({ data }) => {

    const [expandedRows, setExpandedRows] = useState([]);

    const handleRowClick = (id) => {
        setExpandedRows((prevExpandedRows) =>
            prevExpandedRows.includes(id)
                ? prevExpandedRows.filter((rowId) => rowId !== id)
                : [...prevExpandedRows, id]
        );
    };

    const isRowExpanded = (id) => expandedRows.includes(id);

    return (
        <div className="overflow-x-auto pt-3">
            <table className="min-w-full bg-white border rounded shadow">
                {/* thead */}
                <tbody>

                    <React.Fragment key={data[0].id}>
                        <tr>
                            <td className='border py-2 px-4 whitespace-nowrap bg-gray-100 text-sm font-semibold text-gray-600 uppercase'>Name</td>
                            <td className='border py-2 px-4 whitespace-nowrap '>{data[0].name}</td>
                            <td className='border py-2 px-4 whitespace-nowrap bg-gray-100 text-sm font-semibold text-gray-600 uppercase'>Last name</td>
                            <td className='border py-2 px-4 whitespace-nowrap '>{data[0].last_name}</td>
                        </tr>
                        <tr>
                            <td className='border py-2 px-4 whitespace-nowrap bg-gray-100 text-sm font-semibold text-gray-600 uppercase'>Mobile</td>
                            <td className='border py-2 px-4 whitespace-nowrap '>{data[0].mobile}</td>
                            <td className='border py-2 px-4 whitespace-nowrap bg-gray-100 text-sm font-semibold text-gray-600 uppercase'>
                                Nationality
                            </td>
                            <td className='border py-2 px-4 whitespace-nowrap '>{data[0].nationality}</td>
                        </tr>
                        <tr>
                            <td className='border py-2 px-4 whitespace-nowrap bg-gray-100 text-sm font-semibold text-gray-600 uppercase'>
                                Native language
                            </td>
                            <td className='border py-2 px-4 whitespace-nowrap '>{data[0].native_language}</td>
                            <td className='border py-2 px-4 whitespace-nowrap bg-gray-100 text-sm font-semibold text-gray-600 uppercase'>Alternative language</td>
                            <td className='border py-2 px-4 whitespace-nowrap '>{data[0].alternative_language}</td>
                        </tr>
                        <tr className={`border-b ${isRowExpanded(data[0].id) ? 'bg-gray-100' : ''
                            }`}>
                            <td colSpan="4"
                                onClick={() => handleRowClick(data[0].id)}
                                className="py-2 px-6 whitespace-nowrap border-b cursor-pointer">
                                <div className="flex">
                                    <span className=''>
                                        show addresses
                                    </span>
                                    <span className={`${isRowExpanded(data.id) ? 'rotate-180 pr-2' : 'pl-2'
                                        }`}> <svg
                                            className="w-4 h-4 transition-transform transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg></span>

                                </div>

                            </td>
                        </tr>
                        {isRowExpanded(data[0].id) && (
                            <tr>
                                <td colSpan="4">
                                    {/* Additional content for the expanded row */}
                                    <div className="p-4">
                                        {/* Add content for the expanded row */}
                                        <span>Addresses</span>
                                        <AddressesTable data={data[1]} />

                                    </div>
                                </td>
                            </tr>
                        )}

                    </React.Fragment>


                </tbody>
            </table>
        </div>
    )
}

export default ProfileTable