import React, { useState } from 'react'

const AddressesTable = ({ data }) => {
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
                    {data?.map((row) => (
                        <React.Fragment key={row.id}>


                            <tr className=''>
                                <td className='border py-2 px-4 whitespace-nowrap bg-gray-200 text-sm font-semibold text-gray-600 uppercase'>
                                    Subscription Code
                                </td>
                                <td colSpan={3} className='py-2 px-4 whitespace-nowrap text-center bg-gray-200'>{row.subscription}
                                </td>
                            </tr>

                            <tr>
                                <td className='border py-2 px-4 whitespace-nowra text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>Location name</td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.location_name}</td>
                                <td className='border py-2 px-4 whitespace-nowrap text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    Location code
                                </td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.location_code}</td>
                            </tr>
                            <tr>
                                <td className='border py-2 px-4 whitespace-nowra text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    Mobile
                                </td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.mobile}</td>
                                <td className='border py-2 px-4 whitespace-nowrap text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    Entrance
                                </td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.entrance}</td>
                            </tr>
                            <tr>
                                <td className='border py-2 px-4 whitespace-nowra text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    Apartment
                                </td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.apartment}</td>
                                <td className='border py-2 px-4 whitespace-nowrap text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    Floor
                                </td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.floor}</td>
                            </tr>
                            <tr>
                                <td className='border py-2 px-4 whitespace-nowra text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    Door phone
                                </td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.door_phone}</td>
                                <td className='border py-2 px-4 whitespace-nowrap text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    image
                                </td>
                                <td className='border py-2 px-4 whitespace-nowrap '>{row.image}</td>
                            </tr>
                            <tr>
                                <td className='border py-2 px-4 whitespace-nowra text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    details
                                </td>
                                <td colSpan={3} className='border py-2 px-4 whitespace-nowrap '>{row.details}</td>
                               
                            </tr>
                            <tr>
                                <td className='border py-2 px-4 whitespace-nowra text-sm font-semibold bg-gray-50 text-gray-600 uppercase'>
                                    comment for courier 
                                </td>
                                <td colSpan={3} className='border py-2 px-4 whitespace-nowrap '>{row.comment_courier}</td>
                               
                            </tr>
                        </React.Fragment>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default AddressesTable