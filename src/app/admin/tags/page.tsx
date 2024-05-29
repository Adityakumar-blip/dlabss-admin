'use client';
import { createColumnHelper } from '@tanstack/react-table';
import GenericTable from 'components/admin/data-tables/CheckTable';
import CheckTable from 'components/admin/data-tables/CheckTable';
import Checkbox from 'components/checkbox';
import React from 'react';
import tableDataCheck from 'variables/data-tables/tableDataCheck';

const page = () => {
  type userObj = {
    name: string;
    email: string;
    company: string;
    status: boolean;
  };

  const userTable: userObj[] = [
    {
      name: 'Aditya Kumar',
      email: 'aditya.k004@gmail.com',
      company: 'Seven Square Technosoft',
      status: true,
    },
    {
      name: 'Ravi Sharma',
      email: 'ravi.sharma@techsoft.com',
      company: 'Techsoft Solutions',
      status: false,
    },
    {
      name: 'Priya Mehta',
      email: 'priya.mehta@innova.com',
      company: 'Innova Technologies',
      status: true,
    },
    {
      name: 'Anjali Patel',
      email: 'anjali.patel@infotech.co',
      company: 'Infotech Co',
      status: true,
    },
    {
      name: 'Suresh Nair',
      email: 'suresh.nair@cybernetics.com',
      company: 'Cybernetics Systems',
      status: false,
    },
    {
      name: 'Neha Singh',
      email: 'neha.singh@digitalwave.com',
      company: 'Digital Wave',
      status: true,
    },
    {
      name: 'Vikram Joshi',
      email: 'vikram.joshi@softserve.com',
      company: 'SoftServe Solutions',
      status: true,
    },
    {
      name: 'Kiran Desai',
      email: 'kiran.desai@techmatrix.com',
      company: 'TechMatrix Innovations',
      status: false,
    },
    {
      name: 'Rajesh Iyer',
      email: 'rajesh.iyer@microtech.com',
      company: 'Microtech Systems',
      status: true,
    },
    {
      name: 'Pooja Agarwal',
      email: 'pooja.agarwal@nextgen.com',
      company: 'NextGen Technologies',
      status: true,
    },
    {
      name: 'Amit Chauhan',
      email: 'amit.chauhan@cloudbase.com',
      company: 'CloudBase Solutions',
      status: false,
    },
  ];

  const columnHelper = createColumnHelper<userObj>();

  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <Checkbox
            defaultChecked={info.getValue()[1]}
            colorScheme="brandScheme"
            me="10px"
          />
          <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor('email', {
      id: 'email',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Email</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('company', {
      id: 'company',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Company
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Verified
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue() === true ? 'Yes' : 'No'}
        </p>
      ),
    }),
  ];
  return (
    <div>
      <GenericTable data={userTable} columns={columns} title="User Table" />
    </div>
  );
};

export default page;
