import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { DataTable } from '@/components/ui/Table';

const OrderIdList = () => {

  const [orders] = useState([
    {
      id: 'SER001',
      containerNo: 'TGHU2345657',
      equipment: 'Forklift',
      date: '2024-02-14',
      status: 'Ready'
    },
    {
      id: 'SER002',
      containerNo: 'MSCU7894561',
      equipment: 'Crane',
      date: '2024-02-15',
      status: 'Pending'
    },
    {
      id: 'SER003',
      containerNo: 'CMAU6543210',
      equipment: 'Lowbed',
      date: '2024-02-13',
      status: 'Rejected'
    }
  ]);

  const getStatusBadgeClass = (status) => {
    let badgeClass = 'text-xs px-3 py-1 rounded-full';
    switch (status.toLowerCase()) {
      case 'ready':
        badgeClass += 'bg-green-200 text-green-500';
        break;
      case 'pending':
        badgeClass += ' bg-yellow-100 text-yellow-500';
        break;
      case 'rejected':
        badgeClass += ' bg-red-100 text-red-500';
        break;
      default:
        badgeClass += ' bg-gray-100 text-gray-500';
    }

    return (
      <span className={badgeClass}>
        {status}
      </span>
    );
  };


  const columns = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'Order ID',
      filterable: true,
      cell: ({ row }) => <div>{row.original.id}</div>,
    },
    {
      id: 'container-no',
      accessorKey: 'containerNo',
      header: 'Container No.',
      filterable: true,
      cell: ({ row }) => <div>{row.original.containerNo}</div>,
    },
    {
      id: 'equipment',
      accessorKey: 'equipment',
      header: 'Equipment',
      filterable: true,
      cell: ({ row }) => <div>{row.original.equipment}</div>,
    },
    {
      id: 'date',
      accessorKey: 'date',
      header: 'Date',
      filterable: true,
      cell: ({ row }) => <div>{row.original.date}</div>,
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: 'Status',
      filterable: true,
      cell: ({ row }) => getStatusBadgeClass(row.original.status),
    },
    {
      id: 'actions',
      accessorKey: 'actions',
      header: 'Actions',
      filterable: false,
      cell: ({ row }) => (
        <Download
          size={18}
          className="cursor-pointer text-[var(--primary)]"
          onClick={() => console.log('Download document for', row.original.id)}
        />
      ),
    }
  ];



  const filteredData = orders;

  return (
    <div className="border rounded-lg p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Id List</h2>
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
};

export default OrderIdList;
