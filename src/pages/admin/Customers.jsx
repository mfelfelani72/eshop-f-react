import * as  React from 'react';

import { Header, CustomerTable } from '../../components/admin';

import useAdminContext from '../../context/AdminContext';

const Customers = () => {
  const { users } = useAdminContext();

  const userColumns = [
    // { Header: 'Avatar', accessor: 'id' },
    { Header: 'username', accessor: 'username', canSort: true },
    { Header: 'email', accessor: 'email', canSort: true },
    // { Header: 'City', accessor: 'city', canSort: true },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      {/* <CustomerTable data={users} /> */}
      <CustomerTable  />
    </div>
  );
};

export default Customers;
