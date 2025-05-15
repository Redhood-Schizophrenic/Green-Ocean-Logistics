import { DataTable } from '@/components/ui/Table';
import { weightmentRequests } from '@/constants/requests';
import { Download } from 'lucide-react';
import React from 'react';

const RequestList = () => {
  const columns = [
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
      id: 'cfs-name',
      accessorKey: 'order.cfs.title',
      header: 'CFS Name',
      filterable: true,
      cell: ({ row }) => <div>{row.original.order.cfs.title}</div>,
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
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-900 mb-4">Request List</h2>
      <DataTable columns={columns} data={weightmentRequests} />
    </div>
  );
};

export default RequestList;
