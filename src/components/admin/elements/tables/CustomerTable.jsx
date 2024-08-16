import React, { useState, useEffect } from 'react';
import ProfileTable from './ProfileTable';
import useAdminContext from '../../../../context/AdminContext';

const CustomerTable = () => {

  const { users } = useAdminContext();
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (id) => {
    setExpandedRows((prevExpandedRows) =>
      prevExpandedRows.includes(id)
        ? prevExpandedRows.filter((rowId) => rowId !== id)
        : [...prevExpandedRows, id]
    );
  };

  const isRowExpanded = (id) => expandedRows.includes(id);
  const hashString = (str) => {
    let hash = 0;
    if (str.length === 0) return hash;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32bit integer
    }

    return hash;
  };

  const getColorFromName = (name) => {
    const storedColors = JSON.parse(localStorage.getItem('avatarColors')) || {};
    const storedColor = storedColors[name];

    if (storedColor) {
      return storedColor;
    } else {
      const hash = hashString(name);

      const color = `hsl(${hash % 360}, 70%, 60%)`; // Use HSL to create a consistent color

      // Save the color to local storage for persistence
      localStorage.setItem(
        'avatarColors',
        JSON.stringify({ ...storedColors, [name]: color })
      );

      return color;
    }
  };

  const getAvatarContent = (row) => {

    if (row.avatar) {
      return (
        <img
          src={row.avatar}
          alt={`Avatar of ${row.username}`}
          className="w-8 h-8 rounded-full mr-2"
        />
      );
    } else {
      const color = getColorFromName(row.username);
      const initials = row.username.split(' ').map((username) => username[0]).join('');


      return (
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full text-white mr-2"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
      );
    }
  };
  useEffect(() => {
    // Clear local storage on component unmount (optional)
    return () => localStorage.removeItem('avatarColors');
  }, []);


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">
              Image
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">
              Username
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">
              Email
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">

            </th>
            {/* Add more headers based on your data */}
          </tr>
        </thead>
        <tbody>
          {users?.map(headerGroup => (
           <a>salam</a>
        
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable

//   < React.Fragment key = { row.id } >
//     <tr className={`border-t ${isRowExpanded(row.id) ? 'bg-gray-100' : ''
//       }`}>
//       <td className="py-2 px-4 whitespace-nowrap border-b">
//         <div className="flex items-center">
//           {getAvatarContent(row)}
//         </div>
//       </td>
//       <td className="py-2 px-4 whitespace-nowrap border-b">{row.username}</td>
//       <td className="py-2 px-4 whitespace-nowrap border-b">{row.email}</td>
//       <td
//         onClick={() => handleRowClick(row.id)}
//         className="py-2 px-6 whitespace-nowrap border-b cursor-pointer">
//         <div className="flex">
//           <span className=''>
//             show profile
//           </span>
//           <span className={`${isRowExpanded(row.id) ? 'rotate-180 pr-2' : 'pl-2'
//             }`}> <svg
//               className="w-4 h-4 transition-transform transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 12"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg></span>

//         </div>

//       </td>
//       {/* Add more cells based on your data */}
//     </tr>
// {
//   isRowExpanded(row.id) && (
//     <tr>
//       <td colSpan="4">
//         {/* Additional content for the expanded row */}
//         <div className="p-4">
//           {/* Add content for the expanded row */}
//           <span>Customer Profile</span>
//           <ProfileTable data={[row.user_profile, row.user_address]} />


//         </div>
//       </td>
//     </tr>
//   )
// }
//             </React.Fragment >