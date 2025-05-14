import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { specialEquipmentsRequest } from '@/constants/requests';
import { DataTable } from '@/components/ui/Table';

const RequestIdList = () => {

  const columns = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'Request ID',
      filterable: true,
      cell: ({ row }) => <div>{row.original.id}</div>,
    },
    {
      id: 'order-no',
      accessorKey: 'order.id',
      header: 'Order ID',
      filterable: true,
      cell: ({ row }) => <div>{row.original.order.id}</div>,
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
      cell: ({ row }) => <div className={`${getStatusColor(row.original.status)} rounded-xl px-4 py-2 text-center`}>{row.original.status}</div>,
    },
    {
      id: 'actions',
      accessorKey: 'actions',
      header: 'Actions',
      filterable: false,
      cell: ({ row }) => (
        <>
          {row.original.status === 'Accepted' ? (
            <Download
              className="cursor-pointer text-[var(--primary)]"
              onClick={() => {
                const link = document.createElement('a');
                const url = row.original.filePath
                link.setAttribute('href', url)
                link.setAttribute('download', url)
                link.style.visibility = 'hidden'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            />
          ) : (
            <div className='ml-2'>__</div>
          )}
        </>
      ),
    }
  ];

  const getStatusColor = (status) => {
    let badgeClass = 'text-white text-xs px-3 py-1 rounded-full';
    switch (status) {
      case 'Accepted':
        badgeClass += ' bg-green-500';
        break;
      case 'Pending':
        badgeClass += ' bg-yellow-500';
        break;
      case 'Rejected':
        badgeClass += ' bg-red-500';
        break;
      default:
        badgeClass += ' bg-gray-500';
    }

    return (
      <span className={badgeClass}>
        {status}
      </span>
    );
  };

  return (
    <div className="border rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold text-green-900 mb-4">Request Id List</h2>
      <DataTable columns={columns} data={specialEquipmentsRequest} />
    </div>
  );
};

export default RequestIdList;
