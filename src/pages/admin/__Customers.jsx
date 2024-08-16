import * as  React from 'react';

import { Header, CustomerTable } from '../../components/admin';

import useAdminContext from '../../context/AdminContext';
import Table from '../../components/admin/elements/tables/Table';

const Customers = () => {
  const { users } = useAdminContext();
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {

    if (users) {
      setStatus(true);
      // console.log(users[0].user_profile.image)
    }


  }, [users]);


  // Sample data
  const data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 22, city: 'Chicago' },
    // Add more data as needed
  ];


  const columns = [

    { Header: 'Avatar', accessor: 'user_profile.image', sortable: false, filter: false },
    { Header: 'username', accessor: 'username', sortable: true, filter: true },
    { Header: 'email', accessor: 'email', sortable: true, filter: true },
    { Header: 'Action', accessor: 'extra_profile', sortable: false, filter: false },
    { Header: 'Action4', accessor: 'extra_asdh', sortable: false, filter: false },

  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      {status && (<Table columns={columns} data={users} />)}

    </div>
  );
};

export default Customers;
